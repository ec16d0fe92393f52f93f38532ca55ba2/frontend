import { useEffect, useRef, useState } from 'react';

import jsQR from 'jsqr';

type ScanState = 'idle' | 'requesting' | 'scanning' | 'scanned' | 'denied';

const CORNER_POSITIONS = [
    { top: 24, left: 24, rotate: 0 },
    { top: 24, right: 24, rotate: 90 },
    { bottom: 24, right: 24, rotate: 180 },
    { bottom: 24, left: 24, rotate: 270 },
] as const;

export const CameraViewfinder = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const rafRef = useRef<number>(0);
    const [state, setState] = useState<ScanState>('idle');
    const [lastCode, setLastCode] = useState<string | null>(null);

    const stopCamera = () => {
        cancelAnimationFrame(rafRef.current);
        const video = videoRef.current;
        if (video?.srcObject) {
            (video.srcObject as MediaStream).getTracks().forEach((t) => t.stop());
            video.srcObject = null;
        }
    };

    const startCamera = async () => {
        setState('requesting');
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: 'environment' },
            });
            const video = videoRef.current;
            if (!video) return;
            video.srcObject = stream;
            await video.play();
            setState('scanning');
            tick();
        } catch {
            setState('denied');
        }
    };

    const tick = () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        if (!video || !canvas || video.readyState < 2) {
            rafRef.current = requestAnimationFrame(tick);
            return;
        }

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        ctx.drawImage(video, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const result = jsQR(imageData.data, imageData.width, imageData.height);

        if (result) {
            console.log('[QR]', result.data);
            setLastCode(result.data);
            stopCamera();
            setState('scanned');
            return;
        }

        rafRef.current = requestAnimationFrame(tick);
    };

    useEffect(() => {
        return () => {
            cancelAnimationFrame(rafRef.current);
            const video = videoRef.current;
            if (video?.srcObject) {
                (video.srcObject as MediaStream).getTracks().forEach((t) => t.stop());
            }
        };
    }, []);

    return (
        <div className="rounded-[20px] overflow-hidden relative flex items-center justify-center"
            style={{ background: '#1a1a1a', aspectRatio: '4/3' }}>

            {/* Live video */}
            <video
                ref={videoRef}
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                style={{ display: state === 'scanning' ? 'block' : 'none' }}
            />
            <canvas ref={canvasRef} className="hidden" />

            {/* Idle — tap to start */}
            {(state === 'idle' || state === 'scanned') && (
                <button type="button" onClick={() => void startCamera()}
                    className="flex flex-col items-center gap-2">
                    <span className="text-[48px]">{state === 'scanned' ? '✅' : '📷'}</span>
                    <span className="text-[13px] font-medium px-4 py-2 rounded-full"
                        style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}>
                        {state === 'scanned' ? 'Сканировать снова' : 'Нажмите для сканирования'}
                    </span>
                </button>
            )}

            {/* Requesting permission */}
            {state === 'requesting' && (
                <span className="text-[13px] font-medium" style={{ color: '#fff' }}>Открываем камеру…</span>
            )}

            {/* Permission denied */}
            {state === 'denied' && (
                <div className="flex flex-col items-center gap-2 px-4 text-center">
                    <span className="text-[32px]">🚫</span>
                    <span className="text-[12px]" style={{ color: 'rgba(255,255,255,0.7)' }}>
                        Нет доступа к камере. Разрешите в настройках браузера.
                    </span>
                </div>
            )}

            {/* Scanning overlay hint */}
            {state === 'scanning' && (
                <div className="absolute text-[11px] font-medium px-3 py-1.5 rounded-full"
                    style={{ background: 'rgba(0,0,0,0.45)', color: '#fff', bottom: 16 }}>
                    Наведите на QR-код
                </div>
            )}

            {/* Corner markers */}
            {CORNER_POSITIONS.map(({ rotate, ...pos }) => (
                <svg key={rotate} width="24" height="24" viewBox="0 0 24 24"
                    style={{ position: 'absolute', ...pos, transform: `rotate(${rotate}deg)` }}>
                    <path d="M2 12V2H12" fill="none" stroke="#89B776" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
            ))}
        </div>
    );
};

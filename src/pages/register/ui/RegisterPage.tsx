import { RegisterForm } from '@features/auth';

export const RegisterPage = () => (
    <div className="min-h-screen flex flex-col items-center px-4 py-8"
        style={{ background: 'var(--color-bg)' }}>
        {/* Logo */}
        <div className="flex items-center gap-2 mb-6">
            <span className="text-[32px]">🌿</span>
            <span className="text-[22px] font-bold" style={{ color: 'var(--color-text-primary)' }}>
                Voronka
            </span>
        </div>

        <div className="w-full" style={{ maxWidth: 'var(--container-max)' }}>
            <div className="rounded-[24px] p-6 border"
                style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
                <h1 className="text-[22px] font-bold mb-1" style={{ color: 'var(--color-text-primary)' }}>
                    Создать аккаунт
                </h1>
                <p className="text-[13px] mb-5" style={{ color: 'var(--color-text-secondary)' }}>
                    Начните свой путь к финансовой грамотности
                </p>
                <RegisterForm />
            </div>
        </div>
    </div>
);

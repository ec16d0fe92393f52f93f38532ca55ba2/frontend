import { LoginForm } from '@features/auth';

export const LoginPage = () => (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8"
        style={{ background: 'var(--color-bg)' }}>
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8">
            <span className="text-[36px]">🌿</span>
            <span className="text-[24px] font-bold" style={{ color: 'var(--color-text-primary)' }}>
                Voronka
            </span>
        </div>

        <div className="w-full" style={{ maxWidth: 'var(--container-max)' }}>
            <div className="rounded-[24px] p-6 border mb-4"
                style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
                <h1 className="text-[22px] font-bold mb-1" style={{ color: 'var(--color-text-primary)' }}>
                    Добро пожаловать
                </h1>
                <p className="text-[13px] mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                    Войдите, чтобы продолжить
                </p>
                <LoginForm />
            </div>
        </div>
    </div>
);

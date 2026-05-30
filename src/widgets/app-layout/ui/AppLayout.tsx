import { Outlet } from 'react-router-dom';

import { BottomNav } from '@widgets/bottom-nav';

import { Container } from '@shared/ui';

export const AppLayout = () => {
    return (
        <div className="min-h-screen bg-[var(--color-bg)]">
            <div className="pb-[76px]">
                <Container className="py-6">
                    <Outlet />
                </Container>
            </div>
            <BottomNav />
        </div>
    );
};

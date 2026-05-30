import { BalanceCard } from '@widgets/balance-card';
import { ProfileScore } from '@widgets/profile-score';
import { XpProgressChart } from '@widgets/xp-progress-chart';

import { ProfileHeader } from './ProfileHeader';
import { RecentTransactionsList } from './RecentTransactionsList';

export const ProfilePage = () => (
    <div className="flex flex-col gap-3 animate-fade-in-up">
        <ProfileHeader />
        <BalanceCard />
        <ProfileScore />
        <XpProgressChart />
        <RecentTransactionsList />
    </div>
);

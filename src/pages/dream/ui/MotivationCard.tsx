import { selectChallenges } from '@entities/challenge';

import { useAppSelector } from '@shared/hooks';

function getMessage(days: number): { emoji: string; title: string; subtitle: string } {
    if (days === 0) return { emoji: '🌱', title: 'Начни сегодня!', subtitle: 'Первый шаг — самый важный' };
    if (days === 1) return { emoji: '✨', title: '1 день подряд!', subtitle: 'Отличное начало — не останавливайся' };
    if (days < 4) return { emoji: '🌿', title: `${days} дня подряд!`, subtitle: 'Привычка начинает формироваться' };
    if (days < 8) return { emoji: '🔥', title: `${days} дней подряд!`, subtitle: 'Хорошее начало — продолжай!' };
    if (days < 15) return { emoji: '🔥', title: `${days} дней подряд!`, subtitle: 'Отличная дисциплина — продолжай в том же духе' };
    if (days < 30) return { emoji: '💪', title: `${days} дней подряд!`, subtitle: 'Ты настоящий профессионал финансов' };
    if (days < 60) return { emoji: '🏆', title: `${days} дней подряд!`, subtitle: 'Месяц без пропусков — невероятно!' };
    return { emoji: '🌟', title: `${days} дней подряд!`, subtitle: 'Легендарная серия — ты вдохновляешь!' };
}

export const MotivationCard = () => {
    const { streakDays } = useAppSelector(selectChallenges);
    const { emoji, title, subtitle } = getMessage(streakDays);

    return (
        <div className="rounded-[16px] p-[12px_16px] flex items-center gap-3"
            style={{ background: 'var(--color-primary-light)', border: '1px solid #d0e8c8' }}>
            <span className="text-[24px]">{emoji}</span>
            <div>
                <div className="text-[13px] font-bold" style={{ color: 'var(--color-text-primary)' }}>{title}</div>
                <div className="text-[11px]" style={{ color: 'var(--color-text-secondary)' }}>{subtitle}</div>
            </div>
        </div>
    );
};

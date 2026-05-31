export type MarketFilter = 'Все' | 'За XP' | 'Premium' | 'Новые';

export const MARKET_FILTERS: MarketFilter[] = ['Все', 'За XP', 'Premium', 'Новые'];

export interface CategoryMeta {
    id: 'trees' | 'decor' | 'boosts';
    label: string;
    emoji: string;
}

export const CATEGORIES: CategoryMeta[] = [
    { id: 'trees', label: 'Деревья', emoji: '🌳' },
    { id: 'decor', label: 'Декор', emoji: '🪨' },
    { id: 'boosts', label: 'Бонусы', emoji: '⚡' },
];

export const MOCK_ITEMS = [
    // ── Trees ──────────────────────────────────────────────────────────────
    {
        id: 'oak', name: 'Дуб', description: 'Могучий и стойкий',
        cost: 0, currency: 'xp' as const, owned: true, active: true,
        color: '#89B776', emoji: '🌳', category: 'trees' as const,
        stages: [{ emoji: '🌱', label: 'Росток' }, { emoji: '🌿', label: 'Саженец' }, { emoji: '🌳', label: 'Дуб' }],
    },
    {
        id: 'sakura', name: 'Сакура', description: 'Нежная и цветущая',
        cost: 200, currency: 'xp' as const, owned: false, active: false, isNew: true,
        color: '#e8a0b0', emoji: '🌸', category: 'trees' as const,
        stages: [{ emoji: '🌱', label: 'Росток' }, { emoji: '🌸', label: 'Цветение' }, { emoji: '🌺', label: 'В цвету' }],
    },
    {
        id: 'pine', name: 'Ель', description: 'Вечнозелёная хвойная',
        cost: 150, currency: 'xp' as const, owned: false, active: false,
        color: '#3a8c50', emoji: '🎄', category: 'trees' as const,
        stages: [{ emoji: '🌱', label: 'Росток' }, { emoji: '🌲', label: 'Молодая' }, { emoji: '🎄', label: 'Ель' }],
    },
    {
        id: 'palm', name: 'Пальма', description: 'Тропическая экзотика',
        cost: 250, currency: 'xp' as const, owned: false, active: false,
        color: '#40b8a0', emoji: '🌴', category: 'trees' as const,
        stages: [{ emoji: '🌱', label: 'Росток' }, { emoji: '🌿', label: 'Ствол' }, { emoji: '🌴', label: 'Пальма' }],
    },
    {
        id: 'bamboo', name: 'Бамбук', description: 'Быстро растущий',
        cost: 180, currency: 'xp' as const, owned: false, active: false,
        color: '#7bc47f', emoji: '🎋', category: 'trees' as const,
        stages: [{ emoji: '🌱', label: 'Росток' }, { emoji: '🎋', label: 'Стебли' }, { emoji: '🎋', label: 'Роща' }],
    },
    {
        id: 'cactus', name: 'Кактус', description: 'Стойкий пустынник',
        cost: 120, currency: 'xp' as const, owned: false, active: false,
        color: '#5aab5a', emoji: '🌵', category: 'trees' as const,
        stages: [{ emoji: '🌱', label: 'Семя' }, { emoji: '🌵', label: 'Кактус' }, { emoji: '🌵', label: 'Цветёт' }],
    },
    {
        id: 'birch', name: 'Берёза', description: 'Стройная и светлая',
        cost: 100, currency: 'xp' as const, owned: false, active: false,
        color: '#b8d8a0', emoji: '🌿', category: 'trees' as const,
        stages: [{ emoji: '🌱', label: 'Росток' }, { emoji: '🌿', label: 'Тонкая' }, { emoji: '🌳', label: 'Берёза' }],
    },
    {
        id: 'cosmic', name: 'Космос', description: 'Мистическое дерево',
        cost: 299, currency: 'gem' as const, owned: false, active: false,
        color: '#7060c0', emoji: '🔮', category: 'trees' as const,
        stages: [{ emoji: '✨', label: 'Искра' }, { emoji: '💫', label: 'Свечение' }, { emoji: '🔮', label: 'Космос' }],
    },
    {
        id: 'gold_tree', name: 'Золото', description: 'Богатство и удача',
        cost: 149, currency: 'gem' as const, owned: false, active: false,
        color: '#e8b830', emoji: '✨', category: 'trees' as const,
        stages: [{ emoji: '🌱', label: 'Росток' }, { emoji: '🌿', label: 'Листья' }, { emoji: '✨', label: 'Золото' }],
    },

    // ── Decor ──────────────────────────────────────────────────────────────
    {
        id: 'stones', name: 'Камни', description: 'Каменный бордюр',
        cost: 80, currency: 'xp' as const, owned: false, active: false,
        color: '#a0a0a0', emoji: '🪨', category: 'decor' as const, stages: [],
    },
    {
        id: 'flowers', name: 'Цветы', description: 'Клумба вокруг',
        cost: 100, currency: 'xp' as const, owned: false, active: false, isNew: true,
        color: '#e070a0', emoji: '🌺', category: 'decor' as const, stages: [],
    },
    {
        id: 'fence', name: 'Забор', description: 'Деревянный забор',
        cost: 120, currency: 'xp' as const, owned: false, active: false,
        color: '#c09060', emoji: '🪵', category: 'decor' as const, stages: [],
    },
    {
        id: 'lantern', name: 'Фонарь', description: 'Уютное освещение',
        cost: 90, currency: 'xp' as const, owned: false, active: false, isNew: true,
        color: '#f0c060', emoji: '🏮', category: 'decor' as const, stages: [],
    },
    {
        id: 'pond', name: 'Прудик', description: 'Маленький водоём',
        cost: 160, currency: 'xp' as const, owned: false, active: false,
        color: '#4090d0', emoji: '💧', category: 'decor' as const, stages: [],
    },

    // ── Boosts ─────────────────────────────────────────────────────────────
    {
        id: 'xp2', name: '2× XP', description: 'Двойной XP 24ч',
        cost: 50, currency: 'gem' as const, owned: false, active: false,
        color: '#60c0e0', emoji: '⚡', category: 'boosts' as const, stages: [],
    },
    {
        id: 'shield', name: 'Щит', description: 'Защита стрика',
        cost: 30, currency: 'gem' as const, owned: false, active: false,
        color: '#8060c0', emoji: '🛡️', category: 'boosts' as const, stages: [],
    },
    {
        id: 'autowater', name: 'Автополив', description: 'Пассивный полив',
        cost: 80, currency: 'xp' as const, owned: false, active: false,
        color: '#40a0d0', emoji: '💦', category: 'boosts' as const, stages: [],
    },
];

export const MOCK_PLAYER = {
    xp: 742,
    gems: 3,
};

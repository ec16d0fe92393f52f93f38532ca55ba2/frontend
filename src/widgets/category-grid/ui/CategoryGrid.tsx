interface Category {
    id: string;
    label: string;
    emoji: string;
}

interface CategoryGridProps {
    categories: Category[];
    selected?: string;
    onSelect?: (id: string) => void;
}

export const CategoryGrid = ({ categories, selected, onSelect }: CategoryGridProps) => (
    <div className="grid grid-cols-4 gap-2">
        {categories.map((cat) => {
            const isActive = cat.id === selected;
            return (
                <button key={cat.id} type="button" onClick={() => onSelect?.(cat.id)}
                    className="flex flex-col items-center gap-1.5 rounded-[14px] py-3 border transition-colors"
                    style={{
                        background: isActive ? 'var(--color-primary-light)' : 'var(--color-surface)',
                        borderColor: isActive ? 'var(--color-primary)' : 'var(--color-border)',
                    }}>
                    <span className="text-[22px]">{cat.emoji}</span>
                    <span className="text-[10px] font-medium text-center leading-tight"
                        style={{ color: isActive ? 'var(--color-primary)' : 'var(--color-text-secondary)' }}>
                        {cat.label}
                    </span>
                </button>
            );
        })}
    </div>
);

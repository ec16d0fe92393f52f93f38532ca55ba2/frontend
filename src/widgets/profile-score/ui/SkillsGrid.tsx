import { MOCK_SKILLS } from '@shared/mocks';

import { SkillBar } from './SkillBar';

export const SkillsGrid = () => (
    <div className="grid grid-cols-2 gap-2 flex-1">
        {MOCK_SKILLS.map((skill) => (
            <SkillBar key={skill.label} label={skill.label} value={skill.value} color={skill.color} />
        ))}
    </div>
);

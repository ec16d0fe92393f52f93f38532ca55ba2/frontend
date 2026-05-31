import { selectSkills } from '@entities/tree';

import { useAppSelector } from '@shared/hooks';

import { SkillBar } from './SkillBar';

export const SkillsGrid = () => {
    const skills = useAppSelector(selectSkills);

    return (
        <div className="grid grid-cols-2 gap-2 flex-1">
            {skills.map((skill) => (
                <SkillBar key={skill.label} label={skill.label} value={skill.value} color={skill.color} />
            ))}
        </div>
    );
};

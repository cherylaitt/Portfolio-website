'use client';

import React from 'react';
import Card from '../atoms/Card';
import Typography from '../atoms/Typography';
import Badge from '../atoms/Badge';

interface SkillCardProps {
  name: string;
  icon?: React.ReactNode;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  category: string;
  className?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({
  name,
  icon,
  level,
  category,
  className = '',
}) => {
  const levelColors = {
    beginner: 'success',
    intermediate: 'warning',
    advanced: 'primary',
    expert: 'secondary',
  } as const;
  
  const levelText = {
    beginner: 'Beginner',
    intermediate: 'Intermediate',
    advanced: 'Advanced',
    expert: 'Expert',
  };
  
  return (
    <Card className={`text-center ${className}`} hover>
      <div className="flex flex-col items-center">
        {icon && (
          <div className="w-12 h-12 mb-3 text-blue-600 dark:text-blue-400">
            {icon}
          </div>
        )}
        
        <Typography variant="h4" size="lg" weight="semibold" className="mb-2">
          {name}
        </Typography>
        
        <Badge variant={levelColors[level]} size="sm" className="mb-2">
          {levelText[level]}
        </Badge>
        
        <Typography variant="p" size="sm" color="muted">
          {category}
        </Typography>
      </div>
    </Card>
  );
};

export default SkillCard;

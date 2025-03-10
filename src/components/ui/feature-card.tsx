
import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps extends HTMLAttributes<HTMLDivElement> {
  icon: ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  className,
  ...props
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        'group p-6 rounded-xl transition-all duration-300',
        'hover:shadow-md hover:bg-white hover:border-accent',
        'border border-transparent',
        className
      )}
      {...props}
    >
      <div className="mb-4 p-3 rounded-lg bg-primary/5 inline-block text-primary group-hover:bg-primary/10 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

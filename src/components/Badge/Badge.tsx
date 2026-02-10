import './Badge.scss';

export type BadgeVariant =
    | 'status'
    | 'category'
    | 'highlight'
    | 'tech'
    | 'rose'
    | 'coral'
    | 'sunny'
    | 'mint'
    | 'sky'
    | 'lavender'
    | 'violet';
export type BadgeSize = 'sm' | 'md';

export interface BadgeProps {
    variant?: BadgeVariant;
    size?: BadgeSize;
    children: React.ReactNode;
    className?: string;
}

export default function Badge({ 
    variant = 'status', 
    size = 'md',
    children, 
    className = '' 
}: BadgeProps) {
    return (
        <span 
            className={`badge badge--${variant} badge--${size} ${className}`}
            data-variant={variant}
            data-size={size}
        >
            {children}
        </span>
    );
}

import { Link } from 'react-router-dom';
import './Button.scss';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    href?: string;
    to?: string;
    external?: boolean;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    children: React.ReactNode;
    className?: string;
    onClick?: (e?: React.MouseEvent) => void;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
}

export default function Button({
    variant = 'primary',
    size = 'md',
    href,
    to,
    external = false,
    icon,
    iconPosition = 'right',
    children,
    className = '',
    onClick,
    disabled = false,
    type = 'button'
}: ButtonProps) {
    const classes = `btn btn--${variant} btn--${size} ${className}`;
    const content = (
        <>
            {icon && iconPosition === 'left' && <span className="btn__icon btn__icon--left">{icon}</span>}
            <span className="btn__text">{children}</span>
            {icon && iconPosition === 'right' && <span className="btn__icon btn__icon--right">{icon}</span>}
        </>
    );

    // External link
    if (href && external) {
        return (
            <a 
                href={href} 
                className={classes}
                target="_blank"
                rel="noopener noreferrer"
            >
                {content}
            </a>
        );
    }

    // Internal link (React Router)
    if (to) {
        return (
            <Link to={to} className={classes}>
                {content}
            </Link>
        );
    }

    // Regular link
    if (href) {
        return (
            <a href={href} className={classes} onClick={onClick}>
                {content}
            </a>
        );
    }

    // Button element
    return (
        <button 
            type={type}
            className={classes}
            onClick={onClick}
            disabled={disabled}
        >
            {content}
        </button>
    );
}

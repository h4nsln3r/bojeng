import React from 'react';
// import './button.scss';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'solid' | 'ghost';
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
  className?: string;
};

/**
 * Button component that can render as either <button> or <a>.
 * Keeps consistent styling via shared CSS classes (.btn, .btn--solid, .btn--ghost)
 */
const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'solid',
  href,
  onClick,
  type = 'button',
  ariaLabel,
  className = '',
}) => {
  const classes = `btn btn--${variant} ${className}`.trim();

  if (href) {
    // Render as <a> if href is provided
    return (
      <a href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  // Render as <button> otherwise
  return (
    <button type={type} className={classes} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  );
};

export default Button;

import { Link } from "react-router";


const Button = (props) => {
  const {
    variant,
    children,
    type,
    className,
    disabled,
    as = 'button',
    to = '',
    target = '',
    rel = '',
    size='md',
    ...rest
  } = props || {};

  const baseClasses = `
    ${className || ''}
    ${variant ? `btn-${variant}` : 'btn-primary'}
    ${size ? `btn-${size}` : 'md'}
    cursor-pointer font-montserrat rounded-sm px-4 py-0
    flex items-center justify-center
    text-xs text-white font-medium uppercase leading-[1]
  `;

  return as === 'button' ? (
    <button
      className={baseClasses}
      type={type}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  ) : (
    <Link
      to={to}
      target={target}
      rel={rel}
      className={baseClasses}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default Button;

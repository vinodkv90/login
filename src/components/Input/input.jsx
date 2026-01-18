import React from 'react';

const Input = (props) => {
  const {
    label,
    type,
    name,
    labelClass,
    className,
    containerClass,
    id = 'input',
    placeholder,
    as = 'input',
    error,
    ariaInvalid,
    ...rest
  } = props;

  return (
    <fieldset className={`${containerClass || ''} relative flex flex-col font-normal gap-2`}>
      {label && (
        <label
          htmlFor={id || undefined}
          className={`text-foreground font-dela-gothic font-normal text-sm ${labelClass || ''}`}
        >
          {label}
        </label>
      )}

      {as === 'input' ? (
        <input
          type={type || 'text'}
          name={name || undefined}
          className={`${className || ''} ${
            ariaInvalid ? '!border-danger' : ''
          } bg-background border border-border focus:border-primary text-foreground font-medium text-[13px] rounded-sm px-3 py-0 h-9 outline-0`}
          id={`${id}_${name}`}
          placeholder={placeholder || undefined}
          aria-invalid={ariaInvalid || false}
          {...rest}
        />
      ) : (
        <textarea
          name={name || undefined}
          className={`${className || ''} ${
            ariaInvalid ? '!border-danger' : ''
          } bg-background border border-border focus:border-primary text-foreground font-medium text-[13px] rounded-sm px-3 py-3 h-25 outline-0 resize-none`}
          id={`${id}_${name}`}
          placeholder={placeholder || undefined}
          aria-invalid={ariaInvalid || false}
          {...rest}
        />
      )}

      {error && (
        <small className="text-danger absolute left-0 -bottom-5">
          {error}
        </small>
      )}
    </fieldset>
  );
};

export default Input;

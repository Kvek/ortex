import {
  InputHTMLAttributes,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  InputContainer,
  InputFieldContainer,
  IconContainer,
} from "./Input.styles";
import classNames from "classnames";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
  focus?: boolean;
}

export const Input = ({
  iconBefore,
  iconAfter,
  label,
  id,
  focus,
  ...props
}: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [toggleFocus, setToggleFocus] = useState(false);

  useEffect(() => {
    if (focus) inputRef.current?.focus();
  }, [focus]);

  return (
    <InputContainer>
      {label && <label htmlFor={id}>{label}</label>}

      <InputFieldContainer
        className={classNames({
          ["focus"]: toggleFocus,
          ["iconBefore"]: !!iconBefore,
          ["iconAfter"]: !!iconAfter,
        })}
      >
        {iconBefore && (
          <IconContainer className={classNames({ ["before"]: !!iconBefore })}>
            {iconBefore}
          </IconContainer>
        )}

        <input
          autoComplete="one-time-code"
          {...props}
          id={id}
          autoFocus={focus}
          ref={inputRef}
          onFocus={() => setToggleFocus(true)}
          onBlur={() => setToggleFocus(false)}
        />

        {iconAfter && (
          <IconContainer className={classNames({ ["after"]: !!iconAfter })}>
            {iconAfter}
          </IconContainer>
        )}
      </InputFieldContainer>
    </InputContainer>
  );
};

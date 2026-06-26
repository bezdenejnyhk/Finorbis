import { type ButtonHTMLAttributes, type CSSProperties, type ReactNode, memo } from "react";
import styles from "./Button.module.scss";

export enum ThemeButton {
  GREEN = "green",
  BLACK = "black",
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  style?: CSSProperties;
  theme?: ThemeButton;
  disabled?: boolean;
  children: ReactNode;
}

export const Button = memo((props: IButtonProps) => {
  const { style, disabled = false, theme = ThemeButton.GREEN, children, ...otherProps } = props;

  return (
    <button
      style={style}
      className={`${styles.button} ${styles[theme]}`}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});

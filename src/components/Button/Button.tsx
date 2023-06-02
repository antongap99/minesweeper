import style from "./Button.module.css";
import cn from "classnames";

interface ButtonProps {
  text: string;
  handle?: () => void;
}

export const Button = ({ text, handle }: ButtonProps) => {
  return (
    <button
      className={cn(style.btn, "border")}
      onClick={() => {
        handle && handle();
      }}
    >
      {text}
    </button>
  );
};

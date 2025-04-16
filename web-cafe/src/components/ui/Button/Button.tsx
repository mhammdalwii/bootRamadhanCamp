import { ReactNode } from "react";
import styles from "./Button.module.css";

interface PropTypes {
  children: ReactNode;
  type?: "submit" | "button";
  variant?: "primary" | "secondary";
  onClick?: () => void;
  showIcon?: boolean;
}

const Button = (props: PropTypes) => {
  const { children, type = "button", onClick } = props;

  return (
    <button
      className={styles.button}
      //style={{ backgroundColor: "red", color: "white" }}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

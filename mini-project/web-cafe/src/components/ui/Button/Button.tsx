import styles from "./Button.module.css";

interface PropTypes {
  type?: "submit" | "button" | "reset";
  children?: string;
  onClick?: () => void;
  className?: string;
  color?: "primary" | "secondary" | "danger" | "success" | "warning" | "info" | "light" | "dark";
}

const Button = (props: PropTypes) => {
  const { type = "button", children, color = "primary", className } = props;
  return (
    <button className={`${styles.button} ${styles[`button-${color}`]} ${className}`} type={type} {...props}>
      {children}
    </button>
  );
};

export default Button;

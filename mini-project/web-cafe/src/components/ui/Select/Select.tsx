import styles from "./Select.module.css";

interface PropTypes {
  label?: string;
  name: string;
  id: string;
  required?: boolean;
  className?: string;
  options: {
    map(arg0: (option: { value: string; label: string }) => void): import("react").ReactNode;
    value: string;
    label: string;
  };
}

const Select = (props: PropTypes) => {
  const { label, name, id, required = false, className, options } = props;

  return (
    <label htmlFor={id} className={styles.label}>
      {label}
      <select name={name} required={required} id={id} className={`${styles.select} ${className}`}>
        {options.map((option: { value: string; label: string }) => {
          <option key={option.value} value={option.value}>
            {option.label}
          </option>;
        })}
      </select>
    </label>
  );
};

export default Select;

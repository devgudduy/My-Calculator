import styles from "./Display.module.css";
const Display = ({ displayValue }) => {
  const time = new Date().toLocaleTimeString();
  return (
    <input
      className={styles.display}
      type="text"
      placeholder={`Time: ${time}`}
      value={displayValue}
      readOnly
    />
  );
};

export default Display;

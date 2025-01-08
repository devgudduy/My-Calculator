import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      let result = eval(calVal);
      setCalVal(result);
    } else {
      let newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };
  return (
    <div className={styles.calcBox}>
      <div className={styles.calculator}>
        <Display displayValue={calVal} />
        <ButtonsContainer onButtonClick={onButtonClick} />
      </div>
    </div>
  );
}

export default App;

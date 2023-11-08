import styles from "../Styles/keypad.module.css";

// Keypad Components
export const KeyPad = ({setScreen,screen}) => {

  console.log(screen);
  // console.log(eval(screen));
  return (
    <div className={styles.keypad}>
      <div className={styles.buttonRow}>
        <div className={styles.button} onClick={()=>setScreen(screen+"%")}>
          <div>%</div>
        </div>
        <div className={styles.button} onClick={()=>setScreen("")}>
          <div>C</div>
        </div>
        <div className={styles.button} onClick={()=>setScreen(screen.slice(0, -1))}>
          <div>Del</div>
        </div>
        <div className={styles.button} onClick={()=>setScreen(screen+"/")}>
          <div>/</div>
        </div>
      </div>
      <div className={styles.buttonRow}>
        <div className={styles.button} onClick={()=>setScreen(screen+"7")}>
          <div>7</div>
        </div>
        <div className={styles.button} onClick={()=>setScreen(screen+"8")}>
          <div>8</div>
        </div>
        <div className={styles.button} onClick={()=>setScreen(screen+"9")}>
          <div>9</div>
        </div>
        <div className={styles.button} onClick={()=>setScreen(screen+"*")}>
          <div>X</div>
        </div>
      </div>
      <div className={styles.buttonRow}>
        <div className={styles.button} onClick={()=>setScreen(screen+"4")}>
          <div>4</div>
        </div>
        <div className={styles.button} onClick={()=>setScreen(screen+"5")}>
          <div>5</div>
        </div>
        <div className={styles.button} onClick={()=>setScreen(screen+"6")}>
          <div>6</div>
        </div>
        <div className={styles.button} onClick={()=>setScreen(screen+"-")}>
          <div>-</div>
        </div>
      </div>
      <div className={styles.buttonRow}>
        <div className={styles.button} onClick={()=>setScreen(screen+"1")}>
          <div>1</div>
        </div>
        <div className={styles.button} onClick={()=>setScreen(screen+"2")}>
          <div>2</div>
        </div>
        <div className={styles.button} onClick={()=>setScreen(screen+"3")}>
          <div>3</div>
        </div>
        <div className={styles.button} onClick={()=>setScreen(screen+"+")}>
          <div>+</div>
        </div>
      </div>
      <div className={styles.buttonRow}>
        {/* <div className={styles.button}>
          <div>+/-</div>
        </div> */}
        <div className={styles.button} onClick={()=>setScreen(screen+"0")}>
          <div>0</div>
        </div>
        <div className={styles.button} onClick={()=>setScreen(screen+".")}>
          <div>.</div>
        </div>
        <div className={styles.button} onClick={()=>setScreen(eval(screen).toString())}>
          <div>=</div>
        </div>
      </div>
    </div>
  );
};

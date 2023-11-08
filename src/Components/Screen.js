
import styles from "../Styles/screen.module.css"
import { useEffect } from "react";
export const Screen=({screen})=>{


    return(
        <div className={styles.screen}><input value={screen} placeholder="" type="text" ></input></div>
    )
}
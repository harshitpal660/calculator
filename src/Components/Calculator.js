import { useState } from "react"
import { Screen } from "./Screen"
import { KeyPad } from "./KeyPad"
import styles from "../Styles/calculator.module.css"

// Calculator Components
export const Calculator=()=>{

    const [screen,setScreen] = useState("");
 
    return(
        <diV className={styles.calculator}>
            <Screen screen={screen}/>
            <KeyPad setScreen={setScreen} screen={screen} />
        </diV>
    )
}
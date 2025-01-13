import React from "react";
import styles from "../styles.module.css";
import Screen from "./Screen";
import Wheel from "./Wheel";

const Ipod = () => {
    
    return (
        <div className={styles.ipodContainer}>
            <Screen/>
            <Wheel />
            
        </div>
    )
};


export default Ipod;
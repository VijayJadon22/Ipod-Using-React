import React, { Component } from "react";
import { FaFastBackward, FaFastForward, FaPause, FaPlay } from "react-icons/fa";
import wheelStyles from "../css/wheelStyles.module.css";

export class Wheel extends Component {
  render() {
    return (
      <div className={wheelStyles.wheelContainer}>
        <div className={wheelStyles.wheel}>
          <div className={wheelStyles.controls} id={wheelStyles.menu}>
            MENU
          </div>
          <div className={wheelStyles.controls} id={wheelStyles.forward}>
            <FaFastForward />
          </div>
          <div className={wheelStyles.controls} id={wheelStyles.playPause}>
            <FaPlay />
            <FaPause />
          </div>
          <div className={wheelStyles.controls} id={wheelStyles.backward}>
            <FaFastBackward />
          </div>
        </div>
        <div className={wheelStyles.ok}></div>
      </div>
    );
  }
}

export default Wheel;

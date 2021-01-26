import React from "react"
import Style from "./AnswerButtons.module.css"
import {NavLink} from "react-router-dom";

export default  function AnswerButtons(){
    return(
        <ul className={Style.ul}>
            <NavLink className={Style.li_btn} to="/cards" ><i className={Style.fa_angle_left + ' ' + Style.fa}></i>Понятно</NavLink>
        </ul>
    )
}
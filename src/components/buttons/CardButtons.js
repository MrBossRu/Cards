import React from "react";
import Style from './CardButtons.module.css'
import {NavLink} from "react-router-dom";
import {GenerateId} from "../helpers/GenerateId";

export  default  function Buttons(props){
    let url = '/update/' + String(props.state.data.question.Id)
    function Fine(){
        props.state.data.question.grade = 0;
        props.state.data.question.delay = Date.now()
        props.state.Send(url,'POST',{...props.state.data.question}, {})
    }
    function Good(){
        props.state.data.question.grade = 1;
        props.state.data.question.delay = Date.now()
        props.state.Send(url,'POST',{...props.state.data.question}, {})
    }
    function Badly(){
        props.state.data.question.grade = 2;
        props.state.data.question.delay = Date.now()
        props.state.Send(url,'POST',{...props.state.data.question}, {})
    }
    return(
        <ul className={Style.ul}>
            <NavLink className={Style.li_btn} to={"/cards/" + GenerateId()} onClick={Fine}><i className={Style.fa_angle_left + ' ' + Style.fa}></i>Отлично</NavLink>
            <NavLink className={Style.li_btn_yellow} to={"/answer/" + props.state.data.question.key} onClick={Good}><i className={Style.fa_angle_left + ' ' + Style.fa}></i>Хорошо</NavLink>
            <NavLink className={Style.li_btn_red} to={"/answer/" + props.state.data.question.key} onClick={Badly}><i className={Style.fa_angle_right + ' ' + Style.fa}></i>Плохо</NavLink>
        </ul>
    )
}
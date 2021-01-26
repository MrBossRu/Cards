import React, {useCallback, useEffect, useState} from 'react'
import AnswerButtons from "../components/buttons/AnswerButtons"
import {Loader} from "../components/Loader"
import Style from './AnswerPage.module.css'
import {useParams} from "react-router-dom";

export  const AnswerPage = (props) =>{
    let { key } = useParams();
    let path = "/answer/" + String(key)
    let url = "/question/" + String(key)
    if (props.state.path != path) {
        props.state.Update(url, 'GET', null, {}, path)
    }
    if (props.state.isLoading || !(props.state.path === path)){
        return <Loader/>
    }
    else
    return(
        <div>
            <div className={Style.container} dangerouslySetInnerHTML={{__html: props.state.data.question.answer}}>
            </div>
            <AnswerButtons state={props.state}/>
        </div>
    )
}
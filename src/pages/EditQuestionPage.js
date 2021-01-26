import React, {useCallback, useEffect, useState} from 'react'
import Style from './EditQuestionPage.module.css'
import ContentEditor from "../components/ContentEditor/ContentEditor";
import {Redirect, NavLink, useParams} from "react-router-dom";
import {Loader} from "../components/Loader";

export  const EditQuestionPage = (props) =>{
    let { key } = useParams();
    let url = "/question/" + String(key)
    let path = "/questions/" + String(key) + "/edit"
    if (props.state.path != path) {
        props.state.Update(url, 'GET', null, {}, path)
    }
    if(!(props.state.url === url ) && (props.state.isLoad)){
        props.state.isLoad = false
        props.state.actions.GetQuestion(props.store, key, url)
    }
    function UpdateQuestionContent(content){
        props.state.data.question.question = content;
    }
    function UpdateAnswerContent(content){
        props.state.data.question.answer = content;
    }
    function handleChange(e) {
        props.state.data.question.name = e.target.value;
    }
    function  Save(){
        let uppath = '/update/' + String(key)
        props.state.Send(uppath,'POST',{...props.state.data.question},{})
    }
    if (props.state.isLoading || !(props.state.path === path)){
        return <Loader/>
    }
    else {
        return (
            <div>
                <h3>Имя</h3>
                <input className={Style.namefild} defaultValue={props.state.data.question.name} onChange={handleChange}/>
                <h3>Вопрос</h3>
                <ContentEditor content={props.state.data.question.question} update={UpdateQuestionContent}/>
                <h3>Ответ</h3>
                <ContentEditor content={props.state.data.question.answer} update={UpdateAnswerContent}/>
                <NavLink onClick={Save}  to="/questions" className={Style.bluebtn + ' ' + Style.addbtn}>Сохранить</NavLink>
            </div>
        )
    }
}
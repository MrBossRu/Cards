import React, {useCallback, useEffect, useState} from 'react'
import {Loader} from "../components/Loader"
import Table from "../components/table/Table";
import  Style from "./QuestionsPage.module.css"
import {Redirect, NavLink, useParams} from "react-router-dom";

export  const QuestionsPage = (props) => {
    let {page} = useParams();
    if (page === undefined) { page = 0 }
    let d = typeof(page)
    if(typeof(page) === "string") {page = 0}
    let url = "/questions/" + String(page)
    let path = url
    if (props.state.path != path) {
        props.state.Update(url, 'GET', null, {}, path)
    }

    function GetData() {
        return props.state.questions
    }

    function AddNewQuestion() {
    }

    if (props.state.isLoading || !(props.state.path === path)) {
        return <Loader/>
    } else {
        return (
            <div>
                <div className={Style.clearfix}>
                    <div className={Style.header}>
                        <h1 className={Style.title}>Вопросы</h1>
                        <NavLink to="/questions/new/edit" className={Style.bluebtn + ' ' + Style.addbtn}>Добавить
                            вопрос</NavLink>
                    </div>
                </div>
                <Table tableName='questions' state={props.state} GetData={GetData}/>
            </div>
        )
    }
}
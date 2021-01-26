import React, {useCallback, useEffect, useState} from 'react'
import CardButtons from "../components/buttons/CardButtons";
import {Loader} from "../components/Loader"
import Style from "./CardPage.module.css"
import {useParams} from "react-router-dom";

export  const CardPage = (props) => {
    let {key} = useParams();
    let path = "/cards/" + String(key)
    if (props.state.path != path) {
        props.state.Update('/next', 'GET', null, {}, path)
    }
    if (props.state.isLoading || !(props.state.path === path)) {
        return <Loader/>
    } else {
        return (
            <div>
                <div className={Style.container} dangerouslySetInnerHTML={{__html: props.state.data.question.question}}>
                </div>
                <CardButtons state={props.state}/>
            </div>

        )
    }
}
import React, {useContext} from 'react'
import {NavLink, useHistory} from 'react-router-dom'

export  const Navbar = () => {
    return(
        <nav>
            <div className="nav-wrapper blue darken-1" style={{ padding: '0 2rem' }}>
                <span className="brand-logo">Вопросы</span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/cards">Карточки</NavLink></li>
                    <li><NavLink to="/questions">Вопросы</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
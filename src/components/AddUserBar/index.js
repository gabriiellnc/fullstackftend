import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './index.css';

export default class AddUserBar extends Component {
    render() {
        return (
            <div className='addUserBar-container'>
                <span>Cadastro de desenvolvedor</span>
                <Link to='/adduser'>
                    <button type='submit'>Cadastrar</button>
                </Link>
                <span>Informações</span>
                <p>Este é uma aplicação desenvolvida durante o curso de ReactJS.</p>
            </div>
        )
    }
}
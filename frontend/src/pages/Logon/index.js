import React  from "react";
import {Link} from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi';
import './style.css'

import logoImg from '../../assets/logo.svg';
import hereosImg from '../../assets/heroes.png';


export default function Logon(){
    return (
        <div className="logon-container">
         <section className="form">

          <img src={logoImg} alt="Be The Hero" />
          <form action="">
            <h1> Faça seu logon </h1>
                <input type="text" placeholder="Sua ID" />
                <button type="submit" className="button">Entrar </button>
            <Link to="/register" className="black-link" > <FiLogIn size={16} color="#e02041" /> Não tenho cadastro</Link>
          </form>
         </section>         

         <img src={hereosImg}  alt="Heroes" />
        </div>
    );

}
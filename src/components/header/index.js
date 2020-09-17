import React from 'react';
import logo from '../../assets/ipag.png'
import './styles.css'

export default function Header() {

  return (


     <header>
       <div class="container" id="nav-container">
         <nav class="navbar navbar-expand-lg fixed-top"></nav>
          <a class="navbar-brand">
             <img id="logo"src = { logo } alt="Ipag"></img> 
          </a>    
       </div>
     </header>

  )

}
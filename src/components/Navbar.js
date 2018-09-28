import React from "react";
import "../styles/Navbar.css";

const Navbar = props => (
    <div className="navbar static-top">
   
        <a className="navbar-brand" href="/React-Clicky-Game/">Fortnite Clicky Game</a>
        <li>Click on a image to elimate your opponent , don't click the same image twice or you'll get elimanted</li>
        <li className="score">Score: {props.score} | Top Score: {props.topScore}</li>
    </div>
)
 

export default Navbar;


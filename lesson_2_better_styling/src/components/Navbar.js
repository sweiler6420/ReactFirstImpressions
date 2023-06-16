import React from "react"
import logo from "../images/logo.svg"

export default function Navbar() {
    return (
        <nav>
            <img className="nav-icon" src={logo} alt="description of React Logo"/>
            <h3 className="nav-title" >ReactFacts</h3>
            <h4 className="nav-subtitle" >React Course - Project 2</h4>
        </nav>
    )
}
import React from "react"
import profile_pic from "../images/profile_pic.jpg"
import linked_in from "../images/linkedin.png"
import email from "../images/email.png"

export default function Info() {
    return(
        <nav>
            <img className="info-img" src={profile_pic} alt="React Logo"/>
            <div className="wrap">
                <h3 className="info-name" >Stephen Weiler</h3>
                <h4 className="info-title" >Full Stack Developer</h4>
                <h4 className="info-link" >https://github.com/sweiler6420</h4>
                <button className="info-btn-email">
                    <img src={email} alt="email"/>
                    Email</button>
                <button className="info-btn-link" type="submit">
                    <img src={linked_in} alt="linked in"/>
                    LinkedIn
                </button>
            </div>
        </nav>
    )
}
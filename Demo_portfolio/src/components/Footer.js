import React from "react"
import facebook from "../images/facebook_icon.png"
import github from "../images/github_icon.png"
import instagram from "../images/instagram_icon.png"
import twitter from "../images/twitter_icon.png"


export default function Footer() {
    return(
        <footer className="footer">
            <img className="twitter-img" src={twitter} alt="twitter Logo"/>
            <img className="facebook-img" src={facebook} alt="facebook Logo"/>
            <img className="instagram-img" src={instagram} alt="instagram Logo"/>
            <img className="github-img" src={github} alt="github Logo"/>
        </footer>
    )
}
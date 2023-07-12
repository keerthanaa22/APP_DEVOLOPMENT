import React from "react"
import "./Header.css";
export default function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <ul>
                    <li><a href="/r/popular" class="active">Popular</a></li>
                    <li><a href="/r/trending">Trending</a></li>
                    <li><a href="/r/controversial">Controvertial</a></li>
                    <li><a href="/r/Top">Top</a></li>
                    <li><a href="/r/Old">Old</a></li>
                </ul>
            </div>
            <div className="header_right">
                <i className="fas fa-bell"></i>
                <img src="" />
                <div className="header_user">
                    <span>Keerthanaa GS</span>
                    <i className="fas fa-caret-down"></i>
                </div>
            </div>
            
        </div>
    )
}
import React from "react"
import "./Header.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
export default function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <ul>

        <NavLink to="/login" className={({ isActive }) => (isActive ? "link-active" : "link")}>
        <li><a href="/r/trending" >Home</a></li>
        </NavLink>

        <NavLink to="/trending" className={({ isActive }) => (isActive ? "link-active" : "link")}>
        <li><a href="/r/trending">Trending</a></li>
        </NavLink>
        <NavLink to="/controvertial" className={({ isActive }) => (isActive ? "link-active" : "link")}>
        <li><a href="/r/longin">Controvertial</a></li>
        </NavLink>
                    
        
        <NavLink to="/top" className={({ isActive }) => (isActive ? "link-active" : "link")}>
        <li><a href="/r/trending">Top</a></li>
        </NavLink>
        
        <NavLink to="/old" className={({ isActive }) => (isActive ? "link-active" : "link")}>
        <li><a href="/r/top">Old</a></li>
        </NavLink>
               
                </ul>

            </div>
            <div className="header_right">
            <Link to="/"><button type="submit" className="butto_butto">LogOut</button></Link>
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
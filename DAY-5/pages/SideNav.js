import React from 'react'
import navpic from "./th.jpg";
import './Sidenav.css';
import Main from './Main';
import './Main.css';
export default function SideNav(){
    const menus = [
        
        {to: '/r/explore',text:"Explore"},
        {to: '/r/notification',text:"Notification"},
        {to: '/r/bookmark',text:"Bookmark"},
        
    ]
const subnav =[
    "Gaming",
    "Sports",
    "Buisness",
    "Television",
    "Gym",
    "Movies",
    "Vehicals",
    "Science",
    "Technology",
    "Politics",
    

    
]

    return(
        <div className="sidenav">
            <div className="sidenav_logo">
                <img src={navpic} />
            </div>

            
            <div className="sidenav_search" >
                <input type='text' name="search" placeholder="Search" /> 
                <i className="fas fa-search"></i> 
            </div>
            <div className="sidenav_link" />
                <ul className="sidenav_menu">
                    {menus.map(menu => (
                        <li className='li1'> <a href={menu.to}>{menu.text}</a></li>
                        ))}

                </ul>
                <hr />
                <ul className="sidenav_subnav">
                    {subnav.map(subnav => (
                        <li className='li2'> <a href={'/r/${subnav}'}>{subnav}</a> </li>
                        
                        ))}
                    
                    

                </ul>
        </div>
    )
}

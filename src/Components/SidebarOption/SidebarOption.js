import React from 'react'
import './SidebarOption.css'
const SidebarOption = ({active,Icon,text}) => {
    return (
        <div className={`sidebarOption ${active && "sidebarOption__active"}  `}>
            <Icon className="sidebarOption__icon"/>
            <h2 className="sidebarOption__text">{text}</h2>
        </div>
    )
}

export default SidebarOption

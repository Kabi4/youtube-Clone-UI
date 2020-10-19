import React from 'react'
import SidebarOption from '../SidebarOption/SidebarOption'
import './Sidebarrow.css'

const Sidebarrow = (props) => {
    return (
        <div className="sidebarrow">
            {props.icons.map((ele,index)=>{
                return <SidebarOption  active={(index===0 && ele[1]==="Home" )?true:false}   key={ele[1]} Icon={ele[0]} text={ele[1]} />
            })}
            <div className="sidebarrowdiv"></div>
        </div>
    )
}

export default Sidebarrow

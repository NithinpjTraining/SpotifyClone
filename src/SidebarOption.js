import React from 'react';
import "./Sidebaroption.css";

function SidebarOption({ title, Icon }) {
    return (
        <div className="sidebarOption">
            {Icon && <Icon className="sidebarOption_icons"></Icon>}
         {Icon ? <h4>{title}</h4>:<p>{title}</p>}
        </div>
    )
}

export default SidebarOption

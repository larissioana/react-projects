import { NavLink } from "react-router-dom";
import { links } from "../data";
import { useState } from "react";

const Nav=()=>{
    const[isOpen,setIsOpen]=useState(false);
    return(
        <div>
            <nav>
                <button className="menu-btn" onClick={()=>setIsOpen(!isOpen)}>Menu</button>
                <div className="nav-links">
                {isOpen && 
                    <ul className="show-links links">
                    {links.map((link)=>{
                        return<li key={link.id}>
                            <NavLink to={link.url}>
                            {link.text}</NavLink>
                        </li>
                    })}
                    </ul>
                   }
                 </div>
               {isOpen? <div className="line"></div> :'' } 
            </nav>
         </div>
    )
};
export default Nav;
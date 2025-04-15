import React from 'react'
import { FiHome } from "react-icons/fi";
import { LuInfo } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { FaRegFolder } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

import { useState } from 'react';

function Menu() {

    const [active, setActive] = useState('#')

  return (
     <div className="menu">
        <div className="container menu-container">
            
            <a href="#" onClick={()=> setActive('#')}  className={active==="#"?'active':''}><FiHome/></a>

            <a href="#About" onClick={()=> setActive('#About')} className={active==="#About"?'active':''}><LuInfo/></a>

            <a href="#Experience" onClick={()=> setActive('#Experience')} className={active==="#Experience"?'active':''}><FaRegStar/></a>

            <a href="#Projects" onClick={()=> setActive('#Projects')} className={active==="#Projects"?'active':''}><FaRegFolder/></a>

            <a href="#contact" onClick={()=> setActive('#contact')} className={active==="#contact"?'active':''}><FiMail/></a>

        </div>
     </div>
  )
}

export default Menu
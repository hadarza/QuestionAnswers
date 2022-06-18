import React from 'react'
import navBarContent from '../../JSON/NavBarPage.json'
import {BsFillQuestionCircleFill} from 'react-icons/bs'
import {TbBoxMultiple2} from 'react-icons/tb'
import {BiMoviePlay} from 'react-icons/bi'
import {GiAccordion} from 'react-icons/gi'
import {CgCardSpades} from 'react-icons/cg'
import { motion } from "framer-motion"
const NavBarPage = () => {
    const icons = [
        BsFillQuestionCircleFill,
        TbBoxMultiple2,
        BiMoviePlay,
        GiAccordion,
        CgCardSpades
    ];
  return (


    <motion.div 
        whileInView={{x:[100,0]}}
        transition={{duration:0.85,ease:'easeOut'}} className='navbar'>
            <ul className="app_navbar_links">
                {navBarContent.map((item,key)=>{
                    const Icon = icons[item.id];
                    return(
                    <div className='navbar-content' key={key}>
                        <Icon color='white'/>
                        <li className="link" key={item.name}>
                            <a href={`#${item.path}`} >{item.name}</a>
                        </li>
                    </div>
                    )
                })}
            </ul>
       </motion.div> 
  )
}

export default NavBarPage
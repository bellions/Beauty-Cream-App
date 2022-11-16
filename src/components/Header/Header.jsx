import React from 'react'
import css from "../Header/Header.module.css" 
import {CgShoppingBag} from "react-icons/cg"
import Logo from "../../assets/logo.png"
import {HiOutlineMenuAlt3} from "react-icons/hi"

function Header() {

    const [showMenu, setShowMenu] = React.useState(true);

    const toggleMenu = () =>{
        setShowMenu((showMenu) => !showMenu)
    }
  return (
    <div className={css.container}>
        <div className={css.logo}>
            <img src={Logo} alt=''/>
            <span>bellions</span>
        </div>
        <div className={css.right}>
            <div className='bars' onClick={toggleMenu}>
                <HiOutlineMenuAlt3 />
            </div>
                <ul className={css.menu} style={{display: showMenu ? "inherit" : "none"}}>
                    <li>Collections</li>
                    <li>Brand</li>
                    <li>New</li>
                    <li>Sales</li>
                    <li>Eng</li>
                </ul>
            <input type="text" className={css.search} placeholder='Search' /> 
            <CgShoppingBag className={css.cart} />
        </div>
    </div>
  )
}

export default Header;
import React from 'react'
import css from "../Footer/Footer.module.css"
import Logo from "../../assets/logo.png"
import {
    // InboxIcon,
    // PhoneIcon,
    // LocationMarkerIcon,
    // LoginIcon,
    // UsersIcon,
    // LinkIcon
} from "@heroicons/react/outline";
// import { HiOutlineLocationMarker } from "react-icons/hi";
// import { FaPhoneAlt } from 'react-icons/fa';
import { FaSignInAlt } from 'react-icons/fa';
import { FcAbout } from 'react-icons/fc';
import { BsLink45Deg, BsFillPhoneVibrateFill } from 'react-icons/bs';
import { MdLocationOn, MdSupportAgent } from 'react-icons/md';

function Footer() {
    return (
        <div className={css.cFooterWrapper}>
            <hr />

            <div className={css.cFooter}>
                <div className={css.logo}>
                    <img src={Logo} alt="" />
                    <span>bellions</span>
                </div>
                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Contact Us</span>
                        <span className={css.pngLine}>
                            <MdLocationOn className={css.icon} style={{fontSize: "2.1rem"}} />
                            <span> West africa Nigeria, Lagos State </span>
                        </span>
                        <span className={css.pngLine}>
                            <BsFillPhoneVibrateFill className={css.icon} />
                            <a href='tel:2347019553610'>+2347019553610</a>
                        </span>
                        <span className={css.pngLine}>
                            <MdSupportAgent className={css.icon} style={{fontSize: "2rem"}} />
                             <span>support@bellions.com</span>
                        </span>
                    </div>
                </div>
                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Account</span>
                        <span className={css.pngLine}>
                            <FaSignInAlt className={css.icon} />
                            <a href='/signin'>
                                <p>Sign In</p>
                            </a>
                        </span>
                    </div>
                </div>
                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Company</span>
                        <span className={css.pngLine}>
                            <FcAbout className={css.icon} />
                            <a href='/about'>
                                <p>About us</p>
                            </a>
                        </span>
                    </div>
                </div>
                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Resources</span>
                        <span className={css.pngLine}>
                            <BsLink45Deg className={css.icon} />
                            <p>Safety Privacy & Terms</p>
                        </span>
                    </div>
                </div>
            </div>
            <div className={css.copyRight}>
                <span>Copyright ©2022 by Bellions, Inc.</span>
                <span>All rights reserved.</span>
            </div>
        </div>
    )
}

export default Footer
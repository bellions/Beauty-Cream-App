import React from 'react'
import {RiShoppingBagFill} from "react-icons/ri"
import {BsArrowRight} from "react-icons/bs"
import css from "../Hero/Hero.module.css"
import HeroImg from "../../assets/hero.png"

function Hero() {
  return (
    <div className={css.container}>
        
        <div className={css.h_sides}>
            <span className={css.text1}>Skin protection cream</span>
            <div className={css.text2}>
                <span>Trendy Collections</span>
                <span>Seedily say has suitable disposal and boy. Exercise joy man children rechoiced</span>
            </div>
        </div>

        <div className={css.wrapper}>
            <div className={css.blueCircle}></div>
            <img src={HeroImg} alt="" width={600} />
            <div className={css.cart2}>
                <RiShoppingBagFill />
                <div className={css.signup}>
                    <span>Best sign up offers</span>
                    <div className=''>
                        <BsArrowRight />
                    </div>
                </div>
            </div>
        </div>

        <div className={css.h_sides}>
            <div className={css.traffic}>
                <span>1.5m</span>
                <span>Monthly traffic</span>
            </div>
            <div className={css.customers}>
                <span>100K</span>
                <span>Happy Customers</span>
            </div>
        </div>
    </div>
  )
}

export default Hero;
import React from 'react'
// import ReactCompareImage from "react-compare-image"
import css from "../Virtual/Virtual.module.css"
import Shade from "../../assets/shade.png"
// import Before from "../../assets/before.png"
// import After from "../../assets/after.png"

function Virtual() {
  return (
    <div className={css.Virtual}>
        <div className={css.left}>
            <span>Virtual Try-On</span>
            <span>Never Buy the wrong Shade Again!</span>
            <span>Try On!</span>
            <img src={Shade} alt='' />
        </div>
        <div className={css.right}>
            {/* <ReactCompareImage leftImage={Before} rightImage={After} /> */}
        </div>
    </div>
  )
}

export default Virtual
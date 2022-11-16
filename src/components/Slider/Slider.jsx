import React from 'react'
import "../Slider/Slider.css"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from 'swiper'

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { SliderProducts } from "../../data/products"

function Slider() {
    return (
        <div className="s_container">
            <Swiper
                modules={[Pagination, Navigation]}
                slidesPerView={3}
                spaceBetween={40}
                slidesPerGroup={1}
                loop={true}
                navigation={true}
                loopFillGroupWithBlank={true}
                className="mySwiper"
                breakpoints={{
                    640: {
                        slidesPerView: 3
                    },
                    0: {
                        slidesPerView: 1
                    }
                }}
            >
                    {SliderProducts.map((slide) => (
                        <SwiperSlide>
                            <div className='left-side'>
                                <div className="name">
                                    <span>{slide.name}</span>
                                    <span>{slide.detail}</span>
                                </div>
                                <span>${slide.price}</span>
                                <div>Shop Now</div>
                            </div>
                            <img src={slide.img} alt="product" className='img-p' />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    )
}

export default Slider
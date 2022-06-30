import React from "react"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Controller } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import "./TeamSlider.scss"
import { useRef } from "react";

const images = [
	{

		id: 1,
		slideImg: "/img/sliderImg/secondSlider/1.png",
	},
	{

		id: 2,
		slideImg: "/img/sliderImg/secondSlider/2.png",
	},
	{

		id: 3,
		slideImg: "/img/sliderImg/secondSlider/3.png",
	}
]

const TeamSlider = () => {
	return (
		<div className="dream-team">
			<div className="swiper-button-prev">
				<svg width="29" height="16" viewBox="0 0 29 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M29 8L0.999999 8M0.999999 8L8.18919 0.999999M0.999999 8L8.18919 15" stroke="black" />
				</svg>
			</div>

			<Swiper
				className="dream-team__slider"
				spaceBetween={50}
				slidesPerView={1}
				loop={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
				pagination={{
					clickable: true,
					renderBullet: function () {
						return "<span class='swiper-pagination-bullet'>" + "</span>";
					}
				}
				}
				modules={[Autoplay, Pagination, Navigation, Controller]}
			>
				{images.map((item) => {
					return (
						<SwiperSlide key={item.id}>
							<img
								src={item.slideImg}
								alt="main photo" />
						</SwiperSlide>
					)
				})}
			</Swiper>
			<div className="swiper-button-next">
				<svg width="29" height="16" viewBox="0 0 29 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M8.34742e-08 8L28 8M28 8L20.8108 15M28 8L20.8108 1" stroke="black" />
				</svg>

			</div>
			<div className="desc">
				<h3>Для каждой</h3>
				<p>Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.</p>
				<p>
					Womazing ищет эти мелочи и создает прекрасные вещи,
					которые выгодно подчеркивают достоинства каждой девушки.
				</p>
				<a href="#">Подробнее о бренде</a>
			</div>
		</div>
	)
}

export default TeamSlider
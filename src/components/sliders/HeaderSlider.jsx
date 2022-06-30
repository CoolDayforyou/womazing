import React, { useLayoutEffect, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Controller } from "swiper";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "./HeaderSlider.scss"


const slide = [
	{
		title: "Новые поступления в этом сезоне",
		text: "Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.",
		id: 1
	},
	{
		title: "Что-то новенькое. Мы заждались тебя.",
		text: "Надоело искать себя в сером городе? Настало время новых идей, свежих красок и вдохновения с Womazing!",
		id: 2
	},
	{
		title: "Включай новый сезон с WOMAZING",
		text: "Мы обновили ассортимент - легендарные коллекции и новинки от отечественных дизайнеров",
		id: 3
	}
]
const images = [
	{
		slideImg: "/img/sliderImg/MainImg.png",
		id: 1
	},
	{
		slideImg: "/img/sliderImg/MainImg.png",
		id: 2
	},
	{
		slideImg: "/img/sliderImg/MainImg.png",
		id: 3
	},

]


const HeaderSlider = () => {
	const swiper1Ref = useRef();
	const swiper2Ref = useRef();

	useLayoutEffect(() => {
		swiper1Ref.current.controller.control = swiper2Ref.current;
		swiper2Ref.current.controller.control = swiper1Ref.current;
	}, []);
	return (
		<div className="slider">
			<div className="left-side">
				<Swiper
					onSwiper={(swiper) => {
						swiper1Ref.current = swiper;
					}}
					spaceBetween={50}
					slidesPerView={1}
					loop={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					pagination={{
						clickable: true,
						renderBullet: function () {
							return "<span class='swiper-pagination-bullet'>" + "</span>";
						}
					}
					}
					modules={[Autoplay, Pagination, Controller]}
				>
					{slide.map((item) => {
						return (

							<SwiperSlide
								className="left-swiper__item"
								key={item.id}>
								<h1>{item.title}</h1>
								<p>{item.text}</p>
								<div className="left-swiper__nav">
									<button onClick={() => window.scrollTo({
										top: 850,
										behavior: "smooth"
									})}
										className="left-swiper__arrow"><img src="/img/slide-to-next.svg" alt="arrow" /></button>
									<Link to="/shop" className="left-swiper__button">
										Открыть магазин
									</Link>
								</div>
							</SwiperSlide>

						)
					})}
				</Swiper>
			</div>

			<div className="right-side">
				<Swiper
					onSwiper={(swiper) => {
						swiper2Ref.current = swiper;
					}}
					loop={true}
					spaceBetween={50}
					slidesPerView={1}
					modules={[Controller]}
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
				<div className="bg"></div>
				<div className="right-side__photos">
					<img width={197} height={197} src="/img/sliderImg/second.png" alt="second photo" />
					<img width={190} height={318} src="/img/sliderImg/third.png" alt="second photo" />
				</div>

			</div>
		</div >
	)
}

export default HeaderSlider
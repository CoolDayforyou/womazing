import React from "react"
import Card from "../../card/Card"
import HeaderSlider from "../../sliders/HeaderSlider"
import TeamSlider from "../../sliders/TeamSlider"
import { Link } from "react-router-dom"

import styles from "./MainContext.module.scss"
import { SHOP_ROUTE } from "../../../utils/consts"
import { useContext } from "react"
import AppContext from "../../../context"

const items = [
	{
		id: 1,
		imgSrc: "/img/models/1.png",
		title: "Футболка USA",
		price: 229,
		discountPrice: 129,

	},
	{
		id: 2,
		imgSrc: "/img/models/2.png",
		title: "Купальник Glow",
		price: 129,
	},
	{
		id: 3,
		imgSrc: "/img/models/3.png",
		title: "Свитшот Sweet Shot",
		price: 129,
	},
]

const triggers = [
	{
		id: 1,
		imgSrc: "/img/triggers/quality.svg",
		title: "Качество",
		text: "Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества",
	},
	{
		id: 2,
		imgSrc: "/img/triggers/speed.svg",
		title: "Скорость",
		text: "Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти единиц продукции в наших собственных цехах",
	},
	{
		id: 3,
		imgSrc: "/img/triggers/responsibility.svg",
		title: "Ответственность",
		text: "Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда - все это Womazing",
	},
]

const MainContent = () => {
	const { Data } = useContext(AppContext)
	return (
		<>
			<HeaderSlider />
			<div className={styles.collection}>
				<h2>Новая коллекция</h2>
				<div className={styles.cards}>
					{ }
					{Data.map((item) =>
						item.id <= 3 &&
						(<Card
							parentId={item.id}
							key={item.id}
							{...item}
						/>)

					)}
				</div>
				<Link to={SHOP_ROUTE} className={styles.toShop}> Открыть магазин</Link>

			</div>
			<div className={styles.important}>
				<h2>Что для нас важно</h2>
				<div className={styles.importantParts}>
					{triggers.map(item => (
						<div key={item.id} className={styles.partItem}>
							<img src={item.imgSrc} alt={item.title} />
							<h3>{item.title}</h3>
							<p>{item.text}</p>
						</div>
					))}
				</div>
			</div>
			<TeamSlider />
		</>
	)
}

export default MainContent
import React, { useContext, useEffect, useState } from "react"

import AppContext from "../../../context"
import Card from "../../card/Card"
import Description from "../../description/Description"
import styles from "./Shop.module.scss"

const Data = [
	{
		id: 1,
		imgSrc: "/img/models/1.png",
		title: "Футболка USA",
		category: "Пальто",
		price: 229,
		discountPrice: 129,

	},
	{
		id: 2,
		imgSrc: "/img/models/2.png",
		title: "Купальник Glow",
		category: "Кардиганы",
		price: 129,
	},
	{
		id: 3,
		imgSrc: "/img/models/3.png",
		title: "Свитшот Sweet Shot",
		category: "Свитшоты",
		price: 129,
	},
	{
		id: 4,
		imgSrc: "/img/models/1.png",
		title: "Футболка USA",
		category: "Пальто",
		price: 129,

	},
	{
		id: 5,
		imgSrc: "/img/models/2.png",
		title: "Купальник Glow",
		category: "Толстовки",
		price: 129,
	},
	{
		id: 6,
		imgSrc: "/img/models/3.png",
		title: "Свитшот Sweet Shot",
		category: "Свитшоты",
		price: 129,
	},
	{
		id: 7,
		imgSrc: "/img/models/1.png",
		title: "Футболка USA",
		category: "Толстовки",
		price: 129,

	},
	{
		id: 8,
		imgSrc: "/img/models/2.png",
		title: "Купальник Glow",
		category: "Толстовки",
		price: 129,
	},
	{
		id: 9,
		imgSrc: "/img/models/3.png",
		title: "Свитшот Sweet Shot",
		category: "Толстовки",
		price: 129,
	},
	{
		id: 10,
		imgSrc: "/img/models/1.png",
		title: "Футболка USA",
		category: "Пальто",
		price: 129,

	},
	{
		id: 11,
		imgSrc: "/img/models/2.png",
		title: "Купальник Glow",
		category: "Кардиганы",
		price: 129,
	},
	{
		id: 12,
		imgSrc: "/img/models/3.png",
		title: "Свитшот Sweet Shot",
		category: "Свитшоты",
		price: 129,
	},
]


const Shop = () => {
	const { setDesc } = useContext(AppContext)
	const [filtered, setFiltered] = useState(Data)
	const menuItems = [...new Set(Data.map((Val) => Val.category))];


	// вообще не понимаю, как я так в 12 ночи сделал фильтр на кнопки
	function filteredItems(props) {
		const filteredItem = Data.filter(item =>
			item.category === props
		)
		return setFiltered(filteredItem)
	}

	useEffect(() => {

		setDesc("Магазин")
	}, [])

	return (
		<div className={styles.shop}>
			<Description />
			<div className={styles.catalog}>

				<button
					onClick={() => setFiltered(Data)}
					className={`${styles.catalogBtn} 
					${filtered === Data
							? `${styles.active}`
							: ``
						}`}
				>
					Все
				</button>
				{menuItems.map((item, index) =>
					<button
						key={index}
						className={`${styles.catalogBtn} 
					${filtered[0].category === item && filtered !== Data
								? `${styles.active}`
								: ``
							}
							
							`}
						onClick={() => {
							(filteredItems(item)
							)
						}}

					>
						{item}
					</button>
				)}
			</div>
			<p>Показано {filtered.length} из {Data.length}</p>
			<div className={styles.cards}>

				{filtered.map((item) =>
				(<Card
					key={item.id}
					{...item}
				/>
				))}
			</div>
		</div>
	)
}

export default Shop
import React, { useContext } from "react"
import AppContext from "../../context"
import styles from "./Description.module.scss"

import { Link } from "react-router-dom"
import {
	MAIN_ROUTE, SHOP_ROUTE,
	BRAND_ROUTE, CONTACTS_ROUTE,
	ITEM_ROUTE, BASKET_ROUTE,
	ORDER_ROUTE
} from "../../utils/consts"

const Description = ({ category = null }) => {
	const { desc, setDesc, currentItem } = useContext(AppContext)
	return (
		<div className={
			category
				? styles.itemDescription
				: styles.description
		}>
			{(() => {
				switch (desc) {
					case SHOP_ROUTE:
						return (
							category
								? <>
									<h1>{currentItem.title}</h1>
									<Link to={MAIN_ROUTE}
										onClick={() => setDesc(MAIN_ROUTE)}
									>Главная</Link>
									<Link to={SHOP_ROUTE}
										onClick={() => setDesc(SHOP_ROUTE)}
									>{currentItem.category}</Link>
									<a>{currentItem.title}</a>
								</>
								: <>
									<h1>Магазин</h1>
									<Link to={MAIN_ROUTE}
										onClick={() => setDesc(MAIN_ROUTE)}
									>Главная</Link>
									<a>Магазин</a>
								</>
						)
					case BRAND_ROUTE:
						return (
							<>
								<h1>О бренде</h1>
								<Link to={MAIN_ROUTE}
									onClick={() => setDesc(MAIN_ROUTE)}
								>Главная</Link>
								<a>О бренде</a>
							</>
						)
					case CONTACTS_ROUTE:
						return (
							<>
								<h1>Контакты</h1>
								<Link to={MAIN_ROUTE}
									onClick={() => setDesc(MAIN_ROUTE)}
								>Главная</Link>
								<a>Контакты</a>
							</>
						)
					case BASKET_ROUTE:
						return (
							<>
								<h1>Корзина</h1>
								<Link to={MAIN_ROUTE}
									onClick={() => setDesc(MAIN_ROUTE)}
								>Главная</Link>
								<a> Корзина</a>
							</>
						)
					case ORDER_ROUTE:
						return (
							<>
								<h1>Оформление заказа</h1>
								<Link to={MAIN_ROUTE}
									onClick={() => setDesc(MAIN_ROUTE)}
								>Главная</Link>
								<a>Оформление заказа</a>
							</>
						)
					case "Получено":
						return (
							<>
								<h1>Заказ получен</h1>
								<Link to={MAIN_ROUTE}
									onClick={() => setDesc(MAIN_ROUTE)}
								>Главная</Link>
								<a>Оформление заказа</a>
								<a>Заказ получен</a>
							</>
						)
					default:
						return null
				}
			})()}


		</div>
	)
}

export default Description
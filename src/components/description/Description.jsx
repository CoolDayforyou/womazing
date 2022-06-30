import React, { useContext } from "react"
import AppContext from "../../context"
import styles from "./Description.module.scss"

import { Link } from "react-router-dom"

const Description = () => {
	const { desc } = useContext(AppContext)
	return (
		<div className={
			desc.includes("Свитшот", "Пальто", "Кардиган", "Толстовка")
				? styles.itemDescription
				: styles.description
		}>
			{(() => {
				switch (desc) {
					case "Магазин":
						return (
							<>
								<h1>Магазин</h1>
								<Link to="/">Главная </Link>
								<a> Магазин</a>
							</>
						)
					case "Пальто":
						return (
							<>
								<h1>Магазин</h1>
								<a>Главная </a>
								<a> Магазин</a>
							</>
						)
					case "Свитшот":
						return (
							<>
								<h1>Магазин</h1>
								<a>Главная </a>
								<a> Магазин</a>
							</>
						)
					case "Кардиган":
						return (
							<>
								<h1>Магазин</h1>
								<a>Главная </a>
								<a> Магазин</a>
							</>
						)
					case "Толстовка":
						return (
							<>
								<h1>Магазин</h1>
								<a>Главная </a>
								<a> Магазин</a>
							</>
						)
					case "О бренде":
						return (
							<>
								<h1>Магазин</h1>
								<a>Главная </a>
								<a> Магазин</a>
							</>
						)
					case "Контакты":
						return (
							<>
								<h1>Магазин</h1>
								<a>Главная </a>
								<a> Магазин</a>
							</>
						)
					case "Корзина":
						return (
							<>
								<h1>Магазин</h1>
								<a>Главная </a>
								<a> Магазин</a>
							</>
						)
					case "Оформление заказа":
						return (
							<>
								<h1>Магазин</h1>
								<a>Главная </a>
								<a> Магазин</a>
							</>
						)
					case "Заказ получен":
						return (
							<>
								<h1>Магазин</h1>
								<a>Главная </a>
								<a> Магазин</a>
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
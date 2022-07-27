import React, { useEffect } from "react"
import { useContext } from "react"
import { Link } from "react-router-dom"
import AppContext from "../../../context"
import { BASKET_ROUTE, ORDER_ROUTE } from "../../../utils/consts"
import Description from "../../description/Description"
import styles from "./Basket.module.scss"

const Basket = () => {
	const {
		basket, setBasket, setDesc, setSendOrder
	} = useContext(AppContext)
	useEffect(() => {
		setDesc(BASKET_ROUTE)
	}, [])
	const totalPrices = [...basket.map((Val) => Val.total)];
	console.log(basket);
	console.log(totalPrices);
	return (
		<>
			<Description />
			<div className={styles.basket}>
				<div className={styles.legend}>
					<h4>Товар</h4>
					<h4>Цена</h4>
					<h4>Количество</h4>
					<h4>Всего</h4>
				</div>
				{basket.map((item, index) =>
				(<div
					key={index}
					className={styles.basketItem}
				>
					<img
						className={styles.delete}
						onClick={() => (
							basket.splice(index, 1),
							setBasket([...basket])
						)}
						src="/img/delete-item.svg" alt="delete" />

					<img
						className={styles.itemImg}
						src={item.img} alt={item.title} />
					<p className={styles.title}>{item.title}</p>
					<div className={styles.priceBlock}>

						<p className={styles.price}>{item.price}</p>
						<input
							readOnly //? delete after adding onChange
							type="number"
							value={item.amount}
						/>
						<p>${item.total}</p>
					</div>
				</div>)
				)}
				<div className={styles.coupon}>
					<input type="text" placeholder="Введите купон" />
					<button>Применить купон</button>
					<button className={styles.reload}
					//? непонятно, что именно должно делаться при нажатии. Либо обновлять после введения купона, либо при изменении количества (что с реактом делается автоматически). Поэтому без логики
					>
						Обновить корзину
					</button>
				</div>
				<div className={styles.finalPrice}>
					<div className={styles.subtotal}>

						<p>Подытог:</p>
						<p className={styles.subtotalPrice}>${totalPrices.length === 0
							? "0"
							: totalPrices.reduce((total, amount) => total + amount)
						}</p>
					</div>
					<div className={styles.checkout}>
						<div className={styles.total}>
							<h3>Итого:</h3>
							<h3>${totalPrices.length === 0
								? "0"
								: totalPrices.reduce((total, amount) => total + amount)
							}</h3>
						</div>
						<Link to={
							basket.length !== 0
								? ORDER_ROUTE
								: ""
						}
							className={basket.length === 0
								? styles.disabled
								: ""}
							onClick={() => setSendOrder(false)}
						>Оформить заказ</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default Basket
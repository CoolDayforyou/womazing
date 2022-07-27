import React, { useContext, useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import AppContext from "../../../context"
import { MAIN_ROUTE, ORDER_ROUTE } from "../../../utils/consts"
import Description from "../../description/Description"
import styles from "./Ordering.module.scss"

const orderInfoValues = {
	name: "",
	mail: "",
	phone: "",
	country: "",
	city: "",
	street: "",
	house: "",
	apartment: "",
	message: "",
}

const Ordering = () => {
	const { setDesc, basket, setBasket, sendOrder, setSendOrder
	} = useContext(AppContext)
	useEffect(() => {
		setDesc(ORDER_ROUTE)
	}, [])

	const totalPrices = [...basket.map((Val) => Val.total)];
	const [orderInfo, setOrderInfo] = useState(orderInfoValues);
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setOrderInfo({
			...orderInfo,
			[name]: value,
		});
	};
	return (
		<>
			<Description />
			{sendOrder
				? <div className={styles.ordered}>
					<img src="/img/ordered.svg" alt="ordered" />
					<div>
						<h3>Заказ успешно оформлен</h3>
						<p>Мы свяжемся с вами в ближайшее время!</p>
					</div>
					<Link to={MAIN_ROUTE}
						onClick={() => setSendOrder(false)}
					>Перейти на главную</Link>
				</div>
				: <div className={styles.order}>
					<div className={styles.userData}>
						<div className={styles.contacts}>
							<h3>Данные покупателя</h3>
							<input type="text"
								name="name"  //! IMPORTANT
								placeholder="Имя"
								onChange={handleInputChange}
								value={orderInfo.name}
							/>
							<input type="email"
								name="mail"
								placeholder="E-mail"
								onChange={handleInputChange}
								value={orderInfo.mail}
							/>
							<input type="tel"
								name="phone"
								placeholder="Телефон"
								onChange={handleInputChange}
								value={orderInfo.phone}
							/>
						</div>
						<div className={styles.residence}>
							<h3>Адрес получателя</h3>
							<input type="text"
								name="country"
								placeholder="Страна"
								onChange={handleInputChange}
								value={orderInfo.country}
							/>
							<input type="text"
								name="city"
								placeholder="Город"
								onChange={handleInputChange}
								value={orderInfo.city}
							/>
							<input type="text"
								name="street"
								placeholder="Улица"
								onChange={handleInputChange}
								value={orderInfo.street}
							/>
							<input type="text"
								name="house"
								placeholder="Дом"
								onChange={handleInputChange}
								value={orderInfo.house}
							/>
							<input type="text"
								name="apartment"
								placeholder="Квартира"
								onChange={handleInputChange}
								value={orderInfo.apartment}
							/>
						</div>
						<div className={styles.comments}>
							<h3>Комментарии</h3>
							<textarea
								name="message"
								placeholder="Сообщение"
								onChange={handleInputChange}
								value={orderInfo.message}
							/>
						</div>
					</div>
					<div className={styles.orderData}>
						<h3>Ваш заказ</h3>
						<ul>
							<li>
								<h4>Товар</h4>
								<ul>
									{basket.map((item, index) => (
										<li key={index}>
											<p>{item.title}</p>
										</li>
									))}
								</ul>

							</li>
							<li>
								<h4>Всего</h4>
								<ul>
									{basket.map((item, index) => (
										<li key={index}>
											<p className={styles.price}>${item.total}</p>
										</li>
									))}
								</ul>
							</li>
						</ul>
						<div className={styles.total}>
							<h4>Итого</h4>
							<h4>${totalPrices.reduce((total, amount) => total + amount)}</h4>
						</div>
						<div className={styles.paymentMethods}>
							<h3>Способы оплаты</h3>
							<input type="radio" name="" id="paperMoney" />
							<label htmlFor="paperMoney">Оплата наличными</label>
							<button
								onClick={() => (
									setSendOrder(true),
									setBasket([])
								)}
							>Разместить заказ</button>
						</div>
					</div>
				</div>
			}
		</>
	)
}

export default Ordering
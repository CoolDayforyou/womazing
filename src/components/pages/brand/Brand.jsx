import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../../context";
import { BRAND_ROUTE } from "../../../utils/consts";
import Description from "../../description/Description";
import styles from "./Brand.module.scss"

const Brand = () => {
	const { setDesc
	} = useContext(AppContext)
	useEffect(() => {
		setDesc(BRAND_ROUTE)
	}, [])
	return (
		<div className={styles.brand}>
			<Description />
			<div className={styles.ideaAndWoman}>
				<img src="/img/brand/1.png" alt="Идея и женщина" />
				<div className={styles.description}>
					<h3>Идея и женщина</h3>
					<p>Womazing была основана в 2010-ом и стала одной из самых успешных компаний нашей страны. Как и многие итальянские фирмы, Womazing остаётся семейной компанией, хотя ни один из членов семьи не является модельером.</p>
					<p>Мы действуем по успешной формуле, прибегая к услугам известных модельеров для создания своих коллекций. Этот метод был описан критиком моды Колином Макдауэллом как форма дизайнерского со-творчества, характерная для ряда итальянских prêt-a-porter компаний.</p>
				</div>
			</div>
			<div className={styles.magicInDetails}>
				<div className={styles.description}>
					<h3>Магия в деталях</h3>
					<p>Первый магазин Womazing был открыт в маленьком городке на севере страны в 2010-ом году. Первая коллекция состояла из двух пальто и костюма, которые были копиями парижских моделей</p>
					<p>Несмотря на то, что по образованию основательница была адвокатом, ее семья всегда была тесно связана с шитьём (прабабушка основательницы шила одежду для женщин, а мать основала профессиональную школу кроя и шитья). Стремление производить одежду для масс несло в себе большие перспективы, особенно в то время, когда высокая мода по-прежнему доминировала, а рынка качественного prêt-a-porter попросту не существовало.</p>
				</div>
				<img src="/img/brand/2.png" alt="Идея и женщина" />
			</div>
			<Link className={styles.toShop} to="/shop">
				Перейти в магазин
			</Link>
		</div>
	)
}

export default Brand
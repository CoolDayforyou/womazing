import React from "react"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import AppContext from "../../context"
import { ITEM_ROUTE, SHOP_ROUTE } from "../../utils/consts"
import styles from "./Card.module.scss"


const Card = ({
	id, parentId = id,
	title, imgSrc,
	price, discountPrice,
	category }) => {
	const { setCurrentItem } = useContext(AppContext)
	const navigate = useNavigate()
	return (
		<div className={styles.card}>
			<div className={styles.cardImg}
				onClick={() => {
					navigate(SHOP_ROUTE + "/" + parentId)
					setCurrentItem({
						id, parentId, title, imgSrc, price, discountPrice, category
					})

				}}>
				<img className={styles.model} src={imgSrc} alt="model" />
				<img className={styles.cardImgLink} src="/img/go-to-item.svg" alt="go-to-item" />
			</div>
			<div className={styles.cardInfo}>
				<h4>{title}</h4>
				<div className={styles.cardPrice}>
					<p className={
						discountPrice && styles.oldPrice
					}>{price}</p>
					{discountPrice && <p>
						{discountPrice}
					</p>}
				</div>
			</div>
		</div>



	)
}

export default Card
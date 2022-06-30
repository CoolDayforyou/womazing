import React from "react"
import styles from "./Card.module.scss"


const Card = ({ title, imgSrc, price, discountPrice }) => {
	return (
		<div className={styles.card}>
			<div className={styles.cardImg}>
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
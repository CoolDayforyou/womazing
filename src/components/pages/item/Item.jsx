import React, { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import AppContext from '../../../context'
import { SHOP_ROUTE } from '../../../utils/consts'
import Card from '../../card/Card'
import Description from '../../description/Description'
import styles from './Item.module.scss'

const Item = () => {
	const [size, setSize] = useState(null)
	const [amount, setAmount] = useState(1)

	const {
		setDesc, currentItem,
		basket, setBasket,
		color, setColor,
		sizes, colors,
		Data
	} = useContext(AppContext)
	useEffect(() => {
		setDesc(SHOP_ROUTE)
	}, [color, size, amount])
	const same = Data.filter(item =>
		item.category === currentItem.category && item.id !== currentItem.parentId)
	return (
		<div className={styles.item}>
			<Description category={currentItem.category} />
			<div className={styles.itemMain}>
				<img src={currentItem.imgSrc}
					width={536} height={729}
					alt={currentItem.title}
				/>
				<div className={styles.itemInfo}>
					<div className={styles.price}>
						{currentItem.discountPrice && <h2>
							{currentItem.discountPrice}
						</h2>}
						<h2 className={
							currentItem.discountPrice && styles.oldPrice
						}>{currentItem.price}</h2>

					</div>
					<div className={styles.size}>
						<h4>Выберите размер</h4>
						<div className={styles.sizeButtons}>
							{Object.values(sizes).map((value) => (
								<button
									className={
										size === value.toUpperCase()
											? styles.active
											: ''}
									key={value}
									onClick={() => setSize(value.toUpperCase())}
								>{value.toUpperCase()}</button>
							))}
						</div>
					</div>
					<div className={styles.colors}>
						<h4>Выберите цвет</h4>
						{colors.map((item) => (
							<div key={item.id} className={styles.color}>
								<input type="radio" value={item.name} name="color" id={item.id} />
								<label
									onClick={() => setColor(item.name)}
									style={{
										backgroundColor: `${item.color}`
									}}
									htmlFor={item.id}></label>
							</div>

						))}
					</div>
					<div className={styles.amount}>
						<input type="number"
							value={amount}
							onChange={event => setAmount(event.target.value)}
						/>
						<button
							onClick={() => {
								if (size !== null && color !== null) {
									currentItem.discountPrice
										? setBasket([...basket, {
											img: currentItem.imgSrc,
											title: currentItem.title,
											price: currentItem.discountPrice,
											size: size,
											color: color,
											amount: amount,
											total: currentItem.discountPrice.replace(/[^0-9,.]/g, "") * amount
										}])
										: setBasket([...basket, {
											img: currentItem.imgSrc,
											title: currentItem.title,
											price: currentItem.price,
											size: size,
											color: color,
											amount: amount,
											total: currentItem.price.replace(/[^0-9,.]/g, "") * amount
										}])
									setSize(null)
									setAmount(1)
								} else {
									alert("Выберите все предоставленные параметры для заказа.")
								}
							}}
						>Добавить в корзину</button>
					</div>
				</div>
			</div>
			<div className={styles.similar}>
				<h2>Связанные товары</h2>
				{same.map(item =>
					<Card
						key={item.id}
						{...item}
					/>
				)}
			</div>
		</div>
	)
}

export default Item
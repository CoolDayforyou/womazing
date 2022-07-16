import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import AppContext from '../../../context'
import { SHOP_ROUTE } from '../../../utils/consts'
import Card from '../../card/Card'
import Description from '../../description/Description'
import styles from './Item.module.scss'
// ww350 h558
const Item = () => {
	const {
		setDesc, currentItem,
		size, setSize,
		color, setColor,
		sizes, colors,
		amount, setAmount,
		Data
	} = useContext(AppContext)
	useEffect(() => {
		setDesc(SHOP_ROUTE)
	}, [])
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
						<button>Добавить в корзину</button>
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
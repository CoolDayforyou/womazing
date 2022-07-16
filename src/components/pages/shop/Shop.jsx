import React, { useContext, useEffect } from "react"
import ReactPaginate from 'react-paginate'

import AppContext from "../../../context"
import { SHOP_ROUTE } from "../../../utils/consts"
import Card from "../../card/Card"
import Description from "../../description/Description"
import styles from "./Shop.module.scss"


const Shop = () => {
	const { setDesc } = useContext(AppContext)


	const {
		filtered, setFiltered,
		Data, menuItems,
		filteredItems,
		currentShopItems, setCurrentShopItems,
		pageCount, setPageCount,
		itemOffset, setItemOffset,
		itemsPerPage,
	} = useContext(AppContext)

	useEffect(() => {
		setDesc(SHOP_ROUTE)
		const endOffset = itemOffset + itemsPerPage;
		setCurrentShopItems(filtered.slice(itemOffset, endOffset));
		setPageCount(Math.ceil(filtered.length / itemsPerPage));
	}, [itemOffset, itemsPerPage, filtered]);

	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % filtered.length;
		setItemOffset(newOffset);
	};


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
							setItemOffset(0)
						}}

					>
						{item}
					</button>
				)}
			</div>
			<p>Показано {currentShopItems.length} из {filtered.length}</p>
			<div className={styles.cards}>
				{currentShopItems.map((item) =>
				(<Card
					key={item.id}
					{...item}
				/>
				))}
			</div>

			<p>Показано {currentShopItems.length} из {filtered.length}</p>
			<ReactPaginate
				breakLabel="..."
				nextLabel={<svg width="20" height="10" viewBox="0 0 21 11" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M-2.18557e-07 5.5L20 5.5M20 5.5L14.8649 10.5M20 5.5L14.8649 0.499999" stroke="black" />
				</svg>}
				onPageChange={handlePageClick}
				pageRangeDisplayed={5}
				pageCount={pageCount}
				previousLabel={<svg width="21" height="11" viewBox="0 0 21 11" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M21 5.5L1 5.5M1 5.5L6.13514 0.5M1 5.5L6.13514 10.5" stroke="black" />
				</svg>
				}
				renderOnZeroPageCount={null}
				containerClassName={styles.pagination}
				pageLinkClassName={styles.page}
				previousLinkClassName={styles.pagePrev}
				nextLinkClassName={styles.pageNext}
				activeLinkClassName={styles.active}
				disabledClassName={styles.disabled}
				breakLinkClassName={styles.break}
			/>
		</div>
	)
}

export default Shop
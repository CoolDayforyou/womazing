import React, { useContext } from "react"
import AppContext from "../../context"
import styles from "./Popup.module.scss"
const Popup = () => {
	const { setPopupCall, recall, setRecall } = useContext(AppContext)

	return (
		<div className={styles.form}>
			<div className={styles.blank}>

				<h3>{!recall
					? "Заказать обратный звонок"
					: "Отлично! Мы скоро вам перезвоним."
				}</h3>
				{!recall &&
					<>
						<img
							src="/img/Close.svg" alt="Close"
							onClick={() => setPopupCall(false)}
						/>
						<input type="text" placeholder="Имя" />
						<input type="email" placeholder="E-mail" />
						<input type="tel" placeholder="Телефон" />
					</>
				}
				<button className={
					!recall
						? styles.recallButton
						: styles.addedRecallButton
				} onClick={!recall
					? () => setRecall(!recall)
					: () => (setRecall(!recall), setPopupCall(false))
				}>
					{
						!recall
							? "Заказать звонок"
							: "Закрыть"
					}
				</button>
			</div>
		</div>
	)
}

export default Popup
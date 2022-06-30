import React, { useContext } from "react"
import AppContext from "../../context";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
	const { setPopupCall } = useContext(AppContext)
	return (
		<nav className={styles.header}>
			<div className={styles.headerLogo}>
				<img width={25} height={25} src="./img/logo.svg" alt="Logo" />
				<p>Womazing</p>
			</div>
			<ul>
				<li> <Link to="/">Главная</Link></li>
				<li><Link to="/shop">Магазин</Link></li>
				<li><a href="#">О бренде</a></li>
				<li><a href="#">Контакты</a></li>
			</ul>

			<div className={styles.contacts}>
				<svg
					onClick={() => setPopupCall(true)}
					width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g clipPath="url(#clip0_1251_343)">
						<path d="M8.25235 7.81643C6.75052 9.31823 6.75052 11.7618 8.25232 13.2636L9.05001 12.4659C7.9881 11.404 7.98807 9.67613 9.05004 8.61417C10.112 7.55224 11.8399 7.55224 12.9018 8.61414L13.6995 7.81646C12.1977 6.31463 9.75412 6.31466 8.25235 7.81643Z" fill="#6E9C9F" />
						<path d="M9.84133 9.39119C9.20916 10.0234 9.20913 11.052 9.8413 11.6842L10.639 10.8865C10.5458 10.7934 10.4945 10.6695 10.4945 10.5377C10.4945 10.406 10.5459 10.2821 10.639 10.1889C10.7322 10.0958 10.8561 10.0444 10.9878 10.0444C11.1196 10.0444 11.2435 10.0958 11.3366 10.1889L12.1343 9.39122C11.5022 8.75902 10.4735 8.75902 9.84133 9.39119Z" fill="#6E9C9F" />
						<path d="M19.7482 7.43513L17.855 5.54848L13.9233 9.47367L15.4475 11.0478C15.1921 11.5013 14.6378 12.3699 13.6933 13.3145C12.7486 14.2592 11.8736 14.8197 11.4158 15.0792L9.87255 13.5556L6.0022 17.4029L7.88504 19.2983C8.60479 20.0181 9.69992 20.2046 10.6101 19.7625C11.9991 19.0879 14.0954 17.8431 16.1942 15.7443C18.2931 13.6455 19.5378 11.5492 20.2124 10.1602C20.3723 9.83109 20.4499 9.47787 20.4499 9.12692C20.4499 8.5072 20.2077 7.89464 19.7482 7.43513ZM19.1977 9.66732C18.5609 10.9785 17.3845 12.9587 15.3965 14.9466C13.4086 16.9345 11.4284 18.1109 10.1173 18.7477C9.63929 18.9799 9.06281 18.8806 8.68414 18.5019L7.59739 17.4079L9.87537 15.1436L11.1901 16.4415L11.5418 16.2849C11.599 16.2595 12.9594 15.6438 14.4911 14.1121C16.0238 12.5795 16.6266 11.2305 16.6515 11.1739L16.804 10.8268L15.5067 9.48705L17.8558 7.14178L18.9511 8.23327C19.3306 8.6133 19.4298 9.18952 19.1977 9.66732Z" fill="#6E9C9F" />
					</g>
					<defs>
						<clipPath id="clip0_1251_343">
							<rect width="17" height="17" fill="white" transform="translate(6 3)" />
						</clipPath>
					</defs>
				</svg>
				<a href="tel:+74958235412">+7 (495) 823-54-12</a>
			</div>
			<a href="#" className={styles.cart}>
				<img src="/img/cart.svg" alt="Cart" />
			</a>
		</nav>
	)
}

export default Header;
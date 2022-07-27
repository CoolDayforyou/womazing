import styles from "./Contacts.module.scss";

import { Map } from "../../map/Map";
import { useJsApiLoader } from "@react-google-maps/api";
import Description from "../../description/Description";
import { useContext, useEffect, useState } from "react";
import AppContext from "../../../context";
import { CONTACTS_ROUTE } from "../../../utils/consts";
const API_KEY = process.env.REACT_APP_API_KEY;
const defaultCenter = {
	lat: 48.50043547020171,
	lng: 32.231482060799436
};
const userInfoValues = {
	name: "",
	mail: "",
	phone: "",
	message: "",
}

const Contacts = () => {
	const { setDesc
	} = useContext(AppContext)
	useEffect(() => {
		setDesc(CONTACTS_ROUTE)
	}, [])
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: API_KEY
	})

	const [addedMessage, setAddedMessage] = useState(false)
	const [userInfo, setUserInfo] = useState(userInfoValues)

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setUserInfo({
			...userInfo,
			[name]: value,
		});
	};

	return (
		<div className={styles.contacts}>
			<Description />
			{isLoaded
				? <Map center={defaultCenter} />
				: <h2>Loading...</h2>
			}
			<div className={styles.infoBlock}>
				<div className={styles.phone}>
					<p>Телефон</p>
					<a href="tel:+380123456789">+380 (123) 456-67-89</a>
				</div>
				<div className={styles.mail}>
					<p>E-mail</p>
					<a href="mailto:hello@womazing.com">hello@womazing.com</a>
				</div>
				<div className={styles.address}>
					<p>Адрес</p>
					<a href="https://goo.gl/maps/GyxBbPSt7HSWauSm9" target="_blank">
						Дендропарк Кропивницкий
					</a>
				</div> {/* немного изменил чтобы не рос. адрес */}
			</div>
			<div className={styles.writeUs}>
				<h3>Напишите нам</h3>
				<input type="text"
					name="name"  //! IMPORTANT
					placeholder="Имя"
					onChange={handleInputChange}
					value={userInfo.name}
				/>
				<input type="email"
					name="mail"
					placeholder="E-mail"
					onChange={handleInputChange}
					value={userInfo.mail}
				/>
				<input type="tel"
					name="phone"
					placeholder="Телефон"
					onChange={handleInputChange}
					value={userInfo.phone}
				/>
				<textarea placeholder="Сообщение"
					name="message"
					onChange={handleInputChange}
					value={userInfo.message}
				/>
				<button
					onClick={() => {
						(setAddedMessage(!addedMessage))

					}}
				>Отправить</button>
				{addedMessage
					? <p className={styles.addedMess}>Сообщение успешно отправлено</p>
					: <></>
				}
			</div>
		</div>
	)
}

export default Contacts
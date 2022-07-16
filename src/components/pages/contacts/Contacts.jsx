import styles from "./Contacts.module.scss";

import { Map } from "../../map/Map";
import { useJsApiLoader } from '@react-google-maps/api';
import Description from '../../description/Description';
import { useState } from "react";
const API_KEY = process.env.REACT_APP_API_KEY;
const defaultCenter = {
	lat: 55.68816924645657,
	lng: 37.53203885987798
};

const userInfoValues ={
	name: "",
	mail: "",
	phone: "",
	message: "",
}

const Contacts = () => {
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
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
					<a href="tel:+74958235412">+7 (495) 823-54-12</a>
				</div>
				<div className={styles.mail}>
					<p>E-mail</p>
					<a href="mailto:hello@womazing.com">hello@womazing.com</a>
				</div>
				<div className={styles.address}>
					<p>Адрес</p>
					<a href="https://goo.gl/maps/GyxBbPSt7HSWauSm9" target="_blank">
						г. Москва, 3-я улица Строителей, 25
					</a>
				</div>
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
					onClick={() => {(setAddedMessage(!addedMessage))
						
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
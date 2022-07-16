import { GoogleMap } from '@react-google-maps/api';
import { useCallback, useRef } from 'react';
import styles from "./Map.module.scss"

const containerStyle = {
	width: '100%',
	height: '100%'
};


const Map = ({ center }) => {

	const mapRef = useRef(undefined)

	const onLoad = useCallback(function callback(map) {
		mapRef.current = map;
	}, [])

	const onUnmount = useCallback(function callback(map) {
		mapRef.current = undefined;
	}, [])
	return (
		<div className={styles.container}>
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={center}
				zoom={10}
				onLoad={onLoad}
				onUnmount={onUnmount}
			>
				{ /* Child components, such as markers, info windows, etc. */}
				<></>
			</GoogleMap>
		</div>
	)
}

export { Map }
import "./styles/App.scss";
import { useEffect, useState } from "react"
import Header from "./components/header/Header";
import MainContent from "./components/pages/mainContent/MainContent";
import Footer from "./components/footer/Footer";
import Popup from "./components/popup/Popup";
import AppContext from "./context"
import { Route, Routes } from "react-router-dom";
import Shop from "./components/pages/shop/Shop";

function App() {
	const [popupCall, setPopupCall] = useState(false)
	const [recall, setRecall] = useState(false)
	const [desc, setDesc] = useState("")
	const [category, setCategory] = useState("")


	return (
		<AppContext.Provider value={{
			setPopupCall,
			recall, setRecall,
			desc, setDesc,
			setCategory,

		}}>
			{popupCall && <Popup />}
			<div className="container">
				<Header />
				<Routes>
					<Route path="/" element={<MainContent />} />
					<Route path="/shop" element={<Shop />} />

				</Routes>
			</div>
			<Footer />
		</AppContext.Provider>

	);
}

export default App;

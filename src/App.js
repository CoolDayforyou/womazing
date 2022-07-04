import "./styles/App.scss";
import { useEffect, useState } from "react"
import Header from "./components/header/Header";
import MainContent from "./components/pages/mainContent/MainContent";
import Footer from "./components/footer/Footer";
import Popup from "./components/popup/Popup";
import AppContext from "./context"
import { Route, Routes } from "react-router-dom";
import Shop from "./components/pages/shop/Shop";

const Data = [
	{
		id: 1,
		imgSrc: "/img/models/1.png",
		title: "Футболка USA",
		category: "Пальто",
		price: 229,
		discountPrice: 129,

	},
	{
		id: 2,
		imgSrc: "/img/models/2.png",
		title: "Купальник Glow",
		category: "Кардиганы",
		price: 129,
	},
	{
		id: 3,
		imgSrc: "/img/models/3.png",
		title: "Свитшот Sweet Shot",
		category: "Свитшоты",
		price: 129,
	},
	{
		id: 4,
		imgSrc: "/img/models/1.png",
		title: "Футболка USA",
		category: "Пальто",
		price: 129,

	},
	{
		id: 5,
		imgSrc: "/img/models/2.png",
		title: "Купальник Glow",
		category: "Толстовки",
		price: 129,
	},
	{
		id: 6,
		imgSrc: "/img/models/3.png",
		title: "Свитшот Sweet Shot",
		category: "Свитшоты",
		price: 129,
	},
	{
		id: 7,
		imgSrc: "/img/models/1.png",
		title: "Футболка USA",
		category: "Толстовки",
		price: 129,

	},
	{
		id: 8,
		imgSrc: "/img/models/2.png",
		title: "Купальник Glow",
		category: "Толстовки",
		price: 129,
	},
	{
		id: 9,
		imgSrc: "/img/models/3.png",
		title: "Свитшот Sweet Shot",
		category: "Толстовки",
		price: 129,
	},
	{
		id: 10,
		imgSrc: "/img/models/1.png",
		title: "Футболка USA",
		category: "Пальто",
		price: 129,

	},
	{
		id: 11,
		imgSrc: "/img/models/2.png",
		title: "Купальник Glow",
		category: "Кардиганы",
		price: 129,
	},
	{
		id: 12,
		imgSrc: "/img/models/3.png",
		title: "Свитшот Sweet Shot",
		category: "Свитшоты",
		price: 129,
	},
]

function App() {
	const [popupCall, setPopupCall] = useState(false)
	const [recall, setRecall] = useState(false)
	const [desc, setDesc] = useState("")
	const [category, setCategory] = useState("")
	const [filtered, setFiltered] = useState(Data)

	const menuItems = [...new Set(Data.map((Val) => Val.category))];

	function filteredItems(props) {
		const filteredItem = Data.filter(item =>
			item.category === props
		)
		return setFiltered(filteredItem)
	}

	return (
		<AppContext.Provider value={{
			setPopupCall,
			recall, setRecall,
			desc, setDesc,
			setCategory,
			filtered, setFiltered,
			Data, menuItems,
			filteredItems,
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

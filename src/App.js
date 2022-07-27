import "./styles/App.scss";
import { useState } from "react"
import Header from "./components/header/Header";
import MainContent from "./components/pages/mainContent/MainContent";
import Brand from "./components/pages/brand/Brand";
import Footer from "./components/footer/Footer";
import Popup from "./components/popup/Popup";
import AppContext from "./context"
import { Route, Routes } from "react-router-dom";
import Shop from "./components/pages/shop/Shop";
import Contacts from "./components/pages/contacts/Contacts";
import Item from "./components/pages/item/Item";
import Basket from "./components/pages/basket/Basket";
import Ordering from "./components/pages/ordering/Ordering";

import {
	MAIN_ROUTE,
	SHOP_ROUTE,
	BRAND_ROUTE,
	CONTACTS_ROUTE,
	BASKET_ROUTE,
	ORDER_ROUTE
} from "./utils/consts"

const Data = [
	{
		id: 1,
		imgSrc: "/img/models/1.png",
		title: "Футболка USA",
		category: "Пальто",
		price: "$229",
		discountPrice: "$129",
	},
	{
		id: 2,
		imgSrc: "/img/models/2.png",
		title: "Купальник Glow",
		category: "Кардиганы",
		price: "$129",
	},
	{
		id: 3,
		imgSrc: "/img/models/3.png",
		title: "Свитшот Sweet Shot",
		category: "Свитшоты",
		price: "$129",
	},
	{
		id: 4,
		imgSrc: "/img/models/1.png",
		title: "Футболка USA",
		category: "Пальто",
		price: "$129",

	},
	{
		id: 5,
		imgSrc: "/img/models/2.png",
		title: "Купальник Glow",
		category: "Толстовки",
		price: "$129",
	},
	{
		id: 6,
		imgSrc: "/img/models/3.png",
		title: "Свитшот Sweet Shot",
		category: "Свитшоты",
		price: "$129",
	},
	{
		id: 7,
		imgSrc: "/img/models/1.png",
		title: "Футболка USA",
		category: "Толстовки",
		price: "$129",

	},
	{
		id: 8,
		imgSrc: "/img/models/2.png",
		title: "Купальник Glow",
		category: "Толстовки",
		price: "$129",
	},
	{
		id: 9,
		imgSrc: "/img/models/3.png",
		title: "Свитшот Sweet Shot",
		category: "Толстовки",
		price: "$129",
	},
	{
		id: 10,
		imgSrc: "/img/models/1.png",
		title: "Футболка USA",
		category: "Пальто",
		price: "$129",

	},
	{
		id: 11,
		imgSrc: "/img/models/2.png",
		title: "Купальник Glow",
		category: "Кардиганы",
		price: "$129",
	},
	{
		id: 12,
		imgSrc: "/img/models/3.png",
		title: "Свитшот Sweet Shot",
		category: "Свитшоты",
		price: "$129",
	},
	{
		id: 13,
		imgSrc: "/img/models/1.png",
		title: "Футболка USA",
		category: "Пальто",
		price: "$229",
		discountPrice: "$129",

	},
	{
		id: 14,
		imgSrc: "/img/models/2.png",
		title: "Купальник Glow",
		category: "Кардиганы",
		price: "$129",
	},
	{
		id: 15,
		imgSrc: "/img/models/3.png",
		title: "Свитшот Sweet Shot",
		category: "Свитшоты",
		price: "$129",
	},
	{
		id: 16,
		imgSrc: "/img/models/1.png",
		title: "Футболка USA",
		category: "Пальто",
		price: "$129",

	},
	{
		id: 17,
		imgSrc: "/img/models/2.png",
		title: "Купальник Glow",
		category: "Толстовки",
		price: "$129",
	},
	{
		id: 18,
		imgSrc: "/img/models/3.png",
		title: "Свитшот Sweet Shot",
		category: "Свитшоты",
		price: "$129",
	},
	{
		id: 19,
		imgSrc: "/img/models/1.png",
		title: "Футболка USA",
		category: "Толстовки",
		price: "$129",

	},
	{
		id: 20,
		imgSrc: "/img/models/2.png",
		title: "Купальник Glow",
		category: "Толстовки",
		price: "$129",
	},
	{
		id: 21,
		imgSrc: "/img/models/3.png",
		title: "Свитшот Sweet Shot",
		category: "Толстовки",
		price: "$129",
	},
	{
		id: 22,
		imgSrc: "/img/models/1.png",
		title: "Футболка USA",
		category: "Пальто",
		price: "$129",

	},
	{
		id: 23,
		imgSrc: "/img/models/2.png",
		title: "Купальник Glow",
		category: "Кардиганы",
		price: "$129",
	},
	{
		id: 24,
		imgSrc: "/img/models/3.png",
		title: "Свитшот Sweet Shot",
		category: "Свитшоты",
		price: "$129",
	},
	{
		id: 25,
		imgSrc: "/img/models/1.png",
		title: "Футболка USA",
		category: "Пальто",
		price: "$229",
		discountPrice: "$129",

	},
	{
		id: 26,
		imgSrc: "/img/models/2.png",
		title: "Купальник Glow",
		category: "Кардиганы",
		price: "$129",
	},
	{
		id: 27,
		imgSrc: "/img/models/3.png",
		title: "Свитшот Sweet Shot",
		category: "Свитшоты",
		price: "$129",
	},
	{
		id: 28,
		imgSrc: "/img/models/1.png",
		title: "Футболка USA",
		category: "Пальто",
		price: "$129",

	},
	{
		id: 29,
		imgSrc: "/img/models/2.png",
		title: "Купальник Glow",
		category: "Толстовки",
		price: "$129",
	},
	{
		id: 30,
		imgSrc: "/img/models/3.png",
		title: "Свитшот Sweet Shot",
		category: "Свитшоты",
		price: "$129",
	},
	{
		id: 31,
		imgSrc: "/img/models/1.png",
		title: "Футболка USA",
		category: "Толстовки",
		price: "$129",

	},
	{
		id: 32,
		imgSrc: "/img/models/2.png",
		title: "Купальник Glow",
		category: "Толстовки",
		price: "$129",
	},
	{
		id: 33,
		imgSrc: "/img/models/3.png",
		title: "Свитшот Sweet Shot",
		category: "Толстовки",
		price: "$129",
	},
	{
		id: 34,
		imgSrc: "/img/models/1.png",
		title: "Футболка USA",
		category: "Пальто",
		price: "$129",

	},
	{
		id: 35,
		imgSrc: "/img/models/2.png",
		title: "Купальник Glow",
		category: "Кардиганы",
		price: "$129",
	},
	{
		id: 36,
		imgSrc: "/img/models/3.png",
		title: "Свитшот Sweet Shot",
		category: "Свитшоты",
		price: "$129",
	},
	{
		id: 37,
		imgSrc: "/img/models/1.png",
		title: "Футболка USA",
		category: "Пальто",
		price: "$229",
		discountPrice: "$129",

	},
	{
		id: 38,
		imgSrc: "/img/models/2.png",
		title: "Купальник Glow",
		category: "Кардиганы",
		price: "$129",
	},
	{
		id: 39,
		imgSrc: "/img/models/3.png",
		title: "Свитшот Sweet Shot",
		category: "Свитшоты",
		price: "$129",
	},
	{
		id: 40,
		imgSrc: "/img/models/1.png",
		title: "Футболка USA",
		category: "Пальто",
		price: "$129",

	},
	{
		id: 41,
		imgSrc: "/img/models/2.png",
		title: "Купальник Glow",
		category: "Толстовки",
		price: "$129",
	},
	{
		id: 42,
		imgSrc: "/img/models/3.png",
		title: "Свитшот Sweet Shot",
		category: "Свитшоты",
		price: "$129",
	},
	{
		id: 43,
		imgSrc: "/img/models/1.png",
		title: "Футболка USA",
		category: "Толстовки",
		price: "$129",

	},
	{
		id: 44,
		imgSrc: "/img/models/2.png",
		title: "Купальник Glow",
		category: "Толстовки",
		price: "$129",
	},
	{
		id: 45,
		imgSrc: "/img/models/3.png",
		title: "Свитшот Sweet Shot",
		category: "Толстовки",
		price: "$129",
	},
	{
		id: 46,
		imgSrc: "/img/models/1.png",
		title: "Футболка USA",
		category: "Пальто",
		price: "$129",

	},
	{
		id: 47,
		imgSrc: "/img/models/2.png",
		title: "Купальник Glow",
		category: "Кардиганы",
		price: "$129",
	},
	{
		id: 48,
		imgSrc: "/img/models/3.png",
		title: "Свитшот Sweet Shot",
		category: "Свитшоты",
		price: "$129",
	},
	{
		id: 49,
		imgSrc: "/img/models/1.png",
		title: "Футболка USA",
		category: "Пальто",
		price: "$229",
		discountPrice: "$129",

	},
	{
		id: 50,
		imgSrc: "/img/models/2.png",
		title: "Купальник Glow",
		category: "Кардиганы",
		price: "$129",
	},
	{
		id: 51,
		imgSrc: "/img/models/3.png",
		title: "Свитшот Sweet Shot",
		category: "Свитшоты",
		price: "$129",
	},
	{
		id: 52,
		imgSrc: "/img/models/1.png",
		title: "Футболка USA",
		category: "Пальто",
		price: "$129",

	},
	{
		id: 53,
		imgSrc: "/img/models/2.png",
		title: "Купальник Glow",
		category: "Толстовки",
		price: "$129",
	},
	{
		id: 54,
		imgSrc: "/img/models/3.png",
		title: "Свитшот Sweet Shot",
		category: "Свитшоты",
		price: "$129",
	},
	{
		id: 55,
		imgSrc: "/img/models/1.png",
		title: "Футболка USA",
		category: "Толстовки",
		price: "$129",

	},
	{
		id: 56,
		imgSrc: "/img/models/2.png",
		title: "Купальник Glow",
		category: "Толстовки",
		price: "$129",
	},
	{
		id: 57,
		imgSrc: "/img/models/3.png",
		title: "Свитшот Sweet Shot",
		category: "Толстовки",
		price: "$129",
	},
	{
		id: 58,
		imgSrc: "/img/models/1.png",
		title: "Футболка USA",
		category: "Пальто",
		price: "$129",

	},
	{
		id: 59,
		imgSrc: "/img/models/2.png",
		title: "Купальник Glow",
		category: "Кардиганы",
		price: "$129",
	},
	{
		id: 60,
		imgSrc: "/img/models/3.png",
		title: "Свитшот Sweet Shot",
		category: "Свитшоты",
		price: "$129",
	},
	{
		id: 61,
		imgSrc: "/img/models/1.png",
		title: "Футболка USA",
		category: "Пальто",
		price: "$229",
		discountPrice: "$129",

	},
	{
		id: 62,
		imgSrc: "/img/models/2.png",
		title: "Купальник Glow",
		category: "Кардиганы",
		price: "$129",
	},
	{
		id: 63,
		imgSrc: "/img/models/3.png",
		title: "Свитшот Sweet Shot",
		category: "Свитшоты",
		price: "$129",
	},
	{
		id: 64,
		imgSrc: "/img/models/1.png",
		title: "Футболка USA",
		category: "Пальто",
		price: "$129",

	},
	{
		id: 65,
		imgSrc: "/img/models/2.png",
		title: "Купальник Glow",
		category: "Толстовки",
		price: "$129",
	},
	{
		id: 66,
		imgSrc: "/img/models/3.png",
		title: "Свитшот Sweet Shot",
		category: "Свитшоты",
		price: "$129",
	},
	{
		id: 67,
		imgSrc: "/img/models/1.png",
		title: "Футболка USA",
		category: "Толстовки",
		price: "$129",

	},
	{
		id: 68,
		imgSrc: "/img/models/2.png",
		title: "Купальник Glow",
		category: "Толстовки",
		price: "$129",
	},
	{
		id: 69,
		imgSrc: "/img/models/3.png",
		title: "Свитшот Sweet Shot",
		category: "Толстовки",
		price: "$129",
	},
	{
		id: 70,
		imgSrc: "/img/models/1.png",
		title: "Футболка USA",
		category: "Пальто",
		price: "$129",

	},
	{
		id: 71,
		imgSrc: "/img/models/2.png",
		title: "Купальник Glow",
		category: "Кардиганы",
		price: "$129",
	},
	{
		id: 72,
		imgSrc: "/img/models/3.png",
		title: "Свитшот Sweet Shot",
		category: "Свитшоты",
		price: "$129",
	},
	{
		id: 73,
		imgSrc: "/img/models/1.png",
		title: "Футболка USA",
		category: "Пальто",
		price: "$229",
		discountPrice: "$129",

	},
	{
		id: 74,
		imgSrc: "/img/models/2.png",
		title: "Купальник Glow",
		category: "Кардиганы",
		price: "$129",
	},
	{
		id: 75,
		imgSrc: "/img/models/3.png",
		title: "Свитшот Sweet Shot",
		category: "Свитшоты",
		price: "$129",
	},
	{
		id: 76,
		imgSrc: "/img/models/1.png",
		title: "Футболка USA",
		category: "Пальто",
		price: "$129",

	},
	{
		id: 77,
		imgSrc: "/img/models/2.png",
		title: "Купальник Glow",
		category: "Толстовки",
		price: "$129",
	},
	{
		id: 78,
		imgSrc: "/img/models/3.png",
		title: "Свитшот Sweet Shot",
		category: "Свитшоты",
		price: "$129",
	},
	{
		id: 79,
		imgSrc: "/img/models/1.png",
		title: "Футболка USA",
		category: "Толстовки",
		price: "$129",

	},
	{
		id: 80,
		imgSrc: "/img/models/2.png",
		title: "Купальник Glow",
		category: "Толстовки",
		price: "$129",
	},
	{
		id: 81,
		imgSrc: "/img/models/3.png",
		title: "Свитшот Sweet Shot",
		category: "Толстовки",
		price: "$129",
	},
	{
		id: 82,
		imgSrc: "/img/models/1.png",
		title: "Футболка USA",
		category: "Пальто",
		price: "$129",

	},
	{
		id: 83,
		imgSrc: "/img/models/2.png",
		title: "Купальник Glow",
		category: "Кардиганы",
		price: "$129",
	},
	{
		id: 84,
		imgSrc: "/img/models/3.png",
		title: "Свитшот Sweet Shot",
		category: "Свитшоты",
		price: "$129",
	},
	{
		id: 85,
		imgSrc: "/img/models/1.png",
		title: "Футболка USA",
		category: "Пальто",
		price: "$229",
		discountPrice: "$129",

	},
	{
		id: 86,
		imgSrc: "/img/models/2.png",
		title: "Купальник Glow",
		category: "Кардиганы",
		price: "$129",
	},
	{
		id: 87,
		imgSrc: "/img/models/3.png",
		title: "Свитшот Sweet Shot",
		category: "Свитшоты",
		price: "$129",
	},
	{
		id: 88,
		imgSrc: "/img/models/1.png",
		title: "Футболка USA",
		category: "Пальто",
		price: "$129",

	},
	{
		id: 89,
		imgSrc: "/img/models/2.png",
		title: "Купальник Glow",
		category: "Толстовки",
		price: "$129",
	},
	{
		id: 90,
		imgSrc: "/img/models/3.png",
		title: "Свитшот Sweet Shot",
		category: "Свитшоты",
		price: "$129",
	},
	{
		id: 91,
		imgSrc: "/img/models/1.png",
		title: "Футболка USA",
		category: "Толстовки",
		price: "$129",

	},
	{
		id: 92,
		imgSrc: "/img/models/2.png",
		title: "Купальник Glow",
		category: "Толстовки",
		price: "$129",
	},
	{
		id: 93,
		imgSrc: "/img/models/3.png",
		title: "Свитшот Sweet Shot",
		category: "Толстовки",
		price: "$129",
	},
	{
		id: 94,
		imgSrc: "/img/models/1.png",
		title: "Футболка USA",
		category: "Пальто",
		price: "$129",

	},
	{
		id: 95,
		imgSrc: "/img/models/2.png",
		title: "Купальник Glow",
		category: "Кардиганы",
		price: "$129",
	},
	{
		id: 96,
		imgSrc: "/img/models/3.png",
		title: "Свитшот Sweet Shot",
		category: "Свитшоты",
		price: "$129",
	},
	{
		id: 97,
		imgSrc: "/img/models/1.png",
		title: "Футболка USA",
		category: "Пальто",
		price: "$229",
		discountPrice: "$129",

	},
	{
		id: 98,
		imgSrc: "/img/models/2.png",
		title: "Купальник Glow",
		category: "Кардиганы",
		price: "$129",
	},
	{
		id: 99,
		imgSrc: "/img/models/3.png",
		title: "Свитшот Sweet Shot",
		category: "Свитшоты",
		price: "$129",
	},
	{
		id: 100,
		imgSrc: "/img/models/1.png",
		title: "Футболка USA",
		category: "Пальто",
		price: "$129",

	},
	{
		id: 101,
		imgSrc: "/img/models/2.png",
		title: "Купальник Glow",
		category: "Толстовки",
		price: "$129",
	},
	{
		id: 102,
		imgSrc: "/img/models/3.png",
		title: "Свитшот Sweet Shot",
		category: "Свитшоты",
		price: "$129",
	},
	{
		id: 103,
		imgSrc: "/img/models/1.png",
		title: "Футболка USA",
		category: "Толстовки",
		price: "$129",

	},
	{
		id: 104,
		imgSrc: "/img/models/2.png",
		title: "Купальник Glow",
		category: "Толстовки",
		price: "$129",
	},
	{
		id: 105,
		imgSrc: "/img/models/3.png",
		title: "Свитшот Sweet Shot",
		category: "Толстовки",
		price: "$129",
	},
	{
		id: 106,
		imgSrc: "/img/models/1.png",
		title: "Футболка USA",
		category: "Пальто",
		price: "$129",

	},
	{
		id: 107,
		imgSrc: "/img/models/2.png",
		title: "Купальник Glow",
		category: "Кардиганы",
		price: "$129",
	},
	{
		id: 108,
		imgSrc: "/img/models/3.png",
		title: "Свитшот Sweet Shot",
		category: "Свитшоты",
		price: "$129",
	},

]

const mainPages = [
	{
		id: 1,
		page: "Главная",
		link: MAIN_ROUTE
	},
	{
		id: 2,
		page: "Магазин",
		link: SHOP_ROUTE
	},
	{
		id: 3,
		page: "О бренде",
		link: BRAND_ROUTE
	},
	{
		id: 4,
		page: "Контакты",
		link: CONTACTS_ROUTE
	},
]

const sizes = {
	s: "s",
	m: "m",
	l: "l",
	xl: "xl",
	xxl: "xxl",
}

const colors = [
	{
		id: 1,
		name: "brown",
		color: "#927876",
	},
	{
		id: 2,
		name: "light-gray",
		color: "#D4D4D4",
	},
	{
		id: 3,
		name: "light-pink",
		color: "#FD9696",
	},
	{
		id: 4,
		name: "peach-colored",
		color: "#FDC796",
	},
]

const App = () => {
	const [popupCall, setPopupCall] = useState(false)
	const [recall, setRecall] = useState(false)
	const [desc, setDesc] = useState(MAIN_ROUTE)
	const [filtered, setFiltered] = useState(Data)
	const [currentItem, setCurrentItem] = useState({
		id: 1,
		imgSrc: "/img/models/1.png",
		title: "Футболка USA",
		category: "Пальто",
		price: "$229",
		discountPrice: "$129",
	});
	const [currentShopItems, setCurrentShopItems] = useState([...filtered]);
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0);
	const [color, setColor] = useState(null)
	const [basket, setBasket] = useState([])
	const [sendOrder, setSendOrder] = useState(false)

	const itemsPerPage = 9;

	const menuItems = [...new Set(Data.map((Val) => Val.category))];

	const filteredItems = (props) => {
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
			filtered, setFiltered,
			Data, sizes,
			mainPages, menuItems,
			filteredItems,
			currentItem, setCurrentItem,
			currentShopItems, setCurrentShopItems,
			pageCount, setPageCount,
			itemOffset, setItemOffset,
			color, setColor,
			basket, setBasket,
			colors,
			itemsPerPage,
			sendOrder, setSendOrder
		}}>
			{popupCall && <Popup />}
			<div className="container">
				<Header />
				<Routes>
					<Route path={MAIN_ROUTE} element={<MainContent />} />
					<Route path={SHOP_ROUTE} element={<Shop />} />
					<Route path={SHOP_ROUTE + "/:id"} element={<Item />} />
					<Route path={BRAND_ROUTE} element={<Brand />} />
					<Route path={CONTACTS_ROUTE} element={<Contacts />} />
					<Route path={BASKET_ROUTE} element={<Basket />} />
					<Route path={ORDER_ROUTE} element={<Ordering />} />

				</Routes>
			</div>
			<Footer />
		</AppContext.Provider>

	);
}

export default App;

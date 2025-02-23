import './index.css'
import products from './data_base/data.jsx' // database

import Recommended from './components/Recommended/Recommended'
import Navigation from "./components/Navigation/Nav"
import Products from "./components/Products/Products"
import Sidebar from './components/Sidebar/Sidebar'
import Colors from './components/Sidebar/Colors/Colors'
import Price from "./components/Sidebar/Price/Price"
import { useState } from 'react'
import Card from './components/Card.jsx'
import Modal from './components/Modal/Modal'

export let favoriteSneakers = []
export let cartOfSneakers = []
export default function App() {
	const [selectedCategory, setSelectedCategory] = useState(null)
	const [query, setQuery] = useState('')
	const [modal, setModal] = useState(null)


	//  ---------- Input filter -------------
	const handleInputChange = event => {
		setQuery(event.target.value)
	}

	const filteredItems = products.filter((product) => {
		return product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
	})

	//  ---------- Radio filter ----------
	const handleChange = event => {
		setSelectedCategory(event.target.value)
	}

	//  ---------- Buttons filter ----------
	const handleClick = event => {
		setSelectedCategory(event.target.value)
	}


	// =========================================
	function filteredData(products, selected, query) {
		let filteredProducts = products

		// Filtering input items
		if (query) {
			filteredProducts = filteredItems
		}

		// Selecting filter
		if (selected) {
			filteredProducts = filteredProducts.filter(
				({ category, color, company, newPrice, title }) =>
					category === selected ||
					color === selected ||
					company === selected ||
					newPrice === selected ||
					title === selected
			)
		}

		return filteredProducts.map(
			(sneaker) => (
				<Card
					key={sneaker.id}
					sneaker={sneaker}
				/>
			))
	}

	const result = filteredData(products, selectedCategory, query)

	return <>
		<Sidebar handleChange={handleChange} />
		<Navigation
		handleInputChange={handleInputChange}
		query={query}
		setModal={setModal}/>
		<Recommended handleClick={handleClick} />
		<Products result={result} />
		<Modal modal={modal} setModal={setModal}/>
	</>
}
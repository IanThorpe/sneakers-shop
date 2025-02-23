import { useEffect, useState } from 'react'
import './CardInModal.css'
import data from '../../../data_base/data'
import { BsCartPlus, BsCartCheck, BsTrash } from 'react-icons/bs'
import { cartOfSneakers } from '../../../App'

function CardInModal({ sneaker, modal,totalPrice, setTotalPrice }) {
	let { img, title, prevPrice, newPrice, isFavorite, isInCart, id } = sneaker

	const [isInCartState, setIsInCartState] = useState(isInCart)
	const [isFavoriteState, setIsFavoriteState] = useState(isFavorite)

	const handleBagClick = () => {
		setIsInCartState(isInCartState => !isInCartState)
		isInCart = isInCartState
		if (!isInCart) {
			cartOfSneakers.push(data.find((sneaker) => {
				sneaker.isInCart = true
				return sneaker.id === id
			}))
		} else {
			data.find(sneaker => sneaker.isInCart = false)
			cartOfSneakers.splice(cartOfSneakers.indexOf(sneaker), 1)
		}
	}

	const handleTrashClick = () => {
		setIsInCartState(isInCartState => !isInCartState)
		isInCart = isInCartState
		data.find(sneaker => sneaker.isInCart = false)
		cartOfSneakers.splice(cartOfSneakers.indexOf(sneaker), 1)
		console.log(totalPrice)
		setTotalPrice(cartOfSneakers.reduce((acc, sneaker) => {
			return acc += +sneaker.newPrice
		}, 0))
	}
	return <section className="modal_card" style={{display: ''}}>
		<img
			src={img}
			className='modal_card_img'
			alt={title}
		/>
		<div className="card_details">
			<h3 className="card_title">{title}</h3>
			<section className="card_price">
				<div className="price"></div>
				<del>{prevPrice}</del> ${newPrice}
			</section>
		</div>
		{modal === 'favorite' ? (isInCartState ?
			<BsCartCheck color='green' className='card_icon bag_icon modal_cart_icon' onClick={handleBagClick} /> :
			<BsCartPlus className='card_icon bag_icon modal_cart_icon' onClick={handleBagClick}
			/>) : <BsTrash className='modal_trash_icon' onClick={handleTrashClick} />
		}
	</section>
}
export default CardInModal
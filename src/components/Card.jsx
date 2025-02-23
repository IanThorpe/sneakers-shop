import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { BsCartPlus, BsCartCheck } from 'react-icons/bs'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import data from '../data_base/data'
import { useEffect, useState } from 'react'
// const getRandomNumber = () => Math.round(Math.random() / 2 * 10)
import { cartOfSneakers, favoriteSneakers } from '../App'

export default function Card({sneaker}) {
	let {
		img,
		title,
		stars,
		newPrice,
		prevPrice,
		isFavorite,
		isInCart,
		id } = sneaker
	const [isFavoriteState, setIsFavoriteState] = useState(isFavorite)
	const [isInCartState, setIsInCartState] = useState(isInCart)

	useEffect(() => {
		setIsInCartState(isInCart)
	}, [cartOfSneakers.find((sneaker) => sneaker.id === id)])

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

	const handleHeartClick = () => {
		setIsFavoriteState(isFavoriteState => !isFavoriteState)
		isFavorite = isFavoriteState
		if (!isFavorite) {
			favoriteSneakers.push(data.find((sneaker) => {
				sneaker.isFavorite = true
				return sneaker.id === id
			}))
		} else {
		data.find(sneaker => sneaker.isFavorite = false)
		favoriteSneakers.splice(favoriteSneakers.indexOf(sneaker), 1)
		}
	}
	const filled = Array(stars).fill(null)
	const empty = Array(5 - stars).fill(null) // создаем видимость разных отзывов

	return <section className="card">
		<img
			src={img}
			className='card_img'
			alt={title}
		/>
		<div className="card_details">
			<h3 className="card_title">{title}</h3>
			<section className="card_reviews">
				{filled.map(() => {
					return <AiFillStar className='rating_star' key={Math.random()} />
				})}
				{empty.map(() => {
					return <AiOutlineStar className='rating_star' key={Math.random()} />
				})}

				<span className="total_reviews">
					{stars}
				</span>
			</section>
			<section className="card_price">
				<div className="price"></div>
				<del>{prevPrice}</del> ${newPrice}
			</section>
			<section className="card_icons">
				{isInCartState ?
					<BsCartCheck color='green' className='card_icon bag_icon' onClick={handleBagClick} /> :
					<BsCartPlus className='card_icon bag_icon' onClick={handleBagClick} />
				}
				{isFavoriteState ?
					<FaHeart className='card_icon filled' onClick={handleHeartClick} /> :
					<FaRegHeart className='card_icon heart_icon' onClick={handleHeartClick} />
				}
			</section>
		</div>
	</section>
}


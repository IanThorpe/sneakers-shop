import { useEffect, useState } from 'react';
import './Modal.css'
import { Drawer, Button } from 'antd'
import { favoriteSneakers, cartOfSneakers } from '../../App';
import CardInModal from './CardInModal/CardInModal';
import SignInForm from './SignInForm/SignInForm';

function Modal({ modal, setModal }) {
	const [totalPrice, setTotalPrice] = useState('0')
	const onClose = () => {
		setModal(null)
	}

	useEffect(() => {
		setTotalPrice(String(totalPrice)) // костыль для обхода случаев, когда setTotalPrice возвращает значение, равное предыдущему, тем самым не обновляя его
	}, [totalPrice])

	return (<>
		<Drawer
			width={600}
			title={modal}
			onClose={onClose}
			open={modal === 'favorite' || modal === 'cart'}>
			{modal === 'favorite' && favoriteSneakers.map((sneaker) => {
				return <CardInModal
					sneaker={sneaker}
					key={sneaker.id}
					modal={modal} />
			})
			}
			{modal === 'cart' && <> {cartOfSneakers.map((sneaker) => {
				return <CardInModal
					sneaker={sneaker}
					key={sneaker.id}
					modal={modal}
					setModal={setModal}
					setTotalPrice={setTotalPrice}
					totalPrice={totalPrice} />
			})}
				<div className='modal_total'>
					<hr />
					<div className='modal_total_price'>
						{/* <div>Total price: {cartOfSneakers.reduce((acc, sneaker) => {
							return acc += +sneaker.newPrice
						}, 0)} $</div> */}
						<div>Total price: {totalPrice} $</div>
						<button className='btns modal_button'>BUY</button>
					</div>
				</div>
			</>}
		</Drawer>
		{modal === 'login' && <SignInForm modal={modal} setModal={setModal} />}
	</>
	);
}

export default Modal
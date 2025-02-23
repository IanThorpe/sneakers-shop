import './Nav.css'
import { FiHeart } from 'react-icons/fi'
import {AiOutlineShoppingCart, AiOutlineUserAdd} from 'react-icons/ai'
import { favoriteSneakers, cartOfSneakers } from '../../App';

function Navigation({handleInputChange, query, setModal}) {
	return <nav>
		<div className="nav_container">
			<input
				onChange={handleInputChange}
				className="search_input"
				placeholder='Search'
				value={query}
				type="text"
			/>
		</div>

		<div className="profile_container">
			<a href="#">
				<FiHeart onClick={()=>{
					setModal('favorite')}} className='nav_icons'/>
			</a>
			<a href="#">
				<AiOutlineShoppingCart onClick={()=>{
					setModal('cart')}} className='nav_icons'/>
			</a>
			<a href="#">
				<AiOutlineUserAdd onClick={() => setModal('login')} className='nav_icons'/>
			</a>
		</div>
	</nav>
}

export default Navigation
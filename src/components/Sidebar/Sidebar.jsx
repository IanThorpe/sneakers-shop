import './Sidebar.css'
import Category from "./Category/Category"
import Price from "./Price/Price"
import Colors from "./Colors/Colors"
import {FaReact} from 'react-icons/fa'

function Sidebar({handleChange}) {
	return <aside className='sidebar'>
		<div className="logo_container">
			<h1><FaReact /></h1>
		</div>
		<Category handleChange={handleChange} />
		<Price handleChange={handleChange} />
		<Colors handleChange={handleChange} />
	</aside>
}

export default Sidebar
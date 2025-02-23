import './Recommended.css'
import Button from '../Button'

function Recommended({ handleClick }) {
	return <div>
		<h2 className='recommended_title'>Recommended</h2>
		<div className="recommended_buttons">
			<Button title='All products'
				handleClick={handleClick}
				value=''/>
			<Button title='Nike'
				handleClick={handleClick}
				value='Nike'/>
			<Button title='Adidas'
				handleClick={handleClick}
				value='Adidas'/>
			<Button title='Vans'
				handleClick={handleClick}
				value='Vans'/>
			<Button title='Puma'
				handleClick={handleClick}
				value='Puma'/>
		</div>
	</div>

}

export default Recommended
import './Colors.css'
import Input from '../../Input'

function Colors({handleChange}) {
	return <section className='colors_container'>
		<h2 className="sidebar_title colors_title">Colors</h2>
		<label className="sidebar_label_container">
			<input
				onChange={handleChange}
				value=''
				type="radio"
				name='test3' />
			<span className="check_mark all"></span>All
		</label>
		<Input title='Black'
		handleChange={handleChange}
		value='black'
		color='black'
		type="radio"
		name='test3' />
		<Input title='White'
		handleChange={handleChange}
		value='white'
		color='white'
		type="radio"
		name='test3' />
		<Input title='Blue'
		handleChange={handleChange}
		value='blue'
		color='blue'
		type="radio"
		name='test3' />
		<Input title='Red'
		handleChange={handleChange}
		value='red'
		color='red'
		type="radio"
		name='test3' />
		<Input title='Green'
		handleChange={handleChange}
		value='green'
		color='green'
		type="radio"
		name='test3' />
	</section>
}

export default Colors
import './Category.css'
import Input from '../../Input'

function Category({ handleChange }) {
	return <section className='sidebar_container'>
		<h2 className="sidebar_title">Category</h2>

		<div>
			<label className="sidebar_label_container">
				<input
					onChange={handleChange}
					value=''
					type="radio"
					name='test' />
				<span className="check_mark"></span>All
			</label>

			{/* <Input title='All'
				onChange={handleChange}
				value=''
				type="radio"
				name='test' /> */}
			<Input title='Sneakers'
				handleChange={handleChange}
				value='sneakers'
				type="radio"
				name='test' />
			<Input title='Flats'
				handleChange={handleChange}
				value='flats'
				type="radio"
				name='test' />
			<Input title='Heels'
				handleChange={handleChange}
				value='heels'
				type="radio"
				name='test' />
			<Input title='Gumshoes'
				handleChange={handleChange}
				value='gumshoes'
				type="radio"
				name='test' />
		</div>


	</section>
}

export default Category
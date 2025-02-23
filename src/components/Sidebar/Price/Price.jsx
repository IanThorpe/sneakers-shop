import './Price.css'
import Input from '../../Input'

export default function Price({handleChange}) {
	return <section className='price_container'>
		<h2 className="sidebar_title price_title">Price</h2>
		<Input title={'All'}
			handleChange={handleChange}
			value=''
			type="radio"
			name='test2' />
		<Input title={'Below $50'}
			handleChange={handleChange}
			value={50}
			type="radio"
			name='test2' />
		<Input title={'$50 - $100'}
			handleChange={handleChange}
			value={100}
			type="radio"
			name='test2' />
		<Input title={'$100 - $150'}
			handleChange={handleChange}
			value={150}
			type="radio"
			name='test2' />
		<Input title={'Over $150'}
			handleChange={handleChange}
			value={200}
			type="radio"
			name='test2' />
	</section>
}
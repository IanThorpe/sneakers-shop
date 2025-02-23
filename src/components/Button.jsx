export default function Buttons({handleClick, value, title}) {
	return <button
	onClick={handleClick}
	value={value}
	className='btns'>{title}</button>
}
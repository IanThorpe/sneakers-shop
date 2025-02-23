export default function Input({ handleChange, value, title, name, color }) {
	return <label className="sidebar_label_container">
		<input
			onChange={handleChange}
			value={value}
			type="radio"
			name={name} />
		<span
			style={{
				backgroundColor: color,
				border: color == 'white' ? '1px solid black' : 'none'
			}}
			className="check_mark"></span>{title}
	</label>
}
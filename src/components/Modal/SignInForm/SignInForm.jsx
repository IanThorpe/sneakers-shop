import './SignInForm.css'
import { useState } from 'react';
import { Button, Modal } from 'antd';

function SignInForm({ modal, setModal }) {
	const [form, setForm] = useState(null)
	const [isModalOpen, setIsModalOpen] = useState(true);
	const handleCancel = () => {
		setIsModalOpen(false);
		setModal(null)
	};
	return (
		<>
			<Modal title="Sign in"
				open={isModalOpen}
				onCancel={handleCancel}
				okButtonProps={{ style: { display: 'none' } }}
				cancelButtonProps={{ style: { display: 'none' } }}>
				<div className="modal_buttons_container">
					<button className='btns' onClick={handleCancel}>Login</button>
					<button className='btns' onClick={handleCancel}>Register</button>
				</div>
			</Modal>
		</>
	);
};
export default SignInForm;
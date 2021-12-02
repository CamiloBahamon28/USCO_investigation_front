import React from 'react'
import { useNavigate } from 'react-router-dom'
import { NavbarDefault } from '../ui/NavbarDefault';
import { FormLogin } from './FormLogin';

export const Login = () => {

	const navigate = useNavigate();

	const handleLogin = () => {
		navigate('/profile', {
			replace: true
		})
	}

	return (
		// <div className="container">
		// 	<h1>Login</h1>
		// 	<button
		// 		className="btn btn-primary"
		// 		onClick={handleLogin}
		// 	>
		// 		Login
		// 	</button>
		// </div>
		<div className="container p-5">
			<FormLogin />
		</div>

	)
}

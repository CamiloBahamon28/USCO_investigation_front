import React, { useContext, useRef, useState } from 'react'
import axios from 'axios';

import { NavLink, useNavigate } from 'react-router-dom'

import loginImg from '../img/world.svg'
import { ModalLoginError } from './ModalLoginError';
import { types } from '../../types/types';
import { AuthContext } from '../../auth/authContext';

export const TestLogin = () => {


	// const myStorage = window.localStorage;
	const navigate = useNavigate();
	const { dispatch } = useContext(AuthContext);

	const emailRef = useRef();
	const passwordRef = useRef();

	const [error, setError] = useState(false)
	// const [currentUser, setCurrentUser] = useState(myStorage.getItem("user"));


	

	const handleLogin = (e) => {

		e.preventDefault();

		const action = {
			type: types.login,
			payload: { name: emailRef.current.value }
		}

		dispatch(action);

		navigate('/profile', {
			replace: true
		});


		// const user = {
		// 	email: emailRef.current.value,
		// 	password: passwordRef.current.value
		// };

		// console.log(user);
		// try {
		// 	const res = await axios.post("/api/auth/signin", user)
		// 	myStorage.setItem("Authorization", res.data.token)
		// 	setCurrentUser(res.data.token)
		// 	setError(false)
		// 	window.location = '/profile'
		// } catch (err) {
		// 	setError(true)
		// 	console.log(err)
		// }
	}


	return (
		<div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8">
				<div>
					{/* <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" /> */}
					<img src={loginImg} className="mx-auto h-48 w-auto" alt="login img" />
					<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
						Login
					</h2>
					{/* <p className="mt-2 text-center text-sm text-gray-600">
			  
			</p> */}
				</div>
				<form onSubmit={handleLogin} className="mt-8 space-y-6" >

					<div className="rounded-md shadow-sm -space-y-px">
						<div>
							<input type="text" required
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-primary focus:z-10 sm:text-sm" placeholder="Email address"
								ref={emailRef}
							/>
						</div>
						<div>
							<input type="password" required
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-primary focus:z-10 sm:text-sm" placeholder="Password"
								ref={passwordRef}
							/>
						</div>
						{error && (
							<ModalLoginError error={error} />
						)}
						{/* {error && (
							<span className="failure">Ohhh Lo sentimos, Algo salio mal Intentalo De nuevo</span>
						)} */}
					</div>



					<div>
						<button
							type="submit"
							className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-fourth focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							Sign in
						</button>
						<div className="col-span-full mt-7">
							<p className="flex">Aun no tienes una cuenta?  <NavLink className={({ isActive }) => 'register-link' + (isActive ? 'active' : '')} to="/register"><p className="font-bold ">  Registrate</p></NavLink></p>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}

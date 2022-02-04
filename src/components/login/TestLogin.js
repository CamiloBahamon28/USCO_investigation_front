import React, { useContext, useRef, useState } from 'react'
import axios from 'axios';

import { NavLink, useNavigate } from 'react-router-dom'

import loginImg from '../img/world.svg'
import { types } from '../../types/types';
import { AuthContext } from '../../auth/authContext';


export const TestLogin = () => {


	const myStorage = window.localStorage;
	const navigate = useNavigate();
	const { dispatch } = useContext(AuthContext);

	const numDocumentRef = useRef();
	const passwordRef = useRef();

	const [error, setError] = useState(false)


	const handleLogin = async (e) => {

		e.preventDefault();

		const user = {
			documentNumber: numDocumentRef.current["value"],
			password: passwordRef.current["value"]
		};

		
		try {
			const res = await axios.post("/api/auth/login", user)
			console.log(res.data)
			const role = res.data.role.label


				const action = {
					type: types.login,
					payload: { username: numDocumentRef.current["value"]}
				}
		
				dispatch(action);
				myStorage.setItem("Authorization", res.data.token)
				myStorage.setItem("Rol", role)
				myStorage.setItem("Id",res.data.id)

				if (role === 'Administrador'){
					navigate('/profile', {
						replace: true
					});
				}else{
					navigate('/profileUserDefault', {
						replace: true
					});
				}



		} catch (err) {
			setError(true)
			
		}
	}

	return (
		<div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8">
				<div>
					<img src={loginImg} className="mx-auto h-48 w-auto" alt="login img" />
					<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
						Login
					</h2>
				</div>
				<form onSubmit={handleLogin} className="mt-8 space-y-6" >

					<div className="rounded-md shadow-sm -space-y-px">
						<div>
							<input type="text" required
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-primary focus:z-10 sm:text-sm" placeholder="Numero De Documento"
								ref={numDocumentRef}
							/>
						</div>
						<div>
							<input type="password" required
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-primary focus:z-10 sm:text-sm" placeholder="Clave"
								ref={passwordRef}
							/>
						</div>
						
						{error && (
							<span className="text-red-500">Ohhh Lo sentimos, Algo salio mal Intentalo De nuevo</span>
						)}
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



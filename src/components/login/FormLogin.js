import React, { useRef, useState } from 'react'
import axios from 'axios';

import loginImg from '../img/world.svg'
import logoUsco from '../img/logo-usco.png'

import { useNavigate, NavLink } from 'react-router-dom'
import { Register } from '../register/Register';


export const FormLogin = () => {

	const navigate = useNavigate();

	const handleLogin = () => {
		navigate('/profile', {
			replace: true
		})
	}

	const [error, setError] = useState(false)

	const emailRef = useRef();
	const passwordRef = useRef();

	const myStorage = window.localStorage;
	const [currentUser, setCurrentUser] = useState(myStorage.getItem("user"));

	const handleSubmit = async (e) => {

		e.preventDefault();
		const user = {
			email: emailRef.current.value,
			password: passwordRef.current.value
		};

		console.log(user);
		try {
			const res = await axios.post("/api/auth/signin", user)
			myStorage.setItem("Authorization", res.data.token)
			setCurrentUser(res.data.token)
			setError(false)
			window.location = '/profile'
		} catch (err) {
			setError(true)
		}
	}

	return (
		<section id="pricing" className="container mx-auto mt-32">

			<div className="flex-col justify-center items-center">

				<header className="flex-col text-center pb-10  justify-center">
					<h2 className="text-sm tracking-wider font-bold m-0 text-primary uppercase">Bienvenido</h2>
					<p className="mt-4  text-4xl leading-10 font-bold text-secondary">Login</p>
				</header>

				<div className="flex justify-center items-center" >
					<div className="flex justify-start items-start" >
						<div className="py-10 px-5 bg-gray-50 text-center shadow-4xl rounded-3xl transition duration-300 grid grid-cols-2 gap-0 items-center  ">
							<div className="flex">
								<form onSubmit={handleSubmit} >
									<img src={logoUsco} className="max-w-full h-auto" alt="Logo Usco" />
									<link rel="shortcut icon" href="https://www.usco.edu.co/imagen-institucional/favicon.ico" type="image/x-icon" />
									<div className="">
										<div className="input-group mb-3">
											<span className="input-group-text" id="username"><i className="bi bi-person-fill "></i></span>
											<input type="text" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" ref={emailRef} />
										</div>
										<div className="input-group mb-3">
											<span className="input-group-text" id="username"><i className="bi bi-lock-fill"></i></span>
											<input type="password" className="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" ref={passwordRef} />
										</div>
										<div className="col-12">
											<button className="btn-buy text-decoration-none">Login</button>
										</div>
										{error && (
											<span className="failure">Ohhh Lo sentimos, Algo salio mal Intentalo De nuevo</span>
										)}
									</div>
								</form>
							</div>
							<div className="col-lg-6 d-sm-none d-lg-flex align-items-center ">
								<img src={loginImg} className="img-fluid" alt="login img" />
							</div>
							<div className="col-span-full mt-7">
								<p>Aun no tienes una cuenta? <NavLink className={({ isActive }) => 'register-link' + (isActive ? 'active' : '')} to="/register">Registrate</NavLink></p>
							</div>
						</div>
					</div>
				</div>

			</div>
		</section>
	)
}

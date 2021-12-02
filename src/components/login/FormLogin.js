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
		<section id="pricing" className="pricing">

			<div className="container" data-aos="fade-up">

				<header className="section-header">
					<h2>Bienvenido</h2>
					<p>Login</p>
				</header>

				<div className="row justify-content-center" data-aos="fade-left">
					<div className="col-lg-8 col-md-8 " data-aos="zoom-in" data-aos-delay="100">
						<div className="box row rounded-10">
							<div className="col-lg-6 col-md-12">
								<form onSubmit={handleSubmit}>
									<img src={logoUsco} className="img-fluid" alt="" />
									<link rel="shortcut icon" href="https://www.usco.edu.co/imagen-institucional/favicon.ico" type="image/x-icon" />
									<div class="row gy-4 p-3">
										<div class="input-group mb-3">
											<span class="input-group-text" id="username"><i class="bi bi-person-fill "></i></span>
											<input type="text" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" ref={emailRef} />
										</div>
										<div class="input-group mb-3">
											<span class="input-group-text" id="username"><i class="bi bi-lock-fill"></i></span>
											<input type="password" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" ref={passwordRef} />
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
							<div className="col-lg-6 d-sm-none d-lg-flex align-items-center">
								<img src={loginImg} className="img-fluid" alt="login img" />
							</div>
							<div className-="row">
								<p>Aun no tienes una cuenta? <NavLink className={({ isActive }) => 'register-link' + (isActive ? 'active' : '')} to="/register">Registrate</NavLink></p>
							</div>
						</div>
					</div>
				</div>

			</div>
		</section>
	)
}

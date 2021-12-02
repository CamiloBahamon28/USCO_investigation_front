import React from 'react'
import { NavLink } from 'react-router-dom'

import { Login } from '../login/Login'

import research from '../img/research.svg'

export const WelcomeHome = () => {
	return (
		<section id="hero" className="hero d-flex align-items-center">


			<div className="container">
				<div className="row">
					<div className="col-lg-6 d-flex flex-column justify-content-center">
						<h1 data-aos="fade-up">Bienvenidos</h1>
						<h2 data-aos="fade-up" data-aos-delay="400">Esta plataforma esta diseñada para investigadores</h2>
						<div data-aos="fade-up" data-aos-delay="600">
							<div className="text-center text-lg-start ">
							<NavLink className={({ isActive }) => 'btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center ' + (isActive ? 'active' : '')} to="/register">
									<span >Registrate</span>
									<i className="bi bi-arrow-right"></i>
								</NavLink>
							</div>
						</div>
					</div>
					<div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
						<img src={research} className="img-fluid" alt="Research" />
					</div>
				</div>
			</div>

		</section>
	)
}

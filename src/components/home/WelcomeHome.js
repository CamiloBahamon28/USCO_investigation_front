import React from 'react'
import { NavLink } from 'react-router-dom'
import imgBackground from '../img/hero-bg.png'


import research from '../img/research.svg'

export const WelcomeHome = () => {
	return (
		<section className="w-full h-screen bg-center bg-no-repeat bg-cover  flex items-center justify-center" style={{ backgroundImage: `url(${imgBackground})` }} >


			<div className="container flex justify-center ">
				<div className="flex ">
					<div className="flex flex-col justify-center gap-6 sm:z-10 sm:flex sm:justify-center sm:items-center sm:content-center ">
						<h1 className="m-0 text-6xl font-bold text-primary">Bienvenidos </h1>
						<h2 className="mr-4 text-2xl">Esta plataforma esta diseñada para investigadores</h2>
						<div className="flex-col">
							<div className="flex items-center">
								<NavLink className={({ isActive }) => 'mt-4 leading-none py-4 px-10 rounded-md transition duration-500 text-gray-50 bg-primary  shadow-3xl  inline-flex items-center justify-center self-center ' + (isActive ? 'active' : '')} to="/register">
									<span className="font-semibold text-base tracking-widest ">Registrate</span>	
									<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1 text-lg transition duration-300 transform hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
									</svg>
								</NavLink>
							</div>
						</div>
					</div>
					<div className="flex md:z-0 md:flex md:justify-center md:items-center sm:overflow-hidden" >
						<img src={research} className="w-full h-auto" alt="Research" />
					</div>
				</div>
			</div>

		</section>
	)
}

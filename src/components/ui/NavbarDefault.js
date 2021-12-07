import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logoUscoBlack from '../img/logo-usco-rojo.png'

export const NavbarDefault = () => {
	return (
		<header className="transition duration-500 z-50 py-5 px-0 fixed flex w-full">
			<div className="flex w-full p-2 mx-5  items-center justify-between">

				<Link className="leading-none flex items-center" to="/">
					<img src={logoUscoBlack} alt="Logo Usco" className="max-h-20 mr-2" />
				</Link>


				<nav id="navbar" className="p-0 flex justify-end">
					<ul className="m-0 p-0 flex list-none items-center">
						<li><NavLink className={({ isActive }) => 'relative bg-none uppercase text-base font-semibold text-gray-900 py-3 px-0 -mb-1 rounded-none hover:underline' + (isActive ? 'active' : '')} to="/">Home</NavLink></li>
						
						{/* <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
							<ul>
								<li ><a >Drop Down 1</a></li>
								<li className="dropdown"><a><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
									<ul>
										<li><a href="#">Deep Drop Down 1</a></li>
										<li><a href="#">Deep Drop Down 2</a></li>
										<li><a href="#">Deep Drop Down 3</a></li>
										<li><a href="#">Deep Drop Down 4</a></li>
										<li><a href="#">Deep Drop Down 5</a></li>
									</ul>
								</li>
								<li><a href="#">Drop Down 2</a></li>
								<li><a href="#">Drop Down 3</a></li>
								<li><a href="#">Drop Down 4</a></li>getstarted scrollto
							</ul>
						</li> */}
						<li><NavLink className={({ isActive }) => 'bg-primary py-2 px-5 ml-8 rounded text-gray-50 no-underline transition duration-400 hover:bg-fourth  ' + (isActive ? 'active' : '')} to="/login">Login</NavLink></li>
					</ul>
					<i className="bi bi-list mobile-nav-toggle"></i>
				</nav>

			</div>
		</header>
	)
}

import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logoUscoBlack from '../img/logo-usco-rojo.png'

export const NavbarDefault = () => {
	return (
		<header id="header" className="header fixed-top">
			<div className="container-fluid container-xl d-flex align-items-center justify-content-between">

				<Link className="logo d-flex align-items-center" to="/">
					<img src={logoUscoBlack} alt="Logo Usco" />
				</Link>


				<nav id="navbar" className="navbar">
					<ul>
						<li><NavLink className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')} to="/">Home</NavLink></li>
						
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
						<li><NavLink className={({ isActive }) => 'getstarted scrollto ' + (isActive ? 'active' : '')} to="/login">Login</NavLink></li>
					</ul>
					<i className="bi bi-list mobile-nav-toggle"></i>
				</nav>

			</div>
		</header>
	)
}

import React from 'react'


import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Home } from '../components/home/Home';
import { Login } from '../components/login/Login';
import { Register } from '../components/register/Register';
import { DashboardRoutes } from './DashboardRoutes';

import imgBackground from '../components/img/hero-bg.png'
import { NavbarTest } from '../components/ui/NavbarTest';

export const AppRouter = () => {
	return (
		<div style={{ backgroundImage: `url(${imgBackground})` }}>

			<BrowserRouter>
				<NavbarTest />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />


					<Route path="/*" element={<DashboardRoutes />} />
				</Routes>

			</BrowserRouter>
		</div>
	)
}
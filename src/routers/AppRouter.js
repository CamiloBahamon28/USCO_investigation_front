import React from 'react'


import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Home } from '../components/home/Home';
import { Login } from '../components/login/Login';
import { Register } from '../components/register/Register';
import { NavbarDefault } from '../components/ui/NavbarDefault';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
	return (
		<BrowserRouter>
				<NavbarDefault />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				

				<Route path="/*" element={ <DashboardRoutes />}/>
			</Routes>

		</BrowserRouter>
	)
}
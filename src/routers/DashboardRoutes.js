// component where is ubicate all components with navbar login

import React from 'react'

import { Route, Routes } from 'react-router'

import { Home } from '../components/home/Home'
import { Login } from '../components/login/Login';
import { Profile } from '../components/profile/Profile';
import { Register } from '../components/register/Register';
import { NavbarDefault } from '../components/ui/NavbarDefault';

export const DashboardRoutes = () => {
	return (
		<>
			<NavbarDefault />	
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/profile" element={<Profile />} />
			</Routes>
		</>
	)
}

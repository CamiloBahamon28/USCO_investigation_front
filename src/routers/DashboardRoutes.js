// component where is ubicate all components with navbar login

import React from 'react'

import { Route, Routes } from 'react-router'

import { Home } from '../components/home/Home'
import { Login } from '../components/login/Login';
import { Profile } from '../components/profile/Profile';
import { Register } from '../components/register/Register';
import { NavbarDefault } from '../components/ui/NavbarDefault';
import { NavbarTest } from '../components/ui/NavbarTest';

export const DashboardRoutes = () => {
	return (
		<>
			<NavbarTest />	
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/profile" element={<Profile />} />
			</Routes>
		</>
	)
}

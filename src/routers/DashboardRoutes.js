// component where is ubicate all components with navbar login

import React from 'react'

import { Route, Routes } from 'react-router'

import { Home } from '../components/home/Home'
import { Login } from '../components/login/Login';
import { Country } from '../components/profileAdmin/Controls/country/Country';
import { Departamentos } from '../components/profileAdmin/Controls/departamentos/Departamentos';
import { ProfileInfo } from '../components/profileAdmin/Controls/editInfo/ProfileInfo';
import { Municipality } from '../components/profileAdmin/Controls/municipality/Municipality';
import { User } from '../components/profileAdmin/Controls/user/User';
import {  ProfileRouter } from '../components/profileAdmin/ProfileRouter';
import { Register } from '../components/register/Register';
import {ProfileUserInfo} from "../components/profileUser/ProfileUserInfo";

export const DashboardRoutes = () => {
	return (
		<>
			{/* <NavbarTest />	 */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/profile" element={<ProfileRouter />} />
				<Route path="/profileUserDefault" element={<ProfileUserInfo />} />
				<Route path="/profile-users" element={<User />} />
				<Route path="/profile-country" element={<Country />} />
				<Route path="/profile-departamento" element={<Departamentos />} />
				<Route path="/profile-municipality" element={<Municipality />} />
				<Route path="/profile-edit-info/:userId" element={<ProfileInfo />} />
			</Routes>
		</>
	)
}

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
import { Register } from '../components/register/Register';
import {ProfileUserInfo} from "../components/profileUser/ProfileUserInfo";
import {AreaNoEducative} from "../components/profileAdmin/Controls/areaNoEducative/AreaNoEducative";
import {AreaNoEducativeEdit} from "../components/profileAdmin/Controls/areaNoEducative/AreaNoEducativeEdit";
import {AreaNoEducativeNew} from "../components/profileAdmin/Controls/areaNoEducative/AreaNoEducativeNew";
import {EntityNoEducative} from "../components/profileAdmin/Controls/entityNoEducative/EntityNoEducative";
import {ProfileAdminInfo} from "../components/profileAdmin/ProfileAdminInfo";
import {EntityNoEducativeEdit} from "../components/profileAdmin/Controls/entityNoEducative/EntityNoEducativeEdit";
import {EntityNoEducativeNew} from "../components/profileAdmin/Controls/entityNoEducative/EntityNoEducativeNew";

export const DashboardRoutes = () => {
	return (
		<>
			{/* <NavbarTest />	 */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/profile" element={<ProfileAdminInfo />} />
				<Route path="/profileUserDefault" element={<ProfileUserInfo />} />
				<Route path="/profile-users" element={<User />} />
				<Route path="/profile-country" element={<Country />} />
				<Route path="/profile-departamento" element={<Departamentos />} />
				<Route path="/profile-municipality" element={<Municipality />} />
				<Route path="/profile-edit-info/:userId" element={<ProfileInfo />} />
				<Route path="/profile-area-no-educative" element={<AreaNoEducative />} />
				<Route path="/are-no-educative/:areaId" element={<AreaNoEducativeEdit /> } />
				<Route path="/are-no-educative/new" element={<AreaNoEducativeNew /> } />
				<Route path="/profile-entity-no-educative" element={<EntityNoEducative />} />
				<Route path="/entity-no-educative/:entityId" element={<EntityNoEducativeEdit />} />
				<Route path="/entity-no-educative/new" element={<EntityNoEducativeNew />} />
			</Routes>
		</>
	)
}

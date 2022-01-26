import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { UsersCrud } from './Controls/user/UsersCrud'
import { ProfileAdminInfo } from './ProfileAdminInfo'
import { ProfileNavbar } from './ProfileNavbar'

export const ProfileRouter = () => {
	return (
		<div className='container p-5'>
			<ProfileNavbar />
			<ProfileAdminInfo />
		</div>


	)
}

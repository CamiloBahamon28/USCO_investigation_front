import React from 'react'

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

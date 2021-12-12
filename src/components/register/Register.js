import React from 'react'
import { NavbarDefault } from '../ui/NavbarDefault'
import { FormRegister } from './FormRegister'
import { TestRegister } from './TestRegister'

export const Register = () => {
	return (
		<div className="container p-5">
			{/* <FormRegister /> */}
			<TestRegister />
		</div>
	)
}

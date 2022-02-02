import React from 'react'

import { NavLink } from 'react-router-dom'
import '../ui/modal/modal'

export const ProfileAdminInfo = () => {

	const user = {
		photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		nombres: 'Cristian Camilo',
		apellidos: 'Bahamon Castaño',
		correoI: 'u20182171994@usco.edu.co',
		rol: 'Administrador',
		pais: 'Colombia',
		tipoDocumento: 'C.C',
		numDocumento: '1193126103'

	}


	return (
		<div className="">


			<div className="bg-white shadow overflow-hidden sm:rounded-lg mt-6">
				<div className="px-4 py-5 sm:px-6 flex justify-between">
					<h3 className="text-lg leading-6 font-medium text-gray-900">Informacion Personal</h3>
					<p className="mt-1 max-w-2xl text-sm text-gray-500"/>
					<div className="ml-4 flex-shrink-0">
						<NavLink to={`/profile-edit-info/1`} className="font-medium text-indigo-600 hover:text-indigo-500 " id="edit-btn">
							Editar Informacion
						</NavLink>
						{/* <ProfileInfo user={user}/> */}
						{/* <ModalEditProfile user={user}/> */}
					</div>

				</div>
				<div className="border-t border-gray-200">
					<dl>
						<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
							<dt className="text-sm font-medium text-gray-500">Nombres</dt>
							<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.nombres}</dd>
						</div>
						<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
							<dt className="text-sm font-medium text-gray-500">Apellidos</dt>
							<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.apellidos}</dd>
						</div>
						<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
							<dt className="text-sm font-medium text-gray-500">Corre Institucional</dt>
							<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.correoI}</dd>
						</div>
						<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
							<dt className="text-sm font-medium text-gray-500">Rol</dt>
							<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.rol}</dd>
						</div>
						<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
							<dt className="text-sm font-medium text-gray-500">Pais</dt>
							<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
								{user.pais}
							</dd>
						</div>
						<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
							<dt className="text-sm font-medium text-gray-500">Documento</dt>
							<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
								<ul role="list" className="border border-gray-200 rounded-md divide-y divide-gray-200">
									<li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
										<div className="w-0 flex-1 flex items-center">
											<img src="https://img.icons8.com/ios/20/000000/checked-identification-documents.png" alt='icon'/>
											<span className="ml-2 flex-1 w-0 truncate">Tipo: {user.tipoDocumento}</span>
										</div>
									</li>
									<li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
										<div className="w-0 flex-1 flex items-center">
											<img src="https://img.icons8.com/ios-glyphs/20/000000/touch-id.png" alt='icon'/>
											<span className="ml-2 flex-1 w-0 truncate">Numero: {user.numDocumento}</span>
										</div>


									</li>
								</ul>
							</dd>
						</div>
					</dl>
				</div>
			</div>
		</div>
	)
}

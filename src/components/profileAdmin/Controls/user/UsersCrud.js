import React, { useEffect, useState } from 'react'
import { ProfileNavbar } from '../../ProfileNavbar'
import axios from 'axios';
import { Load } from '../../../ui/Load';
import { stringify } from 'postcss';
import { NavLink } from 'react-router-dom';


// tengo que mandar el documento para hacer la consulta en el modal y ahi si en el modal pongo el arreglo con los datos de la persona
export const UsersCrud = ({ users, loading }) => {

	if (loading) {
		return (<Load />);
	}



	return (
		<div >

			<div className="flex flex-col mt-6">
				<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
						<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
							<table className="min-w-full divide-y divide-gray-200">
								<thead className="bg-gray-50">
									<tr>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Nombres
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Apellidos
										</th>

										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Pais
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Email
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Rol
										</th>
										<th
											scope="col"
											className=" py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Acciones
										</th>
									</tr>
								</thead>
								<tbody className="bg-white divide-y divide-gray-200">
									{users.map((person, i) => (
										<tr key={person.documentNumber}>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="flex items-center">

													{/* <div className="flex-shrink-0 h-10 w-10">
														<img className="h-10 w-10 rounded-full" src={person.photo} alt="" />
													</div> */}
													<div className="ml-4">
														<div className="text-sm text-gray-500">{person.firstname === null ? 'Nombre No Ingresado' : <div className="text-base font-medium text-gray-900"> {person.firstname} </div>}</div>
														<div className="text-sm text-gray-500">{person.documentNumber === null ? 'Documento No Ingresado' : <div className="text-sm font-medium text-gray-900"> {person.documentNumber} </div>} </div>
													</div>
												</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="text-sm text-gray-500">{person.lastname === null ? 'Apellidos No Ingresado' : <div className="text-base font-medium text-gray-900"> {person.lastname} </div>}</div>

												{/* <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
													{person.lastname === null ? 'Apellido No Ingresado' : person.lastname}
												</span> */}
											</td>

											<td className="px-6 py-4 whitespace-nowrap">
												<div className="text-sm text-gray-500">{JSON.stringify(person.country) === 'null' ? 'Pais no Ingresado' : <div className="text-base font-medium text-gray-900"> {person.country.name}</div>}</div>
											</td>
											<td className="text-sm text-gray-500">{person.institutionalEmail === null ? 'Correo No Ingresado' : <div className="text-base font-medium text-gray-900"> {person.institutionalEmail}</div>}</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="text-sm text-gray-900">{JSON.stringify(person.role) === 'null' ? 'Role no Encontrado' : <div className="text-base font-medium text-gray-900">{person.role.label}</div>}	</div>
											</td>
											<td className="">
												{/* <NavLink to={`/profile-edit-info/1`} className="font-medium text-indigo-600 hover:text-indigo-700 " id="edit-btn">
													Editar
												</NavLink> */}
												<NavLink
													to={`/profile-edit-info/${person.id}`}
													className="mr-3 inline-flex items-center px-3 py-2 border border-indigo-600 rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
												>
													Editar
												</NavLink>
												<button
													type='submit'
													className="inline-flex items-center px-3 py-2 border border-red-500 rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
												>
													Borrar
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

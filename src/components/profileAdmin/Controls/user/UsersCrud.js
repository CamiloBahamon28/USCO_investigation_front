import React,{ useEffect, useState } from 'react'
import { ProfileNavbar } from '../../ProfileNavbar'
import axios from 'axios';
import { Load } from '../../../ui/Load';


// tengo que mandar el documento para hacer la consulta en el modal y ahi si en el modal pongo el arreglo con los datos de la persona
export const UsersCrud = ({users , loading}) => {

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
											Num. Documento
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
									{users.map((person,i) => (
										<tr key={person.key === null ? i: person.documentNumber}>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="flex items-center">
													{/* <div className="flex-shrink-0 h-10 w-10">
														<img className="h-10 w-10 rounded-full" src={person.photo} alt="" />
													</div> */}
													<div className="ml-4">
														<div className="text-sm font-medium text-gray-900">{person.firstname === null ? 'Nombre No Ingresado'  : person.firstname }</div>
														<div className="text-sm text-gray-500">{person.firstname === null ? 'hoal'  : person.firstname }</div>
													</div>
												</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
													{person.username}
												</span>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="text-sm text-gray-900">{person.username}</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="text-sm text-gray-900">{person.username}</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.username}</td>
											<td className="">
												{/* <ModalEditProfile user={user} />  */}
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

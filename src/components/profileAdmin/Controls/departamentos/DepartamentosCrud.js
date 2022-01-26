import React from 'react';
import { Load } from '../../../ui/Load';

export const DepartamentosCrud = ({departamento , loading}) => {
	if (loading) {
		return (<Load />);
	}
	return (<div>

		<div className="flex flex-col mt-10">
			
			<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
					<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"></div>
					<table className="min-w-full divide-y divide-gray-200">
						<thead className="bg-gray-50">
							<tr>
								
								<th
									scope="col"
									className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
								>
									Nombre Departamento
								</th>
								<th
									scope="col"
									className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
								>
									Nombre Region
								</th>
								<th
									scope="col"
									className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
								>
									Codigo Departamento
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
							{departamento.map((departamento) => (
								<tr key={departamento.id}>
									
									<td className="px-6 py-4 whitespace-nowrap">
										<div className="text-sm text-gray-900">{departamento.nombreDepartamento}</div>
									</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<div className="text-sm text-gray-900">{departamento.nombreRegion}</div>
									</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<div className="text-sm text-gray-900">{departamento.codigoDepartamento}</div>
									</td>
									<td className="">

									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>);
};

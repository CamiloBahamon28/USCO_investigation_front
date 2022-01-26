import React, { useRef } from 'react';

export const SelectDepartamento = ({departamentos, setCodDepartamento}) => {

	const departamentoRef = useRef();

	const hanldeDepartamento = (e) => {
		e.preventDefault();
		const departamento = {
			departamento: departamentoRef.current.value,
		};

		setCodDepartamento(departamento.departamento);
	}


	return (<div>
		<form onChange={hanldeDepartamento}>
			<div className="col-span-6 sm:col-span-3">
				<label htmlFor="first-name" className="block text-lg font-bold text-gray-700">
					Municipios del Departamento
				</label>
				<select
					id="country"
					name="country"
					autoComplete="country-name"
					className="mt-1 block  py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					ref={departamentoRef}

				>

					{departamentos.map((departamento) => (
						<option key={departamento.codigoDepartamento} value={departamento.codigoDepartamento} >{departamento.nombreDepartamento}</option>
					))}

				</select>
			</div>
		</form>
	</div>);
};

import React, { useEffect, useRef, useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import { fetchAreaNoEducativeNew, fetchCountries, fetchDepartamentos, fetchEntityNoEducative, fetchMunicipalities } from '../../../../service/service';

export const NewAreaNoEducative = () => {

	const navigate = useNavigate();

	const nameRef = useRef();
	const entityRef = useRef();
	const countryRef = useRef();
	const departamentoRef = useRef();
	const municipalityRef = useRef();

	const [countries, setCountries] = useState([]);
	const [departamentos, setDepartamentos] = useState([])
	const [codDepartamento, setCodDepartamento] = useState(1)
	const [municipalities, setMunicipalities] = useState([])
	const [entitiesNoEducative, setEntitiesNoEducative] = useState([]);




	const handleChangeDepartamento = (e) => {
		e.preventDefault();
		const departamento = {
			departamento: departamentoRef.current.value,
		};
		setCodDepartamento(departamento.departamento);
	}


	const data = async () => {

		try {

			const [
				allCountries,
				allDepartamentos,
				allMunicipality,
				allEntitiesNo
			] = await Promise.all([
				fetchCountries(),
				fetchDepartamentos(),
				fetchMunicipalities(codDepartamento),
				fetchEntityNoEducative()
			])

			setCountries(allCountries.data)
			setDepartamentos(allDepartamentos.data)
			setMunicipalities(allMunicipality.data)
			setEntitiesNoEducative(allEntitiesNo.data)

		} catch (e) {
			console.log(e)
		}

	}

	useEffect(() => {
		data();
	}, [codDepartamento]);

	const handleNewAreaNoEducative = async(e) => {
		e.preventDefault();

		const areaNo = {
			name: nameRef.current.value,
			nonEducationalEntity_id: entityRef.current.value,
			municipio_id: municipalityRef.current.value
		};
		console.log(areaNo);
		try {
			await fetchAreaNoEducativeNew(areaNo);
			navigate('/profile-area-no-educative', {
				replace: true
			});
		} catch (e) {
			console.log(e);
		}


	}


	return (
		<div>
			<div className='container mx-auto '>
				<div className="bg-white shadow overflow-hidden sm:rounded-lg mt-6">
					<div className="px-4 py-5 sm:px-6 flex justify-between">
						<h3 className="text-lg leading-6 font-medium text-gray-900">
							Crear Area No Educativo
						</h3>
						<p className="mt-1 max-w-2xl text-sm text-gray-500" />
						<div className="ml-4 flex-shrink-0">
						</div>
					</div>
					<div className="border-t border-gray-200">
						<dl>
							<form onSubmit={handleNewAreaNoEducative}>
								<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
									<dt className="text-sm font-medium text-gray-500">Nombre Area No Educativa</dt>
									<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
										<input type="text" required
											className="appearance-none  border-t-0 border-r-0 border-l-0 border-b-2 relative block w-full  py-2 border bg-transparent placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-primary focus:z-10 sm:text-sm"
											placeholder="Nombre Ente Educativo"
											ref={nameRef}
										// value={infoUser.firstname}
										// onChange={handleChange}
										/>
									</dd>
								</div>
								<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
									<dt className="text-sm font-medium text-gray-500">Entidad No Educativa</dt>
									<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
									<select
											id="country"
											name="country"
											autoComplete="country-name"
											className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-transparent rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
											ref={entityRef}
										>
											<option key='0' selected hidden>Seleccione...</option>
											{entitiesNoEducative.map((entityNo) => (
												<option key={entityNo.id} value={entityNo.id}>{entityNo.name}</option>
											))}

										</select>
									</dd>
								</div>	
								<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
									<dt className="text-sm font-medium text-gray-500">Pais</dt>
									<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
										<select
											id="country"
											name="country"
											autoComplete="country-name"
											className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-transparent rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
											ref={countryRef}
										>
											<option key='0' selected hidden>Seleccione...</option>
											{countries.map((country) => (
												<option key={country.id} value={country.id}>{country.name}</option>
											))}

										</select>
									</dd>
								</div>
								<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
									<dt className="text-sm font-medium text-gray-500">Departamento</dt>
									<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
										
											<select
												id="country"
												name="country"
												autoComplete="country-name"
												className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-transparent rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
												ref={departamentoRef}
												onChange={handleChangeDepartamento}
											>
												{departamentos.map((departamento) => (
													<option key={departamento.id} value={departamento.id}>{departamento.name}</option>
												))}
											</select>
									</dd>
								</div>
								<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
									<dt className="text-sm font-medium text-gray-500">Ciudad</dt>
									<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
										<select
											className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-transparent rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
											ref={municipalityRef}
										>
											{municipalities.map((municipality) => (
												<option key={municipality.id} value={municipality.id}>{municipality.name}</option>
											))}

										</select>
									</dd>
								</div>
								<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
									<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
										<button type='submit'
											className="mr-3 inline-flex items-center px-3 py-2 border border-indigo-600 rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
											Enviar
										</button>
									</dd>
								</div>
							</form>
						</dl>
					</div>
				</div>
			</div>
		</div>
	)
}

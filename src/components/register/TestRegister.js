import React, { useRef, useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {fetchCountries, fetchTypesDocuments} from "../../service/service";

export const TestRegister = () => {


	const navigate = useNavigate();

	const namesRef = useRef();
	const lastNameRef = useRef();
	const tipeDocumentRef = useRef();
	const numCedulaRef = useRef();
	const emailInstitucionalRef = useRef();
	const countryRef = useRef();
	const passwordRef = useRef();

	const [error, setError] = useState(false)
	const [countries, setCountries] = useState([]);
	const [typeDocument, setTypeDocument] = useState([]);

	let allCountries = []
	let allTypeDocuments = []

	const data = async () =>{
		try {
			allCountries = await fetchCountries();
			setCountries(allCountries.data)

			allTypeDocuments = await  fetchTypesDocuments();
			setTypeDocument(allTypeDocuments.data)
		}catch (e) {
			console.log(e)
		}
	}

	useEffect(() => {
		data();
	}, []);


	const handleSubmit = async(e) => {
		e.preventDefault();
		const user = {
			firstname: namesRef.current.value,
			lastname: lastNameRef.current.value,
			documentType_id:  tipeDocumentRef.current.value,
			documentNumber: numCedulaRef.current.value,
			institutionalEmail: emailInstitucionalRef.current.value,
			country_id: countryRef.current.value,
			password: passwordRef.current.value
		};

		 try {
		 	 await axios.post("/api/auth/register", user)
				navigate('/login', {
		 			replace: true
		 		});
		 } catch (err) {
		 	setError(true)
		 }
	}

	return (
		<div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
			<div className="w-full space-y-8">
				<div>
					<img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
					<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
						Registro
					</h2>
					{/* <p className="mt-2 text-center text-sm text-gray-600">
			  
			</p> */}
				</div>
				<div className="mt-10 sm:mt-0">
					<div className="md:grid md:grid-cols-3 md:gap-6">
						<div className="md:col-span-1 ">
							<div className="px-4 sm:px-0 ">
								<h3 className="text-lg font-medium leading-6 text-gray-900">Informacion Personal</h3>
								<p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
							</div>
						</div>

						<div className="mt-5 md:mt-0 md:col-span-2">
							<form onSubmit={handleSubmit}>
								<div className="shadow overflow-hidden sm:rounded-md">
									<div className="px-4 py-5 bg-white sm:p-6">
										<div className="grid grid-cols-6 gap-6">
											<div className="col-span-6 sm:col-span-3">
												<label htmlFor="first-name" className="block text-lg font-bold text-gray-700">
													Nombres
												</label>
												<input type="text" required
													className="appearance-none  border-t-0 border-r-0 border-l-0 border-b-2 relative block w-full  py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-primary focus:z-10 sm:text-sm"
													placeholder="Nombres"
													ref={namesRef}
												/>
											</div>

											<div className="col-span-6 sm:col-span-3">
												<label htmlFor="first-name" className="block text-lg font-bold text-gray-700">
													Apellidos
												</label>
												<input type="text" required
													className="appearance-none  border-t-0 border-r-0 border-l-0 border-b-2 relative block w-full  py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-primary focus:z-10 sm:text-sm"
													placeholder="Apellidos"
													ref={lastNameRef}
												/>
											</div>

											<div className="col-span-6 sm:col-span-3">
												<label htmlFor="first-name" className="block text-lg font-bold text-gray-700">
													Tipo de Documento
												</label>
												<select
													id="country"
													name="country"
													autoComplete="country-name"
													className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
													ref={tipeDocumentRef}
												>
													{typeDocument.map((typeDocument) => (
														<option key={typeDocument.id} value={typeDocument.id}>{typeDocument.name}</option>
													))}
												</select>
											</div>

											<div className="col-span-6 sm:col-span-3">
												<label htmlFor="first-name" className="block text-lg font-bold text-gray-700">
													Numero de Documento
												</label>
												<input type="number" required min="1"
													className="appearance-none  border-t-0 border-r-0 border-l-0 border-b-2 relative block w-full  py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-primary focus:z-10 sm:text-sm"
													placeholder="Numero de Documento"
													ref={numCedulaRef}
												/>
												{/* <input className="appearance-none  border-t-0 border-r-0 border-l-0 border-b-2 relative block w-full  py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-primary focus:z-10 sm:text-sm"
													
												type="text" name="tel" value="" maxlength="9" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;" ref={numCedulaRef}/>  
											 */}
											</div>

											<div className="col-span-6 sm:col-span-3">
												<label htmlFor="first-name" className="block text-lg font-bold text-gray-700">
													Correo Institucional
												</label>
												<input type="email" required
													className="appearance-none  border-t-0 border-r-0 border-l-0 border-b-2 relative block w-full  py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-primary focus:z-10 sm:text-sm"
													placeholder="Correo Institucional"
													ref={emailInstitucionalRef}
												/>
											</div>

											<div className="col-span-6 sm:col-span-3">
												<label htmlFor="first-name" className="block text-lg font-bold text-gray-700">
													Pais
												</label>
												<select
													id="country"
													name="country"
													autoComplete="country-name"
													className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
													ref={countryRef}
												>

													{countries.map((country) => (
														<option key={country.id} value={country.id}>{country.name}</option>
													))}
													
												</select>
											</div>

											<div className="col-span-6 sm:col-span-6 justify-center items-center">
												<label htmlFor="first-name" className="block text-lg font-bold text-gray-700">
													Contraseña
												</label>
												<input type="password" required
													className="appearance-none  border-t-0 border-r-0 border-l-0 border-b-2 relative block w-full  py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-primary focus:z-10 sm:text-sm"
													placeholder="Ingresa tu Contraseña"
													ref={passwordRef}
												/>
											</div>


										</div>
									</div>
									<div className="px-4 py-3 bg-white text-right sm:px-6">
										<button
											type="submit"
											className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-fourth focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
										>
											Registrarse
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

import React, { useRef } from 'react';
import './modal.js'


export const ModalEditProfile = ({ user }) => {

	const namesRef = useRef();
	const lastNameRef = useRef();
	const tipeDocumentRef = useRef();
	const numCedulaRef = useRef();
	const emailInstitucionalRef = useRef();
	const countryRef = useRef();

	console.log(user);

	const hanldeEditProfile = (e)=>{
		e.preventDefault();


		const dataEdit = {
			names: namesRef.current.value,
			lastName: lastNameRef.current.value,
			tipeDocument: tipeDocumentRef.current.value,
			numCedula: numCedulaRef.current.value,
			emailInstitucional: emailInstitucionalRef.current.value,
			country: countryRef.current.value,
		};

		console.log(dataEdit)
	}


	return (
		<>

			<button className="font-medium text-indigo-600 hover:text-indigo-500 " id="edit-btn">
				Editar
			</button>

			<div class="bg-black bg-opacity-50 h-full absolute inset-0 hidden justify-center items-center" id="overlay">

				<div className="flex justify-center h-screen items-center antialiased w-7/12">
					<div className="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl">
						<div
							className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg"
						>
							<p className="font-semibold text-gray-800">Add a step</p>
							<svg
								className="w-6 h-6 cursor-pointer"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								id="close-modal"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M6 18L18 6M6 6l12 12"
								></path>
							</svg>
						</div>

						<form onSubmit={hanldeEditProfile}  className="flex flex-col px-6 py-5 bg-gray-50">

							<div className="flex  items-center justify-center mb-3">
								<img
									className="w-20 h-20 mr-3 rounded-full"
									src={user.photo}
									alt=""
								/>
							</div>

							<div className="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
								<div className="w-full sm:w-1/2">
									<p className="mb-2 font-semibold text-gray-700">Nombres</p>
									<input type="text" required
										className="appearance-none  border-t-0 border-r-0 border-l-0 border-b-2 relative block w-full bg-transparent py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-primary focus:z-10 sm:text-sm"
										placeholder="Nombres"
										value={user.nombres}
										ref={namesRef}
									/>
								</div>
								<div className="w-full sm:w-1/2 mt-2 sm:mt-0">
									<p className="mb-2 font-semibold text-gray-700">Apellidos</p>
									<input type="text" required
										className="appearance-none  border-t-0 border-r-0 border-l-0 border-b-2 relative block w-full bg-transparent py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-primary focus:z-10 sm:text-sm"
										placeholder="Apellidos"
										value={user.apellidos}
										ref={lastNameRef}
									/>
								</div>
							</div>
							<hr />

							<div className="w-full mt-3">
								<p className="mb-2 font-semibold text-gray-700">Correo Institucional</p>
								<input type="text" required
									className="appearance-none  border-t-0 border-r-0 border-l-0 border-b-2 relative block w-full bg-transparent py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-primary focus:z-10 sm:text-sm"
									placeholder="Apellidos"
									ref={emailInstitucionalRef}
									value={user.correoI}
								/>
							</div>
							<div className="w-full mt-3">
								<p className="mb-2 font-semibold text-gray-700">Pais</p>
								<select
									id="country"
									name="country"
									autoComplete="country-name"
									className="mt-1 block w-full py-2 px-3 border border-none bg-transparent rounded-md shadow-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
									ref={countryRef}
								>
									<option value={user.pais}>{user.pais}</option>
									<option value="United States">United States</option>
									<option value="Venezuela">Venezuela</option>
									<option value="Mexico">Mexico</option>
								</select>
							</div>

							<div className="flex flex-col sm:flex-row items-center mt-5 mb-5 sm:space-x-5">
								<div className="w-full sm:w-1/2">
									<p className="mb-2 font-semibold text-gray-700">Tipo Documento</p>
									<select
										id="country"
										name="country"
										autoComplete="country-name"
										className="mt-1 block w-full py-2 px-3 border border-none bg-transparent rounded-md shadow-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
										ref={tipeDocumentRef}
									>
										<option value={user.tipoDocumento}>{user.tipoDocumento}</option>
										<option value="pasaporte" >Pasaporte</option>
									</select>
								</div>
								<div className="w-full sm:w-1/2 mt-2 sm:mt-0">
									<p className="mb-2 font-semibold text-gray-700">Numero Documento</p>
									<input type="text" required
										className=" appearance-none  border-t-0 border-r-0 border-l-0 border-b-2 relative block w-full bg-transparent py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-primary focus:z-10 sm:text-sm"
										placeholder="Apellidos"
										ref={numCedulaRef}
										value={user.numDocumento}
									/>
								</div>
							</div>





							{/* <input
									className="inline-flex"
									type="checkbox"
									id="check2"
									name="check2"
									
								/>
								<label className="inline-flex font-semibold text-blue-500" for="check2">
									Add a specific agent</label
								><br /> */}



							<div className="flex flex-row items-center justify-end p-2 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg">
								<button className="px-4 py-2 text-white font-semibold bg-primary hover:bg-fourth rounded">
									Save
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

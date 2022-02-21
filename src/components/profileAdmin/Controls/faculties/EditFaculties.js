import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { fetchCountries, fetchDepartamentos, fetchEntityEducative,  fetchFacultyEdit, fetchFacultyOne, fetchMunicipalities } from '../../../../service/service';

export const EditFaculties = () => {

	const { facultyId } = useParams();


	const navigate = useNavigate();

	const nameRef = useRef();
	const entityRef = useRef();
	const departamentoRef = useRef();
	const municipalityRef = useRef();

	const [faculty, setFaculty] = useState({
		id: '',
		name: '',
		city: "Neiva",
		educationalEntity: {
			id: '',
			name: ''
		},
		municipio: {
			id: '',
			name: '',
			code: '',
			// departamento_id: ''
		}
	})
	const [countries, setCountries] = useState([]);
	const [departamentos, setDepartamentos] = useState([])
	const [codDepartamento, setCodDepartamento] = useState()
	const [municipalities, setMunicipalities] = useState([])
	const [entitiesEducative, setEntitiesEducative] = useState([]);


	let getAllFaculty = []

	const getEntity = async () => {
		try {
			getAllFaculty = await fetchFacultyOne(facultyId);
			setFaculty(getAllFaculty.data)
			setCodDepartamento(getAllFaculty.data.municipio.departamento_id)
		} catch (e) {
			console.log(e);
		}
	}

	const data = async () => {

		try {

			const [
				allCountries,
				allDepartamentos,
				allMunicipality,
				allEntities
			] = await Promise.all([
				fetchCountries(),
				fetchDepartamentos(),
				fetchMunicipalities(codDepartamento),
				fetchEntityEducative()
			])

			setCountries(allCountries.data)
			setDepartamentos(allDepartamentos.data)
			setMunicipalities(allMunicipality.data)
			setEntitiesEducative(allEntities.data)


		} catch (e) {
			console.log(e)
		}

	}

	useEffect(() => {
		getEntity();
		data();
	}, [codDepartamento]);

	useEffect(() => {
		getEntity();
	}, [])



	const handleChangeDepartamento = (e) => {
		e.preventDefault();
		const departamento = {
			departamento: departamentoRef.current.value,
		};
		setCodDepartamento(departamento.departamento);
	}

	const handleChange = (e) => {

		const name = e.target.name;
		// console.log(e);
		const newData = {};

		if (name.endsWith('_id')) newData[name.split('_')[0]] = { id: e.target.value }

		newData[name] = e.target.value

		setFaculty({
			...faculty,
			...newData
		})

		// console.log(faculty);
	}


	const handleEditEntityNoEducative = async (e) => {
		e.preventDefault();
		console.log('entrando en enviar');

		const facultyData = {
			name: nameRef.current.value,
			educationalEntity_id: entityRef.current.value,
			municipio_id: municipalityRef.current.value,
			city: "Neiva"
		};
		console.log(facultyData);
		try {
			await fetchFacultyEdit(faculty.id, facultyData);
			navigate('/profile-faculty', {
				replace: true
			});
		} catch (e) {
			console.log(e);
		}


	}

	// console.log(faculty);

	return (
		<div className='mb-10'>
			<div className='container mx-auto '>
				<div className="bg-white shadow overflow-hidden sm:rounded-lg mt-6 ">
					<div className="px-4 py-5 sm:px-6 flex justify-between">
						<h3 className="text-lg leading-6 font-medium text-gray-900">
							Editar Facultad
						</h3>
						<p className="mt-1 max-w-2xl text-sm text-gray-500" />
						<div className="ml-4 flex-shrink-0">
						</div>
					</div>
					<div className="border-t border-gray-200 ">
						<dl>
							<form onSubmit={handleEditEntityNoEducative} >
								<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
									<dt className="text-sm font-medium text-gray-500">Nombre Facultad</dt>
									<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
										<input type="text" required
											className="appearance-none  border-t-0 border-r-0 border-l-0 border-b-2 relative block w-full  py-2 border bg-transparent placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-primary focus:z-10 sm:text-sm"
											placeholder="Nombre Ente Educativo"
											ref={nameRef}
											name="name"
											value={faculty.name}
											onChange={handleChange}
										/>
									</dd>
								</div>
								<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
									<dt className="text-sm font-medium text-gray-500">Entidad Educativa</dt>
									<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
										<select
											name="educationalEntity_id"
											// autoComplete="country-name"
											className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-transparent rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
											ref={entityRef}
											value={faculty.educationalEntity.id}
											onChange={handleChange}
										>
											{entitiesEducative.map((entity) => (
												<option key={entity.id} value={entity.id}>{entity.name}</option>
											))}

										</select>
									</dd>
								</div>

								<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
									<dt className="text-sm font-medium text-gray-500">Departamento</dt>
									<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">

										<select
											// id="country"
											name="departamento_id"
											// autoComplete="country-name"
											className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-transparent rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
											ref={departamentoRef}
											value={faculty.municipio.departamento_id}
											onChange={handleChangeDepartamento}
										>
											{departamentos.map((departamento) => (
												<option key={departamento.id} value={departamento.id}>{departamento.name}</option>
											))}
										</select>
									</dd>
								</div>
								<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
									<dt className="text-sm font-medium text-gray-500">Ciudad</dt>
									<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
										<select
											className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-transparent rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
											name='municipio_id'
											ref={municipalityRef}
											value={faculty.municipio.id}
											onChange={handleChange}
										>
											{municipalities.map((municipality) => (
												<option key={municipality.id} value={municipality.id}>{municipality.name}</option>
											))}

										</select>
									</dd>
								</div>
								<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
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

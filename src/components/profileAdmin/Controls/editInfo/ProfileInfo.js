import React, {useEffect, useRef, useState} from 'react';

import {useNavigate, useParams} from 'react-router-dom';
import {Load} from "../../../ui/Load";
import {
    fetchCivilStatus,
    fetchCountries,
    fetchEthnicGroup,
    fetchGender,
    fetchOneUser, fetchTypesDocuments, fetchUpdateDataUser
} from "../../../../service/service";


export const ProfileInfo = () => {

    const myStorage = window.localStorage
    const roleUser = myStorage.getItem("Rol")
    {/*{roleUser == 'Administrador'}*/}
    const nameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const institutionalEmailRef = useRef();
    const roleRef = useRef();
    const countryRef = useRef();
    const documentTypeRef = useRef();
    const documentNumberRef = useRef();
    const genderRef = useRef();
    const ethnicRef = useRef();
    const civilStatusRef = useRef();

    const navigate = useNavigate();


    const {userId} = useParams();
    const [infoUser, setInfoUser] = useState(
        {
            firstname: '',
            lastname: '',
            email: '',
            institutionalEmail: '',
            role: {id: '', label: ''},
            country: '',
            documentType: {id: '', name: ''},
            documentNumber: '',
            gender: {id: '', name: ''},
            ethnicGroup: {id: '', name: ''},
            civilStatus: {id: '', name: ''},
        }
    );
    const [loading, setLoading] = useState(false);
    const [countries, setCountries] = useState([]);
    const [typeDocument, setTypeDocument] = useState([]);
    const [gender, setGender] = useState([]);
    const [ethnic, setEthnic] = useState([]);
    const [civilStatus, setCivilStatus] = useState([]);

    let oneUser = []
    let allCountries = []
    let allTypeDocuments = []
    let allGender = []
    let allEthnic = []
    let allCivilStatus = []
    let updateUser = []

    const data = async () => {
        setLoading(true)
        try {

            oneUser = await fetchOneUser(userId);
            setInfoUser(oneUser.data);

            allCountries = await fetchCountries();
            setCountries(allCountries.data)

            allTypeDocuments = await fetchTypesDocuments();
            setTypeDocument(allTypeDocuments.data)

            allGender = await fetchGender();
            setGender(allGender.data)

            allEthnic = await fetchEthnicGroup();
            setEthnic(allEthnic.data)

            allCivilStatus = await fetchCivilStatus();
            setCivilStatus(allCivilStatus.data)

            setLoading(false)
        } catch (err) {
            console.log(err);
        }
    }


    useEffect(() => {
        try {
            data()
        }catch (e) {
            console.log(e)
        }

    }, []);

    if (loading) {
        return (<Load/>);
    }

    const handleChange = (e) => {

        const name = e.target.name;

        const newData = {};

        if (name.endsWith('_id')) newData[name.split('_')[0]] = {id: e.target.value}

        newData[name] = e.target.value

        setInfoUser({
            ...infoUser,
            ...newData
        })
    }

    const handleUpdateUser = async (e) => {
        e.preventDefault();
        updateUser = await fetchUpdateDataUser(userId,infoUser)
        if (roleUser === 'Administrador'){
            navigate('/profile-users', {
                replace: true
            });
        }else{
            navigate('/profileUserDefault', {
                replace: true
            });
        }


    }


    return (
        <div className='container mx-auto'>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-6">
                <div className="px-4 py-5 sm:px-6 flex justify-between">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Editar Informacion Personal</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500"/>
                    <div className="ml-4 flex-shrink-0">

                        {/* <ModalEditProfile user={user}/> */}
                    </div>

                </div>
                <div className="border-t border-gray-200">
                    <dl>
                        <form onSubmit={handleUpdateUser}>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Nombres</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <input type="text" required
                                           className="appearance-none  border-t-0 border-r-0 border-l-0 border-b-2 relative block w-full  py-2 border bg-transparent placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-primary focus:z-10 sm:text-sm"
                                           placeholder="Nombre no Ingresado"
                                           ref={nameRef}
                                           name="firstname"
                                           value={infoUser.firstname}
                                           onChange={handleChange}
                                    />
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Apellidos</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <input type="text" required
                                           className="appearance-none  border-t-0 border-r-0 border-l-0 border-b-2 relative block w-full  py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-primary focus:z-10 sm:text-sm"
                                           placeholder="Apellidos no Ingresados"
                                           ref={lastNameRef}
                                           name="lastname"
                                           value={infoUser.lastname}
                                           onChange={handleChange}
                                    />
                                </dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Correo</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <input type="email"
                                           className="appearance-none bg-transparent border-t-0 border-r-0 border-l-0 border-b-2 relative block w-full  py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-primary focus:z-10 sm:text-sm"
                                           placeholder="Correo no Ingresados"
                                           ref={emailRef}
                                           name={"email"}
                                           value={infoUser.email ? infoUser.email : infoUser.email}
                                           onChange={handleChange}
                                    />
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Correo Institucional</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <input type="email" required
                                           className="appearance-none bg-transparent border-t-0 border-r-0 border-l-0 border-b-2 relative block w-full  py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-primary focus:z-10 sm:text-sm"
                                           placeholder="Correo no Ingresados"
                                           ref={institutionalEmailRef}
                                           name="institutionalEmail"
                                           value={infoUser.institutionalEmail ? infoUser.institutionalEmail : infoUser.institutionalEmail}
                                           onChange={handleChange}
                                    />
                                </dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Rol</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <input type="text" required disabled
                                           className="appearance-none bg-transparent border-t-0 border-r-0 border-l-0 border-b-2 relative block w-full  py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-primary focus:z-10 sm:text-sm"
                                           placeholder="Rol no Ingresados"
                                           ref={roleRef}
                                           name="role_id"
                                           value={infoUser.role.label}
                                           onChange={handleChange}
                                    />
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Pais</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <select
                                        id="country"
                                        autoComplete="country-name"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        ref={countryRef}
                                        name="country_id"
                                        value={infoUser.country?.id || ''}
                                        onChange={handleChange}
                                    >
                                        {countries.map((country) => (
                                            <option key={country.id} value={country.id}>{country.name}</option>
                                        ))}
                                    </select>
                                </dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Documento de Identidad</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
                                    <ul role="list"
                                        className="border border-gray-200 rounded-md divide-y divide-gray-200">
                                        <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                            <div className="w-0 flex-1 flex items-center">
                                                <img
                                                    src="https://img.icons8.com/ios/20/000000/checked-identification-documents.png"
                                                    alt='icono'/>
                                                <span className="ml-2 flex-1 w-0 truncate">
                                                 <select
                                                     id="documentType"
                                                     autoComplete="country-name"
                                                     className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                     ref={documentTypeRef}
                                                     name="documentType_id"
                                                     value={infoUser.documentType.id}
                                                     onChange={handleChange}
                                                 >
                                                    {typeDocument.map((typeDocument) => (
                                                        <option key={typeDocument.id}
                                                                value={typeDocument.id}>{typeDocument.name}</option>
                                                    ))}
                                                 </select>

                                            </span>
                                            </div>
                                        </li>
                                        <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                            <div className="w-0 flex-1 flex items-center">
                                                <img src="https://img.icons8.com/ios-glyphs/20/000000/touch-id.png"
                                                     alt='icono'/>
                                                <span
                                                    className="ml-2 flex-1 w-0 truncate">
                                            <input type="text" required
                                                   className="appearance-none bg-transparent border-t-0 border-r-0 border-l-0 border-b-2 relative block w-full  py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-primary focus:z-10 sm:text-sm"
                                                   placeholder="Rol no Ingresados"
                                                   ref={documentNumberRef}
                                                   name="documentNumber"
                                                   value={infoUser.documentNumber}
                                                   onChange={handleChange}
                                            />
                                            </span>
                                            </div>


                                        </li>
                                    </ul>
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Genero</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <select
                                        id={infoUser.gender?.name || ''}
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        ref={genderRef}
                                        name="gender_id"
                                        value={infoUser.gender?.id || ''}
                                        onChange={handleChange}
                                    >
                                        <option key='0' selected hidden>Seleccione...</option>
                                        {gender.map((gender) => (
                                            <option key={gender.id} value={gender.id}>{gender.name}</option>
                                        ))}
                                    </select>
                                </dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Grupo Etnico</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <select
                                        id="ethnicGroup"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        ref={ethnicRef}
                                        name="ethnicGroup_id"
                                        value={infoUser.ethnicGroup?.id || ''}
                                        onChange={handleChange}
                                    >
                                        <option key='0' selected hidden>Seleccione...</option>
                                        {ethnic.map((ethnic) => (
                                            <option key={ethnic.id} value={ethnic.id}>{ethnic.name}</option>
                                        ))}
                                    </select>
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Estado Civil</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <select
                                        id="civilStatus"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        ref={civilStatusRef}
                                        name="civilStatus_id"
                                        value={infoUser.civilStatus?.id || ''}
                                        onChange={handleChange}
                                    >
                                        <option key='0' selected hidden>Seleccione...</option>
                                        {civilStatus.map((civilStatus) => (
                                            <option key={civilStatus.id}
                                                    value={civilStatus.id}>{civilStatus.name}</option>
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
        </div>);
};

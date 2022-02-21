import React from 'react';
import { NavLink } from "react-router-dom";
import { Load } from "./Load";

export const DataUser = ({ dataUser, loading }) => {

    if (loading) {
        return (<Load />);
    }

    return (
        <div className=''>
            <div className="mx-2 md:mx-16 ">
                {/*<h2 className="px-6 py-3 text-center text-2xl font-medium text-gray-500 uppercase tracking-wider">{dataUser.role?.label || ''}</h2>*/}
                <div className="bg-white shadow overflow-hidden sm:rounded-lg ">
                    <div className="px-4 py-5 sm:px-6 flex justify-between">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Informacion Personal</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500" />
                        <div className="ml-4 flex-shrink-0">
                            <NavLink to={`/profile-edit-info/${dataUser.id}`} className="font-medium text-indigo-600 hover:text-indigo-500 " id="edit-btn">
                                Editar Informacion
                            </NavLink>
                        </div>

                    </div>
                    <div className="border-t border-gray-200">
                        <dl>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Nombres</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{dataUser.firstname}</dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Apellidos</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{dataUser.lastname}</dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Correo</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{dataUser.email}</dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Corre Institucional</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{dataUser.institutionalEmail}</dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Rol</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{dataUser.role?.label || ''}</dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Pais</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {dataUser.country?.name || ''}
                                </dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Documento de Identidad</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <ul role="list" className="border border-gray-200 rounded-md divide-y divide-gray-200">
                                        <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                            <div className="w-0 flex-1 flex items-center">
                                                <img src="https://img.icons8.com/ios/20/000000/checked-identification-documents.png" alt='icon' />
                                                <span className="ml-2 flex-1 w-0 truncate">Tipo: {dataUser.documentType?.name || ''}</span>
                                            </div>
                                        </li>
                                        <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                            <div className="w-0 flex-1 flex items-center">
                                                <img src="https://img.icons8.com/ios-glyphs/20/000000/touch-id.png" alt='icon' />
                                                <span className="ml-2 flex-1 w-0 truncate">Numero: {dataUser.documentNumber}</span>
                                            </div>
                                        </li>
                                    </ul>
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Genero</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {dataUser.gender?.name || ''}
                                </dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Grupo Etnico</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {dataUser.ethnicGroup?.name || ''}
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Estado Civil</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {dataUser.civilStatus?.name || ''}
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
};



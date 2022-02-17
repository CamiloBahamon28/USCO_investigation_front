import React from 'react';
import {NavLink} from "react-router-dom";
import { Load } from '../../../ui/Load';
import NotificationDelete from '../../../ui/modal/NotificationDelete';

export const CrudEntityEducative = ({allEntityEducative, loading, deleteEntityEducative, deleteFrom, handleDeleteEntityEducative}) => {

    if (loading) {
        return (<Load/>);
    }


    return (
        <div className=''>
           <NotificationDelete actionDelete={deleteEntityEducative} deleteFrom={deleteFrom}/>
             <div className="flex flex-col">
                <div className="flex justify-end">
                    <NavLink to={`/profile-entity-educative/new`}
                             className="font-medium text-indigo-600 hover:text-indigo-500 p-3"
                             id="edit-btn">
                        Crear Ente Educativo
                    </NavLink>
                </div>
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 flex ">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50 divide-y divide-gray-200 ">
                                <tr>
                                    <th
                                        colSpan={8}
                                        className="px-6 py-3 text-center
                                         text-2xl font-medium text-gray-500 uppercase tracking-wider ">
                                        Entes Educativos
                                    </th>
                                </tr>
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Nombre
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        NIT
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Año Creacion
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Compañia
                                    </th>

                                    <th
                                        scope="col"
                                        className=" py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Pais
                                    </th>
                                    <th
                                        scope="col"
                                        className=" py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Ciudad
                                    </th>
                                   
                                    <th
                                        scope="col"
                                        className=" py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Acciones
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                               {allEntityEducative.map((entity) => (
                                    <tr key={entity.id} className="text-center">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900 ">{entity.name}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{entity.nit}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{entity.foundationYear}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap ">
                                            <div className="text-sm text-gray-900">{entity.company || 'Sin compañia'}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{entity.country?.name}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{entity.municipio?.name}</div>
                                        </td>
                                        <td className="">
                                            <NavLink
                                                to={`/profile-entity-educative/edit/${entity.id}`}
                                                className="mr-3 inline-flex items-center px-3 py-2 border border-indigo-600 rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            >
                                                Editar
                                            </NavLink>
                                            <button
                                                type='submit'
                                                className="inline-flex items-center px-3 py-2 border border-red-500 rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                onClick={() => handleDeleteEntityEducative(entity.id)}
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
    );
};


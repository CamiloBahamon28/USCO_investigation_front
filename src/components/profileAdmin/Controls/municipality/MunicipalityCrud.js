import React from 'react';
import {Load} from '../../../ui/Load';

export const MunicipalityCrud = ({municipality, loading}) => {


    if (loading) {
        return (<Load/>);
    }


    return (<div>
        <div className="flex flex-col">

            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50 divide-y divide-gray-200">
                            <tr>
                                <th
                                    colSpan={3}
                                    className="px-6 py-3 text-center
                                         text-2xl font-medium text-gray-500 uppercase tracking-wider ">
                                    Municipios
                                </th>
                            </tr>
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Nombre Municipio
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Codigo Municipio
                                </th>
                                
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            {municipality.map((municipality) => (
                                <tr key={municipality.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{municipality.name}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{municipality.code}</div>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>);
};

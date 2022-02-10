import React from 'react';

const NotificationDelete = ({deletePerson,  deleteFrom }) => {

    return (
        <div>
            <div className={`flex fixed w-screen h-screen z-50 top-0 left-0 bg-black bg-opacity-20 transition-all ease-in-out
            ${deletePerson ? "opacity-1 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                <div className="m-auto">
                    <div className={`bg-white rounded-lg border-gray 300 border p-3 shadow-lg transition-all ease-in-out transform
                    ${deletePerson ? "translate-y-0" : "translate-y-10"}`}>
                        <div className="flex flex-row">
                            <div className="px-2">
                                <img src="https://img.icons8.com/external-bearicons-outline-color-bearicons/48/000000/external-error-essential-collection-bearicons-outline-color-bearicons.png" alt='icon'/>
                            </div>
                            <div className="ml-2 mr-6">
                                <span className="font-semibold">{deleteFrom}</span>
                                <span className="block text-gray-500">Porfavor Intentalo de Nuevo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default NotificationDelete;

import React from 'react';

export const AreaNoEducativeEdit = () => {

    const handleUpdateArea = () =>{

    }

    return (
        <div className='container mx-auto'>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-6">
                <div className="px-4 py-5 sm:px-6 flex justify-between">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Editar Area No Educativa</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500"/>
                    <div className="ml-4 flex-shrink-0">
                        {/* <ModalEditProfile user={user}/> */}
                    </div>
                </div>
                <div className="border-t border-gray-200">
                    <dl>
                        <form onSubmit={handleUpdateArea}>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Nombre Area</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <input type="text" required
                                           className="appearance-none  border-t-0 border-r-0 border-l-0 border-b-2 relative block w-full  py-2 border bg-transparent placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-primary focus:z-10 sm:text-sm"
                                           placeholder="Nombre no Ingresado"
                                           // ref={nameRef}
                                           name="firstname"
                                           // value={infoUser.firstname}
                                           // onChange={handleChange}
                                    />
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Ente No Educativo</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <input type="text" required
                                           className="appearance-none  border-t-0 border-r-0 border-l-0 border-b-2 relative block w-full  py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-primary focus:z-10 sm:text-sm"
                                           placeholder="Apellidos no Ingresados"
                                           // ref={lastNameRef}
                                           name="lastname"
                                           // value={infoUser.lastname}
                                           // onChange={handleChange}
                                    />
                                </dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Ciudad</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <input type="email"
                                           className="appearance-none bg-transparent border-t-0 border-r-0 border-l-0 border-b-2 relative block w-full  py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-primary focus:z-10 sm:text-sm"
                                           placeholder="Correo no Ingresados"
                                           // ref={emailRef}
                                           name={"email"}
                                           // value={infoUser.email ? infoUser.email : infoUser.email}
                                           // onChange={handleChange}
                                    />
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Estado</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <input type="email" required
                                           className="appearance-none bg-transparent border-t-0 border-r-0 border-l-0 border-b-2 relative block w-full  py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-primary focus:z-10 sm:text-sm"
                                           placeholder="Correo no Ingresados"
                                           // ref={institutionalEmailRef}
                                           name="institutionalEmail"
                                           // value={infoUser.institutionalEmail ? infoUser.institutionalEmail : infoUser.institutionalEmail}
                                           // onChange={handleChange}
                                    />
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
    );
};


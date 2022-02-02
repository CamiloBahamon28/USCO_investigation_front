import {Fragment, useContext} from 'react'
import {NavLink} from 'react-router-dom'


import {
    ChevronDownIcon,
    PencilIcon,
} from '@heroicons/react/solid'
import {Menu, Transition} from '@headlessui/react'
import {AuthContext} from '../../auth/authContext'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export const ProfileNavbar = () => {
    const {user} = useContext(AuthContext);
    return (

        <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex-1 min-w-0">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">{user.email}</h2>
                <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                    {/* <div className="mt-2 flex items-center text-sm text-gray-500">
							<BriefcaseIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
							Full-time
						</div>
						<div className="mt-2 flex items-center text-sm text-gray-500">
							<LocationMarkerIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
							Remote
						</div>
						<div className="mt-2 flex items-center text-sm text-gray-500">
							<CurrencyDollarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
							$120k &ndash; $140k
						</div>
						<div className="mt-2 flex items-center text-sm text-gray-500">
							<CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
							Closing on January 9, 2020
						</div> */}
                </div>
            </div>
            <div className="mt-5 flex lg:mt-0 lg:ml-4">
					<span className="hidden sm:block">
						<NavLink
                            // type="button"
                            to='/profile-users'
                            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
							<PencilIcon className="-ml-1 mr-2 h-5 w-5 text-gray-500" aria-hidden="true"/>
							Usuarios
						</NavLink>
					</span>

                <span className="hidden sm:block ml-3">
						<NavLink
                            to='/profile-country'
                            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
							{/* <LinkIcon className="-ml-1 mr-2 h-5 w-5 text-gray-500" aria-hidden="true" /> */}
                            <img src="https://img.icons8.com/ios-glyphs/20/000000/world.png"
                                 className='mr-2'
                                 alt="icon"
                            />
							 Pais
						</NavLink>
					</span>
                <span className="hidden sm:block ml-3">
						<NavLink
                            to='/profile-departamento'
                            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
							
							<img src="https://img.icons8.com/android/15/000000/landscape.png"
                                 className='mr-2'
                                 alt='icon'
                            />
							 Departamentos
						</NavLink>
					</span>
                <span className="hidden sm:block ml-3">
						<NavLink
                            to='/profile-municipality'
                            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
							
							<img src="https://img.icons8.com/ios-glyphs/20/000000/museum.png"
                                 className='mr-2'
                                 alt='icon'
                            />
							 Municipios
						</NavLink>
					</span>

                {/* <span className="sm:ml-3">
						<NavLink
							// type="button"
							to='/profile-users'
							className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							<CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
							Publish
						</NavLink>
					</span> */}

                {/* Dropdown */}
                <Menu as="span" className="ml-3 relative sm:hidden">
                    <Menu.Button
                        className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        More
                        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 text-gray-500" aria-hidden="true"/>
                    </Menu.Button>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items
                            className="origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                                {({active}) => (
                                    <NavLink
                                        to="/"
                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                    >
                                        Edit
                                    </NavLink>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({active}) => (
                                    <a
                                        href="#"
                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                    >
                                        View
                                    </a>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>

    )
}

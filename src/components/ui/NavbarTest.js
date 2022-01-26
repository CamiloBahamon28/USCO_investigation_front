import { Fragment, useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { AuthContext } from '../../auth/authContext'
import { types } from '../../types/types'


import logoUscoBlack from '../img/logo-usco-rojo.png'

const navigation = [
	{ name: 'Home', to: '/', current: true },
	{ name: 'Nosotros', to: '/register', current: false },

]

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}
export const NavbarTest = () => {


	const myStorage = window.localStorage;
	const navigate = useNavigate();
	const { user, dispatch } = useContext(AuthContext);

	const handleLogout = () => {

		const action = {
			type: types.logout,
		}

		dispatch(action);

		navigate('/login', {
			replace: true
		})

		// const pepe =myStorage.setItem("user", user.logged)
		// console.log(pepe)
	}

	console.log(user.logged)


	return (
		<div>
			<Disclosure as="nav" className="bg-transparent">
				{({ open }) => (
					<>
						<div className=" w-full p-3 sm:px-6 lg:px-8">
							<div className="relative flex items-center justify-between h-20 sm:h-20">
								<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
									{/* Mobile menu button*/}
									<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
										<span className="sr-only">Open main menu</span>
										{open ? (
											<XIcon className="block h-6 w-6" aria-hidden="true" />
										) : (
											<MenuIcon className="block h-6 w-6" aria-hidden="true" />
										)}
									</Disclosure.Button>
								</div>
								<div className="flex-1 flex items-center justify-center sm:items-center sm:justify-start">
									<Link className="flex-shrink-0 flex items-center" to="/">
										<img className="mx-auto h-16 w-auto" src="https://img.icons8.com/dotty/80/000000/wolf.png" alt="Workflow" />
									</Link>
									<div className="hidden sm:block sm:ml-6">
										<div className="flex space-x-4">
											{navigation.map((item) => (
												<NavLink
													key={item.name}
													to={item.to}
													className={classNames(
														'text-black hover:bg-fourth hover:text-white',
														'px-3 py-2 rounded-md text-base font-medium'
													)}
													aria-current={item.current ? 'page' : undefined}
												>
													{item.name}
												</NavLink>
											))}
										</div>
									</div>
								</div>
								<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

									{/* Item for notification
										<button
										type="button"
										className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
									>
										<span className="sr-only">View notifications</span>
										<BellIcon className="h-6 w-6" aria-hidden="true" />
									</button> */}

									{/* Profile dropdown */}
									{user.logged ? <Menu as="div" className="ml-3 relative">
										<div className='flex items-center'>
											<p className='mr-2 text-black font-semibold text-xl'>{user.name}</p>
											<Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
												<span className="sr-only">Open user menu</span>
												<img
													className="h-8 w-8 rounded-full "
													src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
													alt=""
												/>
											</Menu.Button>
										</div>
										<Transition
											as={Fragment}
											enter="transition ease-out duration-100"
											enterFrom="transform opacity-0 scale-95"
											enterTo="transform opacity-100 scale-100"
											leave="transition ease-in duration-75"
											leaveFrom="transform opacity-100 scale-100"
											leaveTo="transform opacity-0 scale-95"
										>
											<Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
												<Menu.Item>
													{({ active }) => (
														<NavLink
															to="/profile"
															className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
														>
															Perfil
														</NavLink>
													)}
												</Menu.Item>
												<Menu.Item>
													{({ active }) => (
														<NavLink
															to="/"
															className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
														>
															Configuracion
														</NavLink>
													)}
												</Menu.Item>
												<Menu.Item>
													{({ active }) => (
														<NavLink
															to="/"
															className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
															onClick={handleLogout}
														>
															Cerrar Sesion
														</NavLink>
													)}
												</Menu.Item>
											</Menu.Items>
										</Transition>
									</Menu>

										:

										<div className='hidden sm:block'>
											<NavLink className={({ isActive }) => ' bg-fourth py-2 px-5 ml-8 rounded text-gray-50 no-underline transition duration-400 hover:bg-fourth  ' + (isActive ? 'active' : '')} to="/login">Login</NavLink>
											<NavLink className={({ isActive }) => ' bg-fourth py-2 px-5 ml-8 rounded text-gray-50 no-underline transition duration-400 hover:bg-fourth  ' + (isActive ? 'active' : '')} to="/register">Registrarte</NavLink>
										</div>
									}
								</div>
							</div>
						</div>

						<Disclosure.Panel className="sm:hidden ">
							<div className="px-2  pb-3 space-y-1 flex flex-col ">
								{navigation.map((item) => (
									<Disclosure.Button
										key={item.name}
										className={({ isActive }) => 'pt-3'+ (isActive ? 'active' : '')}
									>
										<NavLink
											key={item.name}
											to={item.to}
											className={({ isActive }) => 'px-3 py-2 rounded-md text-sm font-medium'+ (isActive ? 'active' : '')}
										>
											{item.name}
										</NavLink>


									</Disclosure.Button>
								))}
								<NavLink className={({ isActive }) => 'flex justify-center px-3 py-2 rounded-md text-sm font-medium ' + (isActive ? 'active' : '')} to="/login">Login</NavLink>
								<NavLink className={({ isActive }) => 'flex justify-center px-3 py-2 rounded-md text-sm font-medium' + (isActive ? 'active' : '')} to="/register">Registrarte</NavLink>
							</div>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>

		</div>
	)
}

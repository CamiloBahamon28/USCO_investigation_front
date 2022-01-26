import React, { useState, useEffect } from 'react';
import Pagination from '../../../ui/Pagination';
import { ProfileNavbar } from '../../ProfileNavbar';
import { UsersCrud } from './UsersCrud';

export const User = () => {

	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(10);

	const [users, setUsers] = useState([]);
	useEffect(async () => {

		const fetchUsers = async () => {
			setLoading(true);
			try {
				const people = [
					{
						photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
						nombres: 'Jane Cooper',
						apellidos: 'Cooper',
						correoI: 'jane.cooper@example.com',
						rol: 'Administrador',
						pais: 'Estados Unidos',
						pais: 'Estados Unidos',
						tipoDocumento: 'Pasaporte',
						numDocumento: '1003804058',
						title: 'Regional Paradigm Technician',
						department: 'Optimization',
					},
					{
						photo: 'https://img.search.brave.com/N5uhg52SpklYWZA755-P9Rndi7fBDeewnXLOIYjAWKw/rs:fit:750:742:1/g:ce/aHR0cHM6Ly9pbWFn/ZXM3Lm1lbWVkcm9p/ZC5jb20vaW1hZ2Vz/L1VQTE9BREVEOTQ5/LzVlYmZhOTYyMDUx/OWQuanBlZw',
						nombres: 'Carlos Mario ',
						apellidos: 'Vivas Martinez',
						correoI: 'Clucemon@example.com',
						rol: 'Investigador',
						pais: 'Venezuela',
						tipoDocumento: 'Pasaporte',
						numDocumento: '1003875483'
					},
					{
						photo: 'https://preview.redd.it/nxvf6kpgtcc51.jpg?auto=webp&s=4988972d221e1df41e30f4485ec8520510285bca',
						nombres: 'Juan Pablo ',
						apellidos: 'Daza Medina',
						correoI: 'aetos@example.com',
						rol: 'Investigador',
						pais: 'India',
						tipoDocumento: 'Pasaporte',
						numDocumento: '1003745182'
					},
					// More people...
				]

				setUsers(people)
				console.log(users);
			} catch (err) {
				console.log(err);
			}
			setLoading(false);
		};

		fetchUsers();
	}, []);

	// Get current posts
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentUsers = users.slice(indexOfFirstPost, indexOfLastPost);

	// Change page
	const paginate = pageNumber => setCurrentPage(pageNumber);


	return (<div className='container'>
		<ProfileNavbar />
		<UsersCrud users={currentUsers} loading={loading}/>
		<Pagination
			postsPerPage={postsPerPage}
			totalPosts={users.length}
			paginate={paginate}
		/>
	</div>);
};

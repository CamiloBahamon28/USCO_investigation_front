import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from '../../../ui/Pagination';
import { ProfileNavbar } from '../../ProfileNavbar';
import { UsersCrud } from './UsersCrud';


export const User = () => {

	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(10);


	const myStorage = window.localStorage

	const [user, setUser] = useState([]);
	useEffect( async() => {

		const fetchUsers = async () => {
			setLoading(true);
			const token = myStorage.getItem("Authorization")
			const config = {
				headers: {
					Authorization: token,
				}
			};

			try {
				const allUsers = await axios.get("/api/users", config)
				console.log(allUsers.data)
				setUser(allUsers.data);
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

	// Change page
	const paginate = pageNumber => setCurrentPage(pageNumber);


	return (<div className='container'>
		<ProfileNavbar />
		<UsersCrud users={user} loading={loading}/>
		 <Pagination
			postsPerPage={postsPerPage}
			totalPosts={user.length}
			paginate={paginate}
		/>
	</div>);
};
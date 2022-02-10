import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from '../../../ui/Pagination';
import { UsersCrud } from './UsersCrud';
import {fetchDeletUser} from "../../../../service/service";


export const User = () => {

	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(8);

	const [deletePerson, setDeletePerson] = useState(false);


	const myStorage = window.localStorage

	const [user, setUser] = useState([]);
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
	useEffect( () => {
		fetchUsers();
	}, []);



	// Get current posts
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentUser = user.slice(indexOfFirstPost, indexOfLastPost);

	// Change page
	const paginate = pageNumber => setCurrentPage(pageNumber);

	let deleteUser;
	const [deleteFrom, setDeleteFrom] = useState('');

	const handleDeleteUser = async (userId) => {

		setDeletePerson(true)
		setDeleteFrom('Usuario Eliminado')

		deleteUser = await fetchDeletUser(userId);

		setTimeout(()=>
			{
				setDeletePerson(false)},
				fetchUsers()
			,3000)
		console.log(userId)
	}

	return (<div className='container mx-auto'>
		<UsersCrud users={currentUser} loading={loading} deletePerson={deletePerson}  deleteFrom={deleteFrom} handleDeleteUser={handleDeleteUser}/>
		<Pagination
			postsPerPage={postsPerPage}
			totalPosts={user.length}
			paginate={paginate}
			currentPage={currentPage}
			setCurrentPage={setCurrentPage}
		/>
	</div>);
};
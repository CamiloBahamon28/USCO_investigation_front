import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { DepartamentosCrud } from './DepartamentosCrud';
import { ProfileNavbar } from '../../ProfileNavbar';
import Pagination from '../../../ui/Pagination';


export const Departamentos = () => {


	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(10);


	const [departamentos, setDepartamentos] = useState([]);

	const fetchDepartamentos = async () => {
		setLoading(true);
		try {
			const allDepartamentos = await axios.get("/api/departamentos")
			setDepartamentos(allDepartamentos.data)
		} catch (err) {
			console.log(err);
		}
		setLoading(false);
	};
	
	useEffect(() => {
		fetchDepartamentos();
	 
	
	 
	}, []);
	

	// Get current posts
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentDepartamentos = departamentos.slice(indexOfFirstPost, indexOfLastPost);

	// Change page
	const paginate = pageNumber => setCurrentPage(pageNumber);


	return (<div className='container'>
		<ProfileNavbar />
		<DepartamentosCrud departamento={currentDepartamentos} loading={loading}/>
		<Pagination
			postsPerPage={postsPerPage}
			totalPosts={departamentos.length}
			paginate={paginate}
			currentPage={currentPage}
			setCurrentPage={setCurrentPage}
		/>
	</div>);
};

import React, { useState, useEffect } from 'react';

import { DepartamentosCrud } from './DepartamentosCrud';
import Pagination from '../../../ui/Pagination';
import { fetchDepartamentos } from '../../../../service/service';


export const Departamentos = () => {


	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(10);


	const [departamentos, setDepartamentos] = useState([]);

	const data = async () => {
		setLoading(true);
		try {
			let allDepartamentos = await fetchDepartamentos();
			setDepartamentos(allDepartamentos.data)
		} catch (err) {
			console.log(err);
		}
		setLoading(false);
	};
	
	useEffect(() => {
		data();
	}, []);
	

	// Get current posts
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentDepartamentos = departamentos.slice(indexOfFirstPost, indexOfLastPost);

	// Change page
	const paginate = pageNumber => setCurrentPage(pageNumber);


	return (<div className='container mx-auto'>
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

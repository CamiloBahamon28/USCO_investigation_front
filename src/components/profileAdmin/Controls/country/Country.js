import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CountryCrud } from './CountryCrud';
import Pagination from '../../../ui/Pagination';


export const Country = () => {

	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(10);


	const [countrys, setCountrys] = useState([]);

	const fetchCountrys = async () => {
		setLoading(true);
		try {
			const allCountrys = await axios.get("/api/countries")
			setCountrys(allCountrys.data)
		} catch (err) {
			console.log(err);
		}
		setLoading(false);
	};

	useEffect( () => {
		 fetchCountrys();
	}, []);

	// Get current posts
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentCountry = countrys.slice(indexOfFirstPost, indexOfLastPost);

	// Change page
	const paginate = pageNumber => setCurrentPage(pageNumber);

	return (<div className='container mx-auto'>
		<CountryCrud country={currentCountry} loading={loading} />
		<Pagination
			postsPerPage={postsPerPage}
			totalPosts={countrys.length}
			paginate={paginate}
			currentPage={currentPage}
			setCurrentPage={setCurrentPage}
		/>
	</div>);
};

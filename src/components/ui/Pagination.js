import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<nav className='relative z-0 flex justify-evenly gap-0 rounded-md shadow-sm mt-1'>
			{/* <ul className='pagination flex justify-around mt-2'> */}

			{pageNumbers.map(number => (
				// <li key={number} className='page-item  p-2 border-2'>
				<a onClick={() => paginate(number)} key={number} className='page-link rounded-md cursor-pointer bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-5 py-2 border text-sm font-medium'>
					{number}
				</a>
				// </li>
			))}
			{/* </ul> */}
		</nav>
	);
};

export default Pagination;
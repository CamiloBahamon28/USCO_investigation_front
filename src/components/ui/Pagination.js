import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

const Pagination = ({ postsPerPage, totalPosts, paginate,currentPage,setCurrentPage }) => {
	const pageNumbers = [];
	console.log('postsPerPage',postsPerPage,'  -totalPosts',totalPosts,'  -paginate',pageNumbers, '-currentPage',currentPage)

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}

	const pagePrevious = ()=>{
		if (currentPage === 1){
			setCurrentPage(1)
		}else{
			setCurrentPage(currentPage -= 1)
		}
	}

	const pageNext = () =>{
		console.log(pageNumbers.length )
		if (currentPage === pageNumbers.length){
			setCurrentPage(pageNumbers.length)
		}else{
			setCurrentPage(currentPage += 1)
		}
	}

	return (
		// <nav className='relative z-0 flex justify-evenly gap-0 rounded-md mt-1'>
		// 	{pageNumbers.map(number => (
		// 		<a onClick={() => paginate(number)} key={number} className='page-link rounded-md cursor-pointer bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-5 py-2 border text-sm font-medium'>
		// 			{number}
		// 		</a>
		// 	))}
		// </nav>
		<div className="p-3">
			<div className="flex-1 flex justify-between sm:hidden">
				<a
					href="#"
					className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
				>
					Previous
				</a>
				<a
					href="#"
					className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
				>
					Next
				</a>
			</div>
			<div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
				<div>
					<p className="text-sm text-gray-700">
						Showing  <span className="font-medium">{postsPerPage}</span> of
						<span className="font-medium"> {totalPosts}</span> results
					</p>
				</div>
				<div>
					<nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
						<a
							onClick={() => pagePrevious() }
							href="#"
							className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
						>
							<span className="sr-only">Previous</span>
							<ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
						</a>
						{pageNumbers.map(number => (
									<a onClick={() => paginate(number)} key={number}
									   className={classNames(
										   currentPage === number ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium' : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium',
										   'px-3 py-2 rounded-md text-sm font-medium'
									   )}
									   id={number}
									   // className='bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
									>
										{number}
									</a>
								))}
						<a
							onClick={() => pageNext() }
							href="#"
							className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
						>
							<span className="sr-only">Next</span>
							<ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
						</a>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Pagination;
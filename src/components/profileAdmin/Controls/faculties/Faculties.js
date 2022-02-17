import React, { useEffect, useState } from 'react'
import { fetchFaculties, fetchFacultyDelete } from '../../../../service/service';
import Pagination from '../../../ui/Pagination';
import { CrudFaculties } from './CrudFaculties';

export const Faculties = () => {
	const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    const [deleteFrom, setDeleteFrom] = useState('');
    const [deleteFaculty, setDeleteFaculty] = useState(false)

    const [faculties, setFaculties] = useState([]);
    let getAllFaculties = [];

    const data = async () =>{
        setLoading(true);
		getAllFaculties = await fetchFaculties();
		setFaculties(getAllFaculties.data)
		setLoading(false)
    }

    useEffect(() => {
        data();
    }, []);

    const handleDeleteFaculty = async(idFaculty) =>{
        setDeleteFaculty(true)
        setDeleteFrom('Facultad Eliminada')

         await fetchFacultyDelete(idFaculty);
    
        setTimeout(()=>{
            setDeleteFaculty(false)
        }, data(), 3000)
    }

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentFaculties = faculties.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="container mx-auto">
			<CrudFaculties faculties={currentFaculties} loading={loading} deleteFaculty={deleteFaculty} deleteFrom={deleteFrom} handleDeleteFaculty={handleDeleteFaculty} />
            {/* <CrudAreaNoEducative areas={currentFaculties} loading={loading}  /> */}
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={faculties.length}
                paginate={paginate}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
}

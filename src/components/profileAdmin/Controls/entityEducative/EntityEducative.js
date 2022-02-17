import React, { useEffect, useState } from 'react';
import { CrudEntityEducative } from "./CrudEntityEducative";
import { fetchEntityEducative, fetchEntityEducativeDelete } from "../../../../service/service";
import Pagination from '../../../ui/Pagination';

export const EntityEducative = () => {

    let getAllEntityEducative = [];
    const [allEntityEducative, setAllEntityEducative] = useState([]);

    const [deleteFrom, setDeleteFrom] = useState('');
    const [deleteEntityEducative, setDeleteEntityEducative] = useState(false);

    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(8);

    const data = async () => {
        setLoading(true)
        getAllEntityEducative = await fetchEntityEducative();
        setAllEntityEducative(getAllEntityEducative.data)
        console.log(getAllEntityEducative);
        setLoading(false)
    }

    useEffect(() => {
        data();
    }, []);

    const handleDeleteEntityEducative = async(idEntity) => {
        setDeleteEntityEducative(true)
        setDeleteFrom('Entidad Educativa Eliminada')

        await fetchEntityEducativeDelete(idEntity);

        setTimeout(()=>{
            setDeleteEntityEducative(false)
        }, data(), 3000)

    } 

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentEntityEducative = allEntityEducative.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className='container mx-auto'>
            <CrudEntityEducative allEntityEducative={currentEntityEducative} loading={loading} deleteEntityEducative={deleteEntityEducative} deleteFrom={deleteFrom} handleDeleteEntityEducative={handleDeleteEntityEducative} />
            <Pagination
			postsPerPage={postsPerPage}
			totalPosts={allEntityEducative.length}
			paginate={paginate}
			currentPage={currentPage}
			setCurrentPage={setCurrentPage}
		/>
        </div>
    );
};


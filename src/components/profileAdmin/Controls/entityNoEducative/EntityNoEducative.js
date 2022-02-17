import React, {useEffect, useState} from 'react';
import {CrudEntityNoEducative} from "./CrudEntityNoEducative";
import Pagination from "../../../ui/Pagination";
import {  fetchEntityNoEducative, fetchEntityNoEducativeDelete } from '../../../../service/service';

export const EntityNoEducative = () => {
    

    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    const [deleteFrom, setDeleteFrom] = useState('');
    const [deleteEntityNo, setDeleteEntityNo] = useState(false)

    let getAllEntityNoEducative= []
    const [entitiesNoEducative, setEntitiesNoEducative] = useState([]);

    const data = async () => {
        setLoading(true)
        getAllEntityNoEducative = await fetchEntityNoEducative();
        setEntitiesNoEducative(getAllEntityNoEducative.data)
        setLoading(false)
    }

    useEffect(() => {
        data();
    }, []);

    const handleDeleteEntityNo = async(idEducationalEntity) =>{
        setDeleteEntityNo(true)
        setDeleteFrom('Entidad No Educativa Eliminada')

         await fetchEntityNoEducativeDelete(idEducationalEntity);
    
        setTimeout(()=>{
            setDeleteEntityNo(false)
        }, data(), 3000)
    }

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentEntitiesNoEducatives = entitiesNoEducative.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);


    return (
        <div className="container mx-auto">
            <CrudEntityNoEducative entities={currentEntitiesNoEducatives} loading={loading} deleteEntityNo={deleteEntityNo} deleteFrom={deleteFrom} handleDeleteEntityNo={handleDeleteEntityNo}/>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={entitiesNoEducative.length}
                paginate={paginate}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
};



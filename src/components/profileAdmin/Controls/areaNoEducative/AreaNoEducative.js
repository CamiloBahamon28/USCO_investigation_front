import React, {useEffect, useState} from 'react';
import {CrudAreaNoEducative} from "./CrudAreaNoEducative";
import Pagination from "../../../ui/Pagination";

import {  fetchAreaNoEducative, fetchAreaNoEducativeDelete } from '../../../../service/service';



export const AreaNoEducative = () => {

    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    const [deleteFrom, setDeleteFrom] = useState('');
    const [deleteAreaNo, setDeleteAreNo] = useState(false)

    const [areasNoEducatives, setAreasNoEducatives] = useState([]);
    let getAllAreasNo = [];

    const data = async () =>{
        setLoading(true);
        getAllAreasNo = await fetchAreaNoEducative();
        setAreasNoEducatives(getAllAreasNo.data)
        console.log(getAllAreasNo.data);
        setLoading(false);
    }

    useEffect(() => {
        data();
    }, []);

    const handleDeleteAreaNo = async(idAreaNo) =>{
        setDeleteAreNo(true)
        setDeleteFrom('Entidad No Educativa Eliminada')

       await fetchAreaNoEducativeDelete(idAreaNo);
    
        setTimeout(()=>{
            setDeleteAreNo(false)
        }, data(), 3000)
    }

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentAreaNoEducative = areasNoEducatives.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="container mx-auto">
            <CrudAreaNoEducative areas={currentAreaNoEducative} loading={loading} deleteAreaNo={deleteAreaNo} deleteFrom={deleteFrom} handleDeleteAreaNo={handleDeleteAreaNo} />
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={areasNoEducatives.length}
                paginate={paginate}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
};



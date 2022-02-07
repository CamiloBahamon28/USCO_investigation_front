import React, {useEffect, useState} from 'react';
import {CrudAreaNoEducative} from "./CrudAreaNoEducative";
import Pagination from "../../../ui/Pagination";


export const AreaNoEducative = () => {

    const AreaNoEducativeArray = [
        {
            id: 1,
            nameArea:'area 1',
            entityNoEducative:'entidad no educativa',
            municipality:'Neiva',
            status:'activo'
        },
        {
            id: 2,
            nameArea:'area 2',
            entityNoEducative:'entidad no educativa',
            municipality:'Neiva',
            status:'activo'
        },
        {
            id: 3,
            nameArea:'area 3',
            entityNoEducative:'entidad no educativa',
            municipality:'Neiva',
            status:'activo'
        },
    ]

    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    const [areasNoEducatives, setAreasNoEducatives] = useState([]);

    useEffect(() => {
        setLoading(true);
        setAreasNoEducatives(AreaNoEducativeArray)
        setLoading(false);
    }, []);


    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentAreaNoEducative = areasNoEducatives.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="mx-2 md:mx-16">
            <CrudAreaNoEducative areas={currentAreaNoEducative} loading={loading}/>
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



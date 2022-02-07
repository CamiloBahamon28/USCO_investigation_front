import React, {useEffect, useState} from 'react';
import {CrudEntityNoEducative} from "./CrudEntityNoEducative";
import Pagination from "../../../ui/Pagination";

export const EntityNoEducative = () => {

    const EntityNoEducativeArray = [
        {
            id: 1,
            nit: 123,
            nameEntity: 'Entidad 1',
            country: 'Colombia',
            departamento: 'Huila',
            municipality: 'Neiva',
            bussiness: 'Usco',
            status: 'activo'
        },
        {
            id: 2,
            nit: 456,
            nameEntity: 'Entidad 2',
            country: 'Colombia',
            departamento: 'Huila',
            municipality: 'Neiva',
            bussiness: 'Usco',
            status: 'activo'
        },
        {
            id: 3,
            nit: 789,
            nameEntity: 'Entidad 3',
            country: 'Colombia',
            departamento: 'Huila',
            municipality: 'Neiva',
            bussiness: 'Usco',
            status: 'activo'
        },
    ]

    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    const [entitiesNoEducative, setEntitiesNoEducative] = useState([]);

    useEffect(() => {
        setLoading(true);
        setEntitiesNoEducative(EntityNoEducativeArray)
        setLoading(false)
    }, []);


    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentEntitiesNoEducatives = entitiesNoEducative.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="mx-2 md:mx-16">
            <CrudEntityNoEducative entities={currentEntitiesNoEducatives} loading={loading}/>
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



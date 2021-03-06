import React, { useState, useEffect } from 'react';


import { MunicipalityCrud } from './MunicipalityCrud';
import { SelectDepartamento } from './SelectDepartamento';
import Pagination from '../../../ui/Pagination';
import { fetchDepartamentos, fetchMunicipalities } from '../../../../service/service';

export const Municipality = () => {

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const [departamentos, setDepartamentos] = useState([]);
  const [municipality, setMunicipality] = useState([]);
  const [codDepartamento, setCodDepartamento] = useState(1);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {

    const data = async () => {
      setLoading(true);
      try {
        let allDepartamentos = await fetchDepartamentos();
        setDepartamentos(allDepartamentos.data)
        let allMunicipality = await fetchMunicipalities(codDepartamento);
        setMunicipality(allMunicipality.data)
        console.log(allMunicipality.data);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };

    data();
  }, [codDepartamento]);

	// Get current posts
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentMunicipality = municipality.slice(indexOfFirstPost, indexOfLastPost);

	// Change page
	const paginate = pageNumber => setCurrentPage(pageNumber);

  return (<div className='container mx-auto' >
    <SelectDepartamento departamentos={departamentos} setCodDepartamento={setCodDepartamento}/>
    <MunicipalityCrud municipality={currentMunicipality} loading={loading} />
    <Pagination
			postsPerPage={postsPerPage}
			totalPosts={municipality.length}
			paginate={paginate}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
		/>
  </div>);
};

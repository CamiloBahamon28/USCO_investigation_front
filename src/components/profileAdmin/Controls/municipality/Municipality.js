import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { ProfileNavbar } from '../../ProfileNavbar';
import { MunicipalityCrud } from './MunicipalityCrud';
import { SelectDepartamento } from './SelectDepartamento';
import Pagination from '../../../ui/Pagination';

export const Municipality = () => {

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const [departamentos, setDepartamentos] = useState([]);
  const [municipality, setMunicipality] = useState([]);
  const [codDepartamento, setCodDepartamento] = useState(5);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {

    const fetchCountrys = async () => {
      setLoading(true);
      try {
        const allDepartamentos = await axios.get("/api/departamentos")
        setDepartamentos(allDepartamentos.data)
        const allMunicipality = await axios.get(`api/departamentos/${codDepartamento}/municipios`)
        setMunicipality(allMunicipality.data)
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };

    fetchCountrys();
  }, [codDepartamento]);

	// Get current posts
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentMunicipality = municipality.slice(indexOfFirstPost, indexOfLastPost);

	// Change page
	const paginate = pageNumber => setCurrentPage(pageNumber);

  return (<div className='container' >
    <ProfileNavbar />
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

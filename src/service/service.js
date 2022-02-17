import axios from 'axios';

const myStorage = window.localStorage

export const fetchGender = async () => {
    try {
        const allGender = await axios.get("/api/genders")
        return allGender;
    } catch (e) {
        console.log(e)
    }
}

export const fetchEthnicGroup = async () => {
    try {
        const allEthnic = await axios.get("/api/ethnicGroups")
        return allEthnic;
    } catch (e) {
        console.log(e)
    }
}

export const fetchCivilStatus = async () => {
    try {
        const allCivilStatus = await axios.get("/api/civilStatuses")
        return allCivilStatus;
    } catch (e) {
        console.log(e)
    }
}

export const fetchCountries = async () => {
    try {
        const allCountries = await axios.get("/api/countries")
        return allCountries;

    } catch (e) {
        console.log(e)
    }
}

export const fetchDepartamentos = async () => {
    try {
        const allDepartamentos = await axios.get("/api/departamentos")
        return allDepartamentos;
    } catch (e) {
        console.log(e)
    }
}
export const fetchMunicipalities = async (codigoDepartamento) => {
    try {
        const allMunicipality = await axios.get(`/api/departamentos/${codigoDepartamento}/municipios`)
        return allMunicipality;
    } catch (e) {
        console.log(e)
    }
}

export const fetchTypesDocuments = async () => {
    try {
        const allTypesDocument = await axios.get("/api/documentTypes")
        return  allTypesDocument;
    } catch (e) {
        console.log(e)
    }
}

export const fetchOneUser = async (userId) =>{
    try {
        const oneUser = await axios.get(`/api/users/${userId}`, {
            headers:{
                Authorization: myStorage.getItem('Authorization')
            }
        });
        return oneUser;

    } catch (e) {
        console.log(e)
    }
}

export const fetchUpdateDataUser = async  (userIdToGet,userData)=> {
    try {
        const updateData = await axios.put(`/api/users/${userIdToGet}`,userData, {
            headers:{
                Authorization: myStorage.getItem('Authorization')
            }
        })
        return updateData;
    }catch (e) {
        console.log(e)
    }

}

export const fetchDeletUser = async (userIdToGet) =>{
    try {
        const deleteUser = await axios.delete(`/api/users/${userIdToGet}`, {
            headers:{
                Authorization: myStorage.getItem('Authorization')
            }
        })
        return deleteUser;
    }catch (e) {
        console.log(e)
    }
}
export const fetchRoles = async () =>{
    try {
        const allRoles = await axios.get(`/api/roles`, {
            headers:{
                Authorization: myStorage.getItem('Authorization')
            }
        })
        return allRoles;
    }catch (e) {
        console.log(e)
    }
}

export const fetchEntityEducative = async () =>{
    try{
        const allEntity = await axios.get(`/api/educationalEntities`,{
            headers:{
                Authorization: myStorage.getItem('Authorization')
            }
        })
        return allEntity;
    }catch (e) {
        console.log(e)
    }
}

export const fetchEntityEducativeNew = async (entity) =>{
    try{
        const newEntity = await axios.post(`/api/educationalEntities/`,entity,{
            headers:{
                Authorization: myStorage.getItem('Authorization')
            }
        })
        return newEntity;
    }catch (e) {
        console.log(e)
    }
}

export const fetchEntityEducativeDelete = async (idEntity) =>{
    try{
        const newEntity = await axios.delete(`/api/educationalEntities/${idEntity}`,{
            headers:{
                Authorization: myStorage.getItem('Authorization')
            }
        })
        return newEntity;
    }catch (e) {
        console.log(e)
    }
}

export const fetchEntityEducativeOne = async (idEntity) =>{
    try{
        const newEntity = await axios.get(`/api/educationalEntities/${idEntity}`,{
            headers:{
                Authorization: myStorage.getItem('Authorization')
            }
        })
        return newEntity;
    }catch (e) {
        console.log(e)
    }
}

export const fetchEntityNoEducative = async () =>{
    try{
        const newEntityNo = await axios.get(`/api/nonEducationalEntities`,{
            headers:{
                Authorization: myStorage.getItem('Authorization')
            }
        })
        return newEntityNo;
    }catch (e) {
        console.log(e)
    }
}

export const fetchEntityNoEducativeDelete = async (idEducationalEntity) =>{
    try{
        const newEntity = await axios.delete(`/api/nonEducationalEntities/${idEducationalEntity}`,{
            headers:{
                Authorization: myStorage.getItem('Authorization')
            }
        })
        return newEntity;
    }catch (e) {
        console.log(e)
    }
}

export const fetchEntityNoEducativeNew = async (entityNo) =>{
    try{
        const deleteEntityNo = await axios.post(`/api/nonEducationalEntities/`,entityNo,{
            headers:{
                Authorization: myStorage.getItem('Authorization')
            }
        })
        return deleteEntityNo;
    }catch (e) {
        console.log(e)
    }
}

export const fetchAreaNoEducative = async () =>{
    try{
        const getAreaNo = await axios.get(`/api/nonEducationalAreas`,{
            headers:{
                Authorization: myStorage.getItem('Authorization')
            }
        })
        return getAreaNo;
    }catch (e) {
        console.log(e)
    }
}

export const fetchAreaNoEducativeDelete = async (idAreaNo) =>{
    try{
        const deleteArea = await axios.delete(`/api/nonEducationalAreas/${idAreaNo}`,{
            headers:{
                Authorization: myStorage.getItem('Authorization')
            }
        })
        return deleteArea;
    }catch (e) {
        console.log(e)
    }
}

export const fetchAreaNoEducativeNew = async (AreaNo) =>{
    try{
        const newAreaNo = await axios.post(`/api/nonEducationalAreas/`,AreaNo,{
            headers:{
                Authorization: myStorage.getItem('Authorization')
            }
        })
        return newAreaNo;
    }catch (e) {
        console.log(e)
    }
}

export const fetchFaculties = async () =>{
    try{
        const getFaculties = await axios.get(`/api/faculties`,{
            headers:{
                Authorization: myStorage.getItem('Authorization')
            }
        })
        return getFaculties;
    }catch (e) {
        console.log(e)
    }
}

export const fetchFacultyDelete = async (idFaculty) =>{
    try{
        const deleteFaculty = await axios.delete(`/api/faculties/${idFaculty}`,{
            headers:{
                Authorization: myStorage.getItem('Authorization')
            }
        })
        return deleteFaculty;
    }catch (e) {
        console.log(e)
    }
}

export const fetchFacultyNew = async (faculty) =>{
    try{
        const facultyNew = await axios.post(`/api/faculties/`,faculty,{
            headers:{
                Authorization: myStorage.getItem('Authorization')
            }
        })
        return facultyNew;
    }catch (e) {
        console.log(e)
    }
}





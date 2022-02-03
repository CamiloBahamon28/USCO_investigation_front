import axios from 'axios';

const myStorage = window.localStorage
const token = myStorage.getItem("Authorization")
console.log('token',token)

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

export const fetchTypesDocuments = async () => {
    try {
        const allTypesDocument = await axios.get("/api/documentTypes")
        return allTypesDocument;

    } catch (e) {
        console.log(e)
    }
}

export const fetchOneUser = async (userId) =>{
    try {
        const oneUser = await axios.get(`/api/users/${userId}`, {
            headers:{
                Authorization: token
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
                Authorization: token
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
                Authorization: token
            }
        })
        return deleteUser;
    }catch (e) {
        console.log(e)
    }
}









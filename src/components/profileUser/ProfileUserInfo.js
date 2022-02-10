import React, {useEffect, useState} from 'react';
import {DataUser} from "../ui/DataUser";
import {fetchOneUser} from "../../service/service";

export const ProfileUserInfo = () => {
    const myStorage = window.localStorage
    const userId = myStorage.getItem("Id")
    let oneUser=[];

    const [dataUser, setDataUser] = useState([]);
    const [loading, setLoading] = useState(false);

    const data = async () => {
        setLoading(true)
        try {

            oneUser = await fetchOneUser(userId);
            await setDataUser(oneUser.data);
            console.log(oneUser.data)
            setLoading(false)
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        try {
            data()
        }catch (e) {
            console.log(e)
        }
    }, []);

    return (
        <div className='container'>
            <DataUser dataUser={dataUser} loading={loading}/>
        </div>
    );
};


import React, {useEffect, useState} from 'react'

import '../ui/modal/modal'

import {DataUser} from "../ui/DataUser";
import {fetchOneUser} from "../../service/service";

export const ProfileAdminInfo = () => {

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
		<div className="container mx-auto  ">
			<DataUser dataUser={dataUser} loading={loading}/>
		</div>
	)
}

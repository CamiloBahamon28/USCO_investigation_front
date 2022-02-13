import React, {useContext} from 'react';
import {AuthContext} from "../auth/authContext";
import {Navigate} from "react-router-dom";

export const PublicRoute = ({children}) => {

    const {user} = useContext(AuthContext);

    return user.logged
        ? user.rol === "Administrador"
            ? <Navigate to='/profile'/>
            : <Navigate to='/profileUserDefault' />
        : children
};


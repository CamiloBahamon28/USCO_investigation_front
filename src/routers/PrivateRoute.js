import React, {useContext} from 'react';

import {Navigate} from "react-router-dom";

import {AuthContext} from "../auth/authContext";
import {PrivateRouteAdmin} from "./PrivateRouteAdmin";
import {PrivateRouteUser} from "./PrivateRouteUser";


export const PrivateRoute = () => {

    const {user} = useContext(AuthContext);

    return user.logged
        ? user.rol === "Administrador"
            ? <PrivateRouteAdmin/>
            : <PrivateRouteUser />
        : <Navigate to="/login"/>
};


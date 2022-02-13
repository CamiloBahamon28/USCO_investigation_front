import React from 'react';

import {Route, Routes} from "react-router-dom";

import {Login} from "../components/login/Login";
import {Register} from "../components/register/Register";

export const PublicRouteInvitated = () => {
    return (
        <>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </>
    );
};


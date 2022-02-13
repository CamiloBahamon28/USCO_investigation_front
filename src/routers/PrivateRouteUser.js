import React from 'react';

import {Route, Routes} from "react-router-dom";

import {ProfileUserInfo} from "../components/profileUser/ProfileUserInfo";

export const PrivateRouteUser = () => {
    return (
        <>
            <Routes>
                <Route path="/profileUserDefault" element={<ProfileUserInfo />} />
            </Routes>
        </>
    );
};


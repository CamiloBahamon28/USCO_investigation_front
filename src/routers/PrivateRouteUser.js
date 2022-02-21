import React from 'react';

import {Route, Routes} from "react-router-dom";

import {ProfileUserInfo} from "../components/profileUser/ProfileUserInfo";
import { ProfileInfo } from '../components/profileAdmin/Controls/editInfo/ProfileInfo';

export const PrivateRouteUser = () => {
    return (
        <>
            <Routes>
                <Route path="/profileUserDefault" element={<ProfileUserInfo />} />
                <Route path="/profile-edit-info/:userId" element={<ProfileInfo />} />
            </Routes>
        </>
    );
};


import React from 'react';

import {
    Route,
    Routes
} from 'react-router-dom'

import {ProfileAdminInfo} from "../components/profileAdmin/ProfileAdminInfo";
import {User} from "../components/profileAdmin/Controls/user/User";
import {Country} from "../components/profileAdmin/Controls/country/Country";
import {Departamentos} from "../components/profileAdmin/Controls/departamentos/Departamentos";
import {Municipality} from "../components/profileAdmin/Controls/municipality/Municipality";
import {ProfileInfo} from "../components/profileAdmin/Controls/editInfo/ProfileInfo";
import {AreaNoEducative} from "../components/profileAdmin/Controls/areaNoEducative/AreaNoEducative";
import {AreaNoEducativeEdit} from "../components/profileAdmin/Controls/areaNoEducative/AreaNoEducativeEdit";
import {AreaNoEducativeNew} from "../components/profileAdmin/Controls/areaNoEducative/AreaNoEducativeNew";
import {EntityNoEducative} from "../components/profileAdmin/Controls/entityNoEducative/EntityNoEducative";
import {EntityNoEducativeEdit} from "../components/profileAdmin/Controls/entityNoEducative/EntityNoEducativeEdit";
import {EntityNoEducativeNew} from "../components/profileAdmin/Controls/entityNoEducative/EntityNoEducativeNew";

export const PrivateRouteAdmin = () => {
    return (
        <>
            <Routes>
                <Route path="/profile" element={<ProfileAdminInfo />} />
                <Route path="/profile-users" element={<User />} />
                <Route path="/profile-country" element={<Country />} />
                <Route path="/profile-departamento" element={<Departamentos />} />
                <Route path="/profile-municipality" element={<Municipality />} />
                <Route path="/profile-edit-info/:userId" element={<ProfileInfo />} />
                <Route path="/profile-area-no-educative" element={<AreaNoEducative />} />
                <Route path="/are-no-educative/:areaId" element={<AreaNoEducativeEdit /> } />
                <Route path="/are-no-educative/new" element={<AreaNoEducativeNew /> } />
                <Route path="/profile-entity-no-educative" element={<EntityNoEducative />} />
                <Route path="/entity-no-educative/:entityId" element={<EntityNoEducativeEdit />} />
                <Route path="/entity-no-educative/new" element={<EntityNoEducativeNew />} />
            </Routes>
        </>
    );
};



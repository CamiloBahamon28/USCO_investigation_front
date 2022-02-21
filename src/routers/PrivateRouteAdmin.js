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
import {EntityNoEducative} from "../components/profileAdmin/Controls/entityNoEducative/EntityNoEducative";
import {EntityNoEducativeEdit} from "../components/profileAdmin/Controls/entityNoEducative/EntityNoEducativeEdit";
import {EntityEducative} from "../components/profileAdmin/Controls/entityEducative/EntityEducative";
import { NewEntityEducative } from '../components/profileAdmin/Controls/entityEducative/NewEntityEducative';
import { EditEntityEducative } from '../components/profileAdmin/Controls/entityEducative/EditEntityEducative';
import { NewEntityNoEducative } from '../components/profileAdmin/Controls/entityNoEducative/NewEntityNoEducative';
import { NewAreaNoEducative } from '../components/profileAdmin/Controls/areaNoEducative/NewAreaNoEducative';
import { Faculties } from '../components/profileAdmin/Controls/faculties/Faculties';
import { NewFaculties } from '../components/profileAdmin/Controls/faculties/NewFaculties';
import { EditFaculties } from '../components/profileAdmin/Controls/faculties/EditFaculties';

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

                <Route path="/profile-entity-educative" element={<EntityEducative />} />
                <Route path="/profile-entity-educative/new" element={<NewEntityEducative />} />
                <Route path="/profile-entity-educative/edit/:entityId" element={<EditEntityEducative />} />

                <Route path="/profile-entity-no-educative" element={<EntityNoEducative />} />
                <Route path="/entity-no-educative/new" element={<NewEntityNoEducative />} />
                <Route path="/entity-no-educative/:entityId" element={<EntityNoEducativeEdit />} />

                <Route path="/profile-area-no-educative" element={<AreaNoEducative />} />
                <Route path="/profile-are-no-educative/new" element={<NewAreaNoEducative /> } />
                <Route path="/profile-are-no-educative/:areaNoId" element={<AreaNoEducativeEdit /> } />

                <Route path="/profile-faculty" element={<Faculties />} />
                <Route path="/profile-faculty/new" element={<NewFaculties />} />
                <Route path="/profile-faculty/edit/:facultyId" element={<EditFaculties />} />


            </Routes>
        </>
    );
};



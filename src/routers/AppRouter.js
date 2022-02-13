import React from 'react'


import {Routes, Route, BrowserRouter} from "react-router-dom";

import {Home} from '../components/home/Home';
import {Login} from '../components/login/Login';
import {Register} from '../components/register/Register';
// import {DashboardRoutes} from './DashboardRoutes';

import {NavbarTest} from '../components/ui/NavbarTest';
import {PrivateRoute} from "./PrivateRoute";
import {PrivateRouteAdmin} from "./PrivateRouteAdmin";
import {PrivateRouteUser} from "./PrivateRouteUser";
import {PublicRoute} from "./PublicRoute";

export const AppRouter = () => {
    return (
        <div /*style={{ backgroundImage: `url(${imgBackground})`}}*/>

            <BrowserRouter>
                <NavbarTest/>
                <Routes>
                    <Route path="/" element={<Home/>}/>

                    <Route path='/login' element={
                        <PublicRoute>
                            <Login/>
                        </PublicRoute>
                    }
                    />
                    <Route path='/register' element={
                        <PublicRoute>
                            <Register/>
                        </PublicRoute>
                    }
                    />


                    <Route path="/*" element={
                        <PrivateRoute>
                            <PrivateRouteAdmin/>
                            <PrivateRouteUser/>
                        </PrivateRoute>
                    }
                    />

                    {/*<Route path="/*" element={<DashboardRoutes/>}/>*/}
                </Routes>

            </BrowserRouter>
        </div>
    );
}
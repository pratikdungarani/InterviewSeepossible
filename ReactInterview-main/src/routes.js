import React,{Suspense, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from "react-router-dom";
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";

const Login = React.lazy(() => import("pages/Login"));
const MainLayout = React.lazy(() => import("mainlayout/MainLayout"));
const Addresslist = React.lazy(() => import("pages/Addresslist"));
const AddAddress = React.lazy(() => import("pages/AddAddress"));

const Routers = () =>  {
    const cookies = new Cookies();
    let navigate = useNavigate();
    let user =  cookies.get('userdata')
    console.log("user",user);
    return (
         <React.Fragment>
            <Suspense fallback={<div>Loading...</div>}>
                <MainLayout>
                    <Routes>
                        <Route path="/" exact element={!user ? <Login/> :  <Navigate to="/address-book" />} />
                        <Route path="/address-book" exact element={<Addresslist/>} />
                        <Route path="/add-address" exact element={<AddAddress/>} />
                        <Route path="/add-address/:id" exact element={<AddAddress/>} />
                    </Routes>
                </MainLayout >
            </Suspense>
        </React.Fragment>
    )
}

export default Routers

import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    return (
        <>
            <Header></Header>

            <Outlet></Outlet>

            <Footer></Footer>

        </>
    );
};

export default Main;
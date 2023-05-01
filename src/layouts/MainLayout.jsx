import React from 'react';
import Header from '../componets/Header';
import Footer from '../componets/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='magic-container'>
            <Header></Header>
            <div className='outlet-min-height px-2'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
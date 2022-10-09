import { Footer } from 'flowbite-react';

import { Outlet } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';

const Main = () => {
    
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
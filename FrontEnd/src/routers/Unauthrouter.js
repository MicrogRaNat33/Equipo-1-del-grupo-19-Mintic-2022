import React from 'react'
import { Route, Routes } from 'react-router';
import Auth from '../pages/public/Auth';
import Main from '../pages/public/Main';
import About from '../components/About';
import SignUp from '../components/SignUp';
import Home from '../components/Home';
import Search from '../components/Search';
import ListFiles from '../components/ListFiles';

const Unauthrouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />}>
            <Route index element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/auth" element={<Auth/>} />
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/listfiles" element={<ListFiles />}/>
            <Route path="/search" element={<Search />}/>
            </Route>
        </Routes>
    )
}

export default Unauthrouter;
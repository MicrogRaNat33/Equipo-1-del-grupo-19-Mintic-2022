import React from 'react'
import { Route, Routes } from 'react-router';
import Home from '../components/Home';
import Dashboard from '../pages/private/Dashboard';
import AddFile from '../components/AddFile';
import Search from '../components/Search';
import About from '../components/About';
import ListFiles from '../components/ListFiles';

const AuthRouter = () => {
    return (
       <Routes>
           <Route path="/" element={<Dashboard />}>
               <Route index element={<Home />}/>
               <Route path="/addfile" element={<AddFile />} />
               <Route path="/about" element={<About />}/>
               <Route path="/listfiles" element={<ListFiles />}/>
               <Route path="/search" element={<Search />}/>
           </Route>
       </Routes>
    )
}

export default AuthRouter;

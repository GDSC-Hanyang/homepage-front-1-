import React, { Component } from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostView from '../pages/PostView';
import PostList from '../pages/PostList';
import PostMain from '../pages/PostMain';
import WriteNotice from '../pages/WriteNotice';

const Router = () => 
{ 
    return ( 
        <div className='App'> 
        <BrowserRouter>  
            <Routes> 
                <Route path="/" element={<PostMain />}></Route>
                <Route path="/write" element={<WriteNotice />}></Route>
                <Route path="/post/:no" element={<PostView />}></Route>
                <Route path="/postlist/:no" element={<PostList />}></Route> 
            </Routes> 
        </BrowserRouter> 
        </div> 
    ); 
}; 
export default Router;


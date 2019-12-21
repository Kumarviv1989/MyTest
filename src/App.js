import React from 'react';
import search from './Component/Search'
import logo from './logo.svg';
import './App.css';
import Search from './Component/Search';
import Search1 from './Component/Search1';
import UserForm from './Component/MyClassTest';
import UrlToImage from './UrlToImage';

function App() {
  return (
    <div className="ui container" style={{marginTop:'10px'}}>
    <hr/>
    <Search/>
    <Search1/>
    </div>
  );
}

export default App;

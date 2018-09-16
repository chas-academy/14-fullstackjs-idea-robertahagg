import React from 'react';
import { SearchForm } from '../../Containers';
import search from '../../Img/search.jpg';
import './style.css';

const Search = () => {
    return <div>
    <img className="BackGroundImg" src={search} alt="searchHeaderImg"/>
    <SearchForm />
    </div>
}


export default Search;
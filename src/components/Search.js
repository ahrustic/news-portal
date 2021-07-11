import React, {useEffect} from "react";
import SearchIcon from '@material-ui/icons/Search';
import {InputBase} from "@material-ui/core";

import '../assets/css/header.css';

const Search = (props) => {

    const { search, searchTerm} = props;

    useEffect(() => {
        if (!searchTerm.length)
            search('');
    }, [searchTerm]);

    return (
        <div className='search'>
            <div className='searchIcon'>
                <SearchIcon />
            </div>
            <InputBase
                placeholder="Search…"
                className={'inputRoot inputInput'}
                onChange={(event)=>search(event.target.value)}
                inputProps={{ 'aria-label': 'search' }}
                value={searchTerm}
            />
        </div>
    );
};

export default Search;
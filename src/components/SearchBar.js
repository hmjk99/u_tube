import React from 'react'
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <div className='search-bar'>
        <input
            className='search-input'
            placeholder='Search...'
            value=""
        />
        <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
            <SearchIcon />
        </IconButton>
    </div>
  )
}

export default SearchBar
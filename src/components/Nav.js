import React from 'react'
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'

const Nav = () => {
  return (
    <div className='nav'>
        <img id='logo' src={logo} alt='logo'/>
        <SearchBar/>
    </div>
  )
}

export default Nav
import React from 'react'
import { categories } from '../utils/constants'

const SideNavBar = () => {
  return (
    <div className='sidebar'>
        {categories.map((category)=>(
            <button className='sidebar-button' key={category.name}>
                <span>{category.name}</span>
                <span>{category.icon}</span>
            </button>
        ))}
    </div>
  )
}

export default SideNavBar
import React from 'react'
import { FaGlobeAmericas } from 'react-icons/fa'

export default function Header() {
    return (
        <div className='header'>
            <FaGlobeAmericas className='header--icon'/>
            <h2 className='header--title'>my travel journal</h2>
        </div>
    )
}
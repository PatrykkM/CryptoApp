import React from 'react'
import {FaSearchDollar} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <Link to='/'>
            <div className='navbar'>
                <FaSearchDollar className='icon' />
                <h1> Coin <span className='red'>Spy</span></h1>
            </div>
        </Link>
    )
}

export default Navbar

import React from 'react'
import Logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

function Header() {
    return (
        <nav>
            <div className='container nav-container'>
                <Link to='/' className='nav-logo'>
                    <img src={Logo} alt='navbar-logo' />
                </Link>
                <ul className="nav-menu">
                    <li><Link to='./profile'>Shubham Sinha</Link></li>
                    <li><Link to='./create'>Create Post</Link></li>
                    <li><Link to='./authors'>Authors</Link></li>
                    <li><Link to='./logout'>Logout</Link></li>
                </ul>
                <button className='nav-toggle-btn'>
                    <FaBars />
                    <AiOutlineClose />
                </button>
            </div>
        </nav>
    )
}

export default Header
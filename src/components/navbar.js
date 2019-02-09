import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => (
    <div>

    <ul style={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-evenly',
        margin: '10px 0',
        alignSelf: 'center'
    }}>
        <li style={{margin: '0'}}><Link to="/" style={{ textDecoration: 'none', color: 'white', margin: '0 30px' }}>Home</Link></li>
        <li style={{margin: '0'}}><Link to="/about" style={{ textDecoration: 'none', color: 'white', margin: '0 30px' }}>About</Link></li>
        <li style={{margin: '0'}}><Link to="/blog" style={{ textDecoration: 'none', color: 'white', margin: '0 30px' }}>Blog</Link></li>
    </ul>
        
    </div>
)


export default Navbar;

import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import './Navbar.css'


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(false);


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth < 660) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
      }, []);

    window.addEventListener('resize', showButton)


  return (
    <>
    <nav className='navbar'>
        <div className="navbar-container">
            <Link to="/" className="navbar-logo"> 
             Carlos Mario Lopez 
            </Link>
            
            <div className='navbar-logo-emoji'>
                <span role="img" aria-label="circus_tent">🎪</span>
                </div>

            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                        About
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                        Contact
                    </Link>
                </li>
            </ul>
            {/* //{button && <Button buttonStyle='btn--outline'>CONTACT</Button>} */}
        </div>
    </nav>
    </>
  )
}

export default Navbar
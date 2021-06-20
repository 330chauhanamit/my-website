import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';


function Navbar() {
       const [click, setClick] = useState(false);
       const [button, setButton] = useState(true);
       const handleClick= ()=>{ setClick(!click)};

       const closeMenu = () =>{setClick(false)};

       const showButton = () =>{
              if(window.innerWidth<=960){
                     setButton(false);
              }else{
                     setButton(true);
              }
       }
       useEffect(() => {
              showButton();
       },[])

       window.addEventListener('resize', showButton);
       
       return (
           <>
              <nav className='navbar'>
                     
                     <div className='navbar-container'>
                            <Link to ="/" class='navbar-logo'>
                                   AMIT CHAUHAN
                            </Link>
                            <div className='menu-icon' onClick={handleClick}>
                                   <i class={click ? 'fas fa-times':'fas fa-bars'}></i>
                            </div>
                            <ul className={click? 'nav-menu active':'nav-menu'}>
                                   <li className='nav-item'>
                                          <Link to='/' className='nav-links' onClick={closeMenu}>
                                                 Home
                                          </Link>
                                   </li>
                                   <li className='nav-item'>
                                          <Link to='/profile' className='nav-links' onClick={closeMenu}>
                                                 Profile
                                          </Link>
                                   </li>
                                   <li className='nav-item'>
                                          <Link to='/about' className='nav-links' onClick={closeMenu}>
                                                 About
                                          </Link>
                                   </li>
                                   <li className='nav-item'>
                                          <Link to='/about' className='nav-links-mobile' onClick={closeMenu}>
                                                 Sign-up
                                          </Link>
                                   </li>
                            </ul>
                            {button && <Button buttonStyle='btn--outline'>Sign up</Button>}

                     </div>
              </nav>
           </>
       )
}

export default Navbar

import React from 'react';
import {Link} from 'react-router-dom'
import './Footer.css'

function Footer() {
       return (
              <div className='footer-container'>
                    <div className='social-media-all'>
                            <div className='social-media'>
                                   <Link className='social-i f-icon'>
                                          <i class='fab fa-facebook-f'/>
                                          </Link>
                                   <Link className='social-i l-icon'>
                                   <i class='fab fa-linkedin'/>
                                          </Link>
                                   <Link className='social-i i-icon'>
                                   <i class='fab fa-instagram'/>
                                          </Link>
                                   <Link className='social-i g-icon'>
                                   <i class='fab fa-github'/>
                                          </Link>
                            </div>
                    </div>
              </div>
       )
}

export default Footer

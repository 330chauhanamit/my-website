import React from 'react';
import './Tools.css';

function Tools() {
       return (
             <>
                     <div className ='tools-container'>
                            <ul>
                                   <li>

                                          <div className='card'>
                                                <h2>Front-end Developer</h2> 
                                                <p>I like to code things from scratch</p>
                                                <div className='line'></div>
                                                <h3>Language</h3>
                                                <p>HTML, CSS, Node.js</p>

                                                <h3>Framework</h3>
                                                <p>React</p>
                                                <p>React-native</p>
                                                <p>Angular</p>

                                                <h3>Dev tools</h3>
                                                <p>VS code</p>
                                                <p>Codepen</p>
                                                <p>Github</p>
                                                
                                          </div>
                                   </li>
                                   <li>

                                          <div className='card'>
                                                 <h2> Designer</h2> 
                                          </div>
                                   </li>
                            </ul>
                            
                     </div>
             </>
       )
}

export default Tools

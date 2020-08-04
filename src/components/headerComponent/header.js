import React, {Component} from 'react';
import './header.css';
import{
    Link 
  }from 'react-router-dom';
  import Logo from './images/logo.png';

class Header extends Component {
        render() { 
        return (  
    <header>
        <div className="logo">
        <img src={Logo} alt=''/>
        </div>
        <nav>
            <ul>
                <li>
                    <Link to="/Appathon_InternetAndApps" className='navbar'>Home</Link>
                </li>
                
                <li>
                    <Link to="/Search" className='navbar'>Search</Link>
                </li>
               
                <li>
                <Link to="/Contact" className='navbar'>Contact</Link>
                </li>

            </ul>
            </nav> 

    </header>

        );
    }
}
 
export default Header;


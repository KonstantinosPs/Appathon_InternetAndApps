import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import "./socialconnect.css";

class SocialConnect extends Component {
        render() { 
        return (  

            <div className="social-container"> 
                <h5>@KonstantinosPs</h5> 
                <a href="https://www.facebook.com/konstantinos.psyxogios"
                className="facebook-social"><FontAwesomeIcon icon={faFacebook} size="2x"/>
                
                
                </a>
                <a href="https://www.instagram.com/kwstantinos_ps/?hl=el"
                className="instagram-social"><FontAwesomeIcon icon={faInstagram} size="2x"/>
                
                </a>
             

                

            </div>
    

        );
    }
}
 
export default SocialConnect;  


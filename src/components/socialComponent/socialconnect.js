import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faYoutube,
    faGithub
} from "@fortawesome/free-brands-svg-icons";
import "./socialconnect.css";

class SocialConnect extends Component {
        render() { 
        return (  

            <div className="social-container"> 
                <h5>@KonstantinosPs</h5> 
                <a href="https://github.com/KonstantinosPs/Appathon_InternetAndApps"
                className="github"><FontAwesomeIcon icon={faGithub} size="2x"/>

                </a>
                <a href="https://www.facebook.com/konstantinos.psyxogios"
                className="facebook-social"><FontAwesomeIcon icon={faFacebook} size="2x"/>
                </a>
                <a href="https://www.youtube.com/watch?v=DV1Stm0YQQ0&feature=youtu.be"
                className="youtube-social"><FontAwesomeIcon icon={faYoutube} size="2x"/>

                </a>
                <a href="https://www.instagram.com/kwstantinos_ps/?hl=el"
                className="instagram-social"><FontAwesomeIcon icon={faInstagram} size="2x"/>
                
                </a>
             

                

            </div>
    

        );
    }
}
 
export default SocialConnect;  

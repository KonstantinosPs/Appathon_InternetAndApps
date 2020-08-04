import React, {Component} from 'react';
import SocialConnect from '../socialComponent/socialconnect';


class Contact extends Component {
        render() { 
        return (  

            <div className="contact">
             <h1>Contact</h1>
             <h5>Full Name: Konstantinos Psychogios</h5>
             <h5>AM: 03118683</h5>
             <h5>Semester: 8th</h5>
             <h5>Email: el18683@mail.ntua.gr</h5>
             <br></br>
             <h2>Connect with me:</h2>
            <SocialConnect/>           

                

            </div>
    

        );
    }
}
 
export default Contact;  


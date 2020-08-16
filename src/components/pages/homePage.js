import React, {Component} from 'react';
import './homePage.css'
import Logo from './images/poweredby.png';
class Homepage extends Component {
        render() { 
        return (  

            <div className="homepage">
             <h1>Internet and Applications Appathon Project</h1>    
             <p>
                 Η δικτυακή εφαρμογή μπορεί να παρουσιάσει όλες τις χώρες στις οποίες έχουν λάβει χώρα κλινικές μελέτες για μία συγκεκριμένη ασθένεια. 
                 Το input θα είναι το όνομα της ασθένειας το οποίο θα το ορίζει ο χρήστης μέσω της web σελίδας 
                 καθώς και το εύρος της χρονικής περιόδου που έλαβαν οι κλινικές μελέτες χώρα και το output θα είναι οι χώρες ταξινομημένες ανάλογα
                 με τον αριθμό των κλινικών μελετών.Η εξόρυξη των δεδομένων των κλινικών μελετών γίνεται μέσω api από την ιστοσελίδα <a href="https://clinicaltrials.gov">Clinicaltrials.gov</a></p>   
                <img src={Logo} alt='' className="poweredBy"/>
            </div>
    

        );
    }
}
 
export default Homepage;  

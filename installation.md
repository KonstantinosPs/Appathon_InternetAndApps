## Installation Instructions

1) Στην αρχή εγκαθιστούμε το node.js από την σελίδα https://nodejs.org/en/

2) Στην συνέχεια αφού κάνουμε λήψη τον κώδικα απο την σελίδα του Github μου https://github.com/KonstantinosPs/Appathon_InternetAndApps 
τον μεταφέρουμε μέσα στον φάκελο users του εκάστοτε Η/Υ.Ανήγουμε ένα command prompt και κάνουμε αλλαγή στο directory ώστε να δείχνει στον
φάκελο του κώδικα που μόλις μεταφέραμε πληκτρολογώντας την εντολή cd Appathon_InternetAndApps-master

3) Στην συνέχεια εγκαθιστούμε καθεμμία βιβλιοθήκη πληκτρολογώντας τις παρακάτω εντολές ξεχωριστά


          npm i --dev--save react-router-dom

          npm i --save @fortawesome/fontawesome-svg-core

          npm i --save @fortawesome/react-fontawesome

          npm i --save @fortawesome/free-brands-svg-icons

          npm install --save google-maps-react

          npm install --save react-geocode

          npm install jquery

4) Εφόσον τελειώσει η εγκατάσταση όλων των βιβλιοθηκών εκκινούμε την εφαρμογή μας πληκτρολογώντας npm start

5) Ανοίγουμε το Eclipse και φορτώνουμε το Java(Servlet) ως εξής File->Open Projects from File System-> και επιλέγουμε το project που κατεβάσαμε απο το github "AppathonServlet".

6) Στην συνέχεια δεξί κλικ στο Project και πατάμε Run As -> Run on Server -> Επιλέγουμε ως server τον Apache Tomcat v9.0 Server at localhost -> και πατάμε finish και το servlet είναι έτοιμο να χρησιμοποιηθεί από το front end

7) Τώρα είμαστε έτοιμοι να χρησιμοποιηθεί η εφαρμογή στην τοποθεσία http://localhost:3000/Appathon_InternetAndApps


import React from 'react';
import{
  BrowserRouter as Router,
  Route
}from 'react-router-dom';

//components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import Search from './components/pages/search';
import Contact from './components/pages/contact';
import Resultpage from './components/pages/resultPage';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      
      <Route exact path='/Appathon_InternetAndApps' component={Homepage} />
      <Route exact path='/Search' component={Search} />
      <Route exact path='/Contact' component={Contact} />
      <Route exact path='/Results' component={Resultpage} />

      <Footer />

    </div>
    </Router>
  );
}

export default App;

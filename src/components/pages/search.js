import React, {Component} from 'react';
import SearchForm from '../searchComponent/searchform';

class Search extends Component {
        render() { 
        return (  

            <div className="search">
             <h1>Search Clinical Studies</h1>    
             <SearchForm />   

            </div>
    

        );
    }
}
 
export default Search;  


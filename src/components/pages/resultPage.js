import React, {Component} from 'react';
import Table from 'react-bootstrap/Table';
import Map from '../mapComponent/map';
class Resultpage extends Component {
 
  sortByNrOfStudies(){

      var y = this.props.studies;
      var x = this.props.countries;
      for (var i=0;i<=y.length-1;i++){
        for (var j=i+1;j<=y.length;j++){
          if (y[j]>y[i]){
              var temp = y[j];
              y[j] = y[i];
              y[i] = temp;
             var temp1 = x[j];
              x[j] = x[i];
              x[i] = temp1;
              
          }
        }

      }
      return [x,y]
    }


        render() {
          const locationcountries = this.props.countries;
          const nrofstudies = this.props.studies;
          this.sortByNrOfStudies();
           return (  
        <div className="result">
         <h1>Results</h1>    
        <h5>Οι χώρες ταξινομημένες ανάλογα με τον αριθμό των κλινικών μελετών</h5>
        <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Country</th>
        <th>Number of studies</th>
          </tr>
    </thead>
    <tbody>
    {locationcountries.map((value,index)=>(
        <tr>   
          <td>{index+1}</td>
          <td>{locationcountries[index]}</td>
          <td>{nrofstudies[index]}</td>
        </tr> 
        ))};  
    </tbody>
</Table>
<h4>Απεικόνιση των παραπάνω χωρών με τις αντίστοιχες μελέτες πάνω στο χάρτη:</h4>
<Map countries={locationcountries} studies={nrofstudies} />
      
      </div>
    

        );
    }
}
 
export default Resultpage;  


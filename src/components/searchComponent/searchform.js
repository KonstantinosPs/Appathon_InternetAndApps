import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Resultpage from '../pages/resultPage';
import $ from 'jquery';


class SearchForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            disease:"",
            dateFrom:null,
            dateTo:null,
            items: []  ,
            isLoaded: false,
            url:"",
        }

    }

    handleSubmit = (event) => {
        event.preventDefault()
        const data = this.state
        var self = this
        if(data.disease !== "" && data.dateFrom !== null && data.dateTo !== null){
            var site = 'https://clinicaltrials.gov/api/query/study_fields?expr='+ this.state.disease +'%20AND%20AREA[StartDate]RANGE['+this.state.dateFrom+',MAX]%20AND%20AREA[CompletionDate]RANGE[MIN,'+this.state.dateTo+']&fields=LocationCountry,StartDate,CompletionDate&fmt=json&max_rnk=1000'
            this.setState({
                url:site,    
            });
             let ajaxResult=[];
            $(document).ready(function(){
            $.ajax({
                type: "POST",
                async: true,
                url: "http://localhost:8080/AppathonServlet/JsonServlet",
                data: {
                    reqValue:site
                },
                success: function(response) {
                   console.log("Hello There")
                   self.setState({
                    isLoaded:true,
                    items:response.StudyFieldsResponse.StudyFields,
                })
                
                 },  
                error: function(e){
                    alert('An error occured: ' + e);
                  }
                  
            });
        });
        
    }
        // console.log(site) na checkarw t site
        //  Αντικαταστάθηκε από το jquery στο Java Servlet που δημιούργησα για 
        // το fetch των json data από το clinical trials.
            // fetch(site)
            //     .then(res => res.json())
            //     .then(json =>{
            //         this.setState({
            //             isLoaded:true,
            //             items:json.StudyFieldsResponse.StudyFields,
            //         })
            //     })      
        else {
            alert("Παρακαλώ συμπληρώστε όλα τα πεδία της φόρμας για να ολοκληρωθεί η αναζήτηση!");
        
        }
    }

          handleInputChange = (event) => {
            this.setState({
                [event.target.name]:event.target.value
             
            })
                       }
                
                   

        render() { 

            var {isLoaded, items} = this.state;
            let nrofstudies = [];
            let locationcntry = []; 
            
            if(isLoaded===true){
              // console.log(items); check ta json
              items.map((postDetail,index)=>{
                var prevValue = null;
                postDetail.LocationCountry.map((value2)=>{
                    var locationFound = false;
                        if (prevValue !== value2 ){
                    locationcntry.map((value1,index1)=>{
                        if (value1 === value2 && !locationFound){ 
                
                            nrofstudies[index1] = nrofstudies[index1] + 1;
                            locationFound = true;
                        
                        }
                              
                
                    })
                
                    if (locationFound === false) {    
            
                        locationcntry.push(value2);
                        nrofstudies.push(1);
                        
                
                     }
                     prevValue = value2 ;
                    }
                })
                
                
            
                
                                        
            
                })

                return(
                <Resultpage countries={locationcntry} studies={nrofstudies}/>   
                    )
            }       
            else{
        return (  

            <div className="searchform">
            <h3>Find a study</h3>
            <Form onSubmit={this.handleSubmit}>
               <Form.Group controlId="searchStudy">
                    <Form.Label>Παρακαλώ πληκτρολογήστε την ασθένεια:</Form.Label>
                    <Form.Control type="text" placeholder="Πληκτρολογήστε εδώ..." name="disease" onChange={this.handleInputChange}/>
                </Form.Group>

                <Form.Group controlId="choosedate">
                    <Form.Label>Επιλέξτε την χρονική περίδο που οι μελέτες έλαβαν χώρα</Form.Label>
                    <br></br>
                    <Form.Label>Ημερομηνία έναρξης των μελετών:</Form.Label>
                    <Form.Control type="date" placeholder="Πληκτρολογήστε εδώ..." name="dateFrom" onChange={this.handleInputChange}/>
                    <Form.Label>Ημερομηνία λήξης των μελετών</Form.Label>
                    <Form.Control type="date" placeholder="Πληκτρολογήστε εδώ..." name="dateTo" onChange={this.handleInputChange}/>
                    <Form.Text className="text-muted">
                    DD/MM/YY
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit" >
                        Submit
                    </Button>
            </Form>
               
            </div>
    

        );
            }
    }
}
 
export default SearchForm;  


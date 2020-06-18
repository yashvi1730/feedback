import React,{Component} from 'react';
import './box3.css';

class Box3 extends Component{
    constructor(){
        super()
        this.state = {
            

        };
 
    }
   

    render(){
        return(
           <div>
                <div className="container" id="contborder">
                    <div className="row">
                      <p style={{paddingTop: "25px", paddingLeft: "10px"}}><strong>Medical History</strong></p>
                    </div>

                    <div className="row">
                      <div className="col-md-4">
                      <p style={{paddingLeft: "15px"}}>List down the medications you are on for PCOS</p>
                      </div>
                      <div className="col-md-8">
                      <input type="text" style={{width:"700px"}}></input>
                    </div>
                    </div>

                    <div className="row">
                      <div className="col-md-4">
                      <p style={{paddingLeft: "15px"}}>List down any other medication you are on</p>
                      </div>
                      <div className="col-md-8">
                      <input type="text" style={{width:"700px"}}></input>
                    </div>
                    </div>

                    <div className="row">
                      <div className="col-md-4">
                      <p style={{paddingLeft: "15px"}}>List down your allergies</p>
                      </div>
                      <div className="col-md-8">
                      <input type="text" style={{width:"700px"}}></input>
                    </div>
                    </div>

                    <div className="row " style={{marginLeft:"85%",marginBottom:"2.5%"}} id="box3button">
                    <a href="/box4" className="myButton">Continue</a>
                   
                    </div>
                </div>
           </div>

        )
    }
}

export default Box3;



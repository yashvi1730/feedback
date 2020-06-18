import React,{Component} from 'react';
import './box6.css';

class Box6 extends Component{
    constructor(){
        super()
        this.state={

        };
    }


    render(){
        return(
            <div>
                <div className="container" id="contborder">
                    <div className="row">
                        <p style={{paddingLeft: "15px"}}><strong>Scheduling Appointment</strong></p>
                    </div>

                    <div className="row">
                        <p style={{paddingLeft:"15px"}}>Select time slot</p>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <p>Select Date:</p>
                        </div>
                        <div className="col-md-6">
                            <p>Select Time Slot:</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                           <input type="date" style={{width:"200px",height:"200px",marginLeft:"15%"}}></input>
                        </div>

                        <div className="col-md-6">
                         <select  > 
                            <option value ="0"> Please select </option>
                            <option value = "08:30" > 08:30 </option>
                            <option value = "08:45" > 08:45 </option>
                            <option value = "09:00" > 09:00 </option>
                            <option value = "09:15" > 09:15 </option>
                            <option value = "09:30" > 09:30 </option>
                            <option value = "09:45" > 09:45 </option>
                            <option value = "10:00" > 10:00 </option>
                            <option value = "10:15" > 10:15 </option>
                            <option value = "10:30" > 10:30 </option>
                            <option value = "10:45" > 10:45 </option>
                            <option value = "11:00" > 11:00 </option>
                            <option value = "11:15" > 11:15 </option>
                            <option value = "11:30" > 11:30 </option>
                            <option value = "11:45" > 11:45 </option>
                            <option value = "12:00" > 12:00 </option>
                            <option value = "12:15" > 12:15 </option>
                            <option value = "12:30" > 12:30 </option>
                            <option value = "12:45" > 12:45 </option>
                            <option value = "13:00" > 13:00 </option>
                            <option value = "13:15" > 13:15 </option>
                            <option value = "13:30" > 13:30 </option>
                            <option value = "13:45" > 13:45 </option>
                            <option value = "14:00" > 14:00 </option>
                            <option value = "14:15" > 14:15 </option>
                            <option value = "14:30" > 14:30 </option>
                            <option value = "14:45" > 14:45 </option>
                            <option value = "15:00" > 15:00 </option>
                            <option value = "15:15" > 15:15 </option>
                            <option value = "15:30" > 15:30 </option>
                            <option value = "15:45" > 15:45 </option>
                            <option value = "16:00" > 16:00 </option>
                            <option value = "16:15" > 16:15 </option>
                            <option value = "16:30" > 16:30 </option>
                            <option value = "16:45" > 16:45 </option>
                            <option value = "17:00" > 17:00 </option>
                            
                         </select>
                        </div>
                    </div>

                    <div className="row " style={{marginLeft:"85%",marginBottom:"2.5%"}} id="box3button">
                    <a href="/box7" className="myButton">Continue</a>
                   </div>

                </div>
               
                
            </div>

        )
    }
}

export default Box6;
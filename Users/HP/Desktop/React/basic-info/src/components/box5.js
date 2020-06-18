import React,{Component} from 'react';
import './box5.css';

class Box5 extends Component{
    constructor(){
        super()
        this.state={
            apptoption:"",

        };
        this.apptHandle=this.apptHandle.bind(this)
    }

    apptHandle(e){
        this.setState({apptoption:e.target.value})
    }


    render(){
        return(
            <div>
                 <div className="container" id="contborder">
                    <div className="row">
                        <p style={{paddingLeft: "15px"}}><strong>Reason for call</strong></p>
                    </div>

                    <div className="row">
                        <p style={{paddingLeft: "30px"}}>What is the purpose of Scheduling the appointment with the doctor?</p>
                    </div>

                    <div className="row">
                        <input style={{marginLeft: "2.5%"}} type="radio" value="0" checked={this.state.apptoption==="0"} onChange={this.apptHandle}></input>
                        <p style={{marginTop:"-0.75%" ,paddingLeft:"1%"}}>Current treatment does not seem effective</p>
                    </div>

                    <div className="row">
                        <input style={{marginLeft: "2.5%"}} type="radio" value="1" checked={this.state.apptoption==="1"} onChange={this.apptHandle}></input>
                        <p style={{marginTop:"-0.75%" ,paddingLeft:"1%"}}>Want to change the current treatment</p>
                    </div>

                    <div className="row">
                        <input style={{marginLeft: "2.5%"}} type="radio" value="2" checked={this.state.apptoption==="2"} onChange={this.apptHandle}></input>
                        <p style={{marginTop:"-0.75%" ,paddingLeft:"1%"}}>Symptoms have worsened</p>
                    </div>

                    <div className="row">
                        <input style={{marginLeft: "2.5%"}} type="radio" value="3" checked={this.state.apptoption==="3"} onChange={this.apptHandle}></input>
                        <p style={{marginTop:"-0.75%" ,paddingLeft:"1%"}}>New symptoms have emerged related to PCOS</p>
                    </div>

                    <div className="row">
                        <input style={{marginLeft: "2.5%"}} type="radio" value="4" checked={this.state.apptoption==="4"} onChange={this.apptHandle}></input>
                        <p style={{marginTop:"-0.75%" ,paddingLeft:"1%"}}>Need second opinion</p>
                    </div>
                    <br/>

                    <div className="row">
                        <div className="col-md-3">
                            <p>Please elaborate or provide additional detail for reason of visit</p>
                        </div>

                        <div className="col-md-9">
                            <input type="text" style={{ width:"700px",height:"100px"}}></input>
                        </div>
                    </div>
                    <br/>

                    <div className="row">
                        <p style={{paddingLeft: "30px"}}>Upload any reports/related documents</p>
                    </div>

                    <div className="row">
                        <input style={{marginLeft: "2.5%" , width:"1000px" , height:"100px"}} type="file" ></input>
                    </div>

                    <div className="row " style={{marginLeft:"85%",marginBottom:"2.5%"}} id="box3button">
                    <a href="/box6" className="myButton">Continue</a>
                   
                    </div>

                </div>

            </div>

        )
    }
}

export default Box5;
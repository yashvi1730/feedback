import React,{Component} from 'react';
import './box1.css';
class Box1 extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <div id="box1"> 
                <div className="container" id="contborder">
                    <div className="row divheight" >
                       <p style={{paddingLeft:"20px"}}><strong>Please verify and continue(Auto filled from Account)</strong></p> 

                    </div>

                    <div className="row divrowheight">
                        <div className="col-md-12">
                        <label>Name</label>
                        <input  type="text" ></input>
                        </div>
                    </div>
                    <div className="row divrowheight">
                        <div className="col-md-6">
                            <label>Age</label>
                            <input type="number" />
                        </div>
                        <div className="col-md-6">
                            <label>Email</label>
                            <input type="email"/>
                        </div>
                    </div>

                    <div className="row divrowheight">
                        <div className="col-md-6">
                            <label>City</label>
                            <input type="text"/>
                        </div>
                        <div className="col-md-6">
                            <label>Contact number</label>
                            <input type="tel" />
                        </div>   
                    </div>
                    <div className="row divrowheight">
                        <div className="col-md-6">
                          <label>Weight</label>
                          <input type="number" placeholder="in Kg"/>
                        </div>
                        <div className="col-md-3">
                          <label>Height</label>

                          <input type="number" style={{display:"inline", width:"40px"}}></input>
                          <p style={{display:"inline"}}>Ft.</p>
                          
                    
                        </div>
                        <div className="col-md-3" style={{}} >
                          <input type= "number" style={{display:"inline",width:"40px",marginLeft:"-30%"}}></input>
                          <p style={{display:"inline",marginLeft:"-10%"}}>Inch.</p>
                          </div>
                    </div>
                    <div className="row divrowheight" style={{marginLeft:"80%",marginBottom:"5%"}} id="box1button">
                    <a href="/box2" className="myButton">Continue</a>
                   
                    </div>
                   

                </div>

            </div>

        )
    }
}

export default Box1;
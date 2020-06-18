import React,{Component} from 'react';
import './box4.css';

class Box4 extends Component{
    constructor(){
        super()
        this.state={
           rateoption:"",
           meteroption:"",
           boolsoption:"",
        };
        this.rateHandle=this.rateHandle.bind(this)
        this.meterHandle=this.meterHandle.bind(this)
        this.boolsHandle=this.boolsHandle.bind(this)
    }
    
    rateHandle(e){
        this.setState({rateoption:e.target.value})
    }

    meterHandle(e){
        this.setState({meteroption:e.target.value})
    }

    boolsHandle(e){
        this.setState({boolsoption:e.target.value})
    }




    render(){
        return(
            <div>
                <div className="container" id="contborder">

                    <div className="row">
                        <p style={{paddingTop: "25px", paddingLeft: "10px"}}><strong>Menstrual History</strong></p>
                    </div>

                    <div className="row">
                      <div className="col-md-4">
                      <p style={{paddingLeft: "15px"}}>At what age did you have your first period:</p>
                      </div>
                      <div className="col-md-8">
                      <input type="number" style={{width:"700px"}}></input>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-4">
                      <p style={{paddingLeft: "15px"}}>Date of your last period:</p>
                      </div>
                      <div className="col-md-8">
                      <input type="date" style={{width:"700px"}}></input>
                      </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <p style={{paddingLeft: "15px"}}>Cycle length(Days between 2 periods):</p>
                        </div>
                        <div className="col-md-3">
                            <input type="number"></input><p>days</p>
                        </div>
                        <div className="col-md-5">
                            <p>(Please provide a rough estimate incase not sure)</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <p style={{paddingLeft: "15px"}}>Duration of Flow:</p>
                        </div>
                        <div className="col-md-3">
                            <input type="number"></input><p>days</p>
                        </div>
                    </div>

                    <div className="row">
                        <p style={{paddingLeft: "30px"}}>Amount of flow:(heavy flow is bleeding with clots or soaking 16 full size pads/tampons in an entire period)</p>
                    </div>

                    <div className="row">
                        <input style={{marginLeft: "2.5%"}} type="radio" value="0" checked={this.state.rateoption==="0"} onChange={this.rateHandle}></input>
                        <p style={{marginTop:"-0.75%" ,paddingLeft:"1%"}}>Heavy</p>
                    </div>

                    <div className="row">
                        <input style={{marginLeft: "2.5%"}} type="radio" value="1" checked={this.state.rateoption==="1"} onChange={this.rateHandle}></input>
                        <p style={{marginTop:"-0.75%" ,paddingLeft:"1%"}}>Medium</p>
                    </div>

                    <div className="row">
                        <input style={{marginLeft: "2.5%"}} type="radio" value="2" checked={this.state.rateoption==="2"} onChange={this.rateHandle}></input>
                        <p style={{marginTop:"-0.75%" ,paddingLeft:"1%"}}>Low</p>
                    </div>

                    <div className="row">
                        <p style={{paddingLeft: "30px"}}>Associated pain with period</p>
                    </div>

                    <div className="row">
                        <p style={{paddingLeft: "200px"}}>1</p>
                        <p style={{paddingLeft: "50px"}}>2</p>
                        <p style={{paddingLeft: "50px"}}>3</p>
                        <p style={{paddingLeft: "50px"}}>4</p>
                        <p style={{paddingLeft: "50px"}}>5</p>
                    </div>

                    <div className="row">
                        <input type="radio" style={{marginLeft: "17.5%"}} value="0" checked={this.state.meteroption==="0"} onChange={this.meterHandle}></input>
                        <input type="radio" style={{marginLeft: "4%"}} value="1" checked={this.state.meteroption==="1"} onChange={this.meterHandle}></input>
                        <input type="radio" style={{marginLeft: "4%"}} value="2" checked={this.state.meteroption==="2"} onChange={this.meterHandle}></input>
                        <input type="radio" style={{marginLeft: "4%"}} value="3" checked={this.state.meteroption==="3"} onChange={this.meterHandle}></input>
                        <input type="radio" style={{marginLeft: "4%"}} value="4" checked={this.state.meteroption==="4"} onChange={this.meterHandle}></input>
                    </div>

                    <div className="row">
                        <p style={{paddingLeft: "100px"}}>Very Little</p>
                        <p style={{paddingLeft: "300px"}}>Extreme Pain</p>
                    </div>

                    <div className="row">
                        <p style={{paddingLeft: "30px"}}>Intermenstrual bleeding/spotting:</p>
                    </div>

                    <div className="row">
                        <input style={{marginLeft: "2.5%"}} type="radio" value="0" checked={this.state.boolsoption==="0"} onChange={this.boolsHandle}></input>
                        <p style={{marginTop:"-0.75%" ,paddingLeft:"1%"}}>Yes</p>
                    </div>

                    <div className="row">
                        <input style={{marginLeft: "2.5%"}} type="radio" value="1" checked={this.state.boolsoption==="1"} onChange={this.boolsHandle}></input>
                        <p style={{marginTop:"-0.75%" ,paddingLeft:"1%"}}>No</p>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <p style={{paddingLeft: "15px"}}>If yes,how many days does it occur?</p>
                        </div>
                        <div className="col-md-3">
                            <input type="number" style={{paddingLeft:"%"}}></input><p> days</p>
                        </div>
                    </div>

                    <div className="row " style={{marginLeft:"85%",marginBottom:"2.5%"}} id="box3button">
                    <a href="/box5" className="myButton">Continue</a>
                   
                    </div>





                   






                </div>

            </div>
        )
    }
}

export default Box4;
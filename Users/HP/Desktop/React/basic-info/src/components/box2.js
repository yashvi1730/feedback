import React,{Component} from 'react';


class box2 extends Component{
    constructor(){
        super() 
            this.state ={
                    selectedOption:"",
            };
            this.handleOption = this.handleOption.bind(this)
            this.handleclick1 = this.handleclick1.bind(this)
            this.handleclick2 = this.handleclick2.bind(this)
            this.handleclick3 = this.handleclick3.bind(this)
            this.handleclick4 = this.handleclick4.bind(this)
            this.handleclick5 = this.handleclick5.bind(this)
            this.handleclick6 = this.handleclick6.bind(this)
            this.handleclick7 = this.handleclick7.bind(this)
            this.handleclick8 = this.handleclick8.bind(this)
        
    }
    handleOption(e) {
        this.setState({selectedOption:e.target.value})
    }
    handleclick1(e){
        this.setState({check1:true})
    }
    handleclick2(e){
        this.setState({check2:true})
    }
    handleclick3(e){
        this.setState({check3:true})
    }
    handleclick4(e){
        this.setState({check4:true})
    }
    handleclick5(e){
        this.setState({check5:true})
    }
    handleclick6(e){
        this.setState({check6:true})
    }
    handleclick7(e){
        this.setState({check7:true})
    }
    handleclick8(e){
        this.setState({check8:true})
    }



    render(){
        return(
            <div>
                <div className="container" >
                    <div className="row">
                        <p style={{paddingTop:"5%"}}><strong>Please fill in the below information to help your doctor understand your symptoms better</strong></p>
                    </div>
                    <div className="row">
                    <p style={{paddingTop:"1%"}}>At what age were you diagnosed with PCOS?                                        </p>
                    
                    </div>
                    <div className="row">
                        <input type="radio" value="0" checked={this.state.selectedOption === "0"} onChange={this.handleOption}></input><p style={{marginTop:"-0.75%" ,paddingLeft:"1%"}}>Less than 20</p>
                        
                    </div>
                    <div className="row">
                        <input type="radio" value="1" checked={this.state.selectedOption === "1"} onChange={this.handleOption}></input><p style={{marginTop:"-0.75%" ,paddingLeft:"1%"}}>20-30</p>
                        
                    </div>
                    <div className="row">
                        <input type="radio" value="2" checked={this.state.selectedOption==="2"} onChange={this.handleOption}></input><p style={{marginTop:"-0.75%" ,paddingLeft:"1%"}}>More than 30</p>
                    </div>
                    <div className="row">
                        <input type="radio" value="3" checked={this.state.selectedOption === "3"} onChange={this.handleOption}></input><p style={{marginTop:"-0.75%" ,paddingLeft:"1%"}}>Not applicable</p>
                        
                    </div>
                    <hr style={{width:"100%" ,color:"black",paddingTop:"0%"}} />
                    




                    <div className="row">
                    <p style={{paddingTop:"1%"}}>At what age were you diagnosed with PCOS?                                        </p>
                    
                    </div>
                    <div className="row">
                        <input type="checkbox" onClick={this.handleclick1}></input><p style={{marginTop:"-0.75%" ,paddingLeft:"1%"}}>Less than 20</p>
                        
                    </div>
                    <div className="row">
                        <input type="checkbox" onClick={this.handleclick2}></input><p style={{marginTop:"-0.75%" ,paddingLeft:"1%"}}>20-30</p>
                        
                    </div>
                    <div className="row">
                        <input type="checkbox" onClick={this.handleclick3}></input><p style={{marginTop:"-0.75%" ,paddingLeft:"1%"}}>More than 30</p>
                        
                    </div>
                    <div className="row">
                        <input type="checkbox" onClick={this.handleclick4}></input><p style={{marginTop:"-0.75%" ,paddingLeft:"1%"}}>Not applicable</p>
                        
                    </div>
                    <div className="row">
                        <input type="checkbox" onClick={this.handleclick5}></input><p style={{marginTop:"-0.75%" ,paddingLeft:"1%"}}>Less than 20</p>
                        
                    </div>
                    <div className="row">
                        <input type="checkbox" onClick={this.handleclick6}></input><p style={{marginTop:"-0.75%" ,paddingLeft:"1%"}}>20-30</p>
                        
                    </div>
                    <div className="row">
                        <input type="checkbox" onClick={this.handleclick7}></input><p style={{marginTop:"-0.75%" ,paddingLeft:"1%"}}>More than 30</p>
                        
                    </div>
                    <div className="row">
                        <input type="checkbox" onClick={this.handleclick8}></input><p style={{marginTop:"-0.75%" ,paddingLeft:"1%"}}>Not applicable</p>
                        
                    </div>
                    <hr style={{width:"100%" ,color:"black",paddingTop:"0%"}} />



                    <div className="row">
                    <p style={{paddingTop:"1%"}}>At what age were you diagnosed with PCOS?                                        </p>
                    
                    </div>
                    <div className="row">
                        <input type="checkbox"></input><p style={{marginTop:"-0.75%" ,paddingLeft:"1%"}}>Less than 20</p>
                        
                    </div>
                    <div className="row">
                        <input type="checkbox"></input><p style={{marginTop:"-0.75%" ,paddingLeft:"1%"}}>20-30</p>
                        
                    </div>
                    <div className="row">
                        <input type="checkbox"></input><p style={{marginTop:"-0.75%" ,paddingLeft:"1%"}}>More than 30</p>
                        
                    </div>
                    <div className="row">
                        <input type="checkbox"></input><p style={{marginTop:"-0.75%" ,paddingLeft:"1%"}}>Not applicable</p>
                        
                    </div>
                    <div className="row">
                        <input type="checkbox"></input><p style={{marginTop:"-0.75%" ,paddingLeft:"1%"}}>Less than 20</p>
                        
                    </div>
                    <div className="row">
                        <input type="checkbox"></input><p style={{marginTop:"-0.75%" ,paddingLeft:"1%"}}>20-30</p>
                        
                    </div>
                    <div className="row">
                        <input type="checkbox"></input><p style={{marginTop:"-0.75%" ,paddingLeft:"1%"}}>More than 30</p>
                        
                    </div>
                    <div className="row">
                        <input type="checkbox"></input><p style={{marginTop:"-0.75%" ,paddingLeft:"1%"}}>Not applicable</p>
                        
                    </div>
                    <hr style={{width:"100%" ,color:"black",paddingTop:"0%"}} />

                    <a style={{marginLeft:"80%"}} className="myButton" href="/box3">Continue</a>
                </div>
            </div>
        )
    }
}
export default box2;
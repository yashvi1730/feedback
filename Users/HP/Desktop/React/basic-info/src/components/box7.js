import React,{Component} from 'react';

import './box7.css';

class Box7 extends Component{
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
                        <img style={{paddingLeft:"31%"}}alt="correct" width="750" height="300" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSa8LCsMnSKbUnrXphXHMRCDGYAUROXQSq8yegOEOGKe8BXtm--&usqp=CAU"></img>
                    </div>

                    <div className="row">
                        <p style={{paddingLeft:"25%"}}><strong>Your appointment has been schedule for June 17,4:30 PM</strong></p>
                    </div>

                    <div className="row">
                        <a style={{paddingLeft:"10%"}} href="abc"><u>Get appointment on Email</u></a>
                    </div>

                    <div className="row">
                        <a style={{paddingLeft:"10%"}} href="abc"><u>Get appointment on SMS</u></a>
                    </div>

                    <div className="row" style={{marginBottom:"2.5%"}}>
                        <a style={{paddingLeft:"10%"}} href="abc"><u>View appointment in My Account</u></a>
                    </div>
                </div>

            </div>
        )
    }
}

export default Box7;
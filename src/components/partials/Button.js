import React, { Component } from 'react';

const btnDanger = "btn btn-danger";
const btnSuccess = "btn btn-success";
const btnTextYes = "YES";
const btnTextNo = "NO";
const demoTextTrue = "Please click here!";
const demoTextFalse = "You clicked the button!";

// export default Button;

export default class Button extends Component {
    constructor(props){
        super(props);
        // console.log(this.props);
        this.state = {
            buttonClicked: true,
            buttonText: true,
            buttonColor: true,
            demoText: true
        }
        this.toggleButtonClick = this.toggleButtonClick.bind(this);
    }
    
    toggleButtonClick() {
        this.setState({
            buttonClicked: !this.state.buttonClicked,
            buttonText: !this.state.buttonText,
            buttonColor: !this.state.buttonColor,
            demoText: !this.state.demoText
        }, () => {
            // console.log(this.state);
        });
    }

    render(){
        return(
            <div>
                <h3>Button Component</h3>
                <button 
                    onClick={this.toggleButtonClick} 
                    className={this.state.buttonColor ? btnDanger : btnSuccess }
                >{this.state.buttonText ? btnTextNo : btnTextYes }
                </button>

                <h5>
                    {this.state.demoText ? demoTextTrue : demoTextFalse}
                </h5>
            </div>
        )
    }
}
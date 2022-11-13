import React from "react";
import Buttons from "../Buttons";
import MaxValue from "../MaxValue";
import Steps from "../Steps";
import "./style.css"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0,
            activeStep: "",
            activeMAxValue: ""
        }
    }
    handleIncrement = () => {
        if (!this.state.activeStep) {
            alert("Please select a step")

        }
        else
            if (!this.state.activeMAxValue) {
                this.setState({ value: Number(this.state.value) + Number(this.state.activeStep) })
                console.log(Number(this.state.value) + Number(this.state.activeStep))

            } else
                if ((this.state.activeMAxValue < Number(this.state.value) + Number(this.state.activeStep))) {
                    alert("Value can't exceed max assigned value")
                } else {

                    this.setState({ value: !(this.state.activeMAxValue < Number(this.state.value) + Number(this.state.activeStep)) ? Number(this.state.value) + Number(this.state.activeStep) : this.state.value })
                }

    }
    handleDecrement = () => {
        this.setState({ value: Number(this.state.value) - Number(this.state.activeStep) })
    }
    handleReset = () => {
        this.setState({ value: 0 })
    }
    handleActiveStep = (event) => {
        this.setState({ activeStep: event })
        console.log(event)
    }
    handleActiveMaxValue = (event) => {
        if (this.state.value < event) {
            this.setState({ activeMAxValue: event })

        } else
            this.setState({ activeMAxValue: event, value: event })
        console.log(event)

    }
   
    render() {
        return (
            <>
            <center>
                <div>
                    <h1>{this.state.value}</h1>
                </div>
                <div className="steps-container flex">
                    <Steps activeStep = {this.state.activeStep} handleActiveStep = {this.handleActiveStep} />
                    <MaxValue activeMAxValue = {this.state.activeMAxValue} handleActiveMaxValue={this.handleActiveMaxValue} />
                </div>
                <Buttons value = {this.state.value} handleIncrement = {this.handleIncrement} handleDecrement = {this.handleDecrement} handleReset = {this.handleReset} />
            </center>
            </>
        )
    }
}
export default App;

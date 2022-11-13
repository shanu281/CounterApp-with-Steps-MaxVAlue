import React from "react";
import "./style.css"

class Steps extends React.Component {
    constructor(props) {
        super(props)
    }
   

    render() {
        return (
            <>
                <div className="steps-value">
                    <h1>Steps</h1>
                    <div className="flex">
                        <button className={this.props.activeStep === 5 ? "active" : "steps"} onClick={() => this.props.handleActiveStep(5)}>5</button>
                        <button className={this.props.activeStep === 10 ? "active" : "steps"} onClick={() => this.props.handleActiveStep(10)}>10</button>
                        <button className={this.props.activeStep === 15 ? "active" : "steps"} onClick={() => this.props.handleActiveStep(15)}>15</button>
                    </div>
                </div>
            </>
        )
    }
}
export default Steps;
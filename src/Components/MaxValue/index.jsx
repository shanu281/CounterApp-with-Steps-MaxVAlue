import React from "react";
import "./style.css"

class MaxValue extends React.Component {
    constructor(props) {
        super(props)
    }
   
    render() {
        return (
            <>
                <div className="max-value">
                    <h1>Max Value</h1>
                    <div className="flex">
                        <button className={this.props.activeMAxValue === 15 ? "active" : "steps"} onClick={() => this.props.handleActiveMaxValue(15)}>15</button>
                        <button className={this.props.activeMAxValue === 100 ? "active" : "steps"} onClick={() => this.props.handleActiveMaxValue(100)}>100</button>
                        <button className={this.props.activeMAxValue === 200 ? "active" : "steps"} onClick={() => this.props.handleActiveMaxValue(200)}>200</button>
                    </div>
                </div>
            </>
        )
    }
}
export default MaxValue;
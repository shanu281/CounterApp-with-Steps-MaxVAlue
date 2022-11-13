import React from "react";
import "./style.css"

class Buttons extends React.Component {
    constructor(props) {
        super(props)
    }
   
    render() {
        return (
            <>
                <div className="buttons">
                    <button onClick={this.props.handleIncrement}><h3>Increment</h3></button>
                    <button onClick={this.props.handleDecrement}><h3>Decrement</h3></button>
                    <button onClick={this.props.handleReset}><h3>Reset</h3></button>
                </div>
            </>
        )
    }
}
export default Buttons
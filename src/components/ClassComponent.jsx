import React, { Component } from "react";

class ClassComponent extends Component {

    constructor() {
        super();

        this.state = {
            name: ""
        };
    }

    updateName = (e) => {
        this.setState({ name: e.target.value });
    };

    showName = () => {
        alert(this.state.name);
    };

    render() {

        return (

            <div>

                <h2>SP4 Class Component</h2>

                <input
                    placeholder="Enter Name"
                    onChange={this.updateName}
                />

                <br /><br />

                <button onClick={this.showName}>
                    Show Name
                </button>

            </div>
        );
    }
}

export default ClassComponent;
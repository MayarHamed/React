import { Component } from "react";

class Registration extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: ""
        }
    }
    getName = (e) => {
        this.setState({ name: e.target.value });
    }
    getEmail = (e) => {
        this.setState({ email: e.target.value });
    }
    register = () => {
        this.props.onRegister({ "name": this.state.name, "email": this.state.email })

    }
    render() {
        return (
            <div className="card">
                <div className="reg">
                    <h1>Registration</h1>
                    <div className="form">
                        <input
                            type="text"
                            placeholder="Enter Name"
                            onChange={this.getName}
                        /><br></br>
                        <input
                            type="text"
                            placeholder="Enter Email"
                            onChange={this.getEmail}
                        /><br></br>
                        <button onClick={this.register} >Register</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Registration;
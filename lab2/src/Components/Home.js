import Registration from "./Registration";
import StudentsList from "./Students.json";
import Students from "./Students";
import { Component } from "react";
class Home extends Component {
    constructor() {
        super();
        this.state = {
            AllStudents: StudentsList.Students
        }
    }
    register = (data) => {
        // this.state.AllStudents.push(data)
        this.setState({ AllStudents: [...this.state.AllStudents, data] });

        console.log(this.state.AllStudents)
    }
    render() {
        return (
            <div className="home">
                <Registration onRegister={this.register} />
                <Students list={this.state.AllStudents} />
            </div>
        )
    }
}

export default Home;
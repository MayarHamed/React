import { Component } from "react";
class ElementsClass extends Component {

    Styles = {
        style1: {
            backgroundColor: 'darkred',
            textAlign: 'center',
            color: 'white',
            padding:'10px',
            border: 'none',
            margin:'10px'
        },
        style2:{
            textAlign: 'center',
            padding:'10px',
            margin:'10px' 
        }
    }
    getData = (e) => {
        this.setState({ txt: e.target.value })
    }
    constructor() {
        super();
        this.state = {
            txt: ""
        }
    }
    render() {
        return (
            <div>
                <h1>Task 1</h1><hr></hr><br></br>
                <input
                    type='text'
                    style={this.Styles.style2}
                    value={this.state.txt}
                    onChange={this.getData}
                /><br></br>
                <input readOnly style={this.Styles.style1} type='text' value={this.state.txt} />
            </div>
        )
    }
}

export default ElementsClass;

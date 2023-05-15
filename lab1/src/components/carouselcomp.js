import { Component } from "react";

class NewClass extends Component {

    images = [
        './images/36A4BAB000000578-0-image-m-104_1469634115586.jpg',
        './images/R (1).jpeg',
        './images/R (2).jpeg',
        './images/R.jpeg'
    ]
    constructor() {
        super();
        this.state = {
            currentIndex: 0,
            isPaused: false,
        }
    }
    interval = setInterval(() => {
        if (this.state.isPaused === false) {
            this.setState({ currentIndex: (this.state.currentIndex === this.images.length - 1 ? 0 : this.state.currentIndex + 1) })
        }
    }, 3000);

    nextImage = () => {
        if (this.state.currentIndex === this.images.length - 1) {
            this.setState({ isPaused: true }); // Stop automatic shifting at the last image
        } else {
            this.setState({ currentIndex: this.state.currentIndex + 1 });
        }
    };
    prevImage = () => {
        if (this.state.currentIndex === 0) {
            this.setState({ isPaused: true });// Stop automatic shifting at the first image
        } else {
            this.setState({ currentIndex: this.state.currentIndex - 1 });
        }
    };
    togglePause = () => {
        this.setState({ isPaused: !this.state.isPaused });
    };
    moveBackwards = () => {
        this.setState({ currentIndex: 0 });

    }
    moveForward = () => {
        this.setState({ currentIndex: this.images.length - 1 });
    }
    render() {
        return (
            <div>
                <h1>Task 2</h1><hr></hr><br></br>

                <img src={this.images[this.state.currentIndex]} alt="carousel" width='300px' />

                <div>
                    <button onClick={this.togglePause}>{this.state.isPaused ? 'Resume' : 'Pause'}</button>
                    <button onClick={this.nextImage} disabled={this.state.currentIndex === this.images.length - 1}>
                        Next
                    </button>
                    <button onClick={this.prevImage} disabled={this.state.currentIndex === 0}>
                        Previous
                    </button>
                    <button onClick={this.moveForward}>
                        Move Forward
                    </button>
                    <button onClick={this.moveBackwards}>
                        Move Backwards
                    </button>
                </div>
            </div>
        );
    }
}
export default NewClass;

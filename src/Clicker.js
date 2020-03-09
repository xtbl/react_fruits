import React, {Component} from 'react';

class Clicker extends Component {
    constructor(props){
        super();
        this.state = {randomNum: 1, isMatch: false};
        this.generateRandom = this.generateRandom.bind(this);
    }
    generateRandom() {
        const rand =  Math.floor(Math.random() * 10);
        this.setState({randomNum: rand});
        const matchingNumber = rand === 7;
        this.setState({isMatch: matchingNumber});
    }
    render() {
        return (
           <div>
               <h1>Number is: {this.state.randomNum}</h1>
               {
                (this.state.isMatch)
                    ? <h1>You Win!!!</h1>
                    : <button onClick={this.generateRandom}>Click me!</button>
               }
           </div>
        );

    }
}

export default Clicker;
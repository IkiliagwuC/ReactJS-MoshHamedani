import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() {
        return (
            <div>
                <button
                onClick ={this.handleReset} 
                className = "btn btn-small btn-primary m-2">Reset</button>
                {this.props.counters.map(counter =>
                (<Counter
                key={counter.id}
                onDelete = {this.props.onDelete}
                onIncrement = {this.props.onIncrement}
                counter = {counter}/>))}

            </div>
        );
    }
    //for object destructuring you pick peculiar objects and reference the assignment
    
}
 
export default Counters ;
import React from 'react';
import List from './List';
import data from './data';

class App extends React.Component{
    state = {
        people: data
    }
    handleClick = () => {
        this.setState({people: []})
    }
    render(){
        return(
            <div>
               <h4> {this.state.people.length} birthdays today</h4>
               <List people={this.state.people}/>
               <button onClick={this.handleClick}>Clear All</button>
            </div>
        )
    }
}

export default App;
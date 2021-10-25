import React from 'react';
import List from './List';
import data from './data';

class App extends React.Component{
    state= {
        list: data
    }

    render(){
        return(
           <List list={this.state.list} />
        )
    }
}

export default App;
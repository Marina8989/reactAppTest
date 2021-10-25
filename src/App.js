import React from 'react';
import List from './List';
import data from './data';

class App extends React.Component{
    state= {
        list: data,
        isLoading: false
    }
    handleClear = (item) => {
       const newList = this.state.list.filter(el => el.id !== item.id)
       this.setState({list: newList})
    }
    render(){
        console.log(this.state.list)
        return(
            <div className='body'>
               <h4 className='header'>Our Tours</h4>
               <List list={this.state.list} handleClear={this.handleClear}/>
            </div>
        )
    }
}

export default App;
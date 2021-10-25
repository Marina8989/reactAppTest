import React from 'react';
import List from './List';
import data from './data';

class App extends React.Component{
    state= {
        list: data
    }
    handleClear = (item) => {
       const newList = this.state.list.filter(el => el.id !== item.id)
       this.setState({list: newList})
    }
    handleRead = (item) => {
       const newList = this.state.list.map(el => {
           if(el.id === item.id){
             el.isLoading = !el.isLoading;
           }
           return el;
       })
       this.setState({list: newList})
    }
    render(){
        return(
            <div className='body'>
               <h4 className='header'>Our Tours</h4>
               {this.state.list.length > 0 ? <List list={this.state.list} isLoading={this.state.isLoading} handleClear={this.handleClear} handleRead={this.handleRead}/> : 'Nothing to display'}
            </div>
        )
    }
}

export default App;
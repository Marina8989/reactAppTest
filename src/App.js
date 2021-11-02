import React from 'react';
import data from './data';
import './index.css';

class App extends React.Component{
    state={
        list: data,
        value: 0
    }
    handleClick = (item) => {
       this.setState({...this.state.list, value: item.order})
    }
    render(){
        console.log(this.state.list)
        console.log(this.state.value)
        //const value = this.state.value
        //const {id, title, order, dates, duties, company} = this.state.list[value];
        return(
            <>
               <h3>Experience</h3>
               {this.state.list.map((item) => {
                   return(
                       <button key={item.id} onClick={() => this.handleClick(item)}>{item.company}</button>
                   )
               })}
            </>
        )
    }
}

export default App
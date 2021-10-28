import React from 'react';
import Item from './Item';
import data from './data';
import './index.css';

class App extends React.Component{
    state={
      list: data,
      on: false
    }
    handleClick = (item) => {
        console.log(item)
      const newList = this.state.list.map(el => {
          if(el.id === item.id) {
              el.on = !el.on;
          }
          return el
      })
      this.setState({list: newList})
      console.log(this.state.list)
    }
    render() {
        return(
            <div className='container'>
                <h2>Questions And <br /> Answers About <br /> Login</h2>
                <div>
                  <Item list={this.state.list} handleClick={this.handleClick}/>
                </div>
            </div>
        )
    }
}

export default App
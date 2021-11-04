import React from 'react';
import data from './data';
import './index.css';

class App extends React.Component{
    state ={
        items: data,
        count: 0
    }
     handleSubmit = (e) => {
      e.preventDefault();
      console.log('clicked')
      this.setState({items: data, count: this.state.count})
      console.log(this.state.count)
      
    //   this.setState({items: data, count: e.target.value})
    //   console.log(this.state.count)
     } 
     handleChange = (num) => {
         console.log(num)
         if(num < 0){
           this.setState({...this.state, count: num + 1})
         }else{
           this.setState({...this.state, count: num})
         }
      
      console.log(this.state.count)
     }
    render() {
      //console.log(this.state.items)
      //console.log(this.state.count)
      return(
            <div>
                <h3>Tired of old Lorem Ipsum?</h3>
                <form onSubmit={this.handleSubmit}>
                   <input type='number' value={this.state.count} onChange={() => this.handleChange(this.state.count)} />
                </form>
            </div>
        )
    }
}

export default App
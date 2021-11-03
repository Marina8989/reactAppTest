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
       console.log('submited')
     }

    render() {
      console.log(this.state.items)
      return(
            <div>
                <h3>Tired of old Lorem Ipsum?</h3>
                <form onSubmit={this.handleSubmit}>
                   <input type='number' value={this.state.count} onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}

export default App
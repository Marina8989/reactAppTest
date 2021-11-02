import React from 'react';
import data from './data';
import './index.css';

class App extends React.Component{
    state={
        list: data
    }
    render(){
        console.log(this.state.list)
        return(
            <>
              <h2>Experience</h2>
              <div className='div'>
              {this.state.list.map(item => {
                  const {id, company} = item;
                  return(
                      <h5 key={id}>{company}</h5>
                  )
              })}
              <div>
                  {this.state.list.map((item) => {
                      const {id, order, title, dates, duties, company} = item[value]
                  })}
              </div>
              </div>
            </>
        )
    }
}

export default App
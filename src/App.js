import React from 'react';
import data from './data';
import './index.css';

class App extends React.Component{
    state={
        list: data,
    }
    handleClick = (item) => {
      const newList = this.state.list.filter(el => {
          if(el.order === item.order) {
              return item
          }
          return el
      })
      this.setState({list: newList})
    }
    render(){
        //console.log(this.state.list)
        return(
            <>
              <h2>Experience</h2>
              <div className='div'>
              <div>
                {this.state.list.map(item => {
                    const {id, company, title, dates, duties, order} = item;
                    return(
                        <>
                        <button key={id} onClick={() => this.handleClick(item)}>{company}</button>
                           <h4 >{title}</h4>
                           <h5>{dates}</h5>
                           <h5>{duties}</h5>
                           <h5>{company}</h5>
                           </>
                    )
                })}
              </div>
              <div>
                  {this.state.list.map((item) => {
                      const {id, title, dates, duties, company} = item.order;
                      return (
                          <div key={id}>
                           <h4 >{title}</h4>
                           <h5>{dates}</h5>
                           <h5>{duties}</h5>
                           <h5>{company}</h5>
                          </div>
                      )
                  })}
              </div>
              </div>
            </>
        )
    }
}

export default App
import React from 'react';
import data from './data';
import './index.css';

class App extends React.Component{
    state={
        list: data,
        value: 0
    }
    handleClick = (item) => {
       this.setState({...this.state.list, value: (item.order - 1)})
    }
    render(){
        console.log(this.state.list)
        console.log(this.state.value)
        let value = this.state.value
        const {title, dates, duties} = this.state.list[value];
        return(
            <>
               <h3>Experience</h3>
               {this.state.list.map((item, index) => {
                   return(
                       <button key={index} onClick={() => this.handleClick(item)}>{item.company}</button>
                   )
               })}
               <>
                 <div>
                    <h3>{title}</h3>
                    <h4>{dates}</h4>
                    {duties.map((el, index )=> {
                        return(
                          <>
                           <h3 key={index}>{el}</h3>
                          </>
                        )
                    })}
                 </div>
               </>
            </>
        )
    }
}

export default App
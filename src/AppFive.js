import React from 'react';


class AppFive extends React.Component{
    state={
        counters: [
            {
                id: 1,
                defaultValue: 5,
                increment: 5
            },
            {
                id: 2,
                defaultValue: 15,
                increment: 27
            },
            {
                id: 3,
                defaultValue: 3,
                increment: 1
            },
            {
                id: 4,
                defaultValue: 1
            }
        ]
    }
    handleIncrement = (item) => {
       const newCount = this.state.counters.map(el => {
           if(el.id === item.id) {
             if(!el.increment) {
               el.defaultValue+=17;
           }else{
               el.defaultValue+=el.increment;
           }
          }
           return el;
       })
       this.setState({counters: newCount})
    }
    render() {
        return(
          <>  
           {this.state.counters.map(elem => {
               return (
                   <div>
                      <h4>{elem.defaultValue}</h4>
                      <button onClick={()=> this.handleIncrement(elem)}>increment</button>
                    </div>
               )
           })}
         </>  
        )
    }
}

export default AppFive
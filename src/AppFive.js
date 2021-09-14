import React from 'react';

//class Counter extends React.Component{
    // state={
    //     counter: this.props.defaultCounterValue
    // }
    // handleIncrement = () => {
    //   this.setState({counter: this.state.counter + this.props.increment})
    // }
    //render(){
       // return(
       //  <div>
          //  {this.props.counters.map(counter => <h4>{counter.defaultValue}</h4>)}
          // <button onClick={this.handleIncrement}>increment</button>
        // </div>  
        //)
   // }
//}

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
               el.defaultValue+=1;
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
                   <div key={elem.id}>
                      <h4>{elem.defaultValue}</h4>
                      <button onClick={() => this.handleIncrement(elem)}>increment</button>
                   </div>
               )
           })}
         </>  
        )
    }
}

export default AppFive
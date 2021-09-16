import React from 'react';

const Counter = (props) => {
   return(
       <>
         {props.counters.map(item => {
             const {id, value, incrementor} = item;
             return(
                 <>
                  <h4 key={id}>{value}</h4>
                  <button onClick={() => props.handleIncrement(item.id)}>increment by {incrementor}</button>
                 </>
             )
         })}
       </>
   )
}

class AppSix extends React.Component{
    state={
        counters:[
            {id: 1, value: 5, incrementor: 5},
            {id: 2, value: 15, incrementor: 10},
            {id: 3, value: 7, incrementor: 3},
            {id: 4, value: 13}
        ],
        sorted: false
    }
    handleIncrement = (id) => {
       const newCounter = this.state.counters.map(item => {
           if(item.id === id) {
              item.value += item.incrementor || 1;
           }
           return item;
       })
       this.setState({counters: newCounter});
    }
    handleSort = () => {
      this.setState({sorted: !this.state.sorted})
    }
    render(){
        const newCounter = this.state.counters.sort((a,b) => {
            return this.state.sorted ? a.value - b.value : b.value -a.value
        })
        return(
           <> 
             <Counter counters={newCounter} handleIncrement={this.handleIncrement}/>
             <br />
             <button onClick={this.handleSort}>sort</button>
           </> 
        )
    }
}

export default AppSix
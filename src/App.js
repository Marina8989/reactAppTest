import React from 'react';

const Button = () => {
   return (
       <button>Click</button>
   )
}

const Header = (props) => {
   return(
      <div>
        <h2>{props.name}</h2>
        <h5>{props.number}</h5>
      </div>  
   )
}
class App extends React.Component{
    render(){
        return(
           <> 
            <h2>React Test</h2>
            <Header name={'Marina'} number={32}/>
            <Button />
           </>
        )
    }
}

export default App
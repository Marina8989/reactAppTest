import React from 'react';

const Button = (props) => {
   return (
       <button>{props.text}</button>
   )
}

const Header = (props) => {
   return(
      <div>
        <h2>{props.name}</h2>
        <h5>{props.number}</h5>
        <Button text={props.buttonText}/>
      </div>  
   )
}
class App extends React.Component{
    render(){
        return(
           <> 
            <h2>React Test</h2>
            <Header name={'Marina'} number={32} buttonText={'Log In'}/>
            <Header name={'Albert'} number={35} buttonText={'Log Out'}/>
           </>
        )
    }
}

export default App
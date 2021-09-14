import React from 'react';

const Button = (props) => {
   return(
       <button onClick={() => props.onClick(props.text)} style={{color: 'green'}}>{props.text}</button>
   )
}

class AppTwo extends React.Component{
    handleClick = (string) => {
         console.log(string)
    }
    render(){
        return(
            <> 
              <Button onClick={this.handleClick} text={'Letters'}/>
              <Button onClick={this.handleClick} text={'Number'} />
            </>
        )
    }
}


export default AppTwo
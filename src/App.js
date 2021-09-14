import React from 'react';

const Title = (props) => {
   return(
      <h1>{props.title}</h1>
   )
}
const Text = (props) => {
   return(
      <h6>{props.text}</h6>
   )
}

const InputBox = (props) => {
    return (
       <input type="text" placeholder={props.placeholder} style={{border: '1px solid lightblue', borderRadius: '3px', margin: '.2rem 0'}}/>
    )
}
class App extends React.Component{
    render(){
        return(
           <div style={{textAlign: 'center', margin: 'auto'}}> 
            <Title title={'Create Account'} />
            <h6 style={{ margin: 'auto', border: '1px solid lightblue', borderRadius: '2px', width: '120px'}}>one two three four</h6>
            <Text  text={'or use email for credentials'}/>
            <InputBox placeholder={'Name'} /><br />
            <InputBox placeholder={'Email'} /><br />
            <InputBox placeholder={'Password'} />
           </div>
        )
    }
}

export default App
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

const CheckBox = () => {
    return(
       <>
         <input type="checkbox" id="check" name="check" style={{margin: '.5rem .2rem'}}/>
         <label htmlFor="check">I agree to the Terms and Privacy Policy</label>
       </>
    )
}

const Sign = (props) => {
   return (
      <button style={{color: 'green'}}>{props.btnText}</button>
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
            <InputBox placeholder={'Password'} /><br />
            <CheckBox /><br />
            <Sign btnText={'Sign Up'} />
            <Sign btnText={'Sign In'} />
           </div>
        )
    }
}

export default App
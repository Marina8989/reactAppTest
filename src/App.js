import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    border: 1px solid green;
    margin: .5rem 0;
`
const Container = styled.div`
    margin: auto;
    text-align: center;
`

class Form extends React.Component{
    state={
        inputValue: ''
    }
    handleChange = (e) => {
      this.setState({inputValue: e.target.value})
    }
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.handleSubmit(this.state.inputValue);
      this.setState({inputValue: ''});
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <Input value={this.state.inputValue} onChange={this.handleChange} />
            </form>
        )
    }
}

const Button = (props) => {
    return(
        <button onClick={() => props.handleClick(props.item)}>{props.title}</button>
    )
}

class App extends React.Component{
    state={
        list: []
    }
    handleSubmit = (value) => {
        const item = {
            id: `${Math.random() * 20}`,
            value,
            toggle: false
        }
        const newList = [...this.state.list, item];
        this.setState({list: newList});
    }
    handleClick = (item) => {
      const newList = this.state.list.map(el => {
          if(el === item) {
             el.toggle = !el.toggle;
          }
          return el;
      })
      this.setState({list: newList});
    }
    render() {
        console.log(this.state.list)
        return(
            <Container>
              <h3>ToDo List</h3>
              <Form handleSubmit={this.handleSubmit}/>
              {this.state.list.map(item => {
                  const {id, value} = item
                  return(
                      <div>
                        <h5 key={id} className={this.state.list.toggle ? 'toggle' : ''}>{value}</h5>
                        <Button title="toggle" handleClick={this.handleClick}/>
                      </div>
                  )
              })}
            </Container>
        )
    }
}

export default App
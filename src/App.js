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

class App extends React.Component{
    state={
        list: []
    }
    handleSubmit = (value) => {
        const item = {
            id: `${Math.random() * 20}`,
            value
        }
        const newList = [...this.state.list, item];
        this.setState({list: newList});
    }
    render() {
        return(
            <Container>
              <h3>ToDo List</h3>
              <Form handleSubmit={this.handleSubmit}/>
              {this.state.list.map(item => {
                  const {id, value} = item
                  return(
                      <div>
                        <h5 key={id}>{value}</h5>
                      </div>
                  )
              })}
            </Container>
        )
    }
}

export default App
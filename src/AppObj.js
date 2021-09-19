import React from 'react';
import styled from 'styled-components';

const Input = styled.input `
     width: 55px;
     margin: 8px;
     border: ${(props) => (props.error ? "1px solid red" : '1px solid green')}
`

class AppObj extends React.Component{
    state={
        firstName: {value: 'Jhon', required: true, error: false},
        lastName: {value: 'Doe', required: true, error: false},
        password: {value: '12345', required: true, error: false},
        email: {value: 'john@email.com', required: true, error: false}
    }
    handleChange = ({target: {name, value} }) => {
       this.setState({[name]: {...this.state[name], value}})
    }
    handleBlur = ({target: {name, value}}) => {
       const isRequired = this.state[name].required;
       const hasError = isRequired && !value.length;
       this.setState({[name]: {...this.state[name], hasError}})
    }
    render() {
        return(
            <>
            {Object.keys(this.state).map(key => {
                return (
                    <>
                      <Input name={key} 
                        value={this.state[key].value} 
                        onChange={this.handleChange}
                        onBlur={this.handleBlur} 
                        error={this.state[key].error}   
                      />
                    </>
                )
            })}
            </>
        )
    }
}

export default AppObj;
import React from 'react';

class AppObj extends React.Component{
    state={
        firstName: {value: 'John', required: true},
        lastName: {value: 'Doe', required: true},
        password: {value: '12345', required: true},
        email: {value: 'john@email.com', required: true}
    }
    handleChange = (e) => {
       this.setState({[e.target.name]: {...this.state[e.target.name], value: e.target.value}})
    }
    render() {
        return(
            <>
            {Object.keys(this.state).map(key => {
                return (
                    <>
                      <input name={key} value={this.state[key].value} onChange={this.handleChange}/>
                    </>
                )
            })}
            </>
        )
    }
}

export default AppObj;
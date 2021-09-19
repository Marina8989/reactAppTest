import React from 'react';

class AppObj extends React.Component{
    state={
        firstName: 'John',
        lastName: 'Doe',
        password: '12345',
        email: 'john@email.com'
    }
    render() {
        return(
            <>
            {Object.keys(this.state).map(key => {
                return (
                    <>
                    console.log({this.state[key]})
                    <input value={this.state[key]} />
                    </>
                )
            })}
            </>
        )
    }
}

export default AppObj;
import React from 'react';

class Form  extends React.Component{
    state={
        inputValue: ''
    }
    handleChange = (e) => {
       this.setState({inputValue: e.target.value});
    }
    handleSubmit = (e) => {
      e.preventDefault();
      this.setState({inputValue: ''})
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.inputValue} onChange={this.handleChange} style={{border: '1px solid green'}}/>
            </form>
        )
    }
}

class AppFour extends React.Component{
    state={
        list: []
    }
    handleSubmit = (value) => {
        const item = {
            id: `${Math.random() * 20}`,
            value,
            completed: false
        }
        const newList = [...this.state.list, item];
        this.setState({list: newList});
        localStorage.setItem('list', JSON.stringify(newList))
    }
    componentDidMount() {
        const list = JSON.parse(localStorage.getItem('list')) || [];
        this.setState({list})
    }
    render(){
        return(
            <div>
                <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default AppFour
import React from 'react';

class Form extends React.Component{
    state={
        inputValue: ''
    }
    handleChange = (e) => {
      this.setState({inputValue: e.target.value})
    }
    handleSubmit = (e) => {
       e.preventDefault();
       const value = this.state.inputValue;
       this.setState({inputValue: ''});
       this.props.handleSubmit(value);
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.inputValue} onChange={this.handleChange} />
            </form>
        )
    }
}

class AppSeven extends React.Component{
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
        localStorage.setItem('list', JSON.stringify(newList));
    }
    componentDidMount() {
        const list = JSON.parse(localStorage.getItem('list')) || [];
        this.setState({list});
    }
    render() {
        return (
            <div>
                <Form handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export default AppSeven
import React from 'react';

const Item = (props) => {
    return(
        <li className={props.item.completed ? 'toggle' : ''}>
          {props.item.value}
          <button onClick={() => props.handleToggle(props.item)}>toggle</button>
          <button onClick={() => props.handleRemove(props.item)}>remove</button>
        </li>
    )
}

const List = (props) => {
    return(
        <ul>
            {props.list.map(item => <Item key={item.id} item={item} handleToggle={props.handleToggle} handleRemove={props.handleRemove}/>)}
        </ul>
    )
}

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
            value,
            completed: false
        }
        const newList = [...this.state.list, item];
        this.setState({list: newList});
        localStorage.setItem('list', JSON.stringify(newList));
    }
    handleToggle = (item) => {
       const newList = this.state.list.map(el => {
           if(el.id === item.id) {
               el.completed = !el.completed;
           } 
           return el;
       })
       this.setState({list: newList});
       localStorage.setItem('list', JSON.stringify(newList));
    }
    handleRemove = (item) => {
       const newList = this.state.list.filter(el => el.id !== item.id);
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
                <List list={this.state.list} handleToggle={this.handleToggle} handleRemove={this.handleRemove}/>
            </div>
        )
    }
}

export default AppSeven
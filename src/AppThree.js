import React from 'react';

const Item = (props) => {
    console.log(props.item.value)
   return (
       <li>
         {props.item.value}
         <button onClick={() => props.handleToggle(props.item)}>{props.item.completed ? 'Yes' : 'No'}</button>
         <button onClick={() => props.handleRemove(props.item)}>remove</button>
       </li>
   )
}

const List = (props) => {
    return (
        <>
          {props.list.map(item => <Item key={item.id} item={item} handleToggle={props.handleToggle} handleRemove={props.handleRemove} />)}
        </>  
    )
}

class Form extends React.Component {
    state={
        inputValue: ''
    }
    handleChange = (e) => {
      this.setState({inputValue: e.target.value});
    }
    handleSubmit = (e) => {
      e.preventDefault();
      const value = this.state.inputValue;
      this.setState({inputValue: ''});
      this.props.handleSubmit(value);
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.inputValue} onChange={this.handleChange} style={{border: '1px solid green'}}/>
            </form>
        )
    }
}

class AppThree extends React.Component{
    state={
        list: []
    }
    handleSubmit = (value) => {
        const item = {
            id: `${Math.floor(Math.random() * 20)}`,
            value,
            completed: false
        }
      const newList = [...this.state.list, item];
      this.setState({list: newList});
    }
    handleToggle = (item) => {
       const newList = this.state.list.map(el => {
           if(el.id === item.id) {
               el.completed = !el.completed;
           }
           return el
       })
       this.setState({list: newList})
    }
    handleRemove = (item) => {
      const newList = this.state.list.filter(el => el.id !== item.id);
      this.setState({list: newList});
    }
    render(){
        return(
            <>
             <Form handleSubmit={this.handleSubmit}/>
             <List list={this.state.list} handleToggle={this.handleToggle} handleRemove={this.handleRemove}/>
            </> 
        )
    }
}

export default AppThree
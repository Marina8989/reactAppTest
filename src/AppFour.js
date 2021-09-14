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
           {props.list.map(item => <Item key={item.id} item={item} handleToggle={props.handleToggle} handleRemove={props.handleRemove} />)}
       </ul>
   )
}

const Search = (props) => {
      return(
       <input value={props.searchValue} onChange={props.handleChange} style={{border: '1px solid green'}}/>
     )
}
class Form  extends React.Component{
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
        list: [],
        searchValue: ''
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
    handleToggle = (item) => {
      const newList = this.state.list.map(elem => {
          if(elem.id === item.id) {
            elem.completed = !elem.completed;
          }
          return elem
      })
      this.setState({list: newList});
      localStorage.setItem('list', JSON.stringify(newList));
    }
    handleRemove = (item) => {
       const newList = this.state.list.filter(elem => elem.id !== item.id);
       this.setState({list: newList});
       localStorage.setItem('list', JSON.stringify(newList))
    }
    handleChange = (e) => {
       this.setState({searchValue: e.target.value})
    }
    componentDidMount() {
        const list = JSON.parse(localStorage.getItem('list')) || [];
        this.setState({list})
    }
    render(){
        const newList = this.state.list.filter(elem => elem.value.includes(this.state.searchValue));
        return(
            <div>
                <Form handleSubmit={this.handleSubmit} />
                <Search handleChange={this.handleChange}/>
                <List list={newList} handleToggle={this.handleToggle} handleRemove={this.handleRemove}/>
            </div>
        )
    }
}

export default AppFour
import React from 'react';

const Item = (props) => {
    console.log(props.item.priority)
    return(
        <li className={props.item.completed ? 'toggle' : ''}>
          {props.item.value}
          <button onClick={() => props.handleToggle(props.item)}>toggle</button>
          <button onClick={() => props.handleRemove(props.item)}>remove</button>
          <div className="space">
            <button onClick={() => props.handleIncrement(props.item)}>increment</button>
            <span style={{color: 'green'}}>{props.item.priority}</span>
          </div>  
        </li>
    )
}

const List = (props) => {
    return(
        <ul>
            {props.list.map(item => <Item key={item.id} item={item} handleToggle={props.handleToggle} handleRemove={props.handleRemove} handleIncrement={props.handleIncrement}/>)}
        </ul>
    )
}

const Search = (props) => {
   return(
       <input value={props.searchInput} onChange={props.handleSearch} />
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
        list: [],
        searchInput: ''
    }
    handleSubmit = (value) => {
        const item = {
            id: `${Math.random() * 20}`,
            value,
            completed: false,
            priority: 1
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
    handleSearch = (e) => {
        this.setState({searchInput: e.target.value})
    }
    handleIncrement = (item) => {
         const newList = this.state.list.map(el => {
             if(el.id === item.id) {
                el.priority+=1
             }
             return el;
         })
         this.setState({list: newList})
         localStorage.setItem('list', JSON.stringify(newList))
    }
    componentDidMount() {
        const list = JSON.parse(localStorage.getItem('list')) || [];
        this.setState({list});
    }
    render() {
        const newList = this.state.list.filter(elem => elem.value.includes(this.state.searchInput));
        return (
            <div>
                <Form handleSubmit={this.handleSubmit}/>
                <Search handleSearch={this.handleSearch} />
                <List list={newList} handleToggle={this.handleToggle} handleRemove={this.handleRemove} handleIncrement={this.handleIncrement}/>
            </div>
        )
    }
}

export default AppSeven
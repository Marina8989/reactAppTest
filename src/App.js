import React from 'react';
import {FiDelete} from 'react-icons/fi';
import {FaPencilAlt} from 'react-icons/fa';

const Item = (props) => {
     return (
            <li className="list" >
            {props.item.value} 
            <div className="list-icons">
                <FaPencilAlt onClick={props.handleUpdate}/>
                <FiDelete className="icon" onClick={() => props.handleRemove(props.item)}/>
            </div>
            </li>
     )
}
const List = (props) => {
    return (
        <ul>
          {props.list.map(item => (<Item key={item} item={item} handleRemove={props.handleRemove} handleUpdate={props.handleUpdate}/>))}
        </ul>
    )
}
class Form extends React.Component {
    state={
        inputValue: ""
    }
    handleChange = (e) => {
        this.setState({inputValue: e.target.value});
    }
    handleSubmit = (e) => {
       e.preventDefault();
       const value = this.state.inputValue;
       this.setState({inputValue: ""});
       this.props.handleSubmit(value);
    }
    handleUpdate = (e) => {
        this.setState({inputValue: e.target.value});
    }
    render(){
        return(
           <form onSubmit={this.handleSubmit}>
               <input type="text" placeholder="Add todo..."  value={this.state.inputValue} onChange={this.handleChange} handleUpdate={this.handleUpdate}/>
           </form>
        )
    }
}
function randNum() {
    return (Math.floor(Math.random() * 200) + Math.floor(Math.random() * 900))
}

class App extends React.Component{
    state={
        list: []
    }
    handleSubmit = (value) => {
        const item ={
            id: randNum(),
            value,
            finished: false
        }
        const newList = [...this.state.list, item];
        this.setState({list: newList});
    }
    handleRemove = (item) => {
       const newList = this.state.list.filter(element => item.id !== element.id);
       this.setState({list: newList});
    }
    
    render(){
        return(
            <div>
               <Form handleSubmit={this.handleSubmit} handleUpdate={this.handleUpdate}/>
               <h3 className="header">{this.state.list.length > 0 ? this.state.list.length : ''} Todos</h3>
               <List list={this.state.list} handleRemove={this.handleRemove} />
            </div>
        )
    }
}


export default App
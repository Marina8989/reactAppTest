import React from 'react';

class Item extends React.Component{
    state={
        showInput: false,
        updateInput: this.props.item.value
    }
    handleClick = () => {
        this.setState({showInput: true});
    }
    handleChange = (e) => {
        this.setState({updateInput: e.target.value});
    }
    handleResubmit = (e) => {
        e.preventDefault();
        this.props.handleResubmit(this.props.item, this.state.updateInput);
        this.setState({updateInput: this.state.updateInput, showInput: false})
    }
    render() {
        return(
            <li className={this.props.item.completed ? 'toggle' : ''} >

                <div onClick={this.handleClick}>
                    {this.state.showInput ? (
                        <form onSubmit={this.handleResubmit}>
                            <input value={this.state.updateInput} onChange={this.handleChange}/>
                        </form>
                    ) : (this.props.item.value)
                    }
                </div>
                
                <button onClick={() => this.props.handleToggle(this.props.item)}>toggle</button>
                <button onClick={() => this.props.handleRemove(this.props.item)}>remove</button>
                <button onClick={() => this.props.handleDecrease(this.props.item)}>↓</button>
                <span>{this.props.item.priority}</span>
                <button onClick={() => this.props.handleIncrease(this.props.item)}>↑</button>
            </li>
       )
    }
}

const List = (props) => {
   return(
       <ul>
           {props.list.map(item => <Item key={item.id} item={item} handleToggle={props.handleToggle} handleRemove={props.handleRemove} handleDecrease={props.handleDecrease} handleIncrease={props.handleIncrease}/>)}
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
                <input value={this.state.inputValue} onChange={this.handleChange} style={{border: '1px solid green'}} />
            </form>
        )
    }
}

class AppTen extends React.Component {
    state={
        list: [],
        sorted: false,
        searchInput: ''
    }
    handleSubmit = (value) => {
       const item = {
           id: `${Math.random() * 20}`,
           value,
           completed: false,
           priority: 0
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
       localStorage.setItem('list', JSON.stringify(newList))
    }
    handleIncrease = (item) => {
       const newList = this.state.list.map(el => {
           if(el.id === item.id) {
               el.priority+=1;
           }
           return el;
       })
       this.setState({list: newList});
       localStorage.setItem('list', JSON.stringify(newList));
    }
    handleDecrease = (item) => {
       const newList = this.state.list.map(el => {
           if(el.id === item.id){
               el.priority-=1;
           }
           return el;
       })
       this.setState({list: newList});
       localStorage.setItem('list', JSON.stringify(newList));
    }
    handleSort = () => {
        if(this.state.sorted === false) {
           this.setState({sorted: true})
        }
        if(this.state.sorted === true) {
           this.setState({sorted: false}); 
        }
    }
    handleSearch = (e) => {
        this.setState({searchInput: e.target.value});
    }
    handleResubmit = (item, value) => {
      const newList = this.state.list.map(el => {
          if(el.id === item.id) {
               item.value = value;
          }
          return el;
      })
      this.setState({list: newList});
      localStorage.setItem('list', JSON.stringify(newList));
    }
    componentDidMount() {
        const list = JSON.parse(localStorage.getItem('list')) || [];
        this.setState({list})
    }
    render() {
        const newList = this.state.list.filter(el => el.value.includes(this.state.searchInput)).sort((a,b) => this.state.sorted ? a.priority - b.priority : b.priority - a.priority)
     return(
         <div>
             <Form handleSubmit={this.handleSubmit} />
             <Search handleSearch={this.handleSearch} />
             <List list={newList} handleToggle={this.handleToggle} handleRemove={this.handleRemove} handleDecrease={this.handleDecrease} handleIncrease={this.handleIncrease} handleResubmit={this.handleResubmit}/>
             {this.state.list.length > 0 && <button onClick={this.handleSort}>sort</button>}
         </div>
     )
 }
}

export default AppTen
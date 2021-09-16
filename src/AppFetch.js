import React from 'react';
import axios from 'axios';


class AppFetch extends React.Component{
    state={
        list: [],
        searchInput: '',
        isLoading: false,
        hasError: false
    }

    getUser = async (user) => {
       this.setState({isLoading: true});
       try{
         const {data} = await axios(`https://api.github.com/users/${user}`);
         const newList = [...this.state.list, data];
         this.setState({list: newList, isLoading: false});
         console.log(this.state.list)
       }catch(err) {
         console.log(err)
         this.setState({hasError: true})
       }
    }
    handleChange = (e) => {
      this.setState({searchInput: e.target.value});
    }

    handleSubmit = (e) => {
       e.preventDefault();
       this.getUser(this.state.searchInput);
       this.setState({searchInput: ''})
    }
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.searchInput} onChange={this.handleChange}/>
                </form>
                {this.state.list.map(item => {
                    const {avatar_url, name, id} = item;
                    return(
                        <div key={id}>
                          <h4>{name}</h4>
                          <img src={avatar_url} alt={'logo'} style={{width: '120px'}}/>
                        </div>
                    )
                }) }
                {this.state.hasError && <h3>Error... try again</h3>}
            </div>
        )
    }
}

export default AppFetch
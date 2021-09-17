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
      if(this.state.list.find(item => item.name.toLowerCase() === user.toLowerCase())) return;
        this.setState({isLoading: true});
       try{
         const {data} = await axios(`https://api.github.com/users/${user}`);
         data.score = data.followers + data.public_gists + data.public_repos;
         const newList = [...this.state.list, data];
         this.setState({list: newList, isLoading: false});
        }catch(err) {
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
       const winner = this.state.list.reduce((acc, total) => {
           if(acc.score > total.score) {
               return acc;
           }else {
             return total;
           }
       }, {score: 0})
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.searchInput} onChange={this.handleChange}/>
                </form>
                {this.state.list.map(item => {
                    const {avatar_url, name, id, followers, public_gists, public_repos, score} = item;
                    return(
                        <div key={id}>
                          <h4>{name}</h4>
                          {this.state.list.length > 1 && (winner.score === item.score) ? 'WINNER' : '' }
                          <img src={avatar_url} alt={'logo'} style={{width: '120px'}}/>
                          <h4>Followers: {followers}</h4>
                          <h4>Public Gists: {public_gists}</h4>
                          <h4>Public Repos: {public_repos}</h4>
                          <h4>Score: {score}</h4>
                        </div>
                    )
                }) }
                {this.state.hasError && <h3>Error... try again</h3>}
            </div>
        )
    }
}

export default AppFetch
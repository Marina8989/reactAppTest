import React from 'react';
import axios from 'axios';

class User extends React.Component{
    state={
        isLoading: false,
        hasErroe: false,
        user: null
    }
    getUser = async(user) => {
       try{
           this.setState({isLoading: true});
           const {data} = await axios(`https://api.github.com/users/${user}`);
           this.setState({user: data, isLoading: false});
           console.log(this.state.user)
       }catch(err) {
          this.setState({hasError: true})
       }
    }
    componentDidUpdate(prevProps) {
       if(this.props.match.params.id !== prevProps.match.params.id) {
         this.getUser(this.props.match.params.id);
       }
    }

    componentDidMount() {
        this.getUser(this.props.match.params.id)
    }
    render() {
    
        return(
          <>  
          {this.state.user && 
           Object.keys(this.state.user).map(key => {
               return (
                   <>
                   <span style={{color: 'green'}}>{key}:  </span>
                   <span>{this.state.user[key]}</span><br />
                   </>
               )
           })
          } 
          {this.state.hasError && <h2>Try again... something went wrong</h2>}
        </>
        )
    }
}

export default User;
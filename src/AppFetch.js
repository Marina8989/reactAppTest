import React from 'react';


class AppFetch extends React.Component{
    state={
        list: [],
        searchInput: '',
        isLoading: false,
        hasError: false
    }

    getUser = async (user) => {
       this.setState({isLoading: !this.state.isLoading});
       try{
         const {data} = await axios(`https://api.github.com/users/${user}`);
         const newList = [...this.state.list, data];
         this.setState({list: newList})
       }catch(err) {
         console.log(err)
       }
    }

    handleSubmit = (value) => {
     const item = {
         id: `${Math.random() * 20}`,
         value
     }
     const newList = [...this.state.list, item];
     this.setState({list: newList});
    }
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.searchInput} onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}

export default AppFetch
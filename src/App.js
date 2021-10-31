import React from 'react';
import Category from './Category';
import Menu from './Menu';
import data from './data';
import './index.css';

class App extends React.Component{
    state={
        items: data
    }
    render() {
        return(
            <>
              <Menu filterItem={this.filterItem}/>
              <Category items={this.state.items} />
            </>
        )
    }
}

export default App
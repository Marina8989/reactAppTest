import React from 'react';
import Category from './Category';
import Menu from './Menu';
import data from './data';
import './index.css';

const newCategory = ['All', ...new Set(data.map(el => {
     return el.category
}))]
console.log(newCategory);

class App extends React.Component{
    state={
        items: data
    }
    render() {
        console.log(newCategory)
        return(
            <>
              <Menu newCategory={newCategory} filterItem={this.filterItem}/>
              <Category items={this.state.items} />
            </>
        )
    }
}

export default App
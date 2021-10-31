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
    filterItem = (category) => {
      if(category === 'All') {
        this.setState({items: data})
        return
      }
        const newList = this.state.items.filter(item => item.category === category)
        this.setState({items: newList})
    }
    render() {
        return(
            <>
              <h2>Our Menu</h2>
              <div className='border-bottom'></div>
              <Menu newCategory={newCategory} filterItem={this.filterItem}/>
              <Category items={this.state.items} />
            </>
        )
    }
}

export default App
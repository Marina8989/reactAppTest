import React from 'react';
import Category from './Category';
import Item from './Item';
import data from './data';
import './index.css';

class App extends React.Component{
    state={
        list: data,
        categoryList: ['All', 'Breakfast', 'Lunch', 'Dinner']
    }
    render() {
        return(
            <div className='container'>
                <h3>Our Menu</h3>
                <div className='border-bottom'></div>
                <div className='category'>
                    {this.state.categoryList.map(item => (<Category text={item} />))}
                </div>
                <div>
                  <Item list={this.state.list} />
                </div>
            </div>
        )
    }
}

export default App
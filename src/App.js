import React from 'react';
import Category from './Category';
import data from './data';
import './index.css';

class App extends React.Component{
    state={
        list: data
    }
    render() {
        return(
            <div className='container'>
                <h3>Our Menu</h3>
                <div className='border-bottom'></div>
                <div className='category'>
                    <Category category='All'/>
                    <Category category='Breakfast'/>
                    <Category category='Lunch'/>
                    <Category category='Dinner'/>
                </div>
            </div>
        )
    }
}

export default App
import React from 'react';

const Menu = ({newCategory, filterItem}) => {
    console.log(newCategory)
    return(
        <div className='menu-items'>
          {newCategory.map((category, index) => {
              return(
                <div className='menu'>
                  <button type='button' key={index} onClick={() => filterItem(category)}>{category}</button>
                </div>
              )
          })}
        </div>
    )
}

export default Menu
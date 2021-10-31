import React from 'react';

const Menu = ({newCategory}) => {
    console.log(newCategory)
    return(
        <div className='menu-items'>
          {newCategory.map((category, index) => {
              return(
                <div className='menu'>
                  <button key={index}>{category}</button>
                </div>
              )
          })}
        </div>
    )
}

export default Menu
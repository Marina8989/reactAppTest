import React from 'react';

const Menu = ({newCategory}) => {
    console.log(newCategory)
    return(
        <>
          {newCategory.map((category, index) => {
              return(
                <div className='menu'>
                  <button key={index}>{category}</button>
                </div>
              )
          })}
        </>
    )
}

export default Menu
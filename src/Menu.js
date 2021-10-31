import React from 'react';

const Menu = (props) => {
    return(
        <>
          {props.items.map((item, index) => {
              <button key={index}>{item.category}</button>
          })}
        </>
    )
}

export default Menu
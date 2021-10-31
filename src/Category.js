import React from 'react';

const Category = (props) => {
    return(
       <>
         {props.items.map(item => {
             const {id, name, price, desc} = item;
             return(
                 <div key={id} className='item'>
                     <h3>{name} <span>{price}</span></h3>
                     <h4>{desc}</h4>
                 </div>
             )
         })}
       </>
    )
}

export default Category
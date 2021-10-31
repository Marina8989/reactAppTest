import React from 'react';

const Item = (props) => {
   return(
       <>
        {props.list.map(item => {
            const {id, category, name, price, desc} = item;
            return(
                <div key={id} className='item'>
                    <h3>{name} <span>{price}</span></h3>
                    <h5>{desc}</h5>
                </div>
            )
        })}
       </>
   )
}

export default Item;
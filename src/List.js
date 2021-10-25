import React from 'react';

const List = (props) => {
   return(
      <>
       {props.list.map(city => {
           return(
               <div key={city.id} className='info'>
                   <h3>{city.name} <span>{city.price}</span></h3>
                   <h5>{city.text}</h5>
                   <button onClick={() => props.handleClear(city)}>Clear</button>
               </div>
           )
       })}
      </>
   )
}

export default List;
import React from 'react';

const List = (props) => {
   return(
      <>
       {props.list.map(city => {
           return(
               <div key={city.id} className='info'>
                   <h3>{city.name} <span>{city.price}</span></h3>
                   {city.isLoading ? <h5>{city.text}<button onClick={() => props.handleRead(city)}>Read Less</button></h5> : <h5>{city.text.slice(0, 80)}...<button onClick={() => props.handleRead(city)}>Read More</button></h5>}
                   <button onClick={() => props.handleClear(city)}>Not interested</button>
               </div>
           )
       })}
      </>
   )
}

export default List;
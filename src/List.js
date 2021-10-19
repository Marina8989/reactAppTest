import React from 'react';

const List = ({people}) => {
   return(
      <>
       {people.map(person => {
           const {id, name, job} = person
           return(
               <div key={id}>
                   <h4>{name}</h4>
                   <h5>{job}</h5>
               </div>
           )
       })}
      </>
   )
}

export default List;
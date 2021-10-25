import React from 'react';

const List = ({list}) => {
   const num = 0;
     return(
      <div>
        <h3>{list[num].name}</h3>
        <h4>{list[num].price}</h4>
      </div>
     )
   }


export default List;
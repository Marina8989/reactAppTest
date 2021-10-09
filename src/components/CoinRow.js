import React from 'react';

const CoinRow = (props) => {
    console.log(props)
   return(
       <li>{props.item}</li>
   )
}

export default CoinRow
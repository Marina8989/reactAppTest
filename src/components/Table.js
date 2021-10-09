import React from 'react';
//import CoinRow from './CoinRow';

const Table = ({coins}) => {
   return(
      <> 
        {coins.map(coin => (
            <table>
              <thead>
                <tr>
                    {/* <th>#</th> */}
                    <th>Name</th>
                    <th>Price</th>
                    <th>1h%</th>
                    <th>24h%</th>
                    <th>7d%</th>
                    <th>24h Volume/Morket Cap</th>
                    <th>Circulating/Total Supply</th>
                    <th>Last 7d</th>
                </tr>
              </thead>
             {coin.map(item => (
                <tbody>
                  <tr key={item.id}>
                    <td><img src={item.image} style={{width: '15px'}}/>{item.name}({item.symbol})</td>
                    <td>${(item.current_price ).toFixed(2)}</td>
                  </tr>
                </tbody>
             ))}
             </table>
        ))}
     </>    
   )
}
export default Table
import React from 'react';
import {FaStarHalfAlt} from 'react-icons/fa';

const Table = ({coins}) => {
   return(
      <> 
        {coins.map(coin => (
            <table>
              <thead>
                <tr>
                    <th>#</th>
                    <th>Coin</th>
                    <th>Price</th>
                    <th>1h%</th>
                    <th>24h%</th>
                    <th>7d%</th>
                    <th>24h Volume/Morket Cap</th>
                    <th>Circulating/Total Supply</th>
                    <th>Last 7d</th>
                </tr>
              </thead>
             {coin.map((item, index )=> (
                <tbody>
                  <tr key={item.id}>
                    <td><FaStarHalfAlt /> {index + 1}</td>
                    <td><img src={item.image} style={{width: '15px'}}/> {item.name}({item.symbol})</td>
                    <td>${(item.current_price).toFixed(2)}</td>
                    <td>{(item.price_change_percentage_1h_in_currency).toFixed(1)}%</td>
                    <td>{(item.price_change_percentage_24h).toFixed(1)}</td>
                    <td>{(item.price_change_percentage_7d_in_currency).toFixed(1)}%</td>
                    <td>${(item.total_volume / 1000000000)}</td>
                    <td>${item.market_cap}</td>
                  </tr>
                </tbody>
             ))}
             </table>
        ))}
     </>    
   )
}
export default Table
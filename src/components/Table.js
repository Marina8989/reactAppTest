import React from 'react';
import styled from 'styled-components';
import {FaStarHalfAlt} from 'react-icons/fa';

const Table = ({coins}) => {
   return(
      <> 
         {coins.map(coin => (
           <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Coin</th>
                  <th scope="col">Price</th>
                  <th scope="col">1h%</th>
                  <th scope="col">24h%</th>
                  <th scope="col">7d%</th>
                  <th scope="col">24h Volume/Morket Cap</th>
                  <th scope="col">Circulating/Total Supply</th>
                  <th scope="col">Last 7d</th>
                </tr>
              </thead>
              {coin.map((item, index)=> (
                      <tbody>
                        <tr key={item.id}>
                          <th scope="row">{index+1}</th>
                          <td><img src={item.image} style={{width: '15px'}}/> {item.name}({item.symbol})</td>
                          <td>${(item.current_price).toFixed(2)}</td>
                          <td>{(item.price_change_percentage_1h_in_currency).toFixed(1)}%</td>
                          <td>{(item.price_change_percentage_24h).toFixed(1)}</td>
                          <td>{(item.price_change_percentage_7d_in_currency).toFixed(1)}%</td>
                          <td>${(item.total_volume / 1000000000)}</td>
                          <td>${item.market_cap}</td>
                          <td>test</td>
                        </tr>
                      </tbody>
              ))} 
            </table>
         ))}
     </>    
   )
}
export default Table
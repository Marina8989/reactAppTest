import React from 'react';
import styled from 'styled-components';
import {FaStarHalfAlt} from 'react-icons/fa';

const StyledTable = styled.table`
    padding: .9rem .7rem;
`

const Table = ({coins}) => {
   return(
      <> 
        {coins.map(coin => (
            <StyledTable>
              <thead>
                <tr>
                    <th style={{fontSize: '14px'}}>#</th>
                    <th style={{fontSize: '14px'}}>Coin</th>
                    <th style={{padding: '0 1rem', fontSize: '14px'}}>Price</th>
                    <th style={{padding: '0 1rem', fontSize: '14px'}}>1h%</th>
                    <th style={{padding: '0 1rem', fontSize: '14px'}}>24h%</th>
                    <th style={{padding: '0 1rem', fontSize: '14px'}}>7d%</th>
                    <th style={{padding: '0 1rem', fontSize: '14px'}}>24h Volume/Morket Cap</th>
                    <th style={{padding: '0 1rem', fontSize: '14px'}}>Circulating/Total Supply</th>
                    <th style={{padding: '0 1rem', fontSize: '14px'}}>Last 7d</th>
                </tr>
              </thead>
             {coin.map((item, index )=> (
                <tbody>
                  <tr key={item.id}>
                    <td style={{padding: '1rem', fontSize: '10px'}}>{index + 1}</td>
                    <td style={{fontSize: '13px', padding: '0'}}><img src={item.image} style={{width: '15px'}}/> {item.name}({item.symbol})</td>
                    <td style={{fontSize: '13px', padding: '0 1rem'}}>${(item.current_price).toFixed(2)}</td>
                    <td style={{fontSize: '13px', padding: '0 1rem'}}>{(item.price_change_percentage_1h_in_currency).toFixed(1)}%</td>
                    <td style={{fontSize: '13px', padding: '0 1rem'}}>{(item.price_change_percentage_24h).toFixed(1)}</td>
                    <td style={{fontSize: '13px', padding: '0 1rem'}}>{(item.price_change_percentage_7d_in_currency).toFixed(1)}%</td>
                    <td style={{fontSize: '13px', padding: '0 1rem'}}>${(item.total_volume / 1000000000)}</td>
                    <td style={{fontSize: '13px', padding: '0 1rem'}}>${item.market_cap}</td>
                  </tr>
                </tbody>
             ))}
             </StyledTable>
        ))}
     </>    
   )
}
export default Table
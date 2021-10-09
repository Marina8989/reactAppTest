import React from 'react';
import styled from 'styled-components';
import {FaStarHalfAlt} from 'react-icons/fa';

const StyledTable = styled.table`
    padding: .9rem .7rem;
    background: rgb(17, 17, 17);
    margin: 1rem auto;
    border-radius: 5px;
`

const Table = ({coins}) => {
   return(
      <> 
        {coins.map(coin => (
            <StyledTable>
              <thead>
                <tr>
                    <th style={{fontSize: '16px', color: 'rgb(84,90,131)'}}>#</th>
                    <th style={{fontSize: '14px', color: 'rgb(84,90,131)'}}>Coin</th>
                    <th style={{padding: '0 1rem', fontSize: '14px', color: 'rgb(84,90,131)'}}>Price</th>
                    <th style={{padding: '0 2rem', fontSize: '14px', color: 'rgb(84,90,131)'}}>1h%</th>
                    <th style={{padding: '0 2rem', fontSize: '14px', color: 'rgb(84,90,131)'}}>24h%</th>
                    <th style={{padding: '0 2rem', fontSize: '14px', color: 'rgb(84,90,131)'}}>7d%</th>
                    <th style={{padding: '0 2rem', fontSize: '14px', color: 'rgb(84,90,131)'}}>24h Volume/Morket Cap</th>
                    <th style={{padding: '0 2rem', fontSize: '14px', color: 'rgb(84,90,131)'}}>Circulating/Total Supply</th>
                    <th style={{padding: '0 2rem', fontSize: '14px', color: 'rgb(84,90,131)'}}>Last 7d</th>
                </tr>
              </thead>
             {coin.map((item, index )=> (
                <tbody>
                  <tr key={item.id}>
                    <td style={{padding: '.6rem', fontSize: '10px'}}>{index + 1}</td>
                    <td style={{fontSize: '13px', padding: '0'}}><img src={item.image} style={{width: '15px'}}/> {item.name}({item.symbol})</td>
                    <td style={{fontSize: '13px', padding: '0 1rem'}}>${(item.current_price).toFixed(2)}</td>
                    <td style={{fontSize: '13px', padding: '0 2rem'}}>{(item.price_change_percentage_1h_in_currency).toFixed(1)}%</td>
                    <td style={{fontSize: '13px', padding: '0 2rem'}}>{(item.price_change_percentage_24h).toFixed(1)}</td>
                    <td style={{fontSize: '13px', padding: '0 2rem'}}>{(item.price_change_percentage_7d_in_currency).toFixed(1)}%</td>
                    <td style={{fontSize: '13px', padding: '0 2rem'}}>${(item.total_volume / 1000000000)}</td>
                    <td style={{fontSize: '13px', padding: '0 2rem'}}>${item.market_cap}</td>
                    <td style={{fontSize: '13px', padding: '0 2rem'}}>test</td>
                  </tr>
                </tbody>
             ))}
             </StyledTable>
        ))}
     </>    
   )
}
export default Table
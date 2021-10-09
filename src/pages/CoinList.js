import React from 'react';
import Table from '../components/Table';
import {Link} from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const StyledDiv = styled.div`
   width: 90%;
   margin: auto;
   background: rgb(17, 17, 17);
   border-radius: 10px;
   padding: 2rem 1rem;
   margin-top: 2rem;
   margin-bottom: 2rem;
`
const StyledLink = styled(Link)`
   text-decoration: none;
   color: white;
`

const StyledCoinList = styled(Link)`
    background: rgb(37, 37, 37);
    padding: .5rem 1.2rem;
    margin-right: 1.6rem;
    border-radius: 10px;
    text-decoration: none;
    color: white;
`
const StyledH = styled.h2`
    font-size: 12px;
    margin-top: 4rem;
    padding-top: .5rem;
    padding-left: .7rem;
`

const StyledInnerDiv = styled.div`
   background: rgb(37, 37, 37);
   border-radius: 10px;
   padding-bottom: 1.7rem;
`

class CoinList extends React.Component{
    state={
        coins: []
    }
    getCoinInfo = async() => {
       try{
         const {data} = await axios('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d');
         const newList = [...this.state.coins, data];
         this.setState({coins: newList});
       }catch(err){
         console.log(err)
       }
   }
   componentDidMount() {
    this.getCoinInfo();
   }
    render(){
        console.log(this.state.coins)
      return (
          <StyledDiv>
           <StyledCoinList to='/'>Coins</StyledCoinList>
           <StyledLink to='/portfolio'>Portfolio</StyledLink>
          <StyledInnerDiv>
           <StyledH>Your overview</StyledH>
           <StyledLink to='/coinPage'>
             <Table coins={this.state.coins}/>
           </StyledLink>
           {/* <Table coins={this.state.coins}/> */}
          </StyledInnerDiv>
          </StyledDiv>
      ) 
    }
}

export default CoinList
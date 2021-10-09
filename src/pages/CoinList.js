import React from 'react';
import Table from '../components/Table';
import {Link} from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const StyledDiv = styled.div`
   width: 80%;
   border: 1px solid red;
   margin: auto;
   background: rgb(2,14,3);
`
const StyledLink = styled(Link)`
   text-decoration: none;
`
class CoinList extends React.Component{
    state={
        coins: []
    }
    getCoinInfo = async() => {
       try{
         const {data} = await axios('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d');
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
           <Link to='/'>CoinList</Link><br/>
           <Link to='/portfolio'>Portfolio</Link><br/>
           <h2>Your overview</h2>
           <StyledLink to='/coinPage'>
             <Table coins={this.state.coins}/>
           </StyledLink><br/>
           {/* <Table coins={this.state.coins}/> */}
          </StyledDiv>
      ) 
    }
}

export default CoinList
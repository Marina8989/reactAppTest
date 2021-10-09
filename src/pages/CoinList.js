import React from 'react';
import Table from '../components/Table';
import axios from 'axios';

class CoinList extends React.Component{
    state={
        coins: []
    }
    getCoinInfo = async() => {
       try{
         const {data} = await axios('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
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
          <>
           <h2>Your overview</h2>
           <Table coins={this.state.coins}/>
          </>
      ) 
    }
}

export default CoinList
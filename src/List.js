import React from 'react';
import Button from './Button';

class List extends React.Component{
   state={
      num: 0
   }
   handleLeft = () => {
      if(this.state.num < 0) {
         this.setState({num: 0})
      }else {
         this.setState({num: this.state.num - 1})
      }
      console.log(this.state.num)
   }
   handleRight = () => {
      if(this.state.num > this.props.list.length) {
       this.setState({num: 0})
      }else {
         this.setState({num: this.state.num + 1})
      }
   }
   render() {
      //let num = this.state.num
     return(
      <div>
        <h3>{this.props.list[this.state.num].name}</h3>
        <h4>{this.props.list[this.state.num].price}</h4>
        <Button text='<' handleClick={this.handleLeft}/>
        <Button text='>' handleClick={this.handleRight} />
      </div>
     )
   }  
}


export default List;
import React from 'react';

const Item = (props) => {
   return (
       <>
        {props.list.map(item => {
            const {id, question, answer} = item;
            return (
                <div className='items'>
                <div key={id} className='lists'>
                    <h4>{question}</h4>
                    {item.on && <h5>{answer}</h5>}
                </div>
                    <button onClick={() => props.handleClick(item)}>{item.on ? '-' : '+'}</button>
                </div>
            )
        })}
       </>
   )
}

export default Item;
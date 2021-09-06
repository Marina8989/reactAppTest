import React from 'react';

class Photo extends React.Component{
    render() {
        const post = this.props.post;
        return <fieldset style={{width: '220px'}}>
            <img src={post.imageLink} alt={post.description} style={{width: '200px', margin: 'auto'}}/>
            <figcaption><p>{post.description}</p></figcaption>
            <button>Remove</button>
        </fieldset>
    }
}

export default Photo
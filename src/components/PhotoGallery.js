import React from 'react';
import Photo from './Photo';

class PhotoGallery extends React.Component{
    render() {
        return(
            <>
             {this.props.posts.map((post, index) => <Photo key={index} post={post} />)}
            </> 
        )
    }
}

export default PhotoGallery
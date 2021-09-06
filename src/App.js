import React from 'react';
import Title from './components/Title';
import Photo from './components/PhotoGallery';

const posts = [
    {
    id: 1,
    description: 'Post 1',
    imageLink: 'http://prod-upp-image-read.ft.com/a4e8f394-313b-11ea-a329-0bcf87a328f2'
  },
  {
    id: 2,
    description: 'Post 2',
    imageLink: 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ig1b9f2_rbi8/v1/1000x-1.jpg'
  },
  {
    id: 3,
    description: 'Post 3',
    imageLink: 'https://images.squarespace-cdn.com/content/v1/58ed40453a04116f46e8d99b/1570789004053-Y75X6Y3J68PFOY1W0NW4/ElectricCar.jpg?format=1500w'
  },
]

class App extends React.Component{
    render(){
        return(
            <div>
              <Title title={'Title of the App'} />
              <Photo posts={posts} />
            </div>
        )
    }
}

export default App
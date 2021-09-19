import React from 'react';

const Card = (props) => {
    return(
        <>
          <h2>{props.title}</h2>
          <h5>{props.children}</h5>
        </>
    )
}

const Header = (props) => {
    return(
        <h5>{props.label}</h5>
    )
}

class AppTest extends React.Component {
    render() {
        return(
            <div>
                <Card title='title of the page'>
                    <Header label='children of the page'/>
                </Card>
            </div>
        )
    }
}

export default AppTest;
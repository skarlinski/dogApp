import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';


class BreedPage extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Jumbotron>
             <h1>Dog Book</h1>
                <p>
                  Man's Best Friend
                 </p>
                <p>
                <Button variant="primary">Woof!</Button>
                </p>  
            </Jumbotron>
                );
    }
}

export default BreedPage;
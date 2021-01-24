import React from 'react';
import { Button, Col, Jumbotron, Row} from 'react-bootstrap';
import NavBarDog from './NavBarDog';


class BreedPageMain extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <NavBarDog/>
            <Jumbotron>
             <h1>Dog Book</h1>
                <p>
                  Man's Best Friend
                 </p>
                <p>
                <Button variant="primary">Woof!</Button>
                </p>  
            </Jumbotron>
            </div>
            );
    }
}

export default BreedPageMain;
import axios from 'axios';
import React from 'react';
import { Button, Col, Jumbotron, Row} from 'react-bootstrap';
import BreedList from './BreedList';
import BreedCard from './BreedCard';
import NavBarDog from './NavBarDog';


class BreedPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            breendList:[]
        }
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

export default BreedPage;
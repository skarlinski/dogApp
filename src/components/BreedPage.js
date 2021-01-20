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


    componentDidMount(){
    axios.get(`https://dog.ceo/api/breeds/list/all`)
    .then((r) =>{
        const BreedListkeys =[]
        //console.log(r);
        //console.log(r.data.message);
        const arrBreeds =r.data.message; 
        for (const key of Object.keys(arrBreeds)) {
                    BreedListkeys.push(key);
        }
        this.setState({breendList:BreedListkeys})
        console.log('this.state.breendList',this.state.breendList)
    })
    }
    render(){
        const BreedCards = this.state.breendList.map( (breed, index) => {
            return <Col xs={6} lg={3}><BreedCard key={index} typeBreed={breed}/></Col>
        });
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
            <Row>
                {BreedCards}
            </Row>
            </div>
            );
    }
}

export default BreedPage;
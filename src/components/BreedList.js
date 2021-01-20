import axios from 'axios';
import React from 'react';
import { Button, Col, Jumbotron, Row} from 'react-bootstrap';
import BreedCard from './BreedCard';
import NavBarDog from './NavBarDog';


class BreedList extends React.Component {
    constructor(props){
        super(props);
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
            <Row>
                {BreedCards}
            </Row>
            </div>
        );
    }
}
    
export default BreedList;





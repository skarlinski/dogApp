import axios from 'axios';
import React from 'react';
import {Card } from 'react-bootstrap';

class BreedCard extends React.Component {
    constructor(props){
        super(props);
        this.state={
            srcBreed:[]
        }
    }

    componentDidMount(){
        axios.get(`https://dog.ceo/api/breed/${this.props.typeBreed}/images`)
        .then((r) =>{
           // console.log('becard',r);//data.message
           this.setState({srcBreed:r.data.message[0]});
        });
    }
    render(){
        return(
            <Card  bg="light" style={{ width: '18rem' }}>
            <a href="BreedGallery.js">
            <Card.Img style={{width:'300px'}}variant="top" src={this.state.srcBreed} />
            </a>
            <Card.Body>
                <Card.Title>{this.props.typeBreed}</Card.Title>
            </Card.Body>
            </Card>
        );
    }
}
export default BreedCard;
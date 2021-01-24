import axios from 'axios';
import React from 'react';
import {Card, Col} from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';

class BreedCard extends React.Component {
    constructor(props){
        super(props);
        this.state={
            srcBreed:[]
        }
    }

    componentDidMount(){
        axios.get(`https://dog.ceo/api/breed/${this.props.typeBreed}/images/random/1`)
        .then((r) =>{
           // console.log('becard',r);//data.message
           this.setState({srcBreed:r.data.message[0]});
        });
    }
    // handelClick = (event)=>{
    //     console.log('dd');
    //     // return (this.props.typeBreed);
    //     console.log(this.props.typeBreed)
    //     return <Redirect push to={`breeds/${this.props.typeBreed}`} />
    // }
    render(){
        return(
            <Col xs={6} lg={3}>
            <Card  bg="light" style={{ width: '18rem' }}>
              {/* <Link to="breeds/{breedGallery}"></Link> */}
                <Link to={`breeds/${this.props.typeBreed}`}>
                <Card.Img
                style={{width:'300px'}}variant="top" src={this.state.srcBreed} />
            </Link>
            <Card.Body>
                <Card.Title>{this.props.typeBreed}</Card.Title>
            </Card.Body>
            </Card>
            </Col>
        );
    }
}
export default BreedCard;
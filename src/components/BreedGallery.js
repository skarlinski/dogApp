import axios from 'axios';
import React from 'react';
import {Card, Row } from 'react-bootstrap';
import {withRouter} from 'react-router';
import CardForGallery from './CardForGallery';
import NavBarDog from './NavBarDog';

class BreedGallery extends React.Component {
    constructor(props){
        super(props);
        this.state={
            urlImgBreed:[]
        }
    }

    componentDidMount(){
        axios.get(`https://dog.ceo/api/breed/${this.props.match.params.currentBreed}/images/random/10`)
        .then((r) =>{
            console.log('currentBreed',r);//data.message
           this.setState({urlImgBreed:r.data.message});
        });
    }

    render(){
        const BreedGallery = this.state.urlImgBreed.map((breed,index) =>{
            return <CardForGallery key={index} ImgBreed={breed}/>
        }); 
        return(
            <div>
                <NavBarDog/>
                <h1>Breed Gallery: {this.props.match.params.currentBreed} </h1>
            <Row>
                {BreedGallery}
            </Row>
            </div>
        );
    }
}
export default withRouter(BreedGallery);
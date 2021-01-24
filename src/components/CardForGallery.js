import axios from 'axios';
import React from 'react';
import {Button, Card, CardImg, Col, Modal} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class CardForGallery extends React.Component {
    constructor(props){
        super(props);
        this.state={
            isModalActive: false
        }
    }

    openModal = () => {
        this.setState({isModalActive: true});
    }
    closeModal = () => {
        this.setState({isModalActive: false});
    }
    render(){
        const createModal=()=> {
            console.log('want to crate modal')
      }
        return(<div>
            <Col xs={6} lg={3}>
            <Card  bg="light" style={{ width: '18rem' }}>
                <Card.Img onClick={this.openModal}
                style={{width:'300px'}}variant="top" src={this.props.ImgBreed} />
            </Card>
            </Col>
            
                <Modal show={this.state.isModalActive} onHide={()=>{}}>
                <Modal.Body>
                <CardImg variant="top" src={this.props.ImgBreed} /> 
        </Modal.Body>
        <Modal.Footer>

        <Button variant="primary" onClick={this.closeModal}>
            close
        </Button>
        </Modal.Footer>
        </Modal>

        </div>

        );
    }
}
export default CardForGallery;
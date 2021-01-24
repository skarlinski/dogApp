import axios from 'axios';
import React from 'react';
import { Button, ButtonGroup, Col, Form, Jumbotron, Row} from 'react-bootstrap';
import BreedCard from './BreedCard';
import NavBarDog from './NavBarDog';


class BreedList extends React.Component {
    constructor(props){
        super(props);
        this.state={
            breendList:[],
            breendListAll:[]
        }
    }
    SearchBreed=(event) =>{
        let serchedbreed = event.target.value;
        console.log(serchedbreed);
        if (serchedbreed!==''){
            const arrBreedSearched = this.state.breendListAll.filter((breed) => breed.includes(serchedbreed));
            this.setState({breendList:arrBreedSearched});
        }
        else{
            this.setState({breendList:this.state.breendListAll}) 
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
            this.setState({breendListAll:BreedListkeys})
            // console.log('this.state.breendList',this.state.breendList)
        })
    }
    getDogs = ()=>{
        console.log('img')
        const BreedCardsUpdate = this.state.breendList.map( (breed, index) => {
            return <BreedCard key={index} typeBreed={breed}/>});
        return BreedCardsUpdate;
    }
    
    
    render(){
        // const BreedCards = this.state.breendList.map( (breed, index) => {
        //     return <BreedCard key={index} typeBreed={breed}/>
        // });
        const BreedCards = this.getDogs(); //updateBreedList
        return(
            <div>
                <NavBarDog/>
                <Row>Search:
                    <Form>
                <Form.Control type="text" onChange={this.SearchBreed}/>
                <Button onClick={this.props.updateBreedList}> Update Images</Button>
                </Form>
                </Row>
            <Row>
                {BreedCards}
            </Row>
            </div>
        );
    }
}
    
export default BreedList;





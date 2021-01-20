import axios from 'axios';
import React from 'react';

class BreedList extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props.breedListDogs);
        return(
           <div>
               <h2>hi</h2>
               {/* {this.props.breedListDogs} */}
           </div> 
        );
    }
}
export default BreedList;
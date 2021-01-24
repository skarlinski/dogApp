import './App.css';
import React from 'react';
import BreedPageMain from './components/BreedPageMain';
import BreedList from './components/BreedList';
import BreedGallery from './components/BreedGallery';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Switch } from 'react-router-dom';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      isShowBreeds:true
    }
  }
  updateBreedList= ()=>{
    this.forceUpdate()
  }
  render(){
    const showBreedsList = this.state.isShowBreeds==true ?  <BreedList updateBreedList={this.updateBreedList}/>:[];
  return (
    // <BreedPage/>
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <BreedPageMain/> 
        </Route>
        <Route exact path="/breeds/:currentBreed">
          <BreedGallery/>
        </Route>
        <Route exact path="/breeds">
          {/* <BreedList updateBreedList={this.updateBreedList}/> */}
          {showBreedsList}
        </Route>
        <Route path='/about'>
          about page!
        </Route>
      </Switch>
      </HashRouter>
  );}
}

export default App;

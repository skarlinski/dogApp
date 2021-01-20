import './App.css';
import BreedPage from './components/BreedPage';
import BreedList from './components/BreedList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    // <BreedPage/>
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <BreedPage/> 
        </Route>
        <Route exact path="/breeds">
          <BreedList/>
        </Route>
        <Route path='/about'>
          about page!
        </Route>
      </Switch>
      </HashRouter>



  );
}

export default App;

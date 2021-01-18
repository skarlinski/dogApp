import { Button, Jumbotron } from 'react-bootstrap';
import './App.css';
function App() {
  return (
    <Jumbotron>
        <h1>Dog Book</h1>
        <p>
          Man's Best Friend
        </p>
        <p>
          <Button variant="primary">Woof!</Button>
        </p>  
  </Jumbotron>
  );
}

export default App;

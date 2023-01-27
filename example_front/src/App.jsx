import { Container } from 'react-bootstrap';
import './App.css';
import NavBar from './components/navBar/narBar.component';
import AppRoutes from './components/router/router';


function App() {

  
  return (
    <div className="App">
      <NavBar />
      <Container>
     <AppRoutes />
      </Container>
      
     
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

import { Carousel } from 'react-responsive-carousel';

import { Navbar } from 'react-bootstrap';

import DisplayArea from './DisplayArea';

function App() {
  return (
    <div className="App">
      

        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#" className='px-4'>CU Anschutz Dept. of Ophthalmology</Navbar.Brand>
        </Navbar>

        <DisplayArea />
    </div>
  );
}

export default App;

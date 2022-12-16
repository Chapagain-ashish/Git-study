import logo from './logo.svg';
import './App.css';
import Card from './Card'
import About from './About';

import{BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';

function App() {
  return(
    <>
      
      <BrowserRouter>
      <Navbar />
          <Routes>
              <Route path= 'About' element = {<About />}/>
              <Route path= 'Card' element={<Card />}/>
          </Routes>
      </BrowserRouter>
    </>
  )
 /*  return (
    <div className="card-wrapper" >
      <Card name = 'John Doe' age = {20} /> 
      <Card name = 'ram' />
      <Card />
      /{ argument: props }/ 
    </div>
  ); */
}

export default App;

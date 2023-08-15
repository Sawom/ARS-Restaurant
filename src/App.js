import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Homepage/Home/Home';
import About from './Pages/About/About';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import OurMenu from './Pages/OurMenuPage/OurMenu/OurMenu';


function App() {
  return (
    <div >
      <div className="mx-auto" >
          <BrowserRouter>
              <Header></Header>
              <Routes>
                <Route path='/' element={ <Home></Home> } ></Route>
                <Route path='/home' element={ <Home></Home> } ></Route>
                <Route path='/about' element={ <About></About> } ></Route>
                <Route path='/ourmenu' element={ <OurMenu></OurMenu> } ></Route>
              </Routes>
              <Footer></Footer>
          </BrowserRouter>
      </div>
      
    </div>
    
  );
}

export default App;

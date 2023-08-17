import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Homepage/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import OurMenu from './Pages/OurMenuPage/OurMenu/OurMenu';
import OurShop from './Pages/OurShopPage/OurShop/OurShop';


function App() {
  return (
    <div >
      <div className="mx-auto" >
          <BrowserRouter>
              <Header></Header>
              <Routes>
                <Route path='/' element={ <Home></Home> } ></Route>
                <Route path='/home' element={ <Home></Home> } ></Route>
                <Route path='/ourmenu' element={ <OurMenu></OurMenu> } ></Route>
                {/* dynamic route. order shop theke menu wise different tab e show korbo. 
                our shop component e ache. */}
                <Route path='/ourshop' element={ <OurShop></OurShop> } ></Route>
              </Routes>
              <Footer></Footer>
          </BrowserRouter>
      </div>
      
    </div>
    
  );
}

export default App;

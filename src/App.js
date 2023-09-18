import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Homepage/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import OurMenu from './Pages/OurMenuPage/OurMenu/OurMenu';
import OurShop from './Pages/OurShopPage/OurShop/OurShop';
import Register from './Pages/Authentication/Register/Register';
import Login from './Pages/Authentication/Login/Login';
import AuthProvider from './Pages/Authentication/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Authentication/PrivateRoute/PrivateRoute';
// tanstack query added
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import DashboardPage from './Pages/Dashboard/DashboardPage/DashboardPage';
import Mycart from './Pages/Dashboard/Mycart/Mycart';
import AllUsers from './Pages/Dashboard/AllUsers/AllUsers';
import AddItem from './Pages/Dashboard/AddItem/AddItem';
import AdminRoute from './Pages/Dashboard/AdminRoute/AdminRoute';
import ManageItems from './Pages/Dashboard/ManageItems/ManageItems';
import Payment from './Pages/Dashboard/Payment/Payment';
import UserHome from './Pages/Dashboard/UserHome/UserHome' ;
import AdminHome from './Pages/Dashboard/AdminHome/AdminHome';


const queryClient = new QueryClient();

function App() {
  return (
    <div >
      <div className="mx-auto" >
        <AuthProvider>
            <QueryClientProvider client={queryClient}>
               <BrowserRouter>
                <Header></Header>
                <Routes>
                  <Route path='/' element={ <Home></Home> } ></Route>
                  <Route path='/home' element={ <Home></Home> } ></Route>
                  <Route path='/ourmenu' element={ <OurMenu></OurMenu> } ></Route>

                  {/* private route */}
                  <Route path='/ourshop' element={ 
                    <PrivateRoute>
                        <OurShop></OurShop>
                    </PrivateRoute>  } >
                  </Route>
                  
                  <Route path='/register' element={ <Register></Register> }  ></Route>
                  <Route path='/login' element={ <Login></Login> } ></Route>
                  
                  {/* nested route in dashboard*/}
                  <Route path='/dashboard' element={ 
                      <PrivateRoute>
                          <DashboardPage></DashboardPage>
                      </PrivateRoute>
                   } >

                      <Route path='userhome' element={ <UserHome></UserHome> } ></Route>
                      <Route path='adminhome' element={ <AdminHome></AdminHome>} ></Route>
                      <Route path='mycart' element={ <Mycart></Mycart> } ></Route>
                      <Route path='allusers' element={ <AllUsers></AllUsers> } ></Route>
                      <Route path='payment' element={ <Payment></Payment> } ></Route>
                      
                      {/* admin route */}
                      <Route path='additem' element={
                        <AdminRoute>
                            <AddItem></AddItem>
                        </AdminRoute>
                          } ></Route>
                      {/* manage item */}
                      <Route path='manageitem' element={
                        <AdminRoute>
                          <ManageItems></ManageItems>
                        </AdminRoute>
                      } ></Route>
                      
                  </Route>
                  
                </Routes>
                <Footer></Footer>
              </BrowserRouter>
            </QueryClientProvider>
        </AuthProvider>   
      </div>
    </div>

  );
}

export default App;
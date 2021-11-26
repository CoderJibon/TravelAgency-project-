import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Pages/Share/Header/Header';
import Home from './Pages/HomePage/Home/Home';
import Footer from './Pages/Share/Footer/Footer';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Cruises from './Pages/Cruises/Cruises';
import MyOrders from './Pages/MyOrders/MyOrders';
import ManageAllOrders from './Pages/ManageAllOrders/ManageAllOrders';
import AddNewService from './Pages/AddNewService/AddNewService';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './Context/AuthProvider';
import Booking from './Pages/Booking/Booking';
import PrivateRouter from './Pages/Login/PrivateRouter/PrivateRouter';
import UserList from './Pages/UserList/UserList';


function App() {
  return (
    <div className="App">
     <AuthProvider>
        <BrowserRouter>
          <Header></Header>
            <Switch>
              <Route exact path='/'>
                <Home/>
              </Route>
              <PrivateRouter path='/userList'>
                <UserList/>
              </PrivateRouter>
              <Route path='/cruises'>
                <Cruises/>
              </Route>
              <PrivateRouter path='/booking/:id'>
                <Booking/>
              </PrivateRouter>
              <PrivateRouter path='/myOrder'>
                <MyOrders/>
              </PrivateRouter>
              <PrivateRouter path='/manageOrder'>
                <ManageAllOrders/>
              </PrivateRouter>
              <PrivateRouter path='/addNewService'>
                <AddNewService/>
              </PrivateRouter>
              <Route path='/login'>
                <Login/>
              </Route>
              <Route path='*'>
                <PageNotFound />
              </Route>
            </Switch>
            <Footer></Footer>
        </BrowserRouter>
     </AuthProvider>     
    </div>
  );
}

export default App;

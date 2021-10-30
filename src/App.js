import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Booking from './Pages/Booking/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import AddService from './Pages/AddService/AddService';
import ManageServices from './Pages/ManageServices/ManageServices';
import UpdateUser from './Pages/UpdateUser/UpdateUser';
import 'bootstrap/dist/css/bootstrap.min.css';
import OfferDetails from './Pages/OfferDetails/OfferDetails';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
          
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            
            <PrivateRoute path="/OfferDetails/:OfferId">
              <OfferDetails></OfferDetails>
            </PrivateRoute>

            <Route path="/addService">
              <AddService></AddService>
            </Route>
            <Route path="/manageServices">
              <ManageServices></ManageServices>
            </Route>
            <Route path="/updateServices/:id">
              <UpdateUser></UpdateUser>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}
export default App;
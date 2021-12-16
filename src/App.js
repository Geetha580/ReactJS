import './App.css';
import Home from './components/home';
import Nav from './components/nav';
import Login from './components/login';
import Register from './components/register';
import PageNotFound from './components/pagenotfound';
import GasBooking from './components/gasbooking';
import {Route,Switch,Redirect} from "react-router-dom";
import UpdateGasBooking from './components/updategasbooking';
import AddGasBooking from './components/addgasbooking';
import GetBill from './components/getbill';
import Booking from './components/booking';
function App() {
  return (<div className="App">
    <Nav />
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register}/>
      <Route path="/gasbooking/add" component={AddGasBooking} />
      <Route path="/gasbooking/update/:gasBookingId" component={UpdateGasBooking} />
      <Route path="/gasbookings" component={GasBooking}/>
      <Route path="/getbills" component={GetBill}/>
      <Route path="/booking" component={Booking}/>
      <Redirect exact path="/" to="/home" />
      <Route component={PageNotFound}/>
    </Switch> 
     </div> );
}

export default App;

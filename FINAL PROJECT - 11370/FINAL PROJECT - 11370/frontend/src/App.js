import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Employees from './components/Employees';
import AddEmployee from './components/AddEmployee';
import Edit from './components/Edit';
import About from './components/About';
import Recruitment from './components/Recruitment';
import AddRecruitment from './components/AddRecruitment';
import EditRecruitment from './components/EditRecruitment';
import RecruitmentDetails from './components/RecruitmentDetails';
import Customer from './components/Customer';
import AddCustomer from './components/AddCustomer';
import CustomerDetails from './components/CustomerDetails';
import EditCustomer from './components/EditCustomer';
import AddContacts from './components/AddContacts';
import Invoice from './components/Invoice';
import AddInvoice from './components/AddInvoice';
import EditInvoice from './components/EditInvoice';
import InvoiceDetails from './components/InvoiceDetails';
import Jobs from './components/Jobs';
import Leaves from './components/Leaves';
import AddLeaves from './components/AddLeaves';
import EditLeaves from './components/EditLeaves';
import LeavesDetails from './components/LeavesDetails';

import {
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <>
    <div className='app'>
      
    <Nav />
    <Switch>
              <div class="container">
              <Route exact path="/" >
                <Employees />
              </Route>
              <Route exact path="/add">
                <AddEmployee />
              </Route>
              <Route exact path="/edit/:id">
                <Edit />
              </Route>
              <Route exact path="/about/:id">
                <About />
              </Route>

              <Route exact path="/recruitment" >
                <Recruitment />
              </Route>
              <Route exact path="/addRecruitment">
                <AddRecruitment />
              </Route>
              <Route exact path="/editRecruitment/:id">
                <EditRecruitment />
              </Route>
              <Route exact path="/recruitmentDetails/:id">
                <RecruitmentDetails />
              </Route>

              <Route exact path="/customers" >
                <Customer />
              </Route>
              <Route exact path="/addCustomer">
                <AddCustomer />
              </Route>
              <Route exact path="/editCustomer/:id">
                <EditCustomer />
              </Route>
              <Route exact path="/customerDetails/:id">
                <CustomerDetails />
              </Route>

              <Route exact path="/invoice">
                <Invoice />
              </Route>
              <Route exact path="/addInvoice">
                <AddInvoice />
              </Route>
              <Route exact path="/editInvoice/:id">
                <EditInvoice />
              </Route>
              <Route exact path="/invoiceDetails/:id">
                <InvoiceDetails />
              </Route>

              <Route exact path="/jobs">
                <Jobs />
              </Route>

              <Route exact path="/leaves">
                <Leaves />
              </Route>
              <Route exact path="/addLeaves">
                <AddLeaves />
              </Route>
              <Route exact path="/editLeaves/:id">
                <EditLeaves />
              </Route>
              <Route exact path="/leavesDetails/:id">
                <LeavesDetails />
              </Route>
              </div>
              
      </Switch>
      
      </div>
</>
  );
}

export default App;

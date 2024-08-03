import React from 'react';
import './index.js';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Start from './Components/Start.js';
import Log from './Components/Log.js';
import Footer from './Components/Footer.js';
import Location1 from './Components/Location1.js';
import Location2 from './Components/Location2.js';
import Location3 from './Components/Location3.js';
import Location4 from './Components/Location4.js';
import Location5 from './Components/Location5.js';
import Tomato from './Components/Tomato.js';
import Order from './Components/Order.js';
import Brinjal from './Components/Brinjal.js';
import Lady from './Components/Lady.js';
function App() {
  return (
    <>
    <Router>
    <Log/>
     <Routes>
          <Route path="/start" element={<Start/>}>
          </Route>
          <Route path="/location1" element={<Location1/>}>
          </Route>
          <Route path="/location2" element={<Location2/>}>
          </Route>
          <Route path="/location3" element={<Location3/>}>
          </Route>
          <Route path="/location4" element={<Location4/>}>
          </Route>
          <Route path="/location5" element={<Location5/>}>
          </Route>
          <Route path="/tomato" element={<Tomato/>}>
          </Route>
          <Route path="/buy" element={<Order/>}>
          </Route>
          <Route path="/brijal" element={<Brinjal/>}>
          </Route>
          <Route path="/lady" element={<Lady/>}>
          </Route>
      </Routes>

    </Router>
    <Footer/>
    </>
    
  );
}
export default App;

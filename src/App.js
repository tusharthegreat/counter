import React from 'react';
import {Route,Switch} from 'react-router-dom'; 
import Synchfour from "./Synchfour";
import Synchtwo from "./Synchtwo";
import Navbar from "./Navbar";
import Footer from "./Footer";
function App(){
  return(
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Synchfour}/>
      <Route exact path="/synchtwo" component={Synchtwo}/>
    </Switch>
    <Footer/>
    </>
  );
};
export default App;
import Navbar from "./navbar";
import './style.css'
import Forward from "./Forward"; 
import Favorite from "./Favorite";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Bar from "./bar";
import Receive from "./Receive";
import Scanner from "./Scanner";
import Profile from "./Profile";
import Balance from "./Balance";

function App() {
  return (
    <div className="App">
        <Router>
          <Bar/>
          <Route path="/Balance">
            <Balance/>
          </Route>
          <Route path="/Forward">
            <Forward/>
          </Route>
          <Route path="/Favorite">
            <Favorite/>
          </Route>
          <Route path="/Receive">
            <Receive/>
          </Route>
          <Route path="/Scanner">
            <Scanner/>
          </Route>
          <Route path="/Profile">
            <Profile/>
          </Route>
          <Navbar/> 
        </Router>
    </div>
  );
}

export default App;

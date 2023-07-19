import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import "./App.css";
import React, { useState, createContext, useEffect } from "react";
import Header from "./components/Header/Header";
import StackOverflow from "./components/StackOverflow";
import Question from "./components/AddQuestion/Question";
import Oncampus from "./On-campus";
import ViewExperience from "./components/ViewExperience";
import Apptitude from "./components/Resources/Apptitude";
import Resource from "./components/Resources/Resource";
import Opening from "./components/Resources/Opening";
// import Accenture from "./components/ACCENTURE/Accenture";
// import Tcs from "./components/TCS/Tcs";
// import Infosys from "./components/INFOSYS/Infosys";
// import Hcl from "./components/HCL/HCL";
// import Wipro from "./components/WIPRO/Wipro";
import { Home } from "./components/Home";
import Homepage from "./Homepage";
import Jobs from "./Jobs";
import Register from "./Register";
import Login from "./Login";
import Myprofile2 from "./Myprofile2";
import Body from "./components/Body/Body";
import Main1 from "./components/2018_batch/Main1"
import Main2 from "./components/2019_batch/Main2"
import TCS from "./TcS/TCS";
import HCL from "./Hcl/HCL";
import Accenture from "./Acc/Accenture";
import Wipro from "./WipRo/Wipro";
import Infosys from "./Inf/Infosys";



export const store = createContext();

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        token ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );

  return (
    <div className="App">
      <store.Provider value={[token, setToken]}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/myprofile" component={Myprofile2} />
            <PrivateRoute exact path="/experience" component={StackOverflow} />
            <PrivateRoute exact path="/jobs" component={Jobs} />
            <PrivateRoute exact path="/" component={Homepage} />
            <PrivateRoute exact path="/add-experience" component={Question} />
            <PrivateRoute exact path="/On-campus" component={Oncampus} />
            <PrivateRoute exact path="/question" component={ViewExperience} />
            <PrivateRoute exact path="/apptitude" component={Apptitude} />
            <PrivateRoute exact path="/reso" component={Resource} />
            <PrivateRoute exact path="/opening" component={Opening} />
            <PrivateRoute exact path="/tcs" component={TCS} />
            <PrivateRoute exact path="/hcl" component={HCL} />
            <PrivateRoute exact path="/accenture" component={Accenture} />
            <PrivateRoute exact path="/wipro" component={Wipro} />
            <PrivateRoute exact path="/infosys" component={Infosys} />
            <PrivateRoute exact path="/resume" component={Body} />
            <PrivateRoute exact path="/2018" component={Main1} />
            <PrivateRoute exact path="/2019" component={Main2} />
          
            <PrivateRoute
              exact
              path="/previous-questions"
              component={Accenture}
            />
          </Switch>
        </Router>
      </store.Provider>
    </div>
  );
}

export default App;

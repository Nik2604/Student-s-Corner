import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// import store from './app/store';
import * as serviceWorker from './serviceWorker';
import store from "./app/store";
import New from "./New";
//import { AuthContextProvider } from './context/AuthContext'
//import Main from './Main';
import Body from "./components/Body/Body";
import ResumeTipsCard from './ResumeTips';
import ResumeTips1 from './ResumeTips1.js';
import Form2 from './Form2';
// import Wipro from './components/WIPRO/Wipro';
// import TCS from './TCS';
// import Accenture from './Acc/Accenture';
// import TCS from './TcS/TCS';
// import HCL from './Hcl/HCL';
// import Wipro from './WipRo/Wipro';
// import Infosys from './Inf/Infosys';







ReactDOM.render(
  <React.StrictMode>
        <Provider store={store}>
    <App /> 
    {/* <Body/> */}
    {/* <ResumeTipsCard/> */}
    {/* <ResumeTips1/> */}
    {/* <Form2/> */}
   
    </Provider>
  </React.StrictMode>,
document.getElementById("root")
);

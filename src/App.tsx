import React, { useContext } from 'react';
import AfterLogin from './Components/AfterLogin';
import BeforeLogin from './Components/BeforeLogin';
import { LoginContext } from './Context/loginContext';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const { isLoggedIn } = useContext(LoginContext);

  return <>{isLoggedIn ? <AfterLogin /> : <BeforeLogin />}</>;
}

export default App;

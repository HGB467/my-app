import Navbar from './components/Navbar'
import Newapp from './components/Newapp'
import React, { useState } from 'react'
import Alert from './components/Alert'
/*import About from './components/About'*/
/*import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
*/

function App() {
  const [mode,setMode] = useState("light");
  const [alert,setAlert] = useState(null);

  const showAlert =(message,type)=>{
    setAlert({
      msg : message,
      typ : type,
    })
    setTimeout(()=>{
     setAlert(null);
    },1700)
  }

 const Hacaton =()=>{
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor = "Grey";
    showAlert("Dark Mode Has Been Enabled","success")
    document.title ='TextUtils - Dark Mode'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "White";
      showAlert("Light Mode Has Been Enabled","success")
      document.title ='TextUtils - Home'
    }
  }

  const Hacaton1 =()=>{
    if(mode==='light'){
    setMode('danger');
    document.body.style.backgroundColor = "red";
    showAlert("Red Mode Has Been Enabled","success")
    document.title ='TextUtils - Red Mode'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "White";
      showAlert("Light Mode Has Been Enabled","success")
      document.title ='TextUtils - Home'
    }
  }

  const Hacaton2 =()=>{
    if(mode==='light'){
    setMode('primary');
    document.body.style.backgroundColor = "blue";
    showAlert("Blue Mode Has Been Enabled","success")
    document.title ='TextUtils - Blue Mode'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "White";
      showAlert("Light Mode Has Been Enabled","success")
      document.title ='TextUtils - Home'
    }
  }
  
  return (
    <>
    {/*<Router>*/}
    <Navbar title="TextUtil" mode={mode} toggleMode={Hacaton} toggleMode1={Hacaton1} toggleMode2={Hacaton2}/>
    <Alert Alert={alert}/>
    {/*<Switch>
          <Route path="/About">*/}
           {/* <About />*/}
          {/*</Route>*/}
          {/*<Route path="/">*/}
          <div className="container">
      <Newapp mode={mode} Ailert={showAlert}/>
    </div>
          {/*</Route>
        </Switch>
          </Router>*/}
    </>
  );
}

export default App;

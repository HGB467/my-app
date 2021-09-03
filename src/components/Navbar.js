import React from 'react'
/*import { Link } from "react-router-dom";*/

export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
<div className="container-fluid" style={{color: props.mode==='dark'?'white':props.mode==='danger'?'white':props.mode==='primary'?'white':'black'}} >
  {/*<Link className="navbar-brand" style={{color: props.mode==='dark'?'white':props.mode==='danger'?'white':props.mode==='primary'?'white':'black'}} to="/">{props.title}</Link>*/}
  <a className="navbar-brand" style={{color: props.mode==='dark'?'white':props.mode==='danger'?'white':props.mode==='primary'?'white':'black'}} href="/">{props.title}</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        {/*<Link className="nav-link active" style={{color: props.mode==='dark'?'white':props.mode==='danger'?'white':props.mode==='primary'?'white':'black'}} aria-current="page" to="/">Home</Link>*/}
        <a className="nav-link active" style={{color: props.mode==='dark'?'white':props.mode==='danger'?'white':props.mode==='primary'?'white':'black'}} aria-current="page" href="/">Home</a>
      </li>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        {/*<Link className="nav-link active" style={{color: props.mode==='dark'?'white':props.mode==='danger'?'white':props.mode==='primary'?'white':'black'}} aria-current="page" to="/About">About</Link>*/}
      </li>
    </ul>
    </ul>
    <div className="form-check form-switch mx-2">
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" style={{color: props.mode==='dark'?'white':'black'}}htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
<div className="form-check form-switch mx-2">
  <input className="form-check-input" onClick={props.toggleMode1} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" style={{color: props.mode==='dark'?'white':'black'}} htmlFor="flexSwitchCheckDefault">Enable Red Mode</label>
</div>
<div className="form-check form-switch">
  <input className="form-check-input" onClick={props.toggleMode2} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" style={{color: props.mode==='dark'?'white':'black'}} htmlFor="flexSwitchCheckDefault">Enable Blue Mode</label>
</div>
  </div>
</div>
</nav>
        </div>
    )
}

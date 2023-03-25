import React from 'react'


export default function NavBaar(props) {
  return (
    <div>
     <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container text-light my-1 mx-1">
      <h4 className={`text-${props.mode==='dark'?'light':'dark'}`}>MY TODO LIST</h4>
    <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable LIGHT Mode</label>
</div>
  </div>
</nav>
    </div>
  )
}

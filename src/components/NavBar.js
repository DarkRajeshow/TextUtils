

import PropTypes from 'prop-types'

export default function NavBar(props) {



  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <a className="navbar-brand" href="/">{props.name1}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">{props.home} <span className="sr-only"></span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Link</a>
            </li>
          </ul>
        </div>
        <form></form>

        <div className="choiceCards">

          {/* <!-- for radio choice   --> */}

          <input type="radio" name="card" id="green" onClick={props.applyTheme} />
          <input type="radio" name="card" id="teal" onClick={props.applyTheme} />
          <input type="radio" name="card" id="cyan" onClick={props.applyTheme} />
          <input type="radio" name="card" id="gray" onClick={props.applyTheme} />

          <h3 className='theme'>Themes</h3>
          <label className='green' htmlFor="green">#9AE6B4</label>
          <label className='teal' htmlFor="teal">#81E6D9</label>
          <label className='cyan' htmlFor="cyan">#00B5D8</label>
          <label className='gray' htmlFor="gray">#4A5568</label>
          {/* <!-- choice cards --> */}
        </div>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleFunc} />
          <label className={`form-check-label text-${props.mode === "light" ? "dark" : ""}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div>
      </nav>
    </div>

  )
}

NavBar.propTypes = {
  name1: PropTypes.string,
  home: PropTypes.string.isRequired
}

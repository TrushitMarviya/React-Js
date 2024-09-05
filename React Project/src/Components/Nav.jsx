import React from 'react'

export default function Nav() {
  return (
    <div>
      <nav className="container-fluid navbar navbar-expand-lg position-fixed" style={{background:"#53c9bb"}}>
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav" >
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active fs-5 text-light ps-5" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active fs-5 text-light ps-5" aria-current="page" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active fs-5 text-light ps-5" aria-current="page" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active fs-5 text-light ps-5" aria-current="page" href="#">Gallery</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active fs-5 text-light ps-5" aria-current="page" href="#">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active fs-5 text-light ps-5" aria-current="page" href="#">Contact</a>
        </li>
        </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

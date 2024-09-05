import React from 'react'

export default function Footer() {
  return (
    <div>
      <div className="container-fluid">
        <div className="footer row">
        <div className="col pt-5 mt-5">
            <div className="container  pt-5">
            <p className="fs-1 text-light text-center fw-normal">Subscribe Newsletter</p>
            <p className="fs-5 text-light fw-normal text-center">
            We strictly follow the State Board's sanitary and disinfection guidelines.</p>
            <br /><br />
            <div className="row mt-5 pt-5">
            <div className="col-3 text-light fs-3">
                <li style={{listStyle:"none"}}>
                <ul className="fw-semibold pt-3 pb-3">Menu</ul>
                <ul className="fs-5">Home</ul>
                <ul className="fs-5">About</ul>
                <ul className="fs-5">Shop</ul>
                <ul className="fs-5">Contact</ul>
                </li>
            </div>
            <div className="col-3  text-light fs-3">
                <li style={{listStyle:"none"}}>
                <ul className="fw-semibold pt-3 pb-3">contact</ul>
                <ul className="fs-5">10 983 456 3669</ul>
                <ul className="fs-5">reserve@manicure.com</ul>
                </li>
            </div>
            <div className="col-3 text-light fs-3">
                <li style={{listStyle:"none"}}>
                <ul className="fw-semibold pt-3 pb-3">Address</ul>
                <ul className="fs-5">700, Green lane, New York, USA</ul>
                <ul className="fs-5">Get Direction</ul>
                </li>
            </div>
            <div className="col-3  text-light fs-3">
                <li style={{listStyle:"none"}}>
                <ul className="fw-semibold pt-3 pb-3">Opening Hour</ul>
                <ul className="fs-5">Mon-Fri (9.00-6.00)</ul>
                <ul className="fs-5">Sat-Sun (Closed)</ul>
                </li>
            </div>
            </div>
            <br /><br />
<hr className="border border-light mt-5 " />
<div className="row">
    <div className="col-6 pt-5 pb-5">
        <img src="https://preview.colorlib.com/theme/leopet/img/footer_logo.png" alt="" className="img-fluid" />
    </div>
    <div className="col-6 pt-5 pb-5 mb-4">
        <p className="fs-6 text-light">Copyright ©2024 All rights reserved | This template is made with  by ❤️ Colorlib</p>
    </div>
</div>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

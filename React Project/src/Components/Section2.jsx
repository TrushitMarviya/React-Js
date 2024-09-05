import React from 'react'

export default function Section2() {
  return (
    <div>
            <br /><br /><br />
      <div className="container">
        <div className="row">
            <div className="col-6">
                <img src="https://preview.colorlib.com/theme/leopet/img/about.png" alt="" className="img-fluid" />
            </div>
            <div className="col-6  ps-5">
                <br /><br /><br />
                <img src="https://preview.colorlib.com/theme/leopet/img/about_icon.png" alt="" className="img-fluid ps-5" />
                <p className="display-4 ps-5 pt-5">We care your pet As <br /> you care</p>
                <p className="p-1 ps-5 pt-5">Working in conjunction with humanitarian aid agencies, we have  <br /> supported programmes to help alleviate human suffering through <br /> animal welfare when people might depend on livestock as their only <br /> source of income or food.</p>
                <br />
                <button className="bt-2 ms-5 btn btn-primary rounded-pill " style={{background:"#53c9bb" , border:"#53c9bb"}}>ABOUT US</button>
            </div>
        </div>
      </div>
    </div>
  )
}

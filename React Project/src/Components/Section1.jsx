// eslint-disable-next-line no-unused-vars
import React from 'react';

export default function Section1() {
  return (
    <div>
      <br /><br />
      <div className="container-fluid">
        <div className="sec1 row">
          <div className="col">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <br /><br /><br /><br />
                  <p className="ms-5 ps-2 mt-5 pt-5 fs-4 fw-light text-danger">
                    Welcome To Leopet
                  </p> 
                  <p className="display-1 ms-5 ps-2 fw-light">
                    Give Your Pet <br />
                    Best Care
                  </p>
                  <br />
                  <button
                    className="bt-1 ms-5 btn btn-primary rounded-pill"
                    style={{ background: "#53c9bb", borderColor: "#53c9bb" }}
                  >
                    OUR SERVICES
                  </button>
                  <br /><br /><br /><br /><br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

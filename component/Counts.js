import React from 'react'

const Counts=()=> {
  return (
    <div>
      {/* ======= Counts Section ======= */}
      <section id="counts" className="counts">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <i className="fas fa-address-book " />
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={85}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>Nasabah</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
              <div className="count-box">
                <i className="fas fa-map" />
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={18}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>End Point</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="fas fa-handshake" />
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={12}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>Mitra</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="fas fa-trash" />
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={150}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>Jumlah Sampah /kg</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Counts Section */}
    </div>
  )
}
export default Counts;
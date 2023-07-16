import React from 'react'

const Benner=()=> {

  return (
    <div>
      {/* ======= Hero Section ======= */}
      
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <h1 className='text-dark'><b className='text-success'>Rumah</b> Sampah </h1>
          <h2>Solusi cerdas pengolahan sampah</h2>
          <h2>One Click, <span className='text-success'>One Clean</span></h2>
          <a href="#about" className="btn-get-started scrollto mt-25">
            Selengkapnya
          </a>
        </div>
      </section>
      
      {/* End Hero */}
      <main id="main">
        {/* ======= Why Us Section ======= */}
        <section id="why-us" className="why-us">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 d-flex align-items-stretch">
                <div className="content">
                  <h3>Kenapa Rumah Sampah?</h3>
                  <p>
                    Rumah sampah sebagai sosial interface yang bergerak dalam
                    bidang pengelolaan sampah yang memanfaatkan teknologi
                    sebagai sarana pendukung
                  </p>
                  <div className="text-center">
                    <a href="#" className="more-btn">
                      Selengkapnya
                      <i className="bx bx-chevron-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 d-flex align-items-stretch">
                <div className="icon-boxes d-flex flex-column justify-content-center">
                  <div className="row">
                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box mt-4 mt-xl-0">
                        <i className="bx bx-trash" />
                        <h4>Pengolahan Sampah</h4>
                        <p>
                          Sampah yang masuk akan diolah dan didaur ulang, baik
                          sampah oraganik maupun anorganik serta sampah sisa
                          yang tidak terpakai
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box mt-4 mt-xl-0">
                        <i className="bx bx-code-block" />
                        <h4>Aplikasi Rumah Sampah</h4>
                        <p>Sebagai sarana penghubung antar konsumen</p>
                      </div>
                    </div>
                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box mt-4 mt-xl-0">
                        <i className="bx bx-chart" />
                        <h4>Program Lanjutan</h4>
                        <p>Kelanjutan dari program sebelumnya</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End .content*/}
              </div>
            </div>
          </div>
        </section>
        {/* End Why Us Section */}
      </main>
    </div>
  )
}
export default Benner;
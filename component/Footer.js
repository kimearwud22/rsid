import React from 'react'

const Footer = () => {
  return (
    <div>
      <div>
        {/* ======= Footer ======= */}
        <footer id="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 footer-contact">
                  <h3>Rumah Sampah</h3>
                  <p>
                    Q569+2XV, Jalan.KH.Hasyim Dusun Krajan,RT/RW 01/02, Sragi,
                    Kec. Songgon, Kabupaten Banyuwangi, Jawa Timur 68463 United
                    States <br />
                    <br />
                    <strong>Phone:</strong> <a href="https://wa.me/+6282141432167?text=Selamat%20Datang%20Di%20Rumah%20Sampah"> +62 821-4143-2167</a> 
                    <br />
                    <strong>Email:</strong>rumahsampah08@gmail.com
                    <br />
                  </p>
                </div>
                <div className="col-lg-2 col-md-6 footer-links">
                  <h4>Useful Links</h4>
                  <ul>
                    <li>
                      <i className="bx bx-chevron-right" /> <a href="#">Home</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" />{' '}
                      <a href="#">About</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" />{' '}
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" />{' '}
                      <a href="#">Pendiri</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" />{' '}
                      <a href="#">Privacy policy</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 footer-links">
                  <h4>Our Services</h4>
                  <ul>
                    <li>
                      <i className="bx bx-chevron-right" />{' '}
                      <a href="#">Layanan</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" />{' '}
                      <a href="#">Program</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4 col-md-6 footer-newsletter">
                  <h4>Gabung Rumah Sampah</h4>
                  <p>Buang sampah dengan mudah, cepat dan terpercaya</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container d-md-flex py-4">
            <div className="me-md-auto text-center text-md-start">
              <div className="copyright">
                © Copyright{' '}
                <strong>
                  <span>Rumah Sampah</span>
                </strong>
                .
              </div>
              <div className="credits">
                Designed by <a href="#">Rumah Sampah Creative</a>
              </div>
            </div>
            <div className="social-links text-center text-md-right pt-3 pt-md-0">
              <a href="#" className="twitter">
                <i className="bx bxl-twitter" />
              </a>
              <a href="#" className="facebook">
                <i className="bx bxl-facebook" />
              </a>
              <a href="#" className="instagram">
                <i className="bx bxl-instagram" />
              </a>
              <a href="#" className="google-plus">
                <i className="bx bxl-skype" />
              </a>
              <a href="#" className="linkedin">
                <i className="bx bxl-linkedin" />
              </a>
            </div>
          </div>
        </footer>
        {/* End Footer */}
      </div>
    </div>
  )
}

export default Footer

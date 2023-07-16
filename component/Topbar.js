import React from 'react'

function Topbar(){
  return(
    <div>
      <div>
        {/* <!-- Top Bar --> */}
        <div id="topbar" className="d-flex align-items-center fixed-top">
          <div className="container d-flex justify-content-between">
            <div className="contact-info d-flex align-items-center">
              <i className="bi bi-envelope" />{' '}
              <a href="mailto:contact@example.com">rumahsampah08@gmail.com</a>
              <i className="bi bi-phone" />
              <a href="https://wa.me/+6282141432167?text=Selamat%20Datang%20Di%20Rumah%20Sampah"> +62 821-4143-2167</a> 
            </div>
            <div className="d-none d-lg-flex social-links align-items-center">
              <a href="#" className="twitter">
                <i className="bi bi-twitter" />
              </a>
              <a href="#" className="facebook">
                <i className="bi bi-facebook" />
              </a>
              <a href="#" className="instagram">
                <i className="bi bi-instagram" />
              </a>
              <a href="#" className="linkedin">
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Topbar
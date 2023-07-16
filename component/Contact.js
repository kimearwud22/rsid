import React from 'react'

const Contact=()=> {
  return (
    <div>
      {/* ======= Contact Section ======= */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2>Contact</h2>
            <p>Berikut data alamat serta contact person dari perusahaan kami</p>
          </div>
        </div>
        <div>
          <iframe
            style={{ border: 0, width: '100%', height: 350 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d987.1590041803219!2d114.16952912916642!3d-8.23930647236714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa0d1ebbacc472601!2zOMKwMTQnMjEuNSJTIDExNMKwMTAnMTIuMyJF!5e0!3m2!1sid!2sid!4v1662673711000!5m2!1sid!2sid"
            width={600}
            height={450}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            frameBorder={0}
          />
        </div>
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt" />
                  <h4>Location:</h4>
                  <p>
                    Q569+2XV, Jalan.KH.Hasyim, Dusun Krajan,RT/RW 01/02, Sragi,
                    Kec. Songgon, Kabupaten Banyuwangi, Jawa Timur 68463
                  </p>
                </div>
                <div className="email">
                  <i className="bi bi-envelope" />
                  <h4>Email:</h4>
                  <p>rumahsampahexample@gmail.com</p>
                </div>
                <div className="phone">
                  <i className="bi bi-phone" />
                  <h4>Call:</h4>
                  <p><a href="https://wa.me/+6282141432167?text=Selamat%20Datang%20Di%20Rumah%20Sampah"> +62 821-4143-2167</a> </p>
                </div>
              </div>
            </div>
            <div className="col-lg-8 mt-5 mt-lg-0">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                className="php-email-form"
              >
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Nama"
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={5}
                    placeholder="Masukkan text"
                    required
                    defaultValue={''}
                  />
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Kirim</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* End Contact Section */}
    </div>
  )
}
export default Contact;
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
            src="https://www.google.com/maps/place/Rumah+Sampah+ID/@-8.2393396,114.1673916,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd1535959094d73:0x6d5717fb9add6f42!8m2!3d-8.2393449!4d114.1699665!16s%2Fg%2F11vd3vflh9?authuser=0&entry=ttu"
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
                  <p>rumahsampah08@gmail.com</p>
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
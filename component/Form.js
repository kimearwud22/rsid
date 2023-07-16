import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

const Form = () => {
  const [data, setData] = useState([])
  const [nama, setNama] = useState('')
  const [tlpn, setTlpn] = useState('')
  const [date, setDate] = useState('')
  const [alamat, setAlamat] = useState('')
  const [sampah, setSampah] = useState('')
  const [jsampah, setJsampah] = useState('')
  const [pesan, setPesan] = useState('')

  async function AddForm(e) {
    e.preventDefault()
    try {
      axios({
        method: 'post',
        url: '/api/booking/create',
        data: {
          nama: nama,
          tlpn: tlpn,
          date: date,
          alamat: alamat,
          sampah: sampah,
          jsampah: jsampah,
          pesan: pesan,
        },
      }).then((res) => {
        console.log(res)
      })
      Swal.fire({
        title: 'Pesanan',
        text: 'Pesan segera di proses',
        icon: 'success',
        confirmButtonText: 'Oke Siap',
      })
      clearForm()
    } catch (err) {
      // console.log(err)
    }
  }
  const clearForm = () => {
    setNama('')
    setTlpn('')
    setDate('')
    setAlamat('')
    setSampah('')
    setJsampah('')
    setPesan('')
  }

  return (
    <div>
      <div>
        {/* ======= Appointment Section ======= */}
        <section id="appointment" className="appointment section-bg">
          <div className="container">
            <div className="section-title">
              <h2>Pesan Layanan Kebersihan</h2>
              <p>
                Untuk memudahkan petugas saat melakukan pembersihan, silahkan
                isi form berikut terlebih dahulu
              </p>
            </div>
            <form onSubmit={AddForm} role="form" className="php-email-form">
              <div className="row">
                <div className="col-md-4 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Nama"
                    data-rule="minlen:4"
                    data-msg="Harap Isi Bidang Ini!"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    required
                  />
                  <div className="validate" />
                </div>
                {/* <div class="col-md-4 form-group mt-3 mt-md-0">
        <input type="email" class="form-control" name="email" id="email" placeholder="Email" data-rule="email" data-msg="Please enter a valid email">
        <div class="validate"></div>
      </div> */}
                <div className="col-md-4 form-group mt-3 mt-md-0">
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    id="phone"
                    placeholder="No. HP"
                    data-rule="minlen:4"
                    data-msg="Harap Isi Bidang Ini!"
                    value={tlpn}
                    onChange={(e) => setTlpn(e.target.value)}
                    required
                    minLength="12"
                    maxLength="12"
                    pattern="^(^\+62|62|^08)(\d{3,4}-?){2}\d{3,4}$"
                    title="Masukkan No TLPN Yang Benar (+62/62/08)...."
                  />
                  <div className="validate" />
                </div>
                <div className="col-md-4 form-group mt-3 mt-md-0">
                  <input
                    type="date"
                    className="form-control"
                    name="date"
                    id="date"
                    data-rule="email"
                    data-msg="Please enter a valid email"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                  <div className="validate" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 form-group mt-3">
                  <input
                    type="text"
                    name="date"
                    className="form-control datepicker"
                    id="alamat"
                    placeholder="Alamat Anda"
                    data-rule="minlen:4"
                    data-msg="Harap Isi Bidang Ini!"
                    value={alamat}
                    onChange={(e) => setAlamat(e.target.value)}
                  />
                  <div className="validate" />
                </div>
                <div className="col-md-4 form-group mt-3">
                  {/* <label htmlFor="">Pilih Sampah Anda</label> */}
                  <select
                    name="department"
                    id="department"
                    className="form-select"
                    value={sampah}
                    onChange={(e) => setSampah(e.target.value)}
                  >
                    <option value="">Pilih Sampah Anda</option>
                    <option value="Organik">Organik</option>
                    <option value="Anorganik">Anorganik</option>
                    <option value="Campuran">Campuran</option>
                  </select>
                  <div className="validate" />
                </div>
                <div className="col-md-4 form-group mt-3">
                  <select
                    name="doctor"
                    id="doctor"
                    className="form-select"
                    value={jsampah}
                    onChange={(e) => setJsampah(e.target.value)}
                  >
                    <option value>Pilih Jumlah Sampah</option>
                    <option value="0-10kg">0-10kg</option>
                    <option value="10-50kg">10-50kg</option>
                    <option value="50 kg Lebih">50 kg Lebih</option>
                  </select>
                  <div className="validate" />
                </div>
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows={5}
                  placeholder="Masukkan Pesan (Optional)"
                  
                  value={pesan}
                  onChange={(e) => setPesan(e.target.value)}
                />
                <div className="validate" />
              </div>
              <div className="mb-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">
                  Your appointment request has been sent successfully. Thank
                  you!
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="">
                    <button type="submit">Pesan Sekarang</button>
                  </div>
                </div>
                <div className="col">
                  <div className="text-center">
                   
                      <a
                        href="https://wa.me/+6282141432167?text=Selamat%20Datang%20Di%20Rumah%20Sampah"
                        className="btn-get-started scrollto mt-25"
                      >
                        Pesan Lewat WA
                      </a>
                    
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
        {/* End Appointment Section */}
      </div>
    </div>
  )
}
export default Form

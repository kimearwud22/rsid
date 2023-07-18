import React from 'react'
import {useState, useEffect} from 'react'

function Article(){
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const getData = () => {
    fetch("/api/artikel/all", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res.data)
        setLoading(false)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return(
    <div>
      {/* ======= Departments Section ======= */}
      <section id="departments" className="departments">
        <div className="container">
          <div className="section-title">
            <h2>Jenis Sampah</h2>
            <p>
              Berdasarkan sifat yang dimilikinya, sampah terbagi menjadi tiga
              jenis yaitu sampah organik, anorganik, dan sampah sisa. Berikut
              penjelasannya.
            </p>
          </div>
          <div className="row gy-4">
            <div className="col-lg-3">
              <ul className="nav nav-tabs flex-column">
                <li className="nav-item">
                  <a
                    className="nav-link active show"
                    data-bs-toggle="tab"
                    href="#tab-1"
                  >
                    1. Sampah Organik
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
                    2. Sampah Anorganik
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-3">
                    3. Sampah Sisa
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-9">
            {data.length > 0 ? (
                  data.map((item, index) => (
              <div className="tab-content">
                <div className="tab-pane active show" id="tab-1" key={index}>
                  <div className="row gy-4" >
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>{item.judul}</h3>
                      <p className="fst-italic">
                        {item.isi}
                      </p>
                      {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, asperiores! Labore, dolor!</p> */}
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img
                        src={item.image}
                        alt="images"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
              ))
              ) : (
                <div className="tab-pane active show" id="tab-1">
                  <div className="row gy-4">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Artikel Kosong</h3>
                      </div>
                    </div>
                  </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* End Departments Section */}
    </div>
  )
}

export default Article

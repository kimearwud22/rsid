import React from 'react'

function Article(){
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
              <div className="tab-content">
                <div className="tab-pane active show" id="tab-1">
                  <div className="row gy-4">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Sampah Organik</h3>
                      <p className="fst-italic">
                        Menurut penjelsan di dlh.kulonprogo.go.id, jenis sampah
                        organik adalah sampah dari bahan-bahan hayati yang bisa
                        didegradasi oleh mikroba atau bersifat biodegradable.
                        Sampah ini mudah diurai dengan proses alami Jenis sampah
                        rumah tangga sebagian besar termasuk kelompok sampah
                        organik. Beberapa sampah organik misalnya sampah dapur,
                        sisa makanan, kulit buah, daun, ranting, sayuran, dan
                        buah-buahan.
                      </p>
                      {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, asperiores! Labore, dolor!</p> */}
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img
                        src="/img/gallery/gallery-1.jpg"
                        alt="images"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-2">
                  <div className="row gy-4">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Sampah Anorganik</h3>
                      <p className="fst-italic">
                        Klasifikasi sampah lainnya berdasarkan sifatnya yaitu
                        sampah anorganik atau non organik. Sampah anorganik
                        adalah sampah yang berasal dari bahan non hayati
                        termasuk produk sintesis dan hasil proses teknologi
                        pengolahan bahan tambang. Contoh sampah anorganik yaitu
                        sampah logam dan produk olahannya, sampah plastik, kaca,
                        keramik, dan detergen. Sebagian besar sampah non organik
                        ini tidak bisa diurai oleh alam atau mikroorganisme.
                      </p>
                      <p>
                        Sebagian lainnya, sampah anogranik bisa diurai, namun
                        butuh waktu yang lama. Jenis sampah anorganik yang bisa
                        urai dalam waktu lama misalnya botol plastik, botol
                        gelas, tas plastik, dan kaleng.
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img
                        src="/img/gallery/gallery-1.jpg"
                        alt="images"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-3">
                  <div className="row gy-4">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Sampah Sisa</h3>
                      <p className="fst-italic">
                        Sampah yang sangat sulit di daur ulang dan jika bisa
                        didaur ulang membutuhkan biaya yang lebih malah
                      </p>
                      {/* <p></p> */}
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img
                        src="/img/gallery/gallery-1.jpg"
                        alt="images"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-4">
                  <div className="row gy-4">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Jenis Sampah 4</h3>
                      <p className="fst-italic">
                        Totam aperiam accusamus. Repellat consequuntur iure
                        voluptas iure porro quis delectus
                      </p>
                      <p>
                        Eaque consequuntur consequuntur libero expedita in
                        voluptas. Nostrum ipsam necessitatibus aliquam fugiat
                        debitis quis velit. Eum ex maxime error in consequatur
                        corporis atque. Eligendi asperiores sed qui veritatis
                        aperiam quia a laborum inventore
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img
                        src="/assets/img/departments-4.jpg"
                        alt="images"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-5">
                  <div className="row gy-4">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>
                        Est eveniet ipsam sindera pad rone matrelat sando reda
                      </h3>
                      <p className="fst-italic">
                        Omnis blanditiis saepe eos autem qui sunt debitis porro
                        quia.
                      </p>
                      <p>
                        Exercitationem nostrum omnis. Ut reiciendis repudiandae
                        minus. Omnis recusandae ut non quam ut quod eius qui.
                        Ipsum quia odit vero atque qui quibusdam amet. Occaecati
                        sed est sint aut vitae molestiae voluptate vel
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img
                        src="/assets/img/departments-5.jpg"
                        alt="images"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Departments Section */}
    </div>
  )
}

export default Article

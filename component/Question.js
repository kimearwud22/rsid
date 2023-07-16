import React from 'react'

const Question=()=>{
  return(
    <div>
        {/* ======= Frequently Asked Questions Section ======= */}
        <section id="faq" className="faq section-bg">
          <div className="container">
            <div className="section-title">
              <h2>Pertanyaan yang Sering Diajukan</h2>
              <p>Pertanya yang sering diajukan oleh konsumen rumah sampah.</p>
            </div>
            <div className="faq-list">
              <ul>
                <li data-aos="fade-up">
                  <i className="bx bx-help-circle icon-help" />
                  <a
                    data-bs-toggle="collapse"
                    className="collapse"
                    data-bs-target="#faq-list-1"
                  >
                    Bagaimana cara mengelola sampah yang baik ?
                    <i className="bx bx-chevron-down icon-show" />
                    <i className="bx bx-chevron-up icon-close" />
                  </a>
                  <div
                    id="faq-list-1"
                    className="collapse show"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Mengelola sampah dapat dilakukan dengan cara pengurangan
                      dan penanganan. Pengurangan sampah dilakukan melalui
                      prinsip 3R (Reduce, Reuse, dan Recycle) yaitu pengurangan
                      sampah, penggunaan kembali sampah dan pendaur ulangan
                      sampah. a. Pembatasan timbulan sampah /pengurangan sampah.
                      Misalnya dengan membawa tas belanja sendiri dari rumah,
                      menghidangkan makan minum dengan piring dan gelas. b.
                      Pendaur ulangan sampah, misalnya sampah plastik didaur
                      ualng menjadi produk kerajinan c. Pemanfaatan kembali
                      sampah yaitu memanfaatkan sampah yang masih bisa digunakan
                      kembali, misalnya kaleng bekas cat digunakan sebagai pot
                      tanaman.
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay={100}>
                  <i className="bx bx-help-circle icon-help" />
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-2"
                    className="collapsed"
                  >
                    Mengapa sampah plastik dapat mencemari lingkungan?
                    <i className="bx bx-chevron-down icon-show" />
                    <i className="bx bx-chevron-up icon-close" />
                  </a>
                  <div
                    id="faq-list-2"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Bagi lingkungan, sampah plastik menjadi masalah utama
                      penyebab pencemaran lingkungan. Ketika sampah plastik ini
                      dibuang di tanah, plastik membutuhkan waktu hingga puluhan
                      tahun untuk terurai dan menyatu dengan tanah. Plastik yang
                      sudah terurai ini dapat mencemari tanah dengan bahan-bahan
                      kimia yang dikeluarkan. Akibatnya, dapat menyebabkan
                      hilangnya tanah humus untuk pertanian, air tanah menjadi
                      beracun, dan kurangnya makanan ternak. Di laut atau
                      perairan, banyak sampah plastik yang terapung dan kadang
                      juga termakan oleh hewan-hewan air. Plastik yang berada di
                      dalam air, sewaktu-waktu akan hancur karena pengaruh
                      matahari dan sebagainya. Hancurnya plastik ini akan
                      menimbulkan partikel-partikel kecil yang disebut
                      mikroplastik. Mikroplastik ini dapat masuk ke dalam tubuh
                      binatang laut dan berdampak buruk terhadap kesehatan organ
                      hewan. Penumpukan sampah plastik yang berada di
                      sudut-sudut bantaran sungai akan menyebabkan banjir. Bagi
                      lingkungan, banjir menyebabkan lingkungan menjadi kotor
                      dan tercemar sampah. Bagi makhluk hidup, banjir bisa
                      membawa bakteri dan kuman pembawa penyakit.
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay={200}>
                  <i className="bx bx-help-circle icon-help" />
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-3"
                    className="collapsed"
                  >
                    Bagaimana cara membuang sampah dengan baik?
                    <i className="bx bx-chevron-down icon-show" />
                    <i className="bx bx-chevron-up icon-close" />
                  </a>
                  <div
                    id="faq-list-3"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Caranya dengan membuang sampah pada tempatnya, yaitu
                      tempat sampah. Selain itu, bedakan sampah berdasarkan
                      jenisnya agar bisa dimanfaatkan kembali. Berdasarkan
                      sifatnya, sampah dibedakan menjadi beberapa jenis. Antara
                      lain sampah organik, sampah anorganik, dan sampah beracun.
                      Sampah organik merupakan jenis sampah yang berasal dari
                      alam dan bisa membusuk. Sampah organik ini dapat
                      dimanfaatkan kembali menjadi pupuk yang menyuburkan
                      tanaman. Sampah anorganik merupakan jenis sampah yang
                      tidak membusuk, dan sulit terurai di tanah. Sampah
                      anorganik juga bisa didaur ulang menjadi berbagai benda
                      yang bisa digunakan kembali, contohnya barang kerajinan.
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay={300}>
                  <i className="bx bx-help-circle icon-help" />
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-4"
                    className="collapsed"
                  >
                    Apa yang dimaksud dengan Reduce, Reuse, Recycle?
                    <i className="bx bx-chevron-down icon-show" />
                    <i className="bx bx-chevron-up icon-close" />
                  </a>
                  <div
                    id="faq-list-4"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Reduce artinya mengurangi penggunaan produk yang dapat
                      menimbulkan sampah. Contohnya, mengurangi penggunaan
                      plastik dan sampah-sampah yang sulit terurai. Reuse
                      artinya penggunaan kembali barang-barang yang bisa
                      digunakan. Contohnya menggunakan kaleng bekas cat sebagai
                      pot tanaman atau tempat barang-barang tertentu. Sedangkan
                      recycle adalah mendaur ulang sampah untuk dijadikan
                      barang-barang yang dapat digunakan kembali. Misalnya
                      dengan membuat kerajinan tangan dari sampah plastik yang
                      sudah tidak digunakan.
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay={400}>
                  <i className="bx bx-help-circle icon-help" />{' '}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-5"
                    className="collapsed"
                  >
                    contoh kegiatan apa saja yang bisa kita lakukan untuk
                    memanfaatkan sampah.{' '}
                    <i className="bx bx-chevron-down icon-show" />
                    <i className="bx bx-chevron-up icon-close" />
                  </a>
                  <div
                    id="faq-list-5"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Hal yang bisa kita lakukan untuk memanfaatkan sampah yaitu
                      dengan mendaur ulang, membuat kompos, dan memanfaatkan
                      barang bekas. Daur ulang adalah pemrosesan bahan yang
                      pernah dipakai, misalnya kertas, plastik, atau serat untuk
                      mendapatkan produk baru. Contoh kegiatan mendaur ulang
                      yaitu memanfaatkan sampah plastik untuk membuat barang
                      kerajinan. Pupuk kompos biasanya dibuat dari sampah-sampah
                      organik atau yang bisa membusuk. Contohnya dengan
                      memanfaatkan kulit pisang sebagai pupuk alami. Kulit
                      pisang mengandung fosfor, nitrogen, dan magnesium yang
                      berguna untuk tanah. Kita juga bisa memanfaatkan barang
                      bekas seperti tong cat bekas atau cangkir rusak untuk
                      dijadikan pot. Tong cat bekas atau cangkir rusak bisa
                      digunakan langsung untuk pot tanaman, atau tempat menaruh
                      kuas lukis.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* End Frequently Asked Questions Section */}
      </div>
  )
}
export default Question
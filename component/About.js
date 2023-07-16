import React from 'react'

const About =()=>{
    return(
        <div>
            {/* ======= About Section ======= */}
            <section id="about" className="about">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
                            <a href="#" className="glightbox play-btn mb-4" />
                        </div>
                        <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                            <h3>
                                Rumah Sampah adalah perusahaan yang berjalan di bidang
                                kebersihan
                            </h3>
                            <p>
                                Rumah Sampah didirikan sebagai solusi permasalahan sampah yang
                                terjadi saat ini maupun masa depan. Dengan memanfaatkan
                                teknologi sebagai sarana pendukungnya dan siap mengikuti
                                perkembangan teknologi di masa depan
                            </p>
                            <div className="icon-box">
                                <div className="icon">
                                    <i className="bx bx-analyse" />
                                </div>
                                <h4 className="title">
                                    <a href="#">Mudah Cepat</a>
                                </h4>
                                <p className="description">
                                    Fitur mudah dipahami dan pemprosesan cepat
                                </p>
                            </div>
                            <div className="icon-box">
                                <div className="icon">
                                    <i className="bx bx-map-pin" />
                                </div>
                                <h4 className="title">
                                    <a href="#">Siap Jemput</a>
                                </h4>
                                <p className="description">
                                    Kapanpun ada panggilan siap jemput sesuai jadwal panggilan
                                </p>
                            </div>
                            <div className="icon-box">
                                <div className="icon">
                                    <i className="bx bx-user-pin" />
                                </div>
                                <h4 className="title">
                                    <a href="#">Program Layanan Terpadu</a>
                                </h4>
                                <p className="description">
                                    Memiliki program-program unggulan yang menguntungkan konsumen
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End About Section */}
        </div>
    )
}
export default About;
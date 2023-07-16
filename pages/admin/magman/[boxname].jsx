import { useRouter } from "next/router";
import { useEffect } from "react";
import Card from "../../../component/admin/Card";
import Layout from "../../../component/admin/Layout";
import useLoginStore from "../../../store/store";

export default function Box() {
  const isLoggedIn = useLoginStore((state) => state.isLoggedIn)
  const router = useRouter()
  const { boxname } = router.query
  const handleSubmit = () => {

  }
  const handlePush = () => {

  }

  useEffect(() => {
    if (isLoggedIn == 0) {
      router.push('/admin/login');
    }
  })
  return (
    <Layout title={boxname} isActiveNavLink={2}>
      <div className='content-wrapper'>
        <section className='content'>
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="ml-2">{boxname}</h1>
            </div>
          </div>
          <div className='row mb-2'>
            <div className='col'>
              <Card cardTitle="Data Maggot Box" cardType="card-success">
                <form onSubmit={() => handleSubmit()}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="fomr-group">
                        <label htmlFor="initial_date">Tanggal Masuk</label>
                        <input type="datetime" name="initial_date" className="form-control" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="fomr-group">
                        <label htmlFor="initial_date">Jumlah Awal</label>
                        <input type="number" name="initial_weight" className="form-control" placeholder="(dalam kg)" required />
                      </div>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-md-6">
                      <div className="fomr-group">
                        <label htmlFor="initial_date">Tanggal Panen</label>
                        <input type="datetime" name="harvest_date" className="form-control" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="fomr-group">
                        <label htmlFor="initial_date">Jumlah Panen</label>
                        <input type="number" name="harvest_weight" className="form-control" placeholder="(dalam kg)" required />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <button type="submit" className="btn btn-success mr-2"><i className="fas fa-save"></i> Simpan</button>
                      <button type="submit" className="btn btn-primary"><i className="fas fa-refresh"></i> Push</button>
                    </div>
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
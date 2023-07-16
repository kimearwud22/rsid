import React, { useState, useEffect } from 'react';
import styles from "../../styles/admin/Home.module.css";
import styles1 from "../../styles/admin/User.module.css";
import Router, { useRouter } from "next/router";
import Link from 'next/dist/client/link';
import Swal from 'sweetalert2';

const PelangganList = () => {
  const [data, setData] = useState([]);

  //get all booking pakai fetch bukan axios
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/booking/all');
      const json = await res.json();
      setData(json.data);
    };
    fetchData();
  }, []);
  const router = useRouter();

  //delete booking
  const deletePesan = async (id) => {
    const res = await fetch(`/api/booking/delete?id=${id}`, {
      method: 'DELETE',
    });
    const json = await res.json();
    if (!res.ok) throw Error(json.message);
    Swal.fire({
      icon: 'success',
      title: 'Berhasil',
      text: json.message,
    });
    router.push('/admin/pesan');
  };



  return (
    <div>
      <div className={styles1.row}>
        <div className="col-md-15">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">List Pelanggan</h4>
            </div>
            <div className="card-body">
              <div className={styles1.tableresposif}>
                <table className={`table table-hover ${styles1.table}`}>
                  <thead className={`text-center ${styles1.textPrimary}`}>
                    <tr>
                      <th>NO</th>
                      <th>Nama</th>
                      <th>Tlpn/WA</th>
                      <th>Date</th>
                      <th>Alamat</th>
                      <th>Sampah</th>
                      <th>Jumlah Sampah</th>
                      <th>Keterangan</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.length > 0 &&
                      data.map((item, index) => (
                        <tr key={item.id}>
                          <td className={`text-center ${styles1.textPrimary}`}>{index + 1}</td>
                          <td>{item.nama}</td>
                          <td>{item.tlpn}</td>
                          <td>{item.date}</td>
                          <td>{item.alamat}</td>
                          <td>{item.sampah}</td>
                          <td>{item.jsampah}</td>
                          <td>{item.pesan}</td>
                          <td>
                            <button className={`btn btn-danger text-center ${styles1.btn}`} onClick={() => deletePesan(item.id)}>
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PelangganList;

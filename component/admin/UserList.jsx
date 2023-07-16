import React, { useState, useEffect } from 'react';
import styles from "../../styles/admin/Home.module.css";
import styles1 from "../../styles/admin/User.module.css";
import Router, { useRouter } from "next/router";
import Link from 'next/dist/client/link';
import axios from 'axios';
import Swal from 'sweetalert2';

const PelangganList = () => {
  const [data, setData] = useState([]);

  const getAllQuestion = () => {
    axios
      .get('/api/booking/all')
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllQuestion();
  }, []);

  const [message, setMessage] = useState('');
  const router = useRouter();

  async function deletePesan(_id) {
    try {
      const res = await axios.delete(`/api/booking/${_id}`);
      console.log(res);
      if (res.data.message) {
        setMessage(res.data.message);
      }
      Swal.fire({
        title: 'Dihapus',
        text: 'Data Pelanggan Sudah Dihapus',
        icon: 'error',
        confirmButtonText: 'Oke',
      }).then(() => {
        getAllQuestion(); // Memperbarui daftar pelanggan setelah penghapusan berhasil
      });
    } catch (err) {
      console.log(err);
    }
  }

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
                            <button className={`btn btn-danger text-center ${styles1.btn}`} onClick={() => deletePesan(item._id)}>
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

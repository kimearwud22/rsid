import React, { useEffect, useState } from 'react'
import useLoginStore from '../../store/store';
import { useRouter } from 'next/router';
import Layout from '../../component/admin/Layout.jsx';
import SmallCard from '../../component/admin/CardSmall.jsx';
import Card from '../../component/admin/Card.jsx';
import Charts from '../../component/admin/Chart.jsx';
import axios from 'axios';
import Swal from 'sweetalert2';
import {getCookie, validateToken} from '../../libs/cookie.lib'


export default function Admin() {
	const isLoggedIn = useLoginStore((state) => state.isLoggedIn)
	const accesstoken = useLoginStore((state) => state.accesstoken)
	const router = useRouter()
	const [trashType, setTrashType] = useState('')
	const [trashWeight, setTrashWeight] = useState('')
	const [inputDate, setInputDate] = useState('')
	const [counter, setCounter] = useState({
		organik: 0,
		anorganik: 0,
		total: 0
	})
	useEffect(() => {
		if(getCookie('token') === "" && getCookie("username") === ""){
		  window.location.href = "/admin/login";
		}else{
		  validateToken(getCookie('token')) ? null : window.location.href = "/login";
		}
	  }, [])
	const handleSubmit = (e) => {
		e.preventDefault()
		const data = {
			trash_type: trashType,
			trash_weight: trashWeight,
			input_date: inputDate
		}
		axios({
			url: `${process.env.HOST_API}/api/trash/create`,
			method: 'POST',
			data: data,
		}).then((res) => {
			Swal.fire({
				title: 'Success',
				text: 'Data added!',
				icon: 'success'
			})
		}).catch((reason) => {
			Swal.fire({
				title: 'Error',
				text: reason,
				icon: 'error'
			})
		})
	}

	useEffect(() => {
			axios({
				method: 'GET',
				url: `${process.env.HOST_API}/api/trash/count`,
				body: {},
			}).then((res) => {
				setCounter({
					organik: res.data.countData.organik,
					anorganik: res.data.countData.anorganik,
					total: res.data.countData.total,
				})
			}).catch((reason) => {
				console.log(reason)
			})
	}, [])

	return (
		<Layout title={'Dashboard'} isActiveNavLink={1}>
			<div className='content-wrapper'>
				<section className='content'>
					<div className="row mb-2">
						<div className="col-sm-6">
							<h1 className="ml-2">Dashboard</h1>
						</div>
					</div>
					<div className='row mb-2'>
						<div className='col-md-4'>
							<SmallCard title={`${counter.total} kg`} caption={'Total'} icon={'ion-ios-calculator'} background={'bg-info'} />
						</div>
						<div className='col-md-4'>
							<SmallCard title={`${counter.organik} kg`} caption={'Organik'} icon={'ion-leaf'} background={'bg-success'} />
						</div>
						<div className='col-md-4'>
							<SmallCard title={`${counter.anorganik} kg`} caption={'Anorganik'} icon={'ion-ios-pint'} background={'bg-warning'} />
						</div>
					</div>
					<div className='row mb-2'>
						<div className='col-md-7'>
							<Card cardTitle={'Chart Pemasukan Sampah'} cardType={'card-info'}>
								{/* <Charts /> */}
							</Card>
						</div>
						<div className='col-md-5'>
							<Card cardTitle={'Input Data Sampah'} cardType={'card-info'}>
								<form onSubmit={handleSubmit}>
									<div className='form-group'>
										<label>Tipe Sampah</label>
										<select className='form-control' value={trashType} onChange={(e) => setTrashType(e.target.value)}>
											<option value={'-'}>pilih...</option>
											<option value={'organik'}>Organik</option>
											<option value={'anorganik'}>Anorganik</option>
										</select>
									</div>
									<div className='form-group'>
										<label>Berat</label>
										<input type={'number'} className='form-control' name='weight' placeholder='(dalam kg)' value={trashWeight} onChange={(e) => setTrashWeight(e.target.value)} required />
									</div>
									<div className='form-group'>
										<label>Tanggal Input</label>
										<input type={'datetime-local'} className='form-control' name='input_date' value={inputDate} onChange={(e) => setInputDate(e.target.value)} required />
									</div>
									<button type='submit' className='btn btn-info'><i className="fas fa-plus"></i> Tambah</button>
								</form>
							</Card>
						</div>
					</div>
				</section>
			</div>
		</Layout>
	)
}

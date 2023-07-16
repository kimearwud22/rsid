import React, { useEffect } from 'react'
import Head from 'next/head'
import PelangganList from '../../component/admin/UserList';
import Layout from '../../component/admin/Layout';
import { useRouter } from 'next/router';
import {getCookie, validateToken} from '../../libs/cookie.lib'
// import UploadBenner from '../../component/admin/UploadBenner';
export default function Pesan() {
  const router = useRouter()

  useEffect(() => {
	if(getCookie('token') === "" && getCookie("username") === ""){
	  window.location.href = "/admin/login";
	}else{
	  validateToken(getCookie('token')) ? null : window.location.href = "/login";
	}
  }, [])
	return (
		<Layout title={'Pemesanan'} isActiveNavLink={3}>
			<div className='content-wrapper'>
				<section className='content'>
					<div className="row mb-2">
						<div className="col-sm-6">
							<h1 className="ml-2">Pemesanan</h1>
						</div>
					</div>
					<div className='row mb-2'>
						<PelangganList />
					</div>
				</section>
			</div>
		</Layout>
	)
}

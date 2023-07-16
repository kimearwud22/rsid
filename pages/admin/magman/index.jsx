import React, { useEffect } from 'react'
import useLoginStore from '../../../store/store';
import { useRouter } from 'next/router';
import Layout from '../../../component/admin/Layout';
import SmallCard from '../../../component/admin/CardSmall';
import Card from '../../../component/admin/Card';
import Link from 'next/link';
import {getCookie, validateToken} from '../../../libs/cookie.lib'


export default function MaggotManagement() {
	const isLoggedIn = useLoginStore((state) => state.isLoggedIn)
	const router = useRouter()
	const handleSubmit = () => {

	}

	const handleClickBox = (path='') => {
		router.push(`/admin/magman/${path}`)
	}

	useEffect(() => {
		if(getCookie('token') === "" && getCookie("username") === ""){
		  window.location.href = "/admin/login";
		}else{
		  validateToken(getCookie('token')) ? null : window.location.href = "/login";
		}
	  }, [])

	return (
		<Layout title={'Dashboard'} isActiveNavLink={2}>
			<div className='content-wrapper'>
				<section className='content'>
					<div className="row mb-2">
						<div className="col-sm-6">
							<h1 className="ml-2">Dashboard</h1>
						</div>
					</div>
					<div className='row mb-2'>
						<div className='col-md-5'>
							<SmallCard title={'100 kg'} caption={'Total Panen'} icon={'ion-ios-calculator'} background={'bg-info'} />
						</div>
					</div>
					<div className='row mb-2'>
						<div className='col'>
							<Card cardTitle={'List Box'} cardType={'card-success'}>
								<div className='row'>
									<div className='col-md-4' onClick={() => handleClickBox('box1')}>
										<SmallCard title='Box 1' caption='Maggot Box' background={'bg-warning'} icon='ion-bug' />
									</div>
									<div className='col-md-4' onClick={() => handleClickBox('box2')}>
										<SmallCard title='Box 2' caption='Maggot Box' background={'bg-warning'} icon='ion-bug' />
									</div>
									<div className='col-md-4' onClick={() => handleClickBox('box3')}>
										<SmallCard title='Box 3' caption='Maggot Box' background={'bg-warning'} icon='ion-bug' />
									</div>
								</div>
							</Card>
						</div>

					</div>
				</section>
			</div>
		</Layout>
	)
}

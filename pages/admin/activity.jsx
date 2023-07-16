import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Layout from '../../component/admin/Layout'
import Log from '../../component/admin/log'
import useLoginStore from '../../store/store'

export default function Activity() {
  const isLoggedIn = useLoginStore((state) => state.isLoggedIn)
  const router = useRouter()

  useEffect(() => {
    if(isLoggedIn == 0){
			router.push('/admin/login');
		}
  })
  
  return (
    <Layout title='Activity' isActiveNavLink={4}>
      <div className="content-wrapper">
        <Log />
      </div>
    </Layout>
  )
}
import Link from "next/link";
import { useRouter } from "next/router";
import useLoginStore from "../../store/store"

const Sidebar = ({ isActive }) => {
  const setLogout = useLoginStore((state) => state.setLogout)
  const router = useRouter()
  const handleLogout = () => {
    setLogout()
    router.push('/admin/login')
  }
  return (
    <>
      {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <li className="nav-item">
            <Link href={'/admin/admin'}>
              <a className={isActive == 1 ? "active nav-link" : "nav-link"}>
                <i className="nav-icon fas fa-th" />
                <p>
                  Dashboard
                </p>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href={'/admin/magman'}>
              <a className={isActive == 2 ? "active nav-link" : "nav-link"}>
                <i className="nav-icon fas fa-chart-pie" />
                <p>
                  Maggot Management
                </p>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href={'/admin/pesan'}>
              <a className={isActive == 3 ? "active nav-link" : "nav-link"}>
                <i className="nav-icon fas fa-envelope" />
                <p>
                  Pemesanan
                </p>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href={'/admin/activity'}>
              <a className={isActive == 4 ? "active nav-link" : "nav-link"}>
                <i className="nav-icon fas fa-history" />
                <p>
                  Activity
                </p>
              </a>
            </Link>
          </li>
          <li className="nav-item" onClick={handleLogout}>
            <Link href={'/#logout'}>
              <a className={isActive == 5 ? "active nav-link text-danger" : "nav-link text-danger"}>
                <i className="nav-icon fas fa-sign-out-alt" />
                <p>
                  Logout
                </p>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      {/* /.sidebar-menu */}
    </>
  );
};
export default Sidebar;

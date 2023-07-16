import Sidebar from "./Sidebar";
import Image from "next/image";
import Head from "next/head";

const Layout = ({ title='', children, isActiveNavLink }) => {
  return (
    <div className="hold-transition sidebar-mini layout-fixed">
      <Head>
        <title>Rumah Sampah ID - {title}</title>
      </Head>
      <aside className="main-sidebar sidebar-light-primary elevation-4">
        <div className="sidebar text-bold">
          <Image className="mt-2"
            src="/rs.png"
            alt="Picture of the author"
            width={60}
            height={60}
          /><span className="text-lg font-weight-bold">RSID</span>
          <Sidebar isActive={isActiveNavLink} />
        </div>
      </aside>
      <main className="" style={{ height: 100 }}>
        {children}
      </main>

    </div>
  );
};
export default Layout;

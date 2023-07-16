import React from "react";
import styles from "../../styles/admin/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBookOpen,
	faCog,
	faRocket,
	faSignOutAlt,
	faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";


function LeftNavbar() {
	return (
		<div className={styles.navcontainer}>
			<div className={styles.logo}>
				<h2>Rumah <br /> Sampah </h2>
			</div>
			<div className={styles.wrapper}>
				<ul>
					<li>
						<FontAwesomeIcon
							icon={faCog}
							style={{ width: "18px", cursor: "pointer" }}
						/>{" "}
						<Link href={"/admin/admin"}><a>Beranda</a></Link>
					</li>
					<li>
						<FontAwesomeIcon
							icon={faRocket}
							style={{ width: "18px", cursor: "pointer" }}
						/>{" "}
						<Link href={"/admin/pesan"}><a>Data Pelanggan</a></Link>
					</li>
					<li>
						<FontAwesomeIcon
							icon={faBookOpen}
							style={{ width: "18px", cursor: "pointer" }}
						/>{" "}
						<a href={"/"}>Perbaikan Data Data</a>
					</li>
					
					{/* <li>
						<FontAwesomeIcon
							icon={faBookOpen}
							style={{ width: "18px", cursor: "pointer" }}
						/>{" "}
						<a href="/admin/AddPinjam"> Data Barang Pinjaman</a>
					</li> */}
					<li>
						<FontAwesomeIcon
							icon={faSignOutAlt}
							style={{ width: "18px", cursor: "pointer" }}
						/>{" "}
						<Link href="/"><a >LogOut</a></Link>
						<p>Kembali ke user</p>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default LeftNavbar;

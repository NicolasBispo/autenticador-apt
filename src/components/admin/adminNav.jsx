
import styles from './../../styles/adminNav.module.css';
import Link from 'next/link';
export default function AdminNav() {


    return (
        <nav className={styles.adminMenu}>

            <h1 className={styles.adminPanelBanner}><Link href='/admin'>Painel Administrativo</Link></h1>
            <ul>
                <li>
                    <Link href="/admin/bookingGenerator">Gerar reservas</Link>

                </li>
                <li>
                    <Link href="/admin/bookingListing">Visualizar reservas</Link>

                </li>
            </ul>
        </nav>

    )
}
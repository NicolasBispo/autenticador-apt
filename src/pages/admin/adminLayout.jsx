import AdminNav from "../../components/admin/adminNav";
import styles from '../../styles/admin.module.css'
import Head from "next/head";



export default function AdminLayout(props) {

    return (

        <div className={styles.adminBody}>
            <Head>
                <title>Painel administrativo</title>
            </Head>
            <aside className={styles.adminMenu}>
                <AdminNav></AdminNav>
            </aside>
            <main className={styles.main_content}>
                {props.children}

            </main>
        </div>

    )
}
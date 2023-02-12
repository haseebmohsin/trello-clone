import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Sidebar from '../components/sidebar';

import '@/styles/globals.css';
import styles from '@/styles/Main.module.scss';

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className={styles.container}>
        <Sidebar />

        <div className={styles.right}>
          <Header />

          <div>
            <SubHeader />
            <div className={styles.main_content}>
              <Component {...pageProps} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

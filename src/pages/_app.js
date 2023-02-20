import { useState } from 'react';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Sidebar from '../components/sidebar';
import AppContext from '../data/AppContext';
import { store } from '../data/store';
import Image from 'next/image';
import styles from '../styles/Main.module.scss';
import '../styles/globals.scss';

export default function App({ Component, pageProps }) {
  const [data, setData] = useState(store);

  return (
    <>
      <AppContext.Provider value={{ data, setData }}>
        <div className={styles.container}>
          {/* These are the two icons at right side of the screen with absolute positioning */}
          <div className={styles.body_fixed_icons_container}>
            <Image src='/checklist.png' alt='checklist' width={26} height={26} />
            <Image src='/list.png' alt='list' width={26} height={26} />
          </div>

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
      </AppContext.Provider>
    </>
  );
}

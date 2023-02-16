import { useState } from 'react';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Sidebar from '../components/sidebar';
import '@/styles/globals.css';
import styles from '@/styles/Main.module.scss';
import AppContext from './AppContext';
import { cardsData } from '@/data/cardsData';

export default function App({ Component, pageProps }) {
  const [data, setData] = useState(cardsData);

  return (
    <>
      <AppContext.Provider value={{ data, setData }}>
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
      </AppContext.Provider>
    </>
  );
}

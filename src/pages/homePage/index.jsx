import React from 'react';
import styles from '@/styles/HomePage.module.css';
import Header from '../Header';
import Sidebar from '../sidebar';

function HomePage() {
  return (
    <div className={styles.container}>
      {/* put in components sidebar header */}
      <Sidebar />

      <div className={styles.right}>
        <Header />
        <main className={styles.main}>
          <div>Main Content</div>
        </main>
      </div>
    </div>
  );
}

export default HomePage;

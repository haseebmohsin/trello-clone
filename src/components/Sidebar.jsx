import React, { useState } from 'react';
import styles from '@/styles/sidebar.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Divider from './Divider';

function Sidebar() {
  const router = useRouter();
  const path = router.pathname;

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    // setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <aside className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}>
      <div className={styles.header}>
        <div className={styles.brand}>
          <div className={styles.brand_container}>
            <span className={styles.brand_name}>Zaan Corp</span>
            <svg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M5.5 8.25L11 13.75L16.5 8.25'
                stroke='#5F5F5F'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
        </div>
        <div onClick={() => handleSidebarToggle()}>
          <span className={`${styles.toggler} ${isSidebarOpen ? styles.active : ''}`}>
            <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M9.16667 14.1666L5 9.99998L9.16667 5.83331'
                stroke='#8E8E8E'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M15 14.1666L10.8334 9.99998L15 5.83331'
                stroke='#8E8E8E'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </span>
        </div>
      </div>
      <div className={styles.navigation}>
        <nav>
          <ul>
            <li className={path === '/dashboard' ? `${styles.active}` : ''}>
              <Image src='./sidebar-svg/dashboard.svg' alt='dashboard' width={22} height={22} />
              <Link href='/dashboard'>
                <span className={styles.navigation_item}>Dashboard</span>
              </Link>
            </li>

            <li className={path === '/' ? `${styles.active}` : ''}>
              <Image src='./sidebar-svg/workflow.svg' alt='workflow' width={22} height={22} />
              <Link href='/'>
                <span className={styles.navigation_item}>Workflow</span>
              </Link>
            </li>

            <li>
              <Image src='./sidebar-svg/calender.svg' alt='calender' width={22} height={22} />
              <span className={styles.navigation_item}>Calender</span>
            </li>
            <li>
              <Image src='./sidebar-svg/socialRM.svg' alt='socialRM' width={22} height={22} />
              <span className={styles.navigation_item}>SocialRM</span>
            </li>
            <li>
              <Image src='./sidebar-svg/metrics.svg' alt='metrics' width={22} height={22} />
              <span className={styles.navigation_item}>Metrics</span>
            </li>
            <li>
              <Image src='./sidebar-svg/leads.svg' alt='leads' width={22} height={22} />
              <span className={styles.navigation_item}>Leads</span>
            </li>
            <li>
              <Image src='./sidebar-svg/users.svg' alt='users' width={22} height={22} />
              <span className={styles.navigation_item}>Users</span>
            </li>
            <li>
              <Image src='./sidebar-svg/notifications.svg' alt='notifications' width={22} height={22} />
              <span className={styles.navigation_item}>Notifications</span>
            </li>
            <li>
              <Image src='./sidebar-svg/documents.svg' alt='documents' width={22} height={22} />
              <span className={styles.navigation_item}>Documents</span>
            </li>
            <li>
              <Image src='./sidebar-svg/segments.svg' alt='segments' width={22} height={22} />
              <span className={styles.navigation_item}>Segments</span>
            </li>
          </ul>

          <Divider />

          <ul>
            <li>
              <Image src='./sidebar-svg/company.svg' alt='company' width={22} height={22} />
              <span className={styles.navigation_item}>Company</span>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;

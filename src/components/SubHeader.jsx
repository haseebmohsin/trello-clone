import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '@/styles/SubHeader.module.scss';

export default function Header() {
  const router = useRouter();
  const lastSlashIndex = router.pathname.lastIndexOf('/');
  const lettersAfterLastSlash = router.pathname.substring(lastSlashIndex + 1);
  const currentRouteName = lettersAfterLastSlash.charAt(0).toUpperCase() + lettersAfterLastSlash.slice(1);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.column1}>
          <span style={{ marginRight: '30px' }}>{router.pathname === '/' ? 'Dashboard' : currentRouteName}</span>

          <div className={styles.svg_container_circle_first}>
            <Image src='/header-svg/workflow.svg' alt='workflow' width={22} height={36} />
          </div>
          <div className={styles.svg_container_circle}>
            <Image src='/header-svg/design.svg' alt='design' width={22} height={36} />
          </div>
          <div className={styles.svg_container_circle}>
            <Image src='/header-svg/code.svg' alt='code' width={22} height={36} />
          </div>
          <div className={styles.svg_container_circle}>
            <Image src='/header-svg/announcement.svg' alt='announcement' width={22} height={36} />
          </div>

          <span style={{ color: '#070F21', opacity: 0.25 }}>|</span>

          <div className={styles.column1_avatars_container}>
            <div>
              <Image src='/header-images/h2avatar1.png' alt='avatar1' width={30} height={30} />
            </div>
            <div>
              <Image src='/header-images/h2avatar2.png' alt='avatar2' width={30} height={30} />
            </div>
            <div>
              <Image src='/header-images/h2avatar3.png' alt='avatar3' width={30} height={30} />
            </div>
            <div>
              <Image src='/header-images/h2avatar4.png' alt='avatar4' width={30} height={30} />
            </div>
          </div>
        </div>

        <div className={styles.column2}>
          <div className={styles.svg_container}>
            <Image src='/header-svg/pin.svg' alt='pin' width={22} height={36} />
          </div>
          <div className={styles.svg_container}>
            <Image src='/header-svg/doubleFile.svg' alt='doubleFile' width={22} height={36} />
          </div>
          <div className={styles.svg_container}>
            <Image src='/header-svg/views.svg' alt='views' width={22} height={36} />
            <span style={{ marginLeft: '7px' }}>Views</span>
          </div>
          <div className={styles.svg_container}>
            <Image src='/header-svg/filter.svg' alt='filter' width={22} height={36} />
            <span style={{ marginLeft: '7px' }}>Filter</span>
          </div>
          <div className={styles.svg_container}>
            <Image src='/header-svg/sortBy.svg' alt='sortBy' width={22} height={36} />
            <span style={{ marginLeft: '7px' }}>Sort By</span>
          </div>
        </div>
      </header>
    </>
  );
}

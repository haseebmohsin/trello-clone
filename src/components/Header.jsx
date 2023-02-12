import styles from '@/styles/Header.module.scss';
import Image from 'next/image';

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.column1}>
          <div className={styles.innerContainer}>
            <Image src='/header-images/pic-one.png' alt='pic-one' width={30} height={30} />
            <span className={styles.alert1}>15</span>
            <span style={{ color: '#070F21', opacity: 0.25 }}>|</span>
            <Image src='/header-images/pic-two.png' alt='pic-two' width={30} height={30} />
            <span className={styles.alert2}>11</span>
          </div>
          <div className={styles.dropdownArrow}>
            <Image src='/header-svg/dropdown.svg' alt='dropdown' width={22} height={36} />
          </div>
        </div>

        <div className={styles.column2}>
          <div className={styles.svg_container}>
            <Image src='/header-svg/light.svg' alt='light' width={22} height={36} />
          </div>
        </div>

        <div className={styles.column3}>
          <button className={styles.add_button}>+</button>
          <input type='search' placeholder='Search' />
        </div>

        <div className={styles.column4}>
          <div className={styles.svg_container}>
            <Image src='/header-svg/announcement.svg' alt='light' width={22} height={36} />
          </div>
          <div className={styles.svg_container}>
            <Image src='/sidebar-svg/calender.svg' alt='light' width={22} height={36} />
          </div>
          <div className={styles.svg_container}>
            <Image src='/header-svg/chat.svg' alt='light' width={22} height={36} />
          </div>
          <Image src='/header-images/avatar.png' alt='pic-one' width={30} height={30} />
        </div>
      </header>
    </>
  );
}

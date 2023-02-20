import Image from 'next/image';
import SearchInput from './SearchInput';
import styles from '@/styles/header.module.scss';

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.column1}>
          <div className={styles.innerContainer}>
            <Image src='/header-images/h1avatar1.png' alt='avatar1' width={30} height={30} />
            <span className={styles.alert1}>15</span>

            <span style={{ color: '#070F21', opacity: 0.25, margin: '0 5px' }}>|</span>

            <Image src='/header-images/h1avatar2.png' alt='avatar2' width={30} height={30} />
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
          <SearchInput AdditionalStyles={{ borderRadius: '5px' }} />
        </div>

        <div className={styles.column4}>
          <div className={styles.svg_container}>
            <Image src='/header-svg/announcement.svg' alt='announcement' width={22} height={36} />
          </div>
          <div className={styles.svg_container}>
            <Image src='/sidebar-svg/calender.svg' alt='calender' width={22} height={36} />
          </div>
          <div className={styles.svg_container}>
            <Image src='/header-svg/chat.svg' alt='chat' width={22} height={36} />
          </div>
          <Image src='/header-images/h1avatar3.png' alt='avatar3' width={33} height={33} />
        </div>
      </header>
    </>
  );
}

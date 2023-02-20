import { pinnedCards } from '@/data/pinnedCards';
import Card from '../Card';
import SearchInput from '../SearchInput';
import Image from 'next/image';
import styles from '@/styles/dropdownModal.module.scss';

export default function ArchiveDropdownModal({ title, isOpen, toggleModal }) {
  return (
    <>
      {isOpen && (
        <div className={styles.modal}>
          <div className={styles.header}>
            <div className={styles.left}>
              <div className={styles.buttons_container}>
                <button className={styles.left_button}>
                  <Image src={'/main-svg/archive.svg'} alt='archive' width={18} height={18} />
                  <div>Archive</div>
                </button>
                <button className={styles.right_button}>
                  <Image src={'/main-svg/snooze.svg'} alt='snooze' width={18} height={18} />
                  <div>Snooze</div>
                </button>
              </div>
            </div>

            <div className={styles.close} onClick={() => toggleModal()}>
              <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <g opacity='0.4'>
                  <path d='M3.33325 16.6668L16.6666 3.3335' stroke='#070F21' strokeWidth='2' strokeLinecap='round' />
                  <path d='M16.6666 16.6668L3.33325 3.3335' stroke='#070F21' strokeWidth='2' strokeLinecap='round' />
                </g>
              </svg>
            </div>
          </div>

          <SearchInput />

          <div className={styles.body} style={{ background: '#F8F8F8' }}>
            <Card cardData={pinnedCards} />
          </div>
        </div>
      )}
    </>
  );
}

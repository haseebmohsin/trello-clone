import { pinnedCards } from '@/data/pinnedCards';
import Card from '../Card';
import styles from '@/styles/dropdownModal.module.scss';
import SearchInput from '../SearchInput';
import Image from 'next/image';

export default function PinnedCardsDropdownModal({ title, icon, isOpen, toggleModal }) {
  return (
    <>
      {isOpen && (
        <div className={styles.modal}>
          <div className={styles.header}>
            <div className={styles.left}>
              <Image src={`/header-svg/${icon}.svg`} alt={icon} width={22} height={36} />
              <div className={styles.title}>{title}</div>
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

          <div className={styles.body} style={{ background: '#eff2f5' }}>
            <Card cardData={pinnedCards} />
          </div>
        </div>
      )}
    </>
  );
}

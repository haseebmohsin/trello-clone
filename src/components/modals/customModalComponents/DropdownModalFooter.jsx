import React from 'react';
import styles from '@/styles/dropdownModal.module.scss';

export default function DropdownModalFooter() {
  return (
    <div className={styles.footer}>
      <div className={styles.left}>
        <button className={styles.save_button}>Save as View</button>
      </div>

      <div className={styles.right}>
        <button className={styles.clear_button}>Clear</button>
        <button className={styles.apply_button}>Apply</button>
      </div>
    </div>
  );
}

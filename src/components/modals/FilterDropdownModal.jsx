import Image from 'next/image';
import Checkbox from '../Checkbox';
import { projects } from '@/data/projects';
import { tags } from '@/data/tags';
import { users } from '@/data/users';
import styles from '@/styles/dropdownModal.module.scss';

const FilterDropdownModal = ({ title, icon, isOpen, toggleFilterModal }) => {
  return (
    <>
      {isOpen && (
        <div className={styles.modal}>
          <div className={styles.header}>
            <div className={styles.left}>
              <Image src={`/header-svg/${icon}.svg`} alt={icon} width={22} height={36} />
              <div className={styles.title}>{title}</div>
            </div>

            <div className={styles.close} onClick={() => toggleFilterModal()}>
              <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <g opacity='0.4'>
                  <path d='M3.33325 16.6668L16.6666 3.3335' stroke='#070F21' strokeWidth='2' strokeLinecap='round' />
                  <path d='M16.6666 16.6668L3.33325 3.3335' stroke='#070F21' strokeWidth='2' strokeLinecap='round' />
                </g>
              </svg>
            </div>
          </div>

          <div className={styles.body}>
            <div className={styles.projects}>
              <h4>Project</h4>
              <Checkbox label='No Project Assigned' />
              {projects.map((item, index) => (
                <Checkbox key={index} label={item} checked={item === 'ContactRM' ? true : false} />
              ))}
            </div>
            <div className={styles.tags}>
              <h4>Tags</h4>
              <Checkbox label='No Tags Added' />
              {tags.map((item, index) => (
                <Checkbox key={index} label={item} checked={item === 'api.contactrm.com' ? true : false} />
              ))}
              <p>Show all...</p>
            </div>
            <div className={styles.card}>
              <h4>Card</h4>
              <Checkbox label='Cards I Created' checked />
              <Checkbox label='Cards assigned to me' />
              <Checkbox label='All Cards' />
            </div>
            <div className={styles.assigned}>
              <h4>Assigned To</h4>
              <Checkbox label='Nobody Assigned' />
              {users.map((item, index) => (
                <Checkbox key={index} label={item} checked={item === 'Savannah Nguyen' ? true : false} />
              ))}
            </div>
          </div>

          <div className={styles.footer}>
            <div className={styles.left}>
              <button className={styles.save_button}>Save as View</button>
            </div>

            <div className={styles.right}>
              <button className={styles.clear_button}>Clear</button>
              <button className={styles.apply_button}>Apply</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FilterDropdownModal;

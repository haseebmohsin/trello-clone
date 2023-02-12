import React from 'react';
import styles from '@/styles/workflow.module.scss';
import Image from 'next/image';

export default function workflow() {
  return (
    <>
      <div className={styles.grid_container}>
        <div className={styles.grid_item}>
          <div className={styles.grid_item_header}>
            <div className={styles.grid_item_header_left}>
              <span>Backlog(2)</span>
              <Image src='/header-svg/filter.svg' alt='filter' width={16} height={16} />
              <Image src='/header-svg/sortBy.svg' alt='sortBy' width={16} height={16} />
            </div>
            <div>
              <Image src='/svg/menu.svg' alt='menu' width={24} height={24} />
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.card_header}>
              <div className={styles.menu_icon}></div>
              <h3 className={styles.title}></h3>
            </div>
            <div className={styles.card_body}></div>
          </div>
        </div>
        <div className={styles.grid_item}>
          <div className={styles.grid_item_header}>
            <div className={styles.grid_item_header_left}>
              <span>Backlog(2)</span>
              <Image src='/header-svg/filter.svg' alt='filter' width={16} height={16} />
              <Image src='/header-svg/sortBy.svg' alt='sortBy' width={16} height={16} />
            </div>
            <div>
              <Image src='/svg/menu.svg' alt='menu' width={24} height={24} />
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.card_header}>
              <div className={styles.menu_icon}></div>
              <h3 className={styles.title}></h3>
            </div>
            <div className={styles.card_body}></div>
          </div>
        </div>
        <div className={styles.grid_item}>
          <div className={styles.grid_item_header}>
            <div className={styles.grid_item_header_left}>
              <span>Backlog(2)</span>
              <Image src='/header-svg/filter.svg' alt='filter' width={16} height={16} />
              <Image src='/header-svg/sortBy.svg' alt='sortBy' width={16} height={16} />
            </div>
            <div>
              <Image src='/svg/menu.svg' alt='menu' width={24} height={24} />
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.card_header}>
              <div className={styles.menu_icon}></div>
              <h3 className={styles.title}></h3>
            </div>
            <div className={styles.card_body}></div>
          </div>
        </div>
        <div className={styles.grid_item}>
          <div className={styles.grid_item_header}>
            <div className={styles.grid_item_header_left}>
              <span>Backlog(2)</span>
              <Image src='/header-svg/filter.svg' alt='filter' width={16} height={16} />
              <Image src='/header-svg/sortBy.svg' alt='sortBy' width={16} height={16} />
            </div>
            <div>
              <Image src='/svg/menu.svg' alt='menu' width={24} height={24} />
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.card_header}>
              <div className={styles.menu_icon}></div>
              <h3 className={styles.title}></h3>
            </div>
            <div className={styles.card_body}></div>
          </div>
        </div>
        <div className={styles.grid_item}>
          <div className={styles.grid_item_header}>
            <div className={styles.grid_item_header_left}>
              <span>Backlog(2)</span>
              <Image src='/header-svg/filter.svg' alt='filter' width={16} height={16} />
              <Image src='/header-svg/sortBy.svg' alt='sortBy' width={16} height={16} />
            </div>
            <div>
              <Image src='/svg/menu.svg' alt='menu' width={24} height={24} />
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.card_header}>
              <div className={styles.menu_icon}></div>
              <h3 className={styles.title}></h3>
            </div>
            <div className={styles.card_body}></div>
          </div>
        </div>
      </div>
    </>
  );
}

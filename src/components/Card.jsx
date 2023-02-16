import Image from 'next/image';
import styles from '@/styles/CardsOuterContainer.module.scss';

export default function Card({ cardData }) {
  return (
    <>
      <div className={styles.card_container}>
        <div className={styles.card}>
          <div className={styles.card_header}>
            <div className={styles.card_header_left}>
              <span className={styles.company}>ContactRM</span>
            </div>

            <div className={styles.card_header_right}>
              <Image src='/main-svg/file.svg' alt='file' width={16} height={16} />
            </div>
          </div>

          <div className={styles.card_body}>
            <div className={styles.card_body_title}>{cardData.title}</div>
            <div className={styles.card_body_inner}>
              <div className={styles.card_body_text1}>{cardData.highlighted ? 'api.contactrm.com' : ''}</div>
              <div className={styles.card_body_text2}>{cardData.highlighted ? 'api.contactrm' : ''}</div>
            </div>
          </div>

          <div className={styles.card_footer}>
            <div className={styles.card_footer_row_1}>
              <div className={styles.card_footer_row_1_block}>
                <Image src='/main-svg/linesMenu.svg' alt='linesMenu' width={18} height={18} />
              </div>
              <div className={styles.card_footer_row_1_block}>
                <Image src='/main-svg/message.svg' alt='message' width={17} height={17} />
                <span>12</span>
              </div>
              <div className={styles.card_footer_row_1_block}>
                <Image src='/main-svg/checklist.svg' alt='checklist' width={18} height={18} />
                <span>8/9</span>
              </div>
              <div className={styles.card_footer_row_1_block}>
                <Image src='/main-svg/link.svg' alt='link' width={18} height={18} />
                <span>2</span>
              </div>
            </div>
            <div className={styles.card_footer_row_2}>
              <div className={styles.card_footer_row_2_text}>Created {cardData.created}</div>
              <div>
                <Image src='/header-images/h1avatar3.png' alt='avatar3' width={30} height={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

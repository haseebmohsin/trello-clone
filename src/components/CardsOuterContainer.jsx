import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Card from './Card';
import AddCard from './AddCard';
import styles from '@/styles/CardsOuterContainer.module.scss';

export default function CardsOuterContainer({ data }) {
  const buttonClicked = useRef(null);
  const cards_outer_container_body_ref = useRef(null);
  const [hasScrollbar, setHasScrollbar] = useState(false);
  const [isCardAdding, setIsCardAdding] = useState(false);

  useEffect(() => {
    const container = cards_outer_container_body_ref.current;
    const hasScrollbar = container.scrollHeight > container.clientHeight;
    setHasScrollbar(hasScrollbar);
  }, []);

  const handleAddCard = () => {
    setIsCardAdding(true);
  };

  return (
    <>
      <div className={styles.cards_outer_container}>
        {data?.map((item, index) => (
          <div key={item.name}>
            <div className={styles.cards_outer_container_header}>
              <div className={styles.cards_outer_container_header_left}>
                <span>
                  {item.name}
                  <span style={{ fontSize: '13px', marginLeft: '3px' }}>{`(${item.cardData.length})`}</span>
                </span>

                <Image src='/header-svg/filter.svg' alt='filter' width={16} height={16} />
                <Image src='/header-svg/sortBy.svg' alt='sortBy' width={16} height={16} />
              </div>

              <div className={styles.cards_outer_container_header_right}>
                <Image src='/main-svg/menu.svg' alt='menu' width={24} height={24} />
              </div>
            </div>

            <div
              className={styles.cards_outer_container_body}
              ref={cards_outer_container_body_ref}
              style={{ paddingRight: hasScrollbar ? '5px' : '0', marginBottom: hasScrollbar ? '10px' : '0' }}>
              {item.cardData.map((item, index) => (
                <div key={item.id}>
                  <Card cardData={item} />
                </div>
              ))}
            </div>

            <div className={styles.cards_outer_container_footer}>
              {isCardAdding ? (
                <>
                  <hr style={{ margin: '10px -5px', borderColor: '#0e8cff' }} />
                  <AddCard setIsCardAdding={setIsCardAdding} />
                </>
              ) : (
                <button
                  className={styles.cards_outer_container_footer_button}
                  id={item.name}
                  ref={buttonClicked}
                  onClick={handleAddCard}>
                  + Add Card
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

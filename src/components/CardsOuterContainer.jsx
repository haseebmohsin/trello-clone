import { useContext, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Card from './Card';
import AddCard from './AddCard';
import ListActionsDropdownModal from './modals/ListActionsDropdownModal';
import AppContext from '@/data/AppContext';
import styles from '@/styles/CardsOuterContainer.module.scss';

export default function CardsOuterContainer({ data, length, category, categoryShort }) {
  const cards_outer_container_body_ref = useRef(null);
  const [hasScrollbar, setHasScrollbar] = useState(false);
  const [isCardAdding, setIsCardAdding] = useState(false);

  useEffect(() => {
    const container = cards_outer_container_body_ref.current;
    const hasScrollbar = container.scrollHeight > container.clientHeight;
    setHasScrollbar(hasScrollbar);
  }, []);

  const { data: store, setData } = useContext(AppContext);
  const { isListActionsModalOpen } = store;

  const toggleModal = (modalName, category) => {
    const modalFlags = {
      isPinnedCardsModalOpen: false,
      isArchiveModalOpen: false,
      isViewsModalOpen: false,
      isFilterModalOpen: false,
      isSortByModalOpen: false,
      isListActionsModalOpen: false,
    };

    const modalProps = Object.entries(modalFlags).reduce((acc, [key, value]) => {
      if (key !== modalName) {
        acc[key] = false;
      } else if (store[modalName] && store.currentCategory === category) {
        acc[key] = false;
      } else {
        acc[key] = true;
      }
      return acc;
    }, {});

    setData({ ...store, [modalName]: !store[modalName], ...modalProps, currentCategory: category });
  };

  return (
    <>
      <div className={styles.cards_outer_container}>
        <div className={styles.cards_outer_container_header}>
          <div className={styles.cards_outer_container_header_left}>
            <span>
              {category}
              <span style={{ fontSize: '13px', marginLeft: '3px' }}>{`(${length})`}</span>
            </span>

            <Image src='/header-svg/filter.svg' alt='filter' width={16} height={16} />
            <Image src='/header-svg/sortBy.svg' alt='sortBy' width={16} height={16} />
          </div>

          <div className={styles.cards_outer_container_header_right}>
            <div className={styles.modal_holder}>
              <ListActionsDropdownModal
                title='List Actions'
                isOpen={isListActionsModalOpen && store.currentCategory === category}
                toggleModal={() => toggleModal('isListActionsModalOpen', category)}
              />
            </div>
            <Image
              src='/main-svg/menu.svg'
              alt='menu'
              width={24}
              height={24}
              onClick={() => toggleModal('isListActionsModalOpen', category)}
            />
          </div>
        </div>

        <div
          className={styles.cards_outer_container_body}
          ref={cards_outer_container_body_ref}
          style={{ paddingRight: hasScrollbar ? '5px' : '0', marginBottom: hasScrollbar ? '10px' : '0' }}>
          <Card cardData={data} />
        </div>

        <div className={styles.cards_outer_container_footer}>
          {isCardAdding ? (
            <>
              <hr style={{ margin: '10px -5px', borderColor: '#0e8cff' }} />
              <AddCard setIsCardAdding={setIsCardAdding} category={categoryShort} />
            </>
          ) : (
            <button className={styles.cards_outer_container_footer_button} onClick={() => setIsCardAdding(true)}>
              + Add Card
            </button>
          )}
        </div>
      </div>
    </>
  );
}

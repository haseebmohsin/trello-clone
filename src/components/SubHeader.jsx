import { useContext } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import AppContext from '../data/AppContext';
import FilterDropdownModal from './modals/FilterDropdownModal';
import SortByDropdownModal from './modals/SortByDropdownModal';
import ViewsDropdownModal from './modals/ViewsDropdownModal';
import ArchiveDropdownModal from './modals/ArchiveDropdownModal';
import PinnedCardsDropdownModal from './modals/PinnedCardsDropdownModal';
import styles from '../styles/SubHeader.module.scss';

export default function SubHeader() {
  const router = useRouter();
  const lastSlashIndex = router.pathname.lastIndexOf('/');
  const lettersAfterLastSlash = router.pathname.substring(lastSlashIndex + 1);
  const currentRouteName = lettersAfterLastSlash.charAt(0).toUpperCase() + lettersAfterLastSlash.slice(1);

  const { data, setData } = useContext(AppContext);
  const { isPinnedCardsModalOpen, isArchiveModalOpen, isViewsModalOpen, isFilterModalOpen, isSortByModalOpen } = data;

  const toggleModal = (modalName) => {
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
      }
      return acc;
    }, {});

    setData({ ...data, [modalName]: !data[modalName], ...modalProps });
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.column1}>
          <span style={{ marginRight: '30px' }}>{router.pathname === '/' ? 'Workflow' : currentRouteName}</span>

          <div className={styles.svg_container_circle_first}>
            <Image src='/header-svg/workflow.svg' alt='workflow' width={22} height={36} />
          </div>
          <div className={styles.svg_container_circle}>
            <Image src='/header-svg/design.svg' alt='design' width={22} height={36} />
          </div>
          <div className={styles.svg_container_circle}>
            <Image src='/header-svg/code.svg' alt='code' width={22} height={36} />
          </div>
          <div className={styles.svg_container_circle}>
            <Image src='/header-svg/announcement.svg' alt='announcement' width={22} height={36} />
          </div>

          <span style={{ color: '#070F21', opacity: 0.25 }}>|</span>

          <div className={styles.column1_avatars_container}>
            <div className={styles.avatar}>
              <Image src='/header-images/h2avatar1.png' alt='avatar1' width={30} height={30} />
              <div className={styles.avatar_badge}>2</div>
            </div>

            <div className={styles.avatar}>
              <Image src='/header-images/h2avatar2.png' alt='avatar2' width={30} height={30} />
              <div className={styles.avatar_badge}>5</div>
            </div>

            <div className={styles.avatar}>
              <Image src='/header-images/h2avatar3.png' alt='avatar3' width={30} height={30} />
              <div className={styles.avatar_badge}>1</div>
            </div>

            <div className={styles.avatar}>
              <Image src='/header-images/h2avatar4.png' alt='avatar4' width={30} height={30} />
              <div className={styles.avatar_badge}>4</div>
            </div>
          </div>
        </div>

        <div className={styles.column2}>
          <div className={styles.svg_container}>
            <Image
              src='/header-svg/pin.svg'
              alt='pin'
              width={22}
              height={36}
              onClick={() => toggleModal('isPinnedCardsModalOpen')}
            />
            <PinnedCardsDropdownModal
              title='Pinned Card'
              icon='pin'
              isOpen={isPinnedCardsModalOpen}
              toggleModal={() => toggleModal('isPinnedCardsModalOpen')}
            />
          </div>

          <div className={styles.svg_container}>
            <Image
              src='/header-svg/doubleFile.svg'
              alt='doubleFile'
              width={22}
              height={36}
              onClick={() => toggleModal('isArchiveModalOpen')}
            />
            <ArchiveDropdownModal
              title='Archive'
              isOpen={isArchiveModalOpen}
              toggleModal={() => toggleModal('isArchiveModalOpen')}
            />
          </div>

          <div className={styles.svg_container}>
            <Image src='/header-svg/views.svg' alt='views' width={22} height={36} />
            <span style={{ marginLeft: '7px' }} onClick={() => toggleModal('isViewsModalOpen')}>
              Views
            </span>
            <ViewsDropdownModal
              title='Views'
              icon='views'
              isOpen={isViewsModalOpen}
              toggleModal={() => toggleModal('isViewsModalOpen')}
            />
          </div>

          <div className={styles.svg_container}>
            <Image src='/header-svg/filter.svg' alt='filter' width={22} height={36} />
            <span style={{ marginLeft: '7px' }} onClick={() => toggleModal('isFilterModalOpen')}>
              Filter
            </span>
            <FilterDropdownModal
              title='Filter'
              icon='filter'
              isOpen={isFilterModalOpen}
              toggleModal={() => toggleModal('isFilterModalOpen')}
            />
          </div>

          <div className={styles.svg_container}>
            <Image src='/header-svg/sortBy.svg' alt='sortBy' width={22} height={36} />
            <span style={{ marginLeft: '7px' }} onClick={() => toggleModal('isSortByModalOpen')}>
              Sort By
            </span>
            <SortByDropdownModal
              title='Sort By'
              icon='sortBy'
              isOpen={isSortByModalOpen}
              toggleModal={() => toggleModal('isSortByModalOpen')}
            />
          </div>
        </div>
      </header>
    </>
  );
}

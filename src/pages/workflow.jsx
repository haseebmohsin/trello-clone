import CardsOuterContainer from '@/components/CardsOuterContainer';
import AppContext from './AppContext';
import { useContext } from 'react';
import styles from '@/styles/cardsOuterContainer.module.scss';

export default function Workflow() {
  const cards = useContext(AppContext);
  const { data } = cards;

  return (
    <>
      <div className={styles.grid_container}>
        <CardsOuterContainer data={data?.backlog} length={data?.backlog?.length} category='Backlog' categoryShort='backlog' />

        <CardsOuterContainer data={data?.toDo} length={data?.toDo?.length} category='To Do' categoryShort='toDo' />

        <CardsOuterContainer
          data={data?.inProcess}
          length={data?.inProcess?.length}
          category='In Process'
          categoryShort='inProcess'
        />

        <CardsOuterContainer
          data={data?.inReview}
          length={data?.inReview?.length}
          category='In Review'
          categoryShort='inReview'
        />

        <CardsOuterContainer
          data={data?.completed}
          length={data?.completed?.length}
          category='Completed'
          categoryShort='completed'
        />
      </div>
    </>
  );
}

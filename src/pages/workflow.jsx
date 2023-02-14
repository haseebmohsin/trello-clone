import CardsOuterContainer from '@/components/CardsOuterContainer';
import styles from '@/styles/CardsOuterContainer.module.scss';
import { backlogData, completedData, inProcessData, inReviewData, toDoData } from '@/data/cardsData';

export default function workflow() {
  return (
    <>
      <div className={styles.grid_container}>
        <CardsOuterContainer data={backlogData} />
        <CardsOuterContainer data={toDoData} />
        <CardsOuterContainer data={inProcessData} />
        <CardsOuterContainer data={inReviewData} />
        <CardsOuterContainer data={completedData} />
      </div>
    </>
  );
}

import { useContext, useState } from 'react';
import Image from 'next/image';
import AppContext from '@/pages/AppContext';
import styles from '@/styles/addCard.module.scss';
import { projects } from '@/data/projects';

export default function AddCard({ setIsCardAdding, category }) {
  const cards = useContext(AppContext);
  const { data } = cards;

  const [formData, setFormData] = useState({
    title: '',
    project: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleAddCard = () => {
    const oldData = data[category];
    let lastItemId = oldData[oldData?.length - 1].id;

    const newCard = {
      id: lastItemId + 1,
      title: formData.title,
      project: formData.project,
      highlighted: 'false',
      created: '3 days ago',
    };

    // adding the new card to the array
    oldData.push(newCard);

    // toggle back the add card form
    setIsCardAdding(false);
  };

  return (
    <div className={styles.add_card_container}>
      <div className={styles.row_1}>
        <div className={styles.left}>Card title</div>
        <div className={styles.right}>
          <Image
            src='/main-svg/close.svg'
            alt='close'
            width={18}
            height={18}
            onClick={() => setIsCardAdding(false)}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>

      <div className={styles.row_2}>
        <textarea name='title' placeholder='Enter card name' autoFocus value={formData.title} onChange={handleChange} />
      </div>

      <div className={styles.row_3}>
        <div className={styles.left}>
          <select name='project' value={formData.project} onChange={handleChange}>
            <option value=''>Select Project</option>
            {projects.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.right}>
          <button onClick={handleAddCard}>Add</button>
        </div>
      </div>
    </div>
  );
}

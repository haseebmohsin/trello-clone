import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/addCard.module.scss';

export default function AddCard({ setIsCardAdding, onAddCard }) {
  const [formData, setFormData] = useState({
    title: '',
    project: '',
  });

  const handleClose = () => {
    setIsCardAdding(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleAddCard = () => {
    setIsCardAdding(false);
    const { title, project } = formData;
    const newCard = { title, project };
    // Pass newCard to parent component to add it to the card data array
  };

  return (
    <div className={styles.add_card_container}>
      <div className={styles.row_1}>
        <div className={styles.left}>Title</div>
        <div className={styles.right}>
          <Image
            src='/main-svg/close.svg'
            alt='close'
            width={18}
            height={18}
            onClick={handleClose}
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
            <option value='ContactRM'>ContactRM</option>
            <option value='AgentBook'>AgentBook</option>
            <option value='Asteler.io'>Asteler.io</option>
            <option value='DW4RTeam'>DW4RTeam</option>
          </select>
        </div>
        <div className={styles.right}>
          <button onClick={handleAddCard}>Add</button>
        </div>
      </div>
    </div>
  );
}

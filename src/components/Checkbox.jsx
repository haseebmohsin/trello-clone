import { useState } from 'react';
import styles from '@/styles/Checkbox.module.scss';

function Checkbox({ checked, label }) {
  const [isChecked, setIsChecked] = useState(checked ?? false);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className={styles.checkbox_container}>
      <input type='checkbox' checked={isChecked} onChange={handleChange} />
      <span>{label}</span>
    </div>
  );
}

export default Checkbox;

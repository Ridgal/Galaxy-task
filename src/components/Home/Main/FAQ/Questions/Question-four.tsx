'use client';
import { useState } from 'react';
import styles from '@/assets/styles/components/Question-four.module.css';

const Question_four = () => {
  const [modal, setModal] = useState<boolean>(false);
  return (
    <div className={styles.question_four}>
      <p>Могу ли я поменять тариф?</p>
      <button className={styles.question_btn} onClick={() => setModal(true)}>
        +
      </button>
      {modal && (
        <div className={styles.question_four_modal}>
          <div className={styles.question_four_modal_title}>
            <h1>Могу ли я поменять тариф?</h1>
            <button
              className={styles.question_btn}
              onClick={() => setModal(false)}
            >
              -
            </button>
          </div>
          <div className={styles.question_four_modal_desc}>
            Да, ты можешь поменять тариф в любой момент. Для этого необходимо
            обратиться к менеджеру поддержки.
          </div>
        </div>
      )}
    </div>
  );
};

export default Question_four;

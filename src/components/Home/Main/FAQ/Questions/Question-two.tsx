'use client';
import styles from '@/assets/styles/components/Question-two.module.css';
import { useState } from 'react';

const Question_two = () => {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <div className={styles.question_two}>
      <p>
        Как совмещать подготовку к экзаменам по нескольким <br /> предметам?
      </p>
      <button className={styles.question_btn} onClick={() => setModal(true)}>
        +
      </button>
      {modal && (
        <div className={styles.question_two_modal}>
          <div className={styles.question_two_modal_title}>
            <h1>
              Как совмещать подготовку к экзаменам по нескольким предметам?
            </h1>
            <button
              className={styles.question_btn}
              onClick={() => setModal(false)}
            >
              -
            </button>
          </div>
          <div className={styles.question_two_modal_desc}>
            В нашей школе ты можешь подготовиться к целому ряду основных
            школьных предметов. Расписание составлено таким образом, что ты
            будешь успевать на все занятия по выбранным тобой дисциплинам.
          </div>
        </div>
      )}
    </div>
  );
};

export default Question_two;

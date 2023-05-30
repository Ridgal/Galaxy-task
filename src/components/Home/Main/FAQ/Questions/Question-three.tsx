'use client';
import styles from '@/assets/styles/components/Question-three.module.css';
import { useState } from 'react';

const Question_three = () => {
  const [modal, setModal] = useState<boolean>(false);
  return (
    <div className={styles.question_three}>
      <p>Что делать, если я не успеваю на онлайн-занятия?</p>
      <button className={styles.question_btn} onClick={() => setModal(true)}>
        +
      </button>
      {modal && (
        <div className={styles.question_three_modal}>
          <div className={styles.question_three_modal_title}>
            <h1>Что делать, если я не успеваю на онлайн-занятия?</h1>
            <button
              className={styles.question_btn}
              onClick={() => setModal(false)}
            >
              -
            </button>
          </div>
          <div className={styles.question_three_modal_desc}>
            Не переживай – записи всех занятий будут храниться на нашей <br />
            платформе: ты можешь посмотреть их в любое время и задать все <br />
            возникшие куратору.
          </div>
        </div>
      )}
    </div>
  );
};

export default Question_three;

'use client';
import { useState } from 'react';
import styles from '@/assets/styles/components/Question-one.module.css';

const Question_one = () => {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <div className={styles.question_one}>
      <p>Что из себя представляет школа SpaceToStudy?</p>
      <button className={styles.question_btn} onClick={() => setModal(true)}>
        +
      </button>
      {modal && (
        <div className={styles.question_one_modal}>
          <div className={styles.question_one_modal_title}>
            <h1>Что из себя представляет школа SpaceToStudy?</h1>
            <button
              className={styles.question_btn}
              onClick={() => setModal(false)}
            >
              -
            </button>
          </div>
          <div className={styles.question_one_modal_desc}>
            <span>SpaceToStudy</span> — это онлайн-школа по подготовке к ЕГЭ.
            Наша задача – сделать процесс подготовки интересным и занимательным,
            а главное – понятным. При этом для достижения этой цели мы
            используем самые современные технологии: ты сможешь заниматься из
            любой точки мира и изучать материал в любое удобное для тебя время.
          </div>
        </div>
      )}
    </div>
  );
};

export default Question_one;

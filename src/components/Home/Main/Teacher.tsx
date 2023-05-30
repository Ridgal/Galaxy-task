'use client';
import { useState, useEffect } from 'react';
import { API_URL } from '@/utils/constants';
import axios from 'axios';
import Image from 'next/image';
import styles from '@/assets/styles/components/Teacher.module.css';

const Teacher = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`${API_URL}`);
      setData(data);
    };
    getData();
  }, []);

  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.container}>
          <div className={styles.title}>
            <h1>Преподаватели</h1>
            <div className={styles.heading}>
              <p>ЕГЭ</p>
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.cards_buttons_content}>
              <button className={styles.cards_button_blue}>
                <p>Математика</p>
              </button>
              <button className={styles.cards_button_blue}>
                <p>Физика</p>
              </button>
              <button className={styles.cards_button_blue}>
                <p>Информатика</p>
              </button>
              <button className={styles.cards_button_orange}>
                <p>История</p>
              </button>
              <button className={styles.cards_button_orange}>
                <p>Обществознание</p>
              </button>
            </div>
            <div className={styles.cards_buttons_content}>
              <button className={styles.cards_button_green}>
                <p>Биология</p>
              </button>
              <button className={styles.cards_button_green}>
                <p>Химия</p>
              </button>
              <button className={styles.cards_button_pink}>
                <p>Русский язык</p>
              </button>
              <button className={styles.cards_button_pink}>
                <p>Английский язык</p>
              </button>
            </div>
          </div>
          <div className={styles.teacher}>
            {data.url && (
              <Image
                src={data.url}
                alt="thumbnail"
                width={542}
                height={495}
                quality={100}
                priority
              />
            )}
            <div className={styles.teacher_desc}>
              <h1>Иван Петров</h1>
              <ul>
                <li>Опыт</li>
                <li>Сколько учеников подготовил</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.btn_section}>
        <button className={styles.btn_teach}>Начать учиться</button>
        <button className={styles.btn_course}>Перейти к курсам</button>
      </div>
    </section>
  );
};

export default Teacher;

import styles from '@/assets/styles/components/Features.module.css';

const Features = () => {
  return (
    <section className={styles.features}>
      <div className={styles.title}>
        <h1>О курсах</h1>
        <p>Все обучающие материалы находяться на одной платформе</p>
      </div>
      <div className={styles.step_one}>
        <div className={styles.step_one__inner}>
          <div className={styles.step_number}>1</div>
          <h1>
            Каждый <span>модуль</span> включает в себя:
          </h1>
          <ul>
            <li>Разбор теоретического материала</li>
            <hr />
            <li>
              Практические задания <br /> для закрепления материала
            </li>
            <hr />
            <li>Мини-лекции от наших преподавателей</li>
            <hr />
            <li>Аудио - и видеоматериалы</li>
          </ul>
        </div>
      </div>

      <div className={styles.step_two}>
        <div className={styles.step_two__inner}>
          <div className={styles.step_number}>2</div>
          <h2>
            Готовим <span>понятные методички</span> <br /> для более быстрого
            усвоения <br /> материала нашими учениками
          </h2>
        </div>
      </div>

      <div className={styles.step_three}>
        <div className={styles.step_three__inner}>
          <div className={styles.step_number}>3</div>
          <ul>
            <li>
              Каждую неделю проводим <br /> онлайн-занятия с преподавателем{' '}
              <br /> в<span>мини-группах от 5 до 20 человек</span>
            </li>
            <hr />
            <li>
              Все <span>записи занятий</span> доступны на <br /> платформе в
              любое время
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.step_four}>
        <div className={styles.step_four__inner}>
          <div className={styles.step_number}>4</div>
          <ul>
            <li>
              Раз в месяц <span>проводим пробный экзамен</span> <br /> для
              проверки и мониторинга знаний ученика, <br /> чтобы
              скорректировать вектор дальнейшего <br /> обучения для достижения
              наилучшего <br /> результата
            </li>
            <hr />
            <li>
              Каждый пробный экзамен <span>проверяется вручную</span> <br />
              нашими педагогами
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;

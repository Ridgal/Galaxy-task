import styles from '@/assets/styles/components/About.module.css';

const About = () => {
  return (
    <section className={styles.preview}>
      <div className={styles.wrapper}>
        <div className={styles.slogan}>
          <h1>Подготовимся к ЕГЭ вместе</h1>
          <p>только до 3 сентября</p>
        </div>
        <div className={styles.quote}>
          <div className={styles.thumb}>
            <h1>1+1=3</h1>
          </div>
          <p>три курса по цене двух</p>
        </div>
        <div className={styles.features}>
          <button className={styles.btn_more}>Подробнее</button>
          <button className={styles.btn_buy}>Купить</button>
        </div>
      </div>
    </section>
  );
};

export default About;

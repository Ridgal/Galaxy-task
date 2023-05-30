import styles from '@/assets/styles/components/FAQ.module.css';
import Question_one from './Questions/Question-one';
import Question_two from './Questions/Question-two';
import Question_three from './Questions/Question-three';
import Question_four from './Questions/Question-four';

const FAQ = () => {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>FAQ</h1>
      <div className={styles.faq_questions}>
        <Question_one />
        <Question_two />
        <Question_three />
        <Question_four />
      </div>
    </section>
  );
};

export default FAQ;

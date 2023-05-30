import Header from '@/components/Home/Header';
import About from '@/components/Home/Main/About';
import Features from '@/components/Home/Main/Features';
import Teacher from '@/components/Home/Main/Teacher';
import FAQ from '@/components/Home/Main/FAQ/FAQ';
import Footer from '@/components/Home/Footer';

import '@/assets/styles/config/globals.css';

const Home = () => {
  return (
    <>
      <main className="container">
        <Header />
        <About />
        <Features />
      </main>
      <section className="aside">
        <Teacher />
        <FAQ />
        <Footer />
      </section>
    </>
  );
};

export default Home;

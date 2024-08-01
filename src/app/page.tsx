import Head from 'next/head';
import Header from './components/HeaderLanding';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import JoinUsSection from './components/JoinUsSection';
import Footer from './components/Footer';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Unimori.ai</title>
        <meta name="description" content="Первая платформа для инвестиции в Казахстане с nudge" />
        <meta property="og:title" content="Бастау Инвест" />
        <meta property="og:description" content="Халык инвест бастау - запусти своё портфолио вместе с Халык Банк" />
        <meta property="og:url" content="https://nudge-halyk.vercel.app" />
        <meta property="og:type" content="website" />
      </Head>
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <HowItWorksSection />
      <JoinUsSection />
      <Footer />
    </div>
  );
};

export default Home;

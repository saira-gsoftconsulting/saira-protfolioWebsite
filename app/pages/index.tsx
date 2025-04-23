import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from '../components/hero';
import Header from '../components/header';
import About from '../components/about';
import Skills from '../components/skills';
import Projects from '../components/projects';
import Contact from '../components/contactForm';
import Footer from '../components/footer';


const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden"> {/* Prevents horizontal scroll */}
      <Head>
        <title>Your Name - Frontend Developer Portfolio</title>
        <meta name="description" content="Portfolio of [Your Name], a passionate Frontend Developer specializing in React, Next.js, and modern web technologies." />
        {/* Add more meta tags: Open Graph, Twitter Cards, Favicon links */}
        <link rel="icon" href="/favicon.ico" /> {/* Make sure you have a favicon */}
      </Head>

      <Header />

      <main className="flex-grow"> {/* Makes main content take up available space */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
import {AdGrid} from './components/AdGrid';
import {Footer, Header} from './components/Chrome';
import {Contact} from './components/Contact';
import {Hero} from './components/Hero';
import {Process} from './components/Process';
import {Services} from './components/Services';
import {Sites} from './components/Sites';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AdGrid />
        <Sites />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

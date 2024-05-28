import '../styles/globals.css';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

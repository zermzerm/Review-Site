import Footer from './Footer';
import Nav from './Nav';

export default function Main({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}

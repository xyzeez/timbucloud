import Footer from './Footer';
import NavBar from './nav/NavBar';

const AppLayout = ({ children }) => {
  return (
    <div className="bg-white min-h-screen w-full max-w-[1280px] mx-auto">
      <NavBar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default AppLayout;

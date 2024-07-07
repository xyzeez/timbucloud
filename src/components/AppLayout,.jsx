import NavBar from './nav/NavBar';

const AppLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div>{children}</div>
    </div>
  );
};

export default AppLayout;

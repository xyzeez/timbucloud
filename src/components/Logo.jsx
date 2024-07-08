import { Link } from 'react-router-dom';

const Logo = ({ type = 'light' }) => {
  return (
    <Link to="/">
      <img
        src={type === 'dark' ? '/assets/logo-dark.png' : '/assets/logo.png'}
        alt=""
      />
    </Link>
  );
};

export default Logo;

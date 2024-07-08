import { Link } from 'react-router-dom';

const Logo = ({ type = 'light' }) => {
  return (
    <Link to="/">
      <img
        src={
          type === 'dark'
            ? '/public/assets/logo-dark.png'
            : '/public/assets/logo.png'
        }
        alt=""
      />
    </Link>
  );
};

export default Logo;

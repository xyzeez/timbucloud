const Button = ({ children, clickHandler = function () {} }) => {
  return (
    <button
      onClick={clickHandler}
      className="uppercase bg-blue text-white text-center font-inter font-bold text-lg p-3 rounded">
      {children}
    </button>
  );
};

export default Button;

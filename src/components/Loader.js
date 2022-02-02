const Loader = ({ text }) => {
  return (
    <div className="loader-container">
      <div className="loader neu-border-inset">
        <div className="loader-circle">
          <div className="neu-border loader-inner"></div>
        </div>
      </div>
      <p className="loader-text">{text}</p>
    </div>
  );
};

export default Loader;

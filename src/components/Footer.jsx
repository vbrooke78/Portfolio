const Footer = () => {
  return (
    <div className="footer">
      <p>Email: vscotter@hotmail.com</p>
      <div className="footer-links">
        <a href="https://github.com/vbrooke78" target="_blank">
          <img alt="github logo" src={require('../assets/GitHub-logo.png')} />
        </a>
        <a href="https://linkedin.com/in/vicky-brooke/" target="_blank">
          <img
            alt="linkedin logo"
            src={require('../assets/linkedin-image.png')}
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;

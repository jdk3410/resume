// Footer.js
function Footer() {
    return (
      <footer className="footer">
        {`[ - jdk3410.com Version 0.0${process.env.REACT_APP_VERSION}-${process.env.REACT_APP_GIT_BRANCH} - ]`}
      </footer>
    );
  }

export default Footer;
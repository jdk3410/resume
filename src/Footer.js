// Footer.js
function Footer() {
    return (
      <footer className="footer">
        {`[ - jdk3410.com Version 0.0${process.env.REACT_APP_VERSION}-${process.env.REACT_APP_GIT_BRANCH} - ]`}
      </footer>
    );
  }
  
  // App.css
  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: blue;
    color: white;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px; 
  }
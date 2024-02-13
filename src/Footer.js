// Footer.js
import React from 'react';

function Footer() {
  return (
    <footer>
      {`[${process.env.REACT_APP_GIT_BRANCH} v${process.env.REACT_APP_VERSION}]`}
    </footer>
  );
}

export default Footer;
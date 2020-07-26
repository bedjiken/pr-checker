import React from 'react';

const Footer = () => (
  <footer className="text-sm px-8 text-center flex-none py-4">
    <p className="text-white">
      Having a NaN error? please check with https{' '}
      <a
        href="https://opensourcei.herokuapp.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        here 

      </a>
      .
    </p>
    <p className="text-white">
      Disclaimer: This site is fan made and not affiliated with{' '}
      <a
        href="https://developers.facebook.com/developercircles/open-source-immersion/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open Source Immersion 

      </a>
      .
    </p>
    <div className="p-2 mt-4" id="faqs">
      <a
        rel="noopener noreferrer"
        className="bg-mid-purple hover:bg-light-blue text-white hover:text-mid-blue px-2 py-1 pointer no-underline text-sm"
        href="/Faq"
      >
      <i class="fas fa-question"/> FAQs
      </a>
    </div>
  </footer>
);

export default Footer;

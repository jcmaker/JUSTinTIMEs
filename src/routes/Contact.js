import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <ul className="contact_ul">
        <li className="contact__li">
          <button className="contact__btn fcbk">
            <a href="https://www.facebook.com/justin.cho.98622">Facebook</a>
          </button>
        </li>
        <li className="contact__li">
          <button className="contact__btn instg">
            <a href="https://www.instagram.com/jcmaker0627/">Instagram</a>
          </button>
        </li>
        <li className="contact__li">
          <button className="contact__btn gthb">
            <a href="https://github.com/jcmaker">Github</a>
          </button>
        </li>
        <li className="contact__li">
          <button className="contact__btn gml">
            <span>Gmail</span>
          </button>
          <span>jcmaker0627@gmail.com</span>
        </li>
      </ul>
    </div>
  );
};

export default Contact;

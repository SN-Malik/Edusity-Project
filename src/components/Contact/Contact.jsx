import React from 'react';
import './contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';

const Contact = () => {
  const [result, setResult] = React.useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    formData.append('access_key', 'a64db528-fcae-43f1-9f18-198e9ec8c630');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Email sent Successfully');
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact information below. Your
          feedback, questions, and suggestions are important to us as we strive to provide
          exceptional service toour university community.
        </p>
        <ul>
          <li>
            {' '}
            <img src={mail_icon} alt="" /> shahzaib.hitek@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +92-308-7071685
          </li>
          <li>
            <img src={location_icon} alt="" />
            77 Massachusetts Ave, Cambridge <br /> MA 02139, United States
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label htmlFor="Nme">Your Name:</label>
          <input type="text" name="name" id="Nme" placeholder="Enter Your Name" required />
          <label htmlFor="Phno">Phone Number</label>
          <input type="tel" name="phone" id="Phno" placeholder="Enter your Mobile No." required />
          <label htmlFor="Msge">Write your message here</label>
          <textarea name="" id="Msge" rows="6" placeholder="Enter your Message" required></textarea>
          <button type="submit" className="btn dark-btn">
            Submit Now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;

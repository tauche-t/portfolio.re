import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import Loader from 'react-loaders';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const refForm = useRef();

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4hjmxhp', 'template_960y70p', refForm.current, 'YcRf25A26Xz73bmx0')
      .then((result) => {
        alert('Message successfully sent!')
        window.location.reload(false)
      }, (error) => {
        alert('Failed to send the message, please try again')
      });
  }

  return (
    <>
      <div className="container contact-page">
        <div className='text-zone'>
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={['C', 'o', 'n', 't', 'a', 'c', ' ', 'm', 'e']} idx={15} />
          </h1>
          <p>
            I am interested in freelance opportunities - especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p>
          <div className='contact-form'>
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className='half'>
                  <input type="text" name="name" placeholder='Name' required />
                </li>
                <li className='half'>
                  <input type="email" name="email" placeholder='Email' required />
                </li>
                <li>
                  <input type="text" name="subject" placeholder='Subject' required />
                </li>
                <li>
                  <textarea className='Message' name="message" required placeholder='Message' ></textarea>
                </li>
                <li>
                  <input type="submit" className='flat-button' value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className='info-map'>
          조준모,
          <br />
          대한민국,
          <br />
          경기도 파주시 법원읍
          <br />
          사임당로 835-4
          <br />
          <span>tauche.t3473@gmail.com</span>
        </div>
        <div className='map-wrap'>
          <MapContainer center={[37.849450, 126.873704]} zoom={17}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"  />
            <Marker position={[37.849450, 126.873704]}>
              <Popup>Sloba lives here, come over for a cup of coffee ^^</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
}

export default Contact;
import React from 'react';
import SocialMedias from '../../SocialMedias';
import ContactForm from './ContactForm';

const ContactContainer = () => {
  return (
    <section className='contact-page' id='contacts'>
      <div className='footer'>
        <h2 className='title-main title-contact'>Reach Me</h2>
        <div className='socials call'>
          <p className='each-li'>
            <span>
              <i className='fa fa-phone' aria-hidden='true'></i>
            </span>{' '}
            +250787222766
          </p>
          <p className='each-li'>
            <span>
              {' '}
              <i className='fa fa-envelope' aria-hidden='true'></i>{' '}
            </span>
            mansurissa6@gmail.com
          </p>
        </div>
        <h2 className='title-main title-contact'>Follow Me</h2>
        <SocialMedias />
      </div>
      <ContactForm />
    </section>
  );
};

export default ContactContainer;

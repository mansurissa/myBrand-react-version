import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className='landing'>
      <div className='intro-wraper'>
        <h1 className='title-intro'>👋 Hi!,</h1>
        <p className='brief'>
          I am NSABIMANA Issa, a full stack web and mobile app developer who
          love solving problems and team working. I am a freelancer with
          experience of 2 years in software engineering.
        </p>
      </div>

      <Link to='#contacts'>
        <button className='special-link button'>Contact Me</button>
      </Link>
    </div>
  );
};

export default Landing;

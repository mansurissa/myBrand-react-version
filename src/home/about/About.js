import MyPic from '../../images/my-pic.png';
import SocialMedias from '../SocialMedias';
import SkillContainer from './SkillContainer';

const About = () => {
  return (
    <>
      <h1 className='title-main' id='about'>
        ABOUT ME
      </h1>
      <section className='about'>
        <div className='upper'>
          <div className='left-me'>
            <div className='image'>
              <img src={MyPic} alt='my phot' className='my-prot-pic' />
            </div>
            <p className='para'>
              I am a passionate and problem solving driven full stack mobile app
              developer and JavaScript is my favourite programming language. I
              have been working in this industry for 2 years.
            </p>
            <SocialMedias />
          </div>
          <div className='right-me'>
            <h2>Fornt end</h2>

            <SkillContainer skillName={'Html'} percentage={98} />
            <SkillContainer skillName={'Css'} percentage={90} />
            <SkillContainer skillName={'BootStrap'} percentage={60} />
            <SkillContainer skillName={'JavaScript'} percentage={95} />
            <SkillContainer skillName={'React'} percentage={90} />
            <SkillContainer skillName={'Vue js'} percentage={57} />

            <h2>Back end</h2>
            <SkillContainer skillName={' Node js, Express'} percentage={93} />
            <SkillContainer skillName={'Python'} percentage={62} />
            <SkillContainer skillName={'PHP'} percentage={55} />

            <h2>Data base</h2>
            <SkillContainer
              skillName={' Postgress, Knex & Sequelize'}
              percentage={87}
            />
            <SkillContainer skillName={'Mongo DB, Mongoose'} percentage={90} />
            <SkillContainer skillName={'Redis'} percentage={84} />
          </div>
        </div>
        <h1 className='title-main'>Others</h1>
        <div className='upper down'>
          <div className='right-me'>
            <h2>Languages</h2>
            <SkillContainer skillName={'Kinyarwanda'} percentage={97} />
            <SkillContainer skillName={'English'} percentage={90} />
            <SkillContainer skillName={'Spanish'} percentage={46} />
            <SkillContainer skillName={'French'} percentage={25} />
          </div>
          <div className='right-me'>
            <h2>Operating Systems</h2>
            <SkillContainer skillName={' Mac osx'} percentage={90} />
            <SkillContainer skillName={' Ubuntu'} percentage={70} />
            <SkillContainer skillName={' Kali linux'} percentage={75} />
            <SkillContainer
              skillName={'  Windows 7, 8, 8.1, 10'}
              percentage={96}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

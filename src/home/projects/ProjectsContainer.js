import Project from './Project';
import PortfolioImg from '../../images/port.png';
import AfrinetImg from '../../images/afrinet.png';
import SmartBrainImg from '../../images/smart-brain.png';
import Slider from './Slider';
const ProjectsContainer = () => {
  const projects = [
    <Project
      projectName={'My Portfolio'}
      description={
        ' My portfolio website is my personal branding website which has a blog and admin pannel'
      }
      image={PortfolioImg}
      link={'https://afrinet.netlify.app'}
      codeLink={'https://github.com/mansurissa/smart-brain/My-brand'}
      technologies={['Html', 'JS', 'Node', 'Mongo DB']}
    />,

    <Project
      projectName={'Afrinet Website'}
      description={
        'Afrinet’s Website is a company website that show its details and services'
      }
      image={AfrinetImg}
      link={'https://afrinet.netlify.app'}
      technologies={['HTML', 'JS', 'CSS']}
    />,

    <Project
      projectName={'Smart Brain'}
      description={
        ' Smart brain is an app which detect faces in a given image and wrap it in a blue rectangle.'
      }
      image={SmartBrainImg}
      link={'https://afrinet.netlify.app'}
      codeLink={'https://github.com/mansurissa/smart-brain/My-brand'}
      technologies={['React', 'CSS', 'Node', 'Postgres']}
    />,
  ];

  return <Slider projects={projects} />;
};

export default ProjectsContainer;

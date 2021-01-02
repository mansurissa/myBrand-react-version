const Project = ({
  projectName,
  description,
  image,
  link,
  codeLink,
  technologies,
}) => {
  return (
    <section id='projects'>
      <h1 class='title-main'>PORTFOLIO</h1>

      <div className='each-project port'>
        <div>
          <img src={image} alt='' className='project-img' />
        </div>

        <div className='text'>
          <h2 className='title-main p-name'>{projectName}</h2>
          <p className='para'>{description}</p>
          <div className='tech '>
            {technologies.map((tech) => (
              <p class='each-tech'>{tech}</p>
            ))}
          </div>
          <div className='btns'>
            <button className='visit button special-link shadow-btn'>
              <a href={link} target='#blank' className=' special-link'>
                Visit
              </a>
            </button>
            <button className='button shadow-btn'>
              <a href={codeLink} target='#blank' className=' code'>
                Code
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;

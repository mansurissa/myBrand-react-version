const Project = ({
  projectName,
  description,
  image,
  link,
  codeLink,
  technologies,
}) => {
  let techs;
  (() => {
    technologies.forEach((techName) => {
      techs = <p className='each-tech'>{techName}</p>;
    });
  })();
  return (
    <div className='each-project port'>
      <div>
        <img src={image} alt='' className='project-img' />
      </div>

      <div className='text'>
        <h2 className='title-main p-name'>{projectName}</h2>
        <p className='para'>{description}</p>
        <div className='tech '>{techs}</div>
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
  );
};

export default Project;

const SkillContainer = ({ skillName, percentage }) => {
  const style = {
    width: `${percentage}%`,
  };

  return (
    <div className='skill-container'>
      <div className='skill'>
        <div className='skill-bar' style={style}>
          {skillName}
        </div>
      </div>
      <div className='percentage'>{percentage}%</div>
    </div>
  );
};

export default SkillContainer;

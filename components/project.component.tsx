const Project = ({ title, links, img, children }) => {
  return (
    <div className="project">
      <div className="card-wrap">
        <div className="card">
          <div className="card-bg">
            <img src={img} alt={"Screenshot of " + title} width="115%" />
          </div>
        </div>
      </div>
      <div className="project-details">
        <div className="project-tile">
          {title}
        </div>
        {children}
      </div>
    </div>
  );
};

export default Project;

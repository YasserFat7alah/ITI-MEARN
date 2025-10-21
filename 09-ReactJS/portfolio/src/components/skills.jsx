function SkillCard({ skill, index }) {
  return (
    <div className="mb-3" key={index}>
      <div className="d-flex align-items-center">
        <div
          className="px-3 py-2 bg-dark text-white fw-bold"
          style={{
            minWidth: "120px",
            textAlign: "center",
            borderTopLeftRadius: "0.25rem",
            borderBottomLeftRadius: "0.25rem",
          }}
        >
          {skill.name}
        </div>
        <div className="flex-grow-1">
          <div className="progress rounded-0" style={{ height: "38px" }}>
            <div
              className="progress-bar bg-secondary "
              role="progressbar"
              style={{
                width: `${skill.level}%`,
              }}
              aria-valuenow={skill.level}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {skill.level}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function Skills() {
    const skills = [
        { name: "HTML", level: 90, color: "bg-danger" },
        { name: "CSS", level: 85, color: "bg-primary" },
        { name: "JavaScript", level: 75, color: "bg-warning text-dark" },
        { name: "Bootstrap", level: 80, color: "" }, // we can add custom color via style
    ];
  return (
    <section id="skills" className="bg-light py-5">
        <div className="container">
              
            <h2 className="text-center mb-5">Skills</h2>
              
            {skills.map((skill, index) => (<SkillCard skill={skill} index={index} />))}
              
        </div>
    </section>
  );
}

export default Skills;

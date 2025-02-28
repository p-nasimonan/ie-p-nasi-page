const Works = () => {
  const projects = [
    { id: 1, title: "プロジェクト1", description: "説明文がここに入ります..." },
    { id: 2, title: "プロジェクト2", description: "説明文がここに入ります..." },
    { id: 3, title: "プロジェクト3", description: "説明文がここに入ります..." },
  ];

  return (
    <div className="page-content">
      <section className="works-grid">
        {projects.map((project) => (
          <article className="work-item" key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Works; 
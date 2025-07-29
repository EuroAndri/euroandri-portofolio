const Projects = () => {
  const projectData = [
    { name: 'Laundry App', prefix: 'laundry', count: 6 },
    { name: 'Ecommerce', prefix: 'ecommerce', count: 6 },
    { name: 'Siasat', prefix: 'siasat', count: 6 },
    { name: 'Toko Cat', prefix: 'tokocat', count: 6 },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-black text-white"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Project
        </h2>

        {projectData.map((project) => (
          <div key={project.name} className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-cyan-300">
              {project.name}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[...Array(project.count)].map((_, i) => {
                const isPortraitTokocat =
                  project.prefix === 'tokocat' && i < 3;

                return (
                 <img
  key={i}
  src={`/images/${project.prefix}${i + 1}.jpg`}
  alt={`${project.name} ${i + 1}`}
  className={`rounded-lg shadow-lg object-cover ${
    project.prefix === 'tokocat'
      ? i < 3
        ? 'h-[500px] max-w-[250px] mx-auto'
        : 'h-[250px] w-full object-contain'
      : 'h-48 w-full'
  }`}
  onError={(e) =>
    (e.target.src = `/images/${project.prefix}${i + 1}.png`)
  }
/>


                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

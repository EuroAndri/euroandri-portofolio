const Skills = () => {
  const skills = [
    { name: 'HTML', stars: 3, icon: 'html.png' },
    { name: 'CSS', stars: 4, icon: 'css.png' },
    { name: 'JavaScript', stars: 1, icon: 'js.png' },
    { name: 'React', stars: 2, icon: 'react.png' },
    { name: 'Tailwind', stars: 2, icon: 'tailwind.png' },
    { name: 'MySQL', stars: 3, icon: 'mysql.png' },
    { name: 'Git', stars: 2, icon: 'git.png' },
    { name: 'C', stars: 2, icon: 'c.png' },
    { name: 'C++', stars: 1, icon: 'cpp.png' },
    { name: 'Laravel', stars: 3, icon: 'laravel.png' },
    { name: 'Postgre', stars: 3, icon: 'postgresql.png' },
    { name: 'Python', stars: 3, icon: 'python.png' },
    { name: 'PHP', stars: 3, icon: 'php.png' },
    { name: 'Figma', stars: 4, icon: 'figma.png' },
    { name: 'Canva', stars: 4, icon: 'canva.png' },
    { name: 'Google Colab', stars: 2, icon: 'colab.png' },
  ];

  const renderStars = (count) => {
    const total = 6;
    return '★'.repeat(count) + '☆'.repeat(total - count);
  };

  return (
    <section id="skills" className="py-20 bg-black" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-300">
          Keterampilan
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-gray-300 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="p-4 bg-gray-900 rounded-xl shadow-md flex flex-col items-center">
              <img
                src={`/icons/${skill.icon}`}
                alt={skill.name}
                className="w-12 h-12 mb-2 object-contain"
              />
              <div className="text-lg font-semibold mb-1">{skill.name}</div>
              <div className="text-yellow-400 text-xl font-mono">{renderStars(skill.stars)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

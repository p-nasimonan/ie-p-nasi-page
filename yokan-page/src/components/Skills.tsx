import { useEffect } from 'react';

const Skills = () => {
  const skills = [
    {
      category: "言語",
      items: [
        "https://www.vectorlogo.zone/logos/python/python-icon.svg",
        "https://cdn.worldvectorlogo.com/logos/typescript.svg",
        "https://cdn.worldvectorlogo.com/logos/java.svg",
        "https://cdn.worldvectorlogo.com/logos/c.svg",
      ],
    },
    {
      category: "好きなの",
      items: [
        "https://www.svgrepo.com/show/306646/react.svg",
        "https://static-00.iconduck.com/assets.00/vue-icon-2048x1766-ntogpmti.png",
        "https://cdn.worldvectorlogo.com/logos/flask.svg",
        "https://www.svgrepo.com/show/354321/selenium.svg",
      ],
    },
    {
      category: "全然わからん",
      items: ["https://img.icons8.com/color/512/kubernetes.png",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWOoWb2-XM9PsxK940NqKjKKFlmN3Q8zDR0A&s", 
              "https://camo.githubusercontent.com/4e9e0bf3fcd09d6557b4eaa8f790ec17599ed6e8eb37a7e78adaa30650c8a6e3/68747470733a2f2f7777772e70726f786d6f782e636f6d2f696d616765732f70726f786d6f782f50726f786d6f785f73796d626f6c5f7374616e646172645f6865782e706e67",
              "https://img.icons8.com/fluent/512/docker.png",
            ],
    },
  ];

  useEffect(() => {
    const containers = document.querySelectorAll('.skills-container');

    containers.forEach(container => {
      container.addEventListener('mouseenter', () => {
        const images = container.querySelectorAll<HTMLImageElement>('img');
        images.forEach((img, index) => {
          img.style.display = 'block';
          const angle = (360 / images.length) * index;
          setTimeout(() => {
            img.style.transform = `rotate(${angle}deg) translate(70px) rotate(-${angle}deg) scale(1.2)`;
          }, 50);
        });
      });

      container.addEventListener('mouseleave', () => {
        const images = container.querySelectorAll<HTMLImageElement>('img');
        images.forEach((img) => {
          img.style.transform = `rotate(0deg) translate(0) scale(1)`;
          setTimeout(() => {
            img.style.display = 'none';
          }, 100);
        });
      });
    });

    return () => {
      containers.forEach(container => {
        container.removeEventListener('mouseenter', () => {});
        container.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <section className="skills">
      <h2>スキル</h2>
      {skills.map((skill) => (
        <article className="skills-container" key={skill.category}>
          <h3>{skill.category}</h3>
          {skill.items.map((item, index) => (
            <img src={item} alt={skill.category} key={index} style={{ display: 'none' }} />
          ))}
        </article>
      ))}
    </section>
  );
};

export default Skills; 
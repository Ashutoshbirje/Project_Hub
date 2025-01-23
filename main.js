const container = document.getElementById('project-container');

projects.forEach((project) => {
  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}">
    <div class="card-content">
      <div class="Text">
        <h2>${project.title}</h2>
        <p>${project.description}</p>
      </div>
      <div class="card-links">
        ${project.liveLink ? `<a href="${project.liveLink}" target="_blank"><i class="fas fa-link"></i></a>` : ''}
        ${project.githubLink ? `<a href="${project.githubLink}" target="_blank"><i class="fab fa-github"></i></a>` : ''}
      </div>
    </div>
    <div class="Space"></div>
  `;

  container.appendChild(card);
});

'use client'

import {useState} from 'react'

type Project = {
  _id: string
  title: string
  description: string
  author?: string
  techStack?: string[]
  githubUrl?: string
  liveUrl?: string
}

export default function ProjectFilter({
  projects,
}: {
  projects: Project[]
}) {
  const [selectedTech, setSelectedTech] = useState('All')

  const techs = Array.from(
    new Set(
      projects.flatMap((project) => project.techStack ?? [])
    )
  )

  const filteredProjects =
    selectedTech === 'All'
      ? projects
      : projects.filter((project) =>
          (project.techStack ?? []).includes(selectedTech)
        )

  return (
    <section>
      <div className="filter-buttons">
        <button
          type="button"
          onClick={() => setSelectedTech('All')}
        >
          All
        </button>

        {techs.map((tech) => (
          <button
            key={tech}
            type="button"
            onClick={() => setSelectedTech(tech)}
          >
            {tech}
          </button>
        ))}
      </div>

      <div className="projects">
        {filteredProjects.map((project) => (
          <article key={project._id} className="project-card">
            <h2>{project.title}</h2>

            <p>{project.description}</p>

            {project.author && (
              <p>
                <strong>Author:</strong> {project.author}
              </p>
            )}

            <p>
              <strong>Technology:</strong>{' '}
              {(project.techStack ?? []).join(', ')}
            </p>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
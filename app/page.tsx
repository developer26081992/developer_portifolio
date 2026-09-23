
import {createClient} from 'next-sanity'
import PageTransition from '@/components/PageTransition'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2025-01-01',
  useCdn: true,
})

async function getProjects() {
  return client.fetch(`
    *[_type == "project"] | order(_createdAt desc) {
      _id,
      title,
      slug,
      description,
      "author": author->name,
      "techStack": techStack[]->name,
      githubUrl,
      liveUrl
    }
  `)
}

export default async function Home() {
  const projects = await getProjects()

  return (
    <PageTransition>
      <main>
        <section className="hero">
          <p className="eyebrow">Software Engineer</p>

          <h1>Mesiah Mutepfe</h1>

          <p className="intro">
            Welcome to my developer portfolio. I build modern web applications
            using current web technologies.
          </p>
        </section>

        <section>
          <h2>Projects</h2>

          {projects.length === 0 ? (
            <p>No projects have been added yet.</p>
          ) : (
            <div className="projects">
              {projects.map((project: any) => (
                <article key={project._id} className="project-card">
                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  {project.author && (
                    <p>
                      <strong>Author:</strong> {project.author}
                    </p>
                  )}

                  {project.techStack?.length > 0 && (
                    <p>
                      <strong>Technology:</strong>{' '}
                      {project.techStack.join(', ')}
                    </p>
                  )}

                  <div className="project-links">
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
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>
    </PageTransition>
  )
}



import {createClient} from 'next-sanity'
import {notFound} from 'next/navigation'
import PageTransition from '@/components/PageTransition'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2025-01-01',
  useCdn: true,
})

async function getProject(slug: string) {
  return client.fetch(
    `
      *[_type == "project" && slug.current == $slug][0] {
        _id,
        title,
        description,
        "author": author->name,
        "techStack": techStack[]->name,
        githubUrl,
        liveUrl
      }
    `,
    {slug},
  )
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{slug: string}>
}) {
  const {slug} = await params
  const project = await getProject(slug)

  if (!project) {
    notFound()
  }

  return (
    <PageTransition>
      <main>
        <h1>{project.title}</h1>

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
      </main>
    </PageTransition>
  )
}


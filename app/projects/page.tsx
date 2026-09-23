
import {createClient} from 'next-sanity'
import ProjectFilter from '@/components/ProjectFilter'
import PageTransition from '@/components/PageTransition'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2025-01-01',
  useCdn: true,
})

async function getProjects() {
  return client.fetch(
    `
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
    `,
    {},
    {
      next: {
        revalidate: 60,
      },
    },
  )
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <PageTransition>
      <main>
        <h1>Projects</h1>

        <p>My latest projects and development work.</p>

        <ProjectFilter projects={projects} />
      </main>
    </PageTransition>
  )
}


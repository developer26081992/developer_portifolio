# Developer Portfolio

A modern developer portfolio built with Next.js, Sanity CMS, Tailwind CSS and Framer Motion. The portfolio showcases projects, technologies, featured work and contact information.

## Live Demo

**Live Portfolio:** [https://developerportifolio-4q183eksq-messie-tech.vercel.app/](https://developerportifolio-4q183eksq-messie-tech.vercel.app/)

**GitHub Repository:** [https://github.com/developer26081992/developer_portifolio](https://github.com/developer26081992/developer_portifolio)

## Features

- Portfolio homepage with hero section and featured projects
- Projects listing page
- Project filtering by technology
- Individual project pages using dynamic routes
- Sanity CMS integration
- Embedded Sanity Studio at `/studio`
- Project, Author and TechStack content types
- 60-second Incremental Static Regeneration (ISR) for the projects page
- Signed cache revalidation API
- Framer Motion page transitions
- Contact form with Resend email integration
- GitHub and live project links
- Responsive interface using Tailwind CSS

## Technologies

- Next.js
- React
- TypeScript
- Tailwind CSS
- Sanity CMS
- Framer Motion
- Resend
- Vercel

## Routes


| Route              | Description                               |
| ------------------ | ----------------------------------------- |
| `/`                | Portfolio homepage                        |
| `/projects`        | Projects listing and technology filtering |
| `/projects/[slug]` | Individual project page                   |
| `/contact`         | Contact form                              |
| `/studio`          | Embedded Sanity Studio                    |
| `/api/contact`     | Contact form API                          |
| `/api/revalidate`  | Signed cache revalidation API             |


## Sanity CMS

The project uses Sanity CMS to manage portfolio content.

### Content Types

- Project
- Author
- TechStack

### Project Fields

Projects can contain:

- Title
- Slug
- Description
- Technologies
- Cover image
- Featured status
- Published date
- GitHub URL
- Live project URL

## Local Setup

Clone the repository and navigate into the project directory:

```bash
git clone https://github.com/developer26081992/developer_portifolio.git
cd developer_portifolio

```

Install the dependencies:

```bash
npm install

```

Create a `.env.local` file using `.env.example` as a guide and provide the required environment variables.

Run the development server:

```bash
npm run dev

```

Open the application at:

```text
http://localhost:3000

```

## Environment Variables

The project uses the following environment variables:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-09-22
REVALIDATE_SECRET=your_revalidate_secret
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=your_email@example.com

```

### Important

Do not commit `.env.local` or any file containing real API keys or secrets to GitHub.

The repository includes `.env.example` containing placeholder values for the required environment variables.

## Sanity Studio

The Sanity Studio is embedded into the Next.js application and is available at:

```text
/studio

```

Sanity is used to manage portfolio projects, authors and technology stack information.

## Revalidation

The application provides a signed revalidation endpoint:

```text
POST /api/revalidate

```

The endpoint checks the `x-revalidate-secret` request header against `REVALIDATE_SECRET` before revalidating the homepage, projects page and project detail pages.

## Deployment

The application is deployed on Vercel.

Production URL:

[https://developerportifolio-4q183eksq-messie-tech.vercel.app/](https://developerportifolio-4q183eksq-messie-tech.vercel.app/)

The required environment variables have been configured in the Vercel project.

The Sanity revalidation webhook is configured to trigger the deployed application when content is updated.

## Dataset Export

A Sanity dataset export has been prepared as part of the project submission.

## AI Assistance Declaration

AI-assisted development tools, including Cursor and ChatGPT, were used during development for coding assistance, debugging, explanations and documentation. The final project was reviewed, tested and configured for deployment by the developer.

## Submission Contents

The final submission should contain:

- Complete project source code
- `.env.example`
- Sanity dataset export
- `README.md`
- GitHub repository information
- Live Vercel deployment information

## Author

**Mesiah Mutepfe**

Developer Portfolio


# Developer Portfolio

A modern developer portfolio built with Next.js, Sanity CMS, Tailwind CSS and Framer Motion. The portfolio showcases projects, technologies and contact information.

## Features

- Portfolio homepage

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

| Route | Description |

|---|---|

| `/` | Portfolio homepage |

| `/projects` | Projects listing and technology filtering |

| `/projects/[slug]` | Individual project page |

| `/contact` | Contact form |

| `/studio` | Embedded Sanity Studio |

| `/api/contact` | Contact form API |

| `/api/revalidate` | Signed cache revalidation API |

## Sanity CMS

The project uses Sanity CMS to manage portfolio content.

### Content Types

- Project

- Author

- TechStack

Projects can contain:

- Title

- Slug

- Description

- Project image

- Author

- Technology stack

- GitHub URL

- Live demo URL

## Environment Variables

Create a `.env.local` file and add:

```env

NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id

NEXT_PUBLIC_SANITY_DATASET=production

REVALIDATE_SECRET=your_revalidate_secret

RESEND_API_KEY=your_resend_api_key

[CONTACT_EMAIL=your_email@example.com](mailto:CONTACT_EMAIL=your_email@example.com)
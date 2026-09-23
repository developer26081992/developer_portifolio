import {defineField, defineType} from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}],
    }),

    defineField({
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'techStack'}],
        },
      ],
    }),

    defineField({
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
    }),

    defineField({
      name: 'liveUrl',
      title: 'Live URL',
      type: 'url',
    }),
  ],
})
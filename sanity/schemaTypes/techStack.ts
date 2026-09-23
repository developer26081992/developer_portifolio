import {defineField, defineType} from 'sanity'

export const techStack = defineType({
  name: 'techStack',
  title: 'Tech Stack',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Technology Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),

    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
    }),
  ],
})
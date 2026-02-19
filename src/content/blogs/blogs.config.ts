import { defineCollection, z } from "astro:content";

const blogs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string().optional(),
    authorimage: z.string().optional(),
    designation: z.string().optional(),
    date: z.date(),
    image: z.string().optional(),
    socialLinks: z.object({
      twitter: z.string().optional(),
      linkedin: z.string().optional(),
      bluesky: z.string().optional(),
    }).optional(),
  }),
});

export default blogs;
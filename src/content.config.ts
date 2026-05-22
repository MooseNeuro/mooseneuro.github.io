import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blogs = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/blogs" }),
  schema: z.object({
    title: z.string(),
    author: z.string().optional(),
    authorimage: z.string().optional(),
    designation: z.string().optional(),
    affiliation: z.string().optional(),
    date: z.date(),
    image: z.string().optional(),
    socialLinks: z.object({
      twitter: z.string().optional(),
      linkedin: z.string().optional(),
      bluesky: z.string().optional(),
    }).optional(),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    image: z.string().optional(),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/team" }),
  schema: z.object({
    title: z.string(),
    team: z.array(
      z.object({
        name: z.string(),
        designation: z.string(),
        image: z.string(),
      })
    ),
  }),
});

const workshops = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/workshops" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    url: z.string(),
    image: z.string(),
    pubDate: z.date(),
    carouselheading: z.string(),
  }),
});

export const collections = { blogs, news, team, workshops };

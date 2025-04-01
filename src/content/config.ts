import { defineCollection, z } from "astro:content";

// Blog collection schema
const blogCollection = defineCollection({
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.date().optional(),
    image: z.string().optional(),
    author: z.string().optional(),
    categories: z.array(z.string()).default(["others"]),
    draft: z.boolean().optional(),
    featured: z.boolean().optional(),
  }),
});

// Pages collection schema
const pagesCollection = defineCollection({
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    layout: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

const noticiasCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    page_title: z.string().optional(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    news: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        image: z.string().optional(),
        text_link: z.string().optional(), // ✅ ADD THIS
        video: z.object({
          thumbnail: z.string(),
          video_id: z.string(),
        }).optional(),
        button: z.object({
          enable: z.boolean(),
          label: z.string(),
          link: z.string(),
        }).optional(),
        list: z.array(z.string()).optional(),
      })
    ).optional(),
  }),
});



// Export collections
export const collections = {
  blog: blogCollection,
  pages: pagesCollection,
  news: noticiasCollection,
};

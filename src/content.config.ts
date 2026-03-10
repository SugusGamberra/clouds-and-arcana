import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const oraculoCollection = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/oraculo" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        image: z.string().optional(),
        tags: z.array(z.string()),
    }),
    });

    export const collections = {
    'oraculo': oraculoCollection,
};
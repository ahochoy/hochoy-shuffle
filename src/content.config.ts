// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Define your collection(s)
const projects = defineCollection({
    loader: glob({ pattern: "*.md", base: "./src/data/projects" }),
    schema: z.object({
        title: z.string(),
        link: z.string(),
        tags: z.array(z.string()),
    })
});

const experienceSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
});

const currentExperiences = defineCollection({
    loader: file("src/data/experiences.json", { parser: (text) => JSON.parse(text).current }),
    schema: experienceSchema
});

const pastExperiences = defineCollection({
    loader: file("src/data/experiences.json", { parser: (text) => JSON.parse(text).current }),
    schema: experienceSchema
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { projects, currentExperiences, pastExperiences };

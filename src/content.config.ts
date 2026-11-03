import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
const activities = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/lessons" }),
  schema: z.object({
    id: z.string(), title: z.string(), level: z.enum(["A1","A2","B1","B2","C1","C2"]), summary: z.string(),
    questions: z.array(z.object({ n:z.number(), type:z.enum(["choice","boolean"]), prompt:z.string(), options:z.array(z.string()), answer:z.number(), why:z.string() })),
    speakingMissions: z.array(z.object({ title:z.string(), prompt:z.string() }))
  })
});
export const collections = { activities };

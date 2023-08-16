import { createClient, groq } from "next-sanity";
import { Project } from "../types/project";

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "npvamhe5",
    dataset: "production",
    // apiVersion: "2023-08-15",
    useCdn: true,
  });

  return client.fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
  )
}
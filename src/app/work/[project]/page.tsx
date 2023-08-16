import { getProject, getProjects } from "../../../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { project: string };
}

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);
  
  return (
    <>
      <div>
        <h1>{project.name}</h1>
      </div>

      <div>
        <PortableText value={project.content}/>
      </div>
    </>
  )
}
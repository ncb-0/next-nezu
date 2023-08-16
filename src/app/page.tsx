import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next";
import { getProjects } from "../../sanity/sanity-utils";

export const metadata: Metadata = {
  title: "nezu.world",
}

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
      <h1>{metadata.title}</h1>
      <h2>projects</h2>
      <div className="gallery-grid">
        {projects.map((project) => (
          <div key={project._id} className="gallery-grid-item">
            {project.image && (
              // <Image className="gallery-grid-item-image" src={project.image} alt={project.name} width={512} height={512}/>
              <div className="gallery-grid-item-image" style={{backgroundImage: `url(${project.image})`}}></div>
            )}
            <Link href={`/work/${project.slug}`} key={project._id}>
              {project.name}
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
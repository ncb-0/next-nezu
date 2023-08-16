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
      <h2>projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project._id}>{project.name}</li>
        ))}
      </ul>
    </>
  )
}
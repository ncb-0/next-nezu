import {defineConfig} from "sanity"
import {deskTool} from "sanity/desk"
import schemas from "./sanity/schemas";
// import {visionTool} from "@sanity/vision"

const sanityConfig = defineConfig ({
  title: "nezu insanity",
  projectId: "npvamhe5",
  dataset: "production",
  plugins: [deskTool()],
  schema: {
    types: schemas,
  },
  apiVersion: "2023-08-16",
  basePath: "/admin",
})

export default sanityConfig;
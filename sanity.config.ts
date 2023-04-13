import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk';

const config = defineConfig({
  projectId: 'l5cflhi9',
  dataset: 'production',
  title: 'My Personal Wesite',
  apiVersion: '2023-4-12',
  basePath: '/admin',
  plugins: [deskTool()]
})

export default config;
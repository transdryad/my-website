import { createClient, groq } from "next-sanity";

export async function getProjects() {
    const client = createClient({
        projectId: 'l5cflhi9',
        dataset: 'production',
        apiVersion: '2023-4-12',
    });
    client.fetch(
        groq`*[_type == "project"]{
            _id, 
            _createdAt
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content

        }`
    );

}
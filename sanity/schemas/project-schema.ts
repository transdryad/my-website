const project = {
    name: 'project',
    title: 'Projects',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name' }
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url'
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }],

        },
        { 
            name: 'alt',
            title: 'Alt',
            type: 'string'
        },
    ],
};
export default project;

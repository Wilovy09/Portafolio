<script setup lang="ts">
    import ProjectCard from '@/components/ProjectCard.vue';

    const projects = [
        {
            id: 1,
            //img: '',
            alt: 'Products API',
            title: 'Products API',
            tecnologias: ['FastAPI', 'Python', 'Vercel'],
            desc: 'API para productos',
            github: 'https://github.com/Wilovy09/Products-API-FastAPI',
            demo: 'https://products-api-mu.vercel.app/'
        },
        {
            id: 2,
            //img: '',
            alt: 'MyLinkHubAstro',
            title: 'My linkHub Astro',
            tecnologias: ['Astro', 'Tailwind'],
            desc: 'Todos tus links en una página',
            github: 'https://github.com/Wilovy09/Mi-LinkHub-ASTRO',
            demo: 'https://my-linkhub-template.netlify.app/'
        }
    ];
</script>

<template>
    <h1 class="my-8 text-center font-bold text-5xl">Proyectos</h1>
    <div class="flex justify-center">
        <div class="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <ProjectCard v-for="project in projects" :key="project.id" :projectCard="project" />
        </div>
    </div>
</template>
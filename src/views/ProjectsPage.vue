<script setup lang="ts">
    import ProjectCard from '@/components/ProjectCard.vue';

    const projects = [
        {
            id: 1,
            img: '/images/projects/productsApiIMG.webp',
            alt: 'Products API',
            title: 'Products API',
            tecnologias: ['FastAPI', 'Python', 'Vercel'],
            desc: 'API para productos',
            github: 'https://github.com/Wilovy09/Products-API-FastAPI',
            demo: 'https://products-api-mu.vercel.app/'
        },
        {
            id: 2,
            img: '/images/projects/myLinkHubIMG.webp',
            alt: 'MyLinkHubAstro',
            title: 'My linkHub',
            tecnologias: ['Astro', 'Tailwind'],
            desc: 'Todos tus links en una página',
            github: 'https://github.com/Wilovy09/Mi-LinkHub-ASTRO',
            demo: 'https://my-linkhub-template.netlify.app/'
        }
    ];
</script>

<template>
    <!-- Trabajos -->
    <!-- <div class="mx-10">
        <h1 class="my-8 font-bold text-5xl flex justify-end">Trabajos</h1>
        <hr>
    </div>
    <div class="flex justify-center mt-8">
        <div class="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <ProjectCard v-for="project in projects" :key="project.id" :projectCard="project" class="last-of-type:mb-16"/>
        </div>
    </div> -->
    <!-- Proyectos -->
    <div class="mx-10">
        <h1 class="my-8 font-bold text-5xl">Proyectos</h1>
        <hr>
    </div>
    <div class="flex justify-center mt-8">
        <div class="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <ProjectCard v-for="project in projects" :key="project.id" :projectCard="project" class="last-of-type:mb-16"/>
        </div>
    </div>
</template> 
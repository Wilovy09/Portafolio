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
        },
        {
            id: 3,
            img: '/images/projects/guiadeestudioIMG.webp',
            alt: 'GuiaDeEstudio',
            title: 'Guia de estudio',
            tecnologias: ['HTML', 'CSS', 'JS','Bootstrap', 'jQuery'],
            desc: 'Guia de estudio para aprender lo básico de HTML, CSS, JS, Bootstrap y jQuery',
            github: 'https://github.com/Wilovy09/GuiaDeEstudioWeb',
            demo: 'https://wilovy09.github.io/GuiaDeEstudioWeb/'
        },
        {
            id: 4,
            img: '/images/projects/crudIMG.webp',
            alt: 'CRUD',
            title: 'CRUD',
            tecnologias: ['Svelte', 'Express', 'Prisma','SQLite'],
            desc: 'CRUD básico con Svelte, Express, Prisma y SQLite',
            github: 'https://github.com/Wilovy09/Svelte-Express-Prisma-CRUD',
        },
        {
            id: 5,
            img: '/images/projects/clonInstagram.webp',
            alt: 'Instragram',
            title: 'Replica de Instagram',
            tecnologias: ['Vue', 'Firebase', 'Tailwind'],
            desc: 'El reto era replicar las funcionalidades básicas de Instragram.',
            github: 'https://github.com/Wilovy09/desarrollo-de-software-Replicar-Instragram'
        },
        {
            id: 6,
            img: '/images/projects/tictactoeIMG.webp',
            alt: 'TicTacToe',
            title: 'Tic Tac Toe',
            tecnologias: ['Vue'],
            desc: 'TIC-TAC-TOE para aprender VUE.js',
            github: 'https://github.com/Wilovy09/TicTacToe-en-VUE',
            demo: 'https://joyful-semifreddo-5b518a.netlify.app/'
        },
    ];
</script>

<template>
    <main class="mb-20">
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
            <div class="columns-1 sm:columns-2 lg:columns-3">
                <ProjectCard v-for="project in projects" 
                            :key="project.id" 
                            :projectCard="project" />
            </div>
        </div>
    </main>
</template>
<script setup lang="ts">
    import SkillCard from "@/components/SkillCard.vue";
    const Skills = [
        { name: "HTML", logo: "/icons/astro.svg", clases: "w-24"},
        { name: "Svelte", logo: "/icons/svelte.svg", clases: "w-24 -mt-2"},
        { name: "VUE", logo: "/icons/vue.svg", clases: "w-24"},
        { name: "Firebase", logo: "/icons/firebase.svg", clases: "w-20 -mt-4"},
        { name: "Python", logo: "/icons/python.svg", clases: "w-24 -mt-2"},
        { name: "Django", logo: "/icons/django.svg", clases: "w-24"},
        { name: "Tailwind", logo: "/icons/tailwind.svg", clases: "w-24 -mt-2"},
        { name: "Express", logo: "/icons/express.svg", clases: "w-24 -mt-2"},
        { name: "FastAPI", logo: "/icons/fastAPI.svg", clases: "w-24 -mt-2"},
        { name: "PostgresSQL", logo: "/icons/postgress.svg", clases: "w-24"},
        { name: "SQLite", logo: "/icons/sqlite.svg", clases: "w-24 mt-5"},
        { name: "Supabase", logo: "/icons/supabase.svg", clases: "w-24"},
        { name: "Prisma", logo: "/icons/prisma.svg", clases: "w-24"},
        { name: "CSS", logo: "/icons/css.svg", clases: "w-24"},
        { name: "JS", logo: "/icons/js.svg", clases: "w-24 -mt-2"},
        { name: "NodeJS", logo: "/icons/nodejs.svg", clases: "w-24 -mt-2"},
        /* { name: "", logo: "/icons/.svg", clases: "w-24"}, */
    ]
</script>

<template>
    <h1 class="text-center font-bold text-4xl my-4">Tecnologias que he usado</h1>

    <div class="flex justify-center items-center mb-10">
        <section class="gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            <SkillCard v-for="skill in Skills" :card="skill">
                <template #svg>
                    <img :src="skill.logo" :alt="skill.name" :class="skill.clases"/>
                </template>
            </SkillCard>
        </section>
    </div>
</template>
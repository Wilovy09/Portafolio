<script setup lang='ts'>
    defineProps(["projectCard"])
</script>

<template>
    <a :href="projectCard.demo ?? projectCard.github" target="_blank">
        <div class="mb-4 max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
            <img class="w-full rounded-lg object-cover object-center" :src="projectCard.img ?? '/images/codingIMG.webp'" :alt="projectCard.alt" />
            <p class="my-4 pl-4 font-bold text-gray-500">{{ projectCard.title }}</p>
            <p class="mb-4 ml-4 text-xl font-semibold text-gray-800">{{ projectCard.desc }}</p>
            <div class="flex justify-center flex-wrap">
                <div v-for="tecno in projectCard.tecnologias" class="text-black p-1">
                    <p class="bg-gray-400 p-2 rounded-xl">{{ tecno }}</p>
                </div>
            </div>
        </div>
    </a>
</template>
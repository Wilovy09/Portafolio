<script setup lang='ts'>
    defineProps(['contactCard'])
</script>

<template>
    <a :href="contactCard.link" target="_blank">
        <div class="flex items-center justify-center">
            <div class="px-5 relative">
                <div class="max-w-xs cursor-pointer rounded-lg bg-white p-1 shadow duration-150 hover:scale-105 hover:shadow-md relative">
                    <img class="w-full rounded-lg object-cover object-center" :src="contactCard.img" :alt="contactCard.alt" />
                    <div class="absolute bottom-0 left-0 p-4">
                        <div class="flex gap-2">
                            <p class="text-white mt-0.5">{{ contactCard.nombre }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </a>
</template>
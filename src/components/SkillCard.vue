<script setup lang='ts'>
    defineProps(["card"])
</script>

<template>
    <div class="min-w-[10rem] max-w-[10rem] min-h-[10rem] max-h-[10rem] border hover:border-green-500 
    py-10 transition-all hover:scale-105 rounded-xl">
        <div class="flex justify-center items-center">
            <slot name="svg"></slot>
        </div>
    </div>
</template>
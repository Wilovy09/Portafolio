<script setup lang='ts'>
    import { RouterView } from 'vue-router';
    import NotesNavbar from '@/components/notes/NotesNavbar.vue';
</script>

<template>
    <main>
        <NotesNavbar />
        <RouterView />
    </main>

</template>

<style scoped>
</style>
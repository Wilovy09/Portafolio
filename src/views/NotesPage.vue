<script setup lang='ts'>
    import { RouterView } from 'vue-router';
    import NotesNavbar from '@/components/notes/NotesNavbar.vue';

    let showNavbar = false; 

    const path = window.location.pathname;
    if (path === '/notes') {
        showNavbar = true; 
    }
</script>

<template>
    <main v-if="showNavbar" class="mt-4 grid justify-center">
        <NotesNavbar />
    </main>
    <RouterView />
</template>

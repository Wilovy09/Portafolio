<script setup lang="ts">
    import ContactCard from '@/components/ContactCard.vue';

    const medias = [
        {
            id: 1,
            img: '/images/contact/linkedinContact.webp',
            alt: 'Linkedin',
            nombre: 'Linkedin',
            link: 'https://linkedin.com/in/emigarza'
        },
        {
            id: 2,
            img: '/images/contact/githubContact.webp',
            alt: 'Github',
            nombre: 'Github',
            link: 'https://github.com/Wilovy09'
        },
        {
            id: 3,
            img: '/images/contact/xContact.webp',
            alt: 'Twitter',
            nombre: 'X',
            link: 'https://twitter.com/omfg_09'
        },
        {
            id: 4,
            img: '/images/contact/instagramContact.webp',
            alt: 'Instagram',
            nombre: 'Instagram',
            link: 'https://www.instagram.com/omfg_09/'
        }
    ]
</script>

<template>
    <h1 class="my-8 text-center font-bold text-5xl">Contacto</h1>
    <div class="flex justify-center">
        <div class="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <ContactCard v-for="contact in medias" :contactCard="contact" class="last-of-type:mb-16"/>
        </div>
    </div>

</template>
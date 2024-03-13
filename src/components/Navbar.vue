<script setup lang='ts'>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <nav class="lg:px-16 px-6 bg-black text-white shadow-md flex flex-wrap items-center lg:py-0 py-2" data-svelte-h="svelte-1lsm3ud">
        <div class="flex-1 flex justify-between items-center">
            <RouterLink to="/" class="flex text-lg font-semibold">
                <img src="/favicon.svg" width="50" height="50" class="p-2" alt="Logo de la pagina de Wilovy09" />
            </RouterLink>
        </div>
        <label for="menu-toggle" class="cursor-pointer lg:hidden block">
            <svg class="fill-current text-white" width="20" height="20" viewBox="0 0 20 20"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg>
        </label> 
        <input class="hidden svelte-1ah0gke" type="checkbox" id="menu-toggle" />
        <div class="hidden lg:flex lg:items-center lg:w-auto w-full svelte-1ah0gke" id="menu">
            <ul class="text-xl text-center items-center gap-x-5 pt-4 md:gap-x-4 lg:text-lg lg:flex lg:pt-0">
                    <li class="py-2 lg:py-0">
                        <RouterLink class="inline-flex flex-col items-center justify-center px-5 group" to="/">
                            <span class="efecto font-bold text-gray-300 group-hover:text-[#26bb80]">Inicio</span>
                        </RouterLink>
                    </li>
                    <li class="py-2 lg:py-0">
                        <RouterLink class="inline-flex flex-col items-center justify-center px-5 group"
                            to="/projects">
                            <span class="efecto font-bold text-gray-300 group-hover:text-[#26bb80]">Proyectos</span>
                        </RouterLink>
                    </li>
                    <li class="py-2 lg:py-0">
                        <RouterLink class="inline-flex flex-col items-center justify-center px-5 group"
                            to="/contact">
                            <span class="efecto font-bold text-gray-300 group-hover:text-[#26bb80]">Contacto</span>
                        </RouterLink>
                    </li>
                    <li class="py-2 lg:py-0">
                        <RouterLink class="inline-flex flex-col items-center justify-center px-5 group"
                            to="/skills">
                            <span class="efecto font-bold text-gray-300 group-hover:text-[#26bb80]">Skills</span>
                        </RouterLink>
                    </li>
                    <li class="py-2 lg:py-0">
                        <RouterLink class="inline-flex flex-col items-center justify-center px-5 group"
                            to="/notes">
                            <span class="efecto font-bold text-gray-300 group-hover:text-[#26bb80]">Notas</span>
                        </RouterLink>
                    </li>
                    <li class="py-2 lg:py-0">
                        <RouterLink class="inline-flex flex-col items-center justify-center px-5 group"
                            to="/pdf">
                            <span class="efecto font-bold text-gray-300 group-hover:text-[#26bb80]">CV</span>
                        </RouterLink>
                    </li>
                    <!-- <li class="py-2 lg:py-0">
                        <RouterLink class="inline-flex flex-col items-center justify-center px-5 group"
                            to="/Emiliano_Maldonado_CV.pdf" target="_blank">
                            <span class="efecto font-bold text-gray-300 group-hover:text-[#26bb80]">Descargar CV</span>
                        </RouterLink>
                    </li> -->
                </ul>
        </div>
    </nav>
</template>

<style scoped>
    #menu-toggle:checked + #menu {
        display: block;
    }

    .efecto:hover{
        background: linear-gradient(90deg,var(--verde), var(--color-two), var(--verde)) 0 0 / var(--bg-size) 100%;
        color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
        animation: move-bg 8s infinite linear;
    }

    @keyframes move-bg {
        to {
            background-position: var(--bg-size) 0;
        }
    }

    @media (prefers-reduced-motion: no-preference) {
        .efecto{
            animation: move-bg 8s linear infinite;
        }
        @keyframes move-bg {
            to {
                background-position: var(--bg-size) 0;
            }
        }
    }
</style>
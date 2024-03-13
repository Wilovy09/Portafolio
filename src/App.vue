<script setup lang="ts">
	import { RouterView } from 'vue-router';
	import Navbar from '@/components/Navbar.vue';
</script>

<template>
	<section class="text-white flex justify-center">
		<section class="max-w-[1680px] min-w-[320px] w-full">
			<Navbar />
			<RouterView />
		</section>
	</section>
</template>
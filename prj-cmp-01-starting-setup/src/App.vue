<template>
    <section id="app">
        <TheHeader title="Remember Me" />
        <TheResources />
    </section>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheResources from './components/TheResources.vue';

export default {
    components: {
        TheResources,
        TheHeader
    }
}
</script>

<style>
* {
    box-sizing: border-box;
}

body {
    margin: 0;
}
</style>
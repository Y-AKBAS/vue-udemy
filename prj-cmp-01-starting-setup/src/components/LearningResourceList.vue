<template>
    <ul v-if="resourceList.length !== 0" @addResource="addNewResource" @deleteResource="deleteTheResource">
        <LearningResource v-for="resource in resourceList" :key="resource.title" v-bind="resource" />
    </ul>

</template>

<script>
import LearningResource from './LearningResource.vue';

export default {
    components: {
        LearningResource
    },
    inject: ['resources'],
    methods: {
        addNewResource(title, description, link) {
            this.resourceList.push(
                {
                    title: title,
                    description: description,
                    link: link
                }
            )
        }
    }
}
</script>

<style>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
    margin: auto;
    max-width: 40rem;
}
</style>
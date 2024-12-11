<template>
    <form @submit.prevent @submit="emitAddResource">
        <label for="title">Title: </label>
        <input id="title" type="text" @input="setToNoError('title')" v-model="title" />
        <label for="description">Description: </label>
        <input id="description" type="text" @input="setToNoError('description')" v-model="description" />
        <label for="link">Link: </label>
        <input id="link" type="text" @input="setToNoError('link')" v-model="link" />
    </form>

</template>

<script>
export default {
    data() {
        return {
            title: '',
            titleError: false,
            description: '',
            descriptionError: false,
            link: '',
            linkError: false
        }
    },
    methods: {
        setToNoError(key) {
            if (this[key]) {
                this[key] = true;
            }
        },
        emitAddResource() {
            if (!this.title) {
                this.title = true;

                return;
            }
            if (!this.description) {
                this.descriptionError = true;

                return;
            }
            if (!this.link) {
                this.linkError = true;

                return;
            }

            this.$emit('add-resource', this.title, this.description, this.link)
        }
    }
}
</script>

<style></style>
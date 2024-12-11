<template>
    <BaseCard>
        <h2>Find Your Coach</h2>
        <span class="filter.otpion">
            <input type="checkbox" id="frontend" checked @change="setFilter">
            <label for="frontend">Frontend</label>
        </span>
        <span class="filter.otpion">
            <input type="checkbox" id="backend" checked @change="setFilter">
            <label for="backend">Backend</label>
        </span>
        <span class="filter.otpion">
            <input type="checkbox" id="career" checked @change="setFilter">
            <label for="career">Career</label>
        </span>
    </BaseCard>
</template>

<script>
export default {
    emits: ['filters-changed'],
    methods: {
        setFilter(event) {
            const id = event.target.id;
            const isChecked = event.target.checked;
            this.$emit('filters-changed', {key: id, value: isChecked});
        }
    }
}
</script>

<style scoped>
h2 {
    margin: 0.5rem 0;
}

.filter-option {
    margin-right: 1rem;
}

.filter-option label,
.filter-option input {
    vertical-align: middle;
}

.filter-option label {
    margin-left: 0.25rem;
}

.filter-option.active label {
    font-weight: bold;
}
</style>
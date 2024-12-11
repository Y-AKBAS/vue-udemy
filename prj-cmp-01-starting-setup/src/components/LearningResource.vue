<template>
    <li>
        <BaseCard>
            <header>
                <h3> {{ title }} </h3>
                <BaseButton>Delete</BaseButton>
            </header>
            <p>
                {{ description }}
            </p>
            <nav>
                <a :href="link">{{ link }}</a>
            </nav>
        </BaseCard>
    </li>
</template>

<script>
import BaseButton from './BaseButton.vue';
import BaseCard from './BaseCard.vue';

export default {
    props: ['title', 'description', 'link'],
    components: {
        BaseCard,
        BaseButton
    }
}
</script>

<style scoped>
li {
    margin: auto;
    max-width: 40rem;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

h3 {
    font-size: 1.25rem;
    margin: 0.5rem 0;
}

p {
    margin: 0.5rem 0;
}

a {
    text-decoration: none;
    color: #ce5c00
}

a:hover,
a:active {
    color: #c89300;
}

.box {
    display: block;
    justify-content: center;
    align-items: center;
    border: 2px solid purple;
    background-color: aliceblue;
    margin: 5rem;
    padding: 16px;
}
</style>
<template>
    <section>
        <BaseCard>
            <h2>{{ fullName }}</h2>
            <h3>$ {{ rate }}/hour</h3>
        </BaseCard>
    </section>
    <section>
        <BaseCard>
            <header>
                <h2>Interested? Reach out now!</h2>
                <BaseButton link :to="contactLink">Contact</BaseButton>
            </header>
            <RouterView></RouterView>
        </BaseCard>
    </section>
    <section>
        <BaseCard>
            <BaseBadge v-for="area in areas" :key="area" :type="area" :title="area"></BaseBadge>
            <p>{{ description }}</p>
        </BaseCard>
    </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    props: ['id'],
    data() {
        return {
            selectedCoach: null
        }
    },
    computed: {
        ...mapGetters('coaches', ['coaches']),
        fullName() {
            return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
        },
        contactLink() {
            return this.$route.path + '/contact';
        },
        areas() {
            return this.selectedCoach.areas;
        },
        rate() {
            return this.selectedCoach.hourlyRate;
        },
        description() {
            return this.selectedCoach.description;
        }
    },
    created() {
        this.selectedCoach = this.coaches.find(it => it.id === this.id);
    }
}
</script>
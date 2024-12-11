<template>
    <section>
        <CoachFilter @filtersChanged="updateFilters"></CoachFilter>
    </section>
    <section>
        <BaseCard>
            <div class="controls">
                <BaseButton mode="outline">Refresh</BaseButton>
                <BaseButton link to="/register">Register as a Coach</BaseButton>
            </div>

            <h3 v-if="!hasCoaches">Found no coach data!</h3>
            <ul>
                <CoachItem v-for="coach in filteredCoaches" :key="coach.id" :id="coach.id" :firstName="coach.firstName"
                    :lastName="coach.lastName" :rate="coach.hourlyRate" :areas="coach.areas"></CoachItem>
            </ul>
        </BaseCard>
    </section>
</template>

<script>
import CoachFilter from '../../components/coaches/CoachFilter.vue';
import CoachItem from '../../components/coaches/CoachItem.vue';

export default {
    components: {
        CoachItem,
        CoachFilter
    },
    data() {
        return {
            filters: {
                frontend: true,
                backend: true,
                career: true
            }
        }
    },
    computed: {
        filteredCoaches() {
            const coaches = this.$store.getters['coaches/coaches'];
            return coaches.filter(it => {
                return this.filters.frontend && it.areas.includes('frontend') ||
                    this.filters.backend && it.areas.includes('backend') ||
                    this.filters.career && it.areas.includes('career')
            });
        },
        hasCoaches() {
            return this.$store.getters['coaches/hasCoaches'];
        }
    },
    methods: {
        updateFilters({ key, value }) {
            console.log('updating filters', key, value);
            
            this.filters = { ...this.filters, [key]: value };
            console.log(this.filters);
            
        }
    }
}

</script>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.controls {
    display: flex;
    justify-content: space-between;
}
</style>
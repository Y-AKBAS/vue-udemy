<template>
    <section>
        <BaseCard>
            <h2>Register as a coach now!</h2>
            <CoachForm @saveData="onSaveData"></CoachForm>
        </BaseCard>
    </section>
</template>

<script>
import { mapActions } from 'vuex';
import CoachForm from '../../components/coaches/CoachForm.vue';

export default {
    components: { CoachForm },
    methods: {
        ...mapActions({
            registerCoach: 'coaches/registerCoach'
        }),
        onSaveData(formData) {
            this.registerCoach(formData);
            this.$router.replace('/coaches')
        }
    }
}
</script>

<style scoped>
</style>
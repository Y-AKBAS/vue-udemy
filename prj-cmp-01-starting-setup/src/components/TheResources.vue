<template>
    <BaseCard>
        <BaseButton @click="setSelectedTab('learning-resource-list')">Resource List</BaseButton>
        <BaseButton @click="setSelectedTab('learning-resource-form')">Add Resource</BaseButton>
    </BaseCard>
    <component :is="selectedTab"></component>
</template>

<script>
import BaseButton from './BaseButton.vue';
import BaseCard from './BaseCard.vue';
import LearningResourceForm from './LearningResourceForm.vue';
import LearningResourceList from './LearningResourceList.vue';

export default {
    components: {
        LearningResourceForm,
        LearningResourceList,
        BaseButton,
        BaseCard
    },
    data() {
        return {
            selectedTab: 'learning-resource-list',
            resourceList: [
                {
                    title: 'Vue Docs',
                    description: 'Vue Offical Documentation',
                    link: 'https://vuejs.org/guide/introduction.html'
                }
            ]
        }
    },
    provide() {
        return {
            resources: this.resourceList
        }
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        }
    }
}

</script>
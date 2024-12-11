<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item v-for="member in members" :key="member.id" :name="member.fullName" :role="member.role"></user-item>
    </ul>
    <RouterLink to="/teams/t2">Go to team 2</RouterLink>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  props: ['teamId'],
  data() {
    return {
      teamName: '',
      members: []
    };
  },
  inject: ['users', 'teams'],
  methods: {
    loadMembers(teamId) {
      // this.$route.path // /teams/teamId etc.
      const selectedTeam = this.teams.find(team => team.id === teamId);
      const members = selectedTeam.members;
      const foundUsers = members.map(m => this.users.find(u => u.id === m))
      this.teamName = selectedTeam.name;
      this.members = foundUsers;
    }
  },
  created() {
    console.log("Query Params: ", this.$route.query);
    console.log("Current teamId: ", this.teamId);
    this.loadMembers(this.teamId);
  },
  watch: {
    teamId(newValue) {
      console.log('Got new value for route: ', newValue);
      this.loadMembers(newValue);
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
<template>
    <TransitionGroup tag="ul" name="user-list">
        <li v-for="user in users" :key="user">
            {{ user }}
            <button @click="removeUser(user)">X</button>
        </li>
    </TransitionGroup>
    <div>
        <input type="text" v-model="newUser">
        <button @click="addUser">Add new user</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newUser: '',
            users: ['Max', 'Manu', 'Julie', 'Angela', 'Michael']
        }
    },
    methods: {
        addUser() {
            if (this.newUser && !this.users.includes(this.newUser)) {
                this.users.unshift(this.newUser);
                this.newUser = '';
            }
        },
        removeUser(user) {
            this.users = this.users.filter(u => u !== user);
        }
    }
}

</script>

<style scoped>
ul {
    list-style: none;
    margin: 1rem 0;
    padding: 0;
}

li {
    border: 1px solid #ccc;
    padding: 1rem;
    text-align: center;
}

.user-list-enter-from {
    opacity: 0;
    transform: translateX(-30px);
}

.user-list-enter-active {
    transition: all 1s ease-out;
}

.user-list-leave-active {
    transition: all 1s ease-in;
    position: absolute;
}

.user-list-enter-to,
.user-list-leave-from {
    opacity: 1;
    transform: translateX(0);
}

.user-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.user-list-move {
    transition: transform 0.8s ease;
}
</style>
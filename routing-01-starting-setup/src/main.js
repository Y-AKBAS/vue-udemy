import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue'
import NotFound from './components/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/teams'
        },
        {
            name: 'teams',
            path: '/teams',
            components: {
                default: TeamsList,
                footer: TeamsFooter
            },
            // alias: '/' would also do the same as redirecting in the previous lines.
            children: [
                {
                    name: 'team-members',
                    path: ':teamId',
                    component: TeamMembers,
                    props: true
                },
            ]
        },
        {
            name: 'users',
            path: '/users',
            components: {
                default: UsersList,
                footer: UsersFooter
            }
        },
        { // This should come last so that it doesn't corrupt other paths. This catches all.
            path: '/:notFound(.*)', // By defining this at the end we catch all the routes which are not defined in our application.
            // Instead of :notFound() we can give any string it just doesn't matter.
            // redirect: '/teams' by doing so we can redirect to the /teams
            component: NotFound
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        // here to and from can also be retrieved by this.$route.
        // to is the page we are going to and from is the page we are coming from
        console.log('Called scroll behavior: ', to, from, savedPosition);
        // the following code ensures that if the user was on a point in the 
        // page then she stays on this position even if the page changes.
        // Otherwise user goes to the top of the page.
        if (savedPosition) {
            return savedPosition;
        }
        return { left: 0, top: 0 };
    }
})

const app = createApp(App)
app.use(router)
app.mount('#app');

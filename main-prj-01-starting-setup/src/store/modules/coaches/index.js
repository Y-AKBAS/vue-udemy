
export default {
    namespaced: true,
    state() {
        return {
            coaches: [
                {
                    id: 'c1',
                    firstName: 'Maximilian',
                    lastName: 'Schwarzmüller',
                    areas: ['frontend', 'backend', 'career'],
                    description:
                        "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                    hourlyRate: 30
                },
                {
                    id: 'c2',
                    firstName: 'Julie',
                    lastName: 'Jones',
                    areas: ['frontend', 'career'],
                    description:
                        'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                    hourlyRate: 30
                }
            ]
        };
    },
    mutations: {
        addCoach: (state, newCoach) => state.coaches.push(newCoach)
    },
    getters: {
        coaches: (state) => state.coaches,
        hasCoaches: (state) => state.coaches && state.coaches.length > 0
    },
    actions: {
        registerCoach(context, payload) {
            const newCoach = {
                id: new Date().toUTCString(),
                firstName: payload.first,
                lastName: payload.last,
                description: payload.desc,
                hourlyRate: payload.rate,
                areas: payload.areas
            }
            context.commit('addCoach', newCoach);
        }
    }
}
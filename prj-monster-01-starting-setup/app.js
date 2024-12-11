
const getRandomValue = (min, max) => (Math.floor(Math.random() * (max - min)) + min)

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            battleLogs: []
        }
    },
    watch: {
        playerHealth(value) {
            if (this.monsterHealth <= 0 && value <= 0) {
                this.winner = "draw";
            } else if (value <= 0) {
                this.winner = "monster";
            }
        },
        monsterHealth(value) {
            if (this.playerHealth <= 0 && value <= 0) {
                this.winner = "draw";
            } else if (value <= 0) {
                this.winner = "player";
            }
        }
    },
    computed: {
        monsterBarStyles() {
            const percentage = this.monsterHealth <= 0 ? 0 : this.monsterHealth;
            return { width: percentage + '%' };
        },
        playerBarStyles() {
            const percentage = this.playerHealth <= 0 ? 0 : this.playerHealth;
            return { width: percentage + '%' };
        },
        isSpecialAttackAllowed() {
            return this.currentRound % 3 !== 0;
        }
    },
    methods: {
        attackMonster() {
            this.currentRound = this.currentRound + 1;
            const damage = getRandomValue(5, 12);
            this.monsterHealth = this.monsterHealth - damage;
            this.addLog('player', 'attack', damage);
            this.attackPlayer();
        },
        attackPlayer() {
            const damage = getRandomValue(8, 15);
            this.playerHealth = this.playerHealth - damage;
            this.addLog('monster', 'attack', damage);
        },
        specialAttackMonster() {
            const damage = getRandomValue(12, 20);
            this.monsterHealth = this.monsterHealth - damage;
            this.addLog('player', 'attack', damage);
            this.attackPlayer();
            this.currentRound = this.currentRound + 1;
        },
        healPlayer() {
            const healValue = getRandomValue(5, 10);
            const targetHealth = healValue + this.playerHealth
            if (targetHealth > 100) {
                this.addLog('player', 'heal', 100 - this.playerHealth);
                this.playerHealth = 100;
            } else {
                this.addLog('player', 'heal', healValue);
                this.playerHealth = targetHealth;
            }
        },
        surrender() {
            this.winner = "monster";
        },
        addLog(who, what, value) {
            const message = {
                actor: who,
                action: what,
                actionValue: value
            }
            this.battleLogs.unshift(message);
        }
    }
});

app.mount("#game");
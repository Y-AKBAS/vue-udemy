<template>
  <div class="container">
    <ListData></ListData>
  </div>
  <div class="container">
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <Transition>
      <p v-if="paraIsVisible">This is only sometimes visible...</p>
    </Transition>
    <button @click="toggleParagraph">Toggle Paragraph</button>
  </div>
  <div class="container">
    <!-- normally it is not allowed to have multiple sibling elements inside a transtion
    but here we guarentee with the v-if that only one button is inserted into DOM. Therefore
    it is not a problem here. 
    -->
    <Transition name="fade-button" mode="out-in">
      <button @click="showUsers" v-if="!usersVisible">Show Users</button>
      <button @click="hideUsers" v-else>Hide Users</button>
    </Transition>
  </div>
  <base-modal @close="hideDialog" :isDialogOpen="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>

<script>
import ListData from './components/ListData.vue';

export default {
  components: {ListData },
  data() {
    return {
      dialogIsVisible: false,
      animatedBlock: false,
      paraIsVisible: false,
      usersVisible: false
    };
  },
  methods: {
    animateBlock() {
      this.animatedBlock = true;
    },
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    showUsers() {
      this.usersVisible = true;
    },
    hideUsers() {
      this.usersVisible = false;
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
  margin: 3px;
}

button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}

.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.3s ease-out; */
}

.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  /* transform: translateX(-150px); */
  animation: slide-fade 0.3s ease-out forwards;
}

.v-enter-from {
  /* opacity: 0;
  transform: translateY(-30px); */
}

.v-enter-active {
  /* transition: all 0.3s ease-out; */
  animation: slide-fade 0.3s ease-out;
}

.v-enter-to {
  /* opacity: 1;
  transform: translateY(0); */
}

.v-leave-from {
  /* opacity: 1;
  transform: translateY(0); */
}

.v-leave-active {
  animation: slide-fade 0.3s ease-in;
  /*transition: all 0.3s ease-in; */
}

.v-leave-to {
  /* opacity: 0;
  transform: translateY(30px); */
}

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}

@keyframes slide-fade {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>
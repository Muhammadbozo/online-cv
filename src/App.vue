<template>
  <div id="app">
    <navbar></navbar>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import index from "./components/index.vue";
import About from "./components/About.vue";
import Navbar from "./components/Navbar";

export default {
  components: {
    index,
    About,
    Navbar,
  },
};
</script>

<style>
.slide-enter-active,
.slide--leave-active {
  transition: opacity 2s, transform 2s;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateY(30%);
}
.moveUp-enter-active {
  animation: fadeIn 1s ease-in;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
.moveUp-leave-active {
  animation: moveUp 0.3s ease-in;
}
@keyframes moveUp {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-800px);
  }
}
</style>

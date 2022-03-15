<template>
  <div>
    <nav class="flex flex-row items-center h-20 bg-gray-900 justify-between">
      <router-link to="/" class="flex items-center flex-no-shrink text-white w-4/12 lg:w-3/12 mr-6">
        <img class="h-10 lg:block hidden" src="@/assets/locker-logo.svg" />
        <img class="h-10 lg:hidden block" src="@/assets/locker-logo-mobile.svg" />
      </router-link>

      <transition name="fadeFromTop">
        <div
          v-if="menuOpen || !isMobile"
          class="w-full lg:border-none border-b-2 border-locker_primary z-20 flex-grow lg:flex lg:relative absolute top-20 lg:top-0 lg:left-auto left-0 lg:items-center lg:w-6/12 lg:py-0 py-10 lg:bg-opacity-100 bg-opacity-95 bg-gray-900"
        >
          <div class="text-sm lg:flex-grow flex lg:flex-row flex-col font-semibold place-content-center text-center space-y-6 lg:space-y-0 lg:space-x-8 font-heading">
            <router-link v-on="isMobile ? { click: toggleMenu } : {}" :class="[$route.name === 'Explore' ? activeClass : inactiveClass]" to="/explore">Explore</router-link>
            <router-link v-on="isMobile ? { click: toggleMenu } : {}" :class="[$route.name === 'Create' ? activeClass : inactiveClass]" to="/create">Create Launch</router-link>
            <router-link v-on="isMobile ? { click: toggleMenu } : {}" :class="[$route.name === 'myLaunches' ? activeClass : inactiveClass]" to="/mylaunches">My Launches</router-link>
            <div class="flex flex-col lg:hidden space-y-6">
              <a class="text-white" href="https://1eth.tech/">Dashboard</a>
              <a class="text-white" href="https://locker.olympustoken.io/">Locker of Ananke</a>
              <a class="text-white" href="">Forge of Hephaestus</a>
              <div class="flex flex-col place-content-center items-center cursor-not-allowed">
                <a class="opacity-30 cursor-not-allowed" href="">Wheel of Kronos</a>
                <span class="text-2xs mt-2 font-semibold uppercase rounded-full px-3 bg-gray-700 text-gray-200">Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </transition>
      <div class="lg:w-3/12 w-8/12 flex justify-end items-center space-x-4">
        <Popper placement="bottom">
          <button v-wave class="hidden lg:flex h-10 items-center px-3 py-2 border border-locker_primary rounded-md text-locker_primary bg-locker_primary bg-opacity-10 hover:bg-opacity-20 transition-all duration-200">
            <span class="mr-2">dApps</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
          </button>
          <template v-if="!isMobile" #content="{ close }">
            <div class="text-sm mr-10 font-semibold text-white p-4 bg-gray-800 rounded-xl border-gray-700 border lg:flex-grow text-center space-x-8 flex flex-row">
              <a @click="close" class="flex flex-col group items-center" href="/">
                <img class="h-14 w-14 group-hover:shadow-locker_primary rounded-full transition-all duration-300" src="@/assets/locker.png" />
                <span class="mt-2 group-hover:text-locker_primary transition-colors duration-300">Locker of Ananke</span>
              </a>
            </div>
          </template>
        </Popper>

        <Button name="Connect" class="connectBtn w-full max-w-32" v-if="!$store.getters['wallet/isWalletConnected']" @click="$store.dispatch('wallet/connectWallet')" />
        <Button :name="$store.getters['wallet/addressPreviewLong']" class="connectBtn w-full max-w-32" @click="$store.commit('wallet/disconnectWallet')" v-else />

        <div class="block lg:hidden">
          <button @click="toggleMenu" class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
            <svg class="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import ButtonOne from "@/components/ButtonOne.vue";
import Popper from "vue3-popper";
export default {
  name: "NavBar",
  components: {
    ButtonOne,
    Popper,
  },
  data: function() {
    return {
      windowWidth: window.innerWidth,
      menuOpen: false,
      dappsOpen: false,
      activeClass: "text-locker_primary",
      inactiveClass: "hover:text-locker_primary transition-colors duration-200",
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    toggleDapps() {
      this.dappsOpen = !this.dappsOpen;
    },
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  },
  computed: {
    isMobile() {
      return this.windowWidth <= 1024;
    },
  },
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  position: relative;
  border-bottom: 3px;
  border-style: solid;
  border-top: 0 !important;
  border-image: linear-gradient(to left, #3345f5, #3bc9f5) 100% 1;
}
nav::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  right: 0;
  left: 0;
  top: 0;
  background: linear-gradient(to left, #3345f5, #3bc9f5);
  filter: blur(20px);
  z-index: -1;
}
</style>

<template>
  <nav class="navbar">
    <h3>OnlineBank</h3>
    <ul class="navbar-menu">
      <li>
        <router-link to="/">Request</router-link>
      </li>
      <li>
        <router-link to="/help">Help</router-link>
      </li>
      <li>
        <a href="#" @click.prevent="open">Message</a>
      </li>
      <li>
        <a href="#" @click.prevent="logout">Exit</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const router = useRouter();
const store = useStore();

const logout = () => {
  store.commit('auth/logout');
  router.push('/auth');
};
const open = () => {
  store.commit('openSidebar');
};
</script>

<style lang="scss" scoped></style>

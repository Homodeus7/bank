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
        <a href="#">Message</a>
      </li>
      <li>
        <a href="#" @click.prevent="logout">Exit</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  setup() {
    const router = useRouter();
    const store = useStore();

    return {
      logout: () => {
        store.commit("auth/logout");
        router.push("/auth");
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>

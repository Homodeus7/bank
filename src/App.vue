<template>
  <main-layout></main-layout>
  <auth-layout></auth-layout>
</template>

<script>
import MainLayout from "./layout/MainLayout.vue";
import AuthLayout from "./layout/AuthLayout.vue";
export default {
  setup() {},
  components: {
    MainLayout,
    AuthLayout,
  },
};
</script>

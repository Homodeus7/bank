<template>
  <the-navbar></the-navbar>
  <the-sidebar></the-sidebar>
  <div class="container with-nav">
    <app-message></app-message>
    <router-view />
  </div>
</template>

<script setup>
import TheNavbar from '@/components/TheNavbar.vue';
import AppMessage from '@/components/ui/AppMessage.vue';
import TheSidebar from '@/components/TheSidebar.vue';
</script>

<style lang="scss" scoped></style>

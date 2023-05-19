<template>
  <div class="breadcrumbs" v-if="back">
    <router-link to="/" class="text-white">Come back</router-link>
  </div>
  <div class="card">
    <h1 class="card-title">
      {{ title }}
      <slot name="header" />
    </h1>
    <slot />
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  back: {
    type: Boolean,
    default: false,
  },
});

document.title = `${props.title} | Bank Clones`;
</script>

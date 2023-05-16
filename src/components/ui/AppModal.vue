<template>
  <div class="modal-backdrop" @click="$emit('close')"></div>
  <div class="modal">
    <h3 v-if="title">{{ title }}</h3>

    <slot />
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { defineEmits } from 'vue';

const emits = defineEmits(['close']);

const props = defineProps({
  title: {
    type: String,
  },
});
</script>

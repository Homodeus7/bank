<template>
  <div class="question" @click="isOpen = !isOpen">
    <div class="question-title">
      {{ question.title }}
    </div>
    <div class="question-body" v-if="isOpen">{{ question.text }}</div>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';

const isOpen = ref(false);

const props = defineProps(['question']);
props;
</script>

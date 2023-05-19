<template>
  <div class="about">
    <app-page back title="Help"></app-page>
  </div>
</template>

<script setup>
import AppPage from '@/components/ui/AppPage.vue';

const questions = [
  {
    title: 'What is in this system?',
    text: 'The system is designed to generate incoming requests from customers.',
  },
  {
    title: 'How does authorization work in it?',
    text: 'Authorization is done through firebase.',
  },
];
</script>

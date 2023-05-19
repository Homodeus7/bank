<template>
  <div class="about">
    <app-page back title="Help">
      <question-item v-for="q in questions" :key="q" :question="q">
      </question-item>
    </app-page>
  </div>
</template>

<script setup>
import AppPage from '@/components/ui/AppPage.vue';
import QuestionItem from '@/components/questions/QuestionItem.vue';
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

<template>
  <div v-if="message" :class="['alert', message.type]">
    <p class="alert-title" v-if="title">{{ title }}</p>
    <p>{{ message.value }}</p>
    <span class="alert-close" @click="closeMessage">&times;</span>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const TITLE_MAP = {
  primary: 'Success',
  danger: 'Mistake',
  warning: 'Attention',
};

const closeMessage = () => store.commit('clearMessage');

const title = computed(() =>
  message.value ? TITLE_MAP[message.value.type] : ''
);

const message = computed(() => store.state.message);
</script>

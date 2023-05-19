<template>
  <span :class="['badge', className]">
    {{ text }}
  </span>
</template>

<script setup>
import { ref, watch } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
  type: {
    type: String,
    required: true,
    validator(value) {
      return ['active', 'cancelled', 'done', 'pending'].includes(value);
    },
  },
});

watch(props, (val) => {
  className.value = classesMap[val.type];
  text.value = textMap[val.type];
});

const classesMap = {
  active: 'primary',
  cancelled: 'danger',
  done: 'primary',
  pending: 'warning',
};
const textMap = {
  active: 'active',
  cancelled: 'cancelled',
  done: 'done',
  pending: 'pending',
};
const className = ref(classesMap[props.type]);
const text = ref(textMap[props.type]);
</script>

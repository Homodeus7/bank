<template>
  <div class="filter">
    <div class="form-control">
      <input v-model="name" type="text" placeholder="Search" />
    </div>
    <div class="form-control">
      <select v-model="status">
        <option disabled selected>Choose status</option>
        <option value="done">Done</option>
        <option value="cancelled">Cancelled</option>
        <option value="active">Active</option>
        <option value="pending">Pending</option>
      </select>
    </div>
    <button class="btn warning" v-if="isActive" @click="reset">
      Clear search
    </button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch, computed } from 'vue';

const emits = defineEmits(['update:modelValue']);
const props = defineProps(['modelValue']);
props;
const name = ref();
const status = ref();

watch([name, status], (values) => {
  emits('update:modelValue', {
    name: values[0],
    status: values[1],
  });
});

const isActive = computed(() => name.value || status.value);
const reset = () => {
  name.value = '';
  status.value = null;
};
</script>

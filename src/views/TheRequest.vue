<template>
  <app-loader v-if="loading"></app-loader>
  <app-page back v-else-if="request" title="Request">
    <p><strong>Account holder name</strong>: {{ request.name }}</p>
    <p><strong>Phone</strong>: {{ request.phone }}</p>
    <p><strong>Amount</strong>: {{ currency(request.amount) }}</p>
    <p><strong>Status</strong>: <app-status :type="request.status" /></p>

    <div class="form-control">
      <label for="status">Status</label>
      <select id="status" v-model="status">
        <option value="done">Done</option>
        <option value="cancelled">Cancelled</option>
        <option value="active">Active</option>
        <option value="pending">Pending</option>
      </select>
    </div>

    <button class="btn danger" @click="remove">Delete</button>
    <button class="btn" @click="update" v-if="hasChanges">Update</button>
  </app-page>
  <h3 v-else class="text-center text-white">
    Request {{ route.params.id }} none
  </h3>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import AppPage from '@/components/ui/AppPage.vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import AppLoader from '@/components/ui/AppLoader.vue';
import AppStatus from '@/components/ui/AppStatus.vue';
import { currency } from '@/utils/currency';

const route = useRoute();
const router = useRouter();

const store = useStore();
const status = ref();
const loading = ref(true);
const request = ref({});

const hasChanges = computed(() => request.value.status !== status.value);

const remove = async () => {
  await store.dispatch('request/remove', route.params.id);
  router.push('/');
};

const update = async () => {
  const data = { ...request.value, status: status.value, id: route.params.id };
  await store.dispatch('request/update', data);
  request.value.status = status.value;
};

onMounted(async () => {
  loading.value = true;
  request.value = await store.dispatch('request/loadById', route.params.id);
  status.value = request.value?.status;
  loading.value = false;
});
</script>

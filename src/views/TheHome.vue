<template>
  <app-loader v-if="loading"></app-loader>
  <app-page v-else title="List requests">
    <template #header>
      <button class="btn primary" @click="modal = true">Create</button>
    </template>
    <request-filter v-model="filter"></request-filter>
    <request-table :requests="requests"></request-table>

    <teleport to="body">
      <app-modal v-if="modal" title="Create request" @close="modal = false">
        <request-modal @created="modal = false"></request-modal>
      </app-modal>
    </teleport>
  </app-page>
</template>

<script setup>
import AppPage from '@/components/ui/AppPage.vue';
import RequestTable from '@/components/requests/RequestTable.vue';
import RequestModal from '@/components/requests/RequestModal.vue';
import AppModal from '@/components/ui/AppModal.vue';
import AppLoader from '@/components/ui/AppLoader.vue';
import RequestFilter from '@/components/requests/RequestFilter.vue';

import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const modal = ref(false);
const loading = ref(false);
const filter = ref({});

onMounted(async () => {
  loading.value = true;
  await store.dispatch('request/load');
  loading.value = false;
});

const requests = computed(() =>
  store.getters['request/requests']
    .filter((request) => {
      if (filter.value.name) {
        return request.name.toLowerCase().includes(filter.value.name);
      }
      return request;
    })
    .filter((request) => {
      if (filter.value.status) {
        return filter.value.status === request.status;
      }
      return request;
    })
);
</script>

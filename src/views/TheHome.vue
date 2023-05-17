<template>
  <app-page title="List requests">
    <template #header>
      <button class="btn primary" @click="modal = true">Create</button>
    </template>

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
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const modal = ref(false);

const requests = computed(() => store.getters['request/requests']);
</script>

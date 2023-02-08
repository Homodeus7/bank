<template>
  <app-page title="List of requests">
    <template #header>
      <button class="btn primary" @click="modal = true">Create</button>
    </template>
    <request-table :requests="[]"></request-table>

    <teleport to="body">
      <app-modal
        v-if="modal"
        title="Create request"
        @close="modal = false"
      ></app-modal>
    </teleport>
  </app-page>
</template>

<script>
import { ref } from "vue";
import AppPage from "@/components/ui/AppPage.vue";
import RequestTable from "../components/requests/RequestTable";
import AppModal from "@/components/ui/AppModal.vue";
export default {
  setup() {
    const modal = ref(false);

    return {
      modal,
    };
  },
  components: {
    AppPage,
    RequestTable,
    AppModal,
  },
};
</script>

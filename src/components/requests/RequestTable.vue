<template>
  <h4 v-if="requests.length === 0" class="text-center">No requests</h4>
  <table v-else class="table">
    <thead>
      <tr>
        <th>#</th>
        <th>Full name</th>
        <th>Phone number</th>
        <th>Amount</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(r, idx) in requests" :key="r.id">
        <td>{{ idx + 1 }}</td>
        <td>{{ r.name }}</td>
        <td>{{ r.phone }}</td>
        <td>{{ r.amount }}</td>
        <td>{{ r.status }}</td>
        <!-- <td>
          <router-link
            v-slot="{ navigate }"
            custom
            :to="{ name: 'Request', params: { id: r.id } }"
          >
            <button class="btn primary" @click="navigate">Open</button>
          </router-link>
        </td> -->
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ['requests'],
};
</script>

<style lang="scss" scoped></style>

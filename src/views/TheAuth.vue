<template>
  <form class="card" @submit.prevent="">
    <h1>Sign in</h1>

    <div>
      <label for="email">Email</label>
      <input type="email" />
    </div>

    <div>
      <label for="password">Password</label>
      <input type="password" />
    </div>

    <button class="btn primary" type="submit">Enter</button>
  </form>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>

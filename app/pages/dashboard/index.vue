<script lang="ts" setup>
const auth = useAuthStore();
</script>

<template>
  <h1>You are logged in! {{ auth.user?.name }}</h1>
</template>

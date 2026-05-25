<script setup lang="ts">
const route = useRoute();
const message = route.query.message as string;
</script>

<template>
  <UError :error="{ message }" redirect="/" />
</template>

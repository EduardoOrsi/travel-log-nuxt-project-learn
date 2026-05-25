<script setup lang="ts">
import appConfig from "~/app.config";

const authStore = useAuthStore();
</script>

<template>
  <UButton
    :trailing-icon="authStore.loading ? undefined : appConfig.ui.icons.github"
    :loading="authStore.loading"
    :loading-icon="appConfig.ui.icons.loading"
    :disabled="authStore.loading"
    @click="authStore.signIn"
  >
    Sign In
  </UButton>
</template>

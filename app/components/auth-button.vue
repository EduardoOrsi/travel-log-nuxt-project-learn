<script setup lang="ts">
import type { DropdownMenuItem } from "@nuxt/ui";

import appConfig from "~/app.config";

const authStore = useAuthStore();

const items = ref<DropdownMenuItem[][]>([
  [{
    label: "Logout",
    icon: "i-lucide-log-out",
    color: "error",
    onSelect: async () => { authStore.signOut(); },
  }],
]);
</script>

<template>
  <UDropdownMenu v-if="!authStore.loading && authStore.user" :items="items">
    <UUser
      target="_blank"
      :name="authStore.user.name"
      :avatar="{
        src: authStore.user.image!,
      }"
    />
  </UDropdownMenu>
  <UButton
    v-else
    :trailing-icon="authStore.loading ? undefined : appConfig.ui.icons.github"
    :loading="authStore.loading"
    :loading-icon="appConfig.ui.icons.loading"
    :disabled="authStore.loading"
    @click="authStore.signIn"
  >
    Sign In
  </UButton>
</template>

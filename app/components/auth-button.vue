<script setup lang="ts">
import type { DropdownMenuItem } from "@nuxt/ui";

import appConfig from "~/app.config";

const authStore = useAuthStore();

const signingIn = ref(false);

async function handleSignIn() {
  signingIn.value = true;
  await authStore.signIn();
  signingIn.value = false;
}

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
  <UDropdownMenu v-if="authStore.user" :items="items">
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
    :loading="signingIn"
    :loading-icon="appConfig.ui.icons.loading"
    :disabled="signingIn"
    :trailing-icon="signingIn ? undefined : appConfig.ui.icons.github"
    @click="handleSignIn"
  >
    Sign In
  </UButton>
</template>

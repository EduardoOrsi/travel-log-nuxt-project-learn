<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "About",
    to: "/",
    active: route.path.startsWith("/docs/getting-started"),
  },
  {
    label: "Travels",
    to: "/",
    active: route.path.startsWith("/docs/components"),
  },
]);
</script>

<template>
  <UHeader title="Travel Logs">
    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />
      <AuthButton />
    </template>
  </UHeader>
</template>

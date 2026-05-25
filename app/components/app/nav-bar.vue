<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "About",
    to: "/about",
    active: route.path.startsWith("/docs/getting-started"),
  },
  {
    label: "Travels",
    to: "/travels",
    active: route.path.startsWith("/docs/components"),
  },
]);
</script>

<template>
  <UHeader title="Travel Logs">
    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />
      <NuxtLink to="/register">
        <UButton variant="link" color="neutral">
          Register
        </UButton>
      </NuxtLink>
      <AuthButton />
    </template>
  </UHeader>
</template>

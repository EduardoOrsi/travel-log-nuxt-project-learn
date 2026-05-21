<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui";

import appConfig from "~/app.config";

const links = ref<ButtonProps[]>([
  { label: "Get Started", to: "/docs/getting-started", trailingIcon: appConfig.ui.icons.chevronRight, variant: "soft",
  },
]);
</script>

<template>
  <UPage>
    <UPageHeader>
      <UPageHero
        title="Travel log"
        description="Keep track of your travels and adventures. Add locations, photos, and notes to create a digital journal of your journeys."
        :links="links"
      />
    </UPageHeader>
    <UPageBody />
  </UPage>
</template>

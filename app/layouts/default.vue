<script setup lang="ts">
const authStore = useAuthStore();

const { data: sessionData } = await useAsyncData("auth-session", () => useAuthSSR().getSession().then(r => r.data));
authStore.setSession(sessionData.value ?? null);
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <AppNavBar />
    <main>
      <slot />
    </main>
  </div>
</template>

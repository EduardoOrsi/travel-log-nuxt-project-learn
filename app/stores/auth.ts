import { authClient } from "~~/lib/auth-client";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("useAuthStore", () => {
  const loading = ref(false);

  async function signIn() {
    loading.value = true;

    const { error } = await authClient.signIn.social({
      provider: "github",
      callbackURL: "/dashboard",
    });

    loading.value = false;

    if (error) {
      await navigateTo({ path: "/error", query: { error: error.message ?? "Erro ao fazer login com GitHub" } });
    }
  }

  return {
    loading,
    signIn,
  };
});

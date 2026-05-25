import { authClient } from "~~/lib/auth-client";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("useAuthStore", () => {
  const session = authClient.useSession();
  const user = computed(() => session.value.data?.user);

  const loading = computed(() => session.value.isPending || session.value.isRefetching);

  async function signIn() {
    const { error } = await authClient.signIn.social({
      provider: "github",
      callbackURL: "/dashboard",
    });

    if (error) {
      await navigateTo({ path: "/error", query: { error: error.message ?? "Erro ao fazer login com GitHub" } });
    }
  }

  async function signOut() {
    await authClient.signOut();
  }

  return {
    loading,
    signIn,
    user,
    signOut,
  };
});

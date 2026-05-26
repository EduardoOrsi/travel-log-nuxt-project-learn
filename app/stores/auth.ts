import { authClient } from "~~/lib/auth-client";
import { defineStore } from "pinia";

type SessionData = Awaited<ReturnType<typeof authClient.getSession>>["data"];

export const useAuthStore = defineStore("useAuthStore", () => {
  const session = ref<SessionData>(null);

  function setSession(data: SessionData) {
    session.value = data;
  }

  const user = computed(() => session.value?.user);

  async function signIn() {
    const { error } = await authClient.signIn.social({
      provider: "github",
      callbackURL: "/dashboard",
      errorCallbackURL: "/error",
    });

    if (error) {
      await navigateTo({ path: "/error", query: { error: error.message ?? "Erro ao fazer login com GitHub" } });
    }
  }

  async function signOut() {
    await authClient.signOut();
    session.value = null;
  }

  return {
    setSession,
    signIn,
    user,
    signOut,
  };
});

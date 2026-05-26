import { createAuthClient } from "better-auth/vue";

export function useAuthSSR() {
  const url = useRequestURL();
  const headers = import.meta.server
    ? useRequestHeaders(["cookie"])
    : undefined;

  return createAuthClient({
    baseURL: url.origin,
    fetchOptions: { headers },
  });
}

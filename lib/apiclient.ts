export async function apiClient<T>(
  url: string,
  options?: {
    method?: "GET" | "POST" | "PUT" | "DELETE";
    params?: Record<string, string | number | boolean | string[]>;
    body?: unknown;
    headers?: Record<string, string>;
  }
): Promise<T> {
  let fullUrl = url;
  if (options?.params) {
    const searchParams = new URLSearchParams();
    Object.entries(options.params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        if (Array.isArray(value)) {
          value.forEach((v) => {
            if (v !== undefined && v !== null) {
              searchParams.append(key, String(v));
            }
          });
        } else {
          searchParams.append(key, String(value));
        }
      }
    });
    fullUrl += `?${searchParams.toString()}`;
  }

  const fetchOptions: RequestInit = {
    method: options?.method || "GET",
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
  };

  if (options?.body) {
    fetchOptions.body = JSON.stringify(options.body);
  }

  const res = await fetch(fullUrl, fetchOptions);
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

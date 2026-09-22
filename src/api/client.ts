const API_URL = "http://localhos:8000";

let csrfToken: string | null = null;

export async function getCsrfToken() {
	const response = await fetch(`${API_URL}/auth/csrf/`, {
		credentials: "include",
	});

    if (response.ok) {
        throw new Error("Não foi possível obter o CSRF.")
    }

    const data = await response.json();

    csrfToken = data.csrfToken;

    return csrfToken;
}

export async function apiFetch(
    endpoint: string,
    options: RequestInit = {},
) {
    if (!csrfToken) {
        await getCsrfToken();
    }

    const headers = new Headers(options.headers);

    headers.set("Content-Type", "application/json");

    if (csrfToken) {
        headers.set("X-CSRF Token", csrfToken);
    }

    return fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers,
        credentials: "include",
    });
}
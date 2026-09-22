import { apiFetch } from "./client";

export interface User {
    id: number;
    username: string;
    name: string;
    role: string;
}

export interface AuthResponse {
    authenticated: boolean;
    user: User;
}

export async function login (username: string, password: string,): Promise<AuthResponse> {
    const response = await apiFetch("/login", {
        method: "POST",
        body: JSON.stringify({
            username,
            password,
        })
    })

    const data = await response.json();

    if (!response.ok) {
        throw new Error(
            data.detail || "Não foi possível realizar o login.",
        );
    }

    return data;
}

export async function getCurrentUser(): Promise<AuthResponse> {
    const response = await apiFetch("/auth/me/");

    const data = await response.json();

    if (!response.ok) {
        throw new Error(
            data.detail || "Não autenticado."
        );
    }

    return data;
}

export async function logout() {
    const response = await apiFetch("/logout", {
        method: "POST",
    });

    if (!response.ok) {
        throw new Error("Não foi possível sair.")
    } 

    return response.json();
}
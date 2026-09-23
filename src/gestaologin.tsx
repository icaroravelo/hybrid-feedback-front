import { useState } from "react";

import {
  getCurrentUser,
  login,
  logout,
  type User,
} from "./api/auth";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState<User | null>(null);

  const [loading, setLoading] = useState(false);
  const [checkingSession, setCheckingSession] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleLogin() {
    setError("");
    setSuccess("");

    if (!username.trim() || !password) {
      setError("Usuário e senha são obrigatórios.");
      return;
    }

    setLoading(true);

    try {
      const response = await login(
        username.trim(),
        password,
      );

      setUser(response.user);
      setPassword("");

      setSuccess("Login realizado com sucesso.");
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Não foi possível realizar o login.",
      );
    } finally {
      setLoading(false);
    }
  }

  async function handleCheckSession() {
    setError("");
    setSuccess("");
    setCheckingSession(true);

    try {
      const response = await getCurrentUser();

      setUser(response.user);
      setSuccess("Sessão encontrada.");
    } catch (error) {
      setUser(null);

      setError(
        error instanceof Error
          ? error.message
          : "Nenhuma sessão autenticada.",
      );
    } finally {
      setCheckingSession(false);
    }
  }

  async function handleLogout() {
    setError("");
    setSuccess("");

    try {
      await logout();

      setUser(null);
      setSuccess("Sessão encerrada.");
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Não foi possível sair.",
      );
    }
  }

  if (user) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-zinc-950 p-6 text-white">
        <section className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-2xl">
          <h1 className="text-2xl font-semibold">
            Usuário autenticado
          </h1>

          <div className="mt-6 space-y-3 rounded-xl bg-zinc-950 p-4">
            <div>
              <span className="text-sm text-zinc-500">
                Nome
              </span>

              <p className="text-zinc-100">
                {user.name}
              </p>
            </div>

            <div>
              <span className="text-sm text-zinc-500">
                Usuário
              </span>

              <p className="text-zinc-100">
                {user.username}
              </p>
            </div>

            <div>
              <span className="text-sm text-zinc-500">
                Perfil
              </span>

              <p className="text-zinc-100">
                {user.role}
              </p>
            </div>

            <div>
              <span className="text-sm text-zinc-500">
                ID
              </span>

              <p className="text-zinc-100">
                {user.id}
              </p>
            </div>
          </div>

          {success && (
            <p className="mt-4 text-sm text-green-400">
              {success}
            </p>
          )}

          {error && (
            <p className="mt-4 text-sm text-red-400">
              {error}
            </p>
          )}

          <button
            type="button"
            onClick={handleLogout}
            className="mt-6 w-full rounded-lg bg-white px-4 py-3 font-medium text-black transition hover:bg-zinc-200"
          >
            Sair
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 p-6 text-white">
      <section className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-2xl">
        <h1 className="text-2xl font-semibold">
          Login
        </h1>

        <p className="mt-2 text-sm text-zinc-400">
          Entre com suas credenciais.
        </p>

        <div className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="username"
              className="mb-2 block text-sm text-zinc-300"
            >
              Usuário
            </label>

            <input
              id="username"
              type="text"
              value={username}
              onChange={(event) =>
                setUsername(event.target.value)
              }
              autoComplete="username"
              placeholder="Digite seu usuário"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-zinc-400"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm text-zinc-300"
            >
              Senha
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
              autoComplete="current-password"
              placeholder="Digite sua senha"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-zinc-400"
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleLogin();
                }
              }}
            />
          </div>
        </div>

        {error && (
          <div className="mt-4 rounded-lg border border-red-900/50 bg-red-950/30 px-4 py-3 text-sm text-red-400">
            {error}
          </div>
        )}

        {success && (
          <div className="mt-4 rounded-lg border border-green-900/50 bg-green-950/30 px-4 py-3 text-sm text-green-400">
            {success}
          </div>
        )}

        <button
          type="button"
          onClick={handleLogin}
          disabled={loading}
          className="mt-6 w-full rounded-lg bg-white px-4 py-3 font-medium text-black transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Entrando..." : "Entrar"}
        </button>

        <button
          type="button"
          onClick={handleCheckSession}
          disabled={checkingSession}
          className="mt-3 w-full rounded-lg border border-zinc-700 px-4 py-3 text-sm text-zinc-300 transition hover:bg-zinc-800 disabled:opacity-50"
        >
          {checkingSession
            ? "Verificando..."
            : "Verificar sessão"}
        </button>
      </section>
    </main>
  );
}

export default App;
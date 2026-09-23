import "./App.css";
import { type FormEvent, useState } from "react";

import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../components/ui/card";

import { login } from "./api/auth";


function App() {

	const thisYear = new Date();
	const year = thisYear.getFullYear();


	/* ============================================================
	   LOGIN STATE
	============================================================ */

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const [error, setError] = useState("");
	const [usernameError, setUsernameError] = useState("");
	const [passwordError, setPasswordError] = useState("");

	const [loading, setLoading] = useState(false);


	/* ============================================================
	   LOGIN
	============================================================ */

	async function handleSubmit(
		event: FormEvent<HTMLFormElement>,
	) {

		event.preventDefault();

		setError("");
		setUsernameError("");
		setPasswordError("");

		let hasError = false;


		if (!username.trim()) {

			setUsernameError(
				"Informe seu usuário!",
			);

			hasError = true;
		}


		if (!password) {

			setPasswordError(
				"Informe sua senha.",
			);

			hasError = true;
		}


		if (hasError) {
			return;
		}


		setLoading(true);


		try {

			const response = await login(
				username.trim(),
				password,
			);


			/*
			 * Temporarily redirect using the
			 * existing Django routes.
			 */

			if (response.user.role === "ALUNO") {

				window.location.href = "/aluno";

				return;
			}


			if (response.user.role === "PABLO") {

				window.location.href = "/pablo";

				return;
			}


			if (response.user.role === "STAFF") {

				window.location.href = "/usuarios";

				return;
			}


			window.location.href = "/";

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


	return (

		<main
			className="
				flex
        h-screen
        w-full
        max-w-full
        flex-col
        overflow-hidden
        bg-zinc-950
        text-zinc-100
        antialiased
        lg:flex-row
			"
		>


			{/* ========================================================
			    LEFT SIDE — DESKTOP
			======================================================== */}

			<div
				className="
					relative
					hidden
					flex-1
					overflow-hidden
					lg:flex
				"
			>


				{/* BACKGROUND + DECORATIVE (camada fixa, nunca rola) */}

				<div className="pointer-events-none absolute inset-0 overflow-hidden">

					<div className="absolute inset-0 bg-zinc-950"></div>

					<div
						className="
							absolute
							-left-32
							-top-32
							h-96
							w-96
							rounded-full
							bg-violet-950/60
							blur-3xl
						"
					></div>

					<div
						className="
							absolute
							-bottom-10
							-right-10
							h-96
							w-96
							rounded-full
							bg-violet-950/50
							blur-3xl
						"
					></div>

				</div>


				{/* LEFT CONTENT (única camada que rola) */}

				<div
					className="
						relative
						z-10
						flex
						min-h-0
						min-w-0
						w-full
						flex-col
						justify-between
						overflow-y-auto
						login-scroll
						scrollbar-none
						[-ms-overflow-style:none]
						[&::-webkit-scrollbar]:hidden
						[&::-webkit-scrollbar]:w-0
						p-10
						xl:p-12
						2xl:p-16
					"
				>


					{/* BRAND */}

					<div>

						<p
							className="
								font-['Fira_Code']
								text-sm
								font-bold
								tracking-[0.25em]
								text-white
							"
						>
							Hybrid Producer Feedback
						</p>


						<p
							className="
								mt-2
								font-['Roboto']
								text-xs
								tracking-widest
								text-zinc-300
							"
						>
							Mentoria Musical
						</p>

					</div>


					{/* INSTRUCTIONS */}

					<div
						className="
							my-8
							min-h-0
							min-w-0
							flex-1
							overflow-x-hidden
						"
					>

						<div className="w-full min-w-0">


							{/* HEADER */}

							<div className="mb-8">

								<div
									className="
										mb-6
										flex
										h-12
										w-12
										items-center
										justify-center
										rounded-xl
										border
										border-violet-900
										bg-purple-900/50
										text-xl
										text-zinc-400
									"
								>
									♪
								</div>


								<h1
									className="
										font-['Roboto']
										text-3xl
										font-semibold
										tracking-wide
										text-white
										xl:text-4xl
									"
								>
									Como usar a plataforma
								</h1>


								<p
									className="
										mt-4
										max-w-2xl
										text-sm
										leading-7
										text-zinc-500
									"
								>
									Siga estas orientações para utilizar a plataforma e acompanhar
									o desenvolvimento dos seus projetos.
								</p>

							</div>


							{/* ==================================================
							    INSTRUCTION GRID
							================================================== */}

							<div
								className="
									grid
									w-full
									min-w-0
									grid-cols-1
									gap-4
									md:grid-cols-2
								"
							>


								{/* ==================================================
								    1 + 2
								================================================== */}

								<section className="min-w-0">

									<Card
										className="
											h-auto
											min-h-60
											bg-login-card
										"
									>

										<CardHeader>

											<CardTitle className="text-zinc-300">

												1 - Entre na sua conta

											</CardTitle>


											<CardDescription>

												<p
													className="
														mt-2
														text-sm
														leading-5
														text-zinc-500
													"
												>
													Acesse a plataforma utilizando seu usuário e senha.
												</p>

											</CardDescription>


											<CardTitle
												className="
													mt-5
													text-zinc-300
												"
											>
												2 - Altere sua senha
											</CardTitle>


											<CardDescription>

												<p
													className="
														mt-2
														text-sm
														leading-5
														text-zinc-500
													"
												>
													Acesse Configurações no painel.
												</p>


												<p
													className="
														mt-1
														text-sm
														leading-5
														text-zinc-500
													"
												>
													Na área de segurança, informe sua senha atual e
													depois digite a nova senha. Confirme a nova senha e
													salve as alterações.
												</p>

											</CardDescription>

										</CardHeader>

									</Card>

								</section>


								{/* ==================================================
								    3 + 4
								================================================== */}

								<section className="min-w-0">

									<Card
										className="
											h-auto
											min-h-60
											bg-login-card
										"
									>

										<CardHeader>

											<CardTitle className="text-zinc-300">

												3 - Crie um projeto

											</CardTitle>


											<CardDescription>

												<p
													className="
														mt-2
														text-sm
														leading-5
														text-zinc-500
													"
												>
													No painel, clique em Novo projeto e preencha as
													informações sobre o trabalho que deseja enviar para
													feedback.
												</p>

											</CardDescription>


											<CardTitle
												className="
													mt-5
													text-zinc-300
												"
											>
												4 - Envie a sua primeira versão
											</CardTitle>


											<CardDescription>

												<p
													className="
														mt-2
														text-sm
														leading-5
														text-zinc-500
													"
												>
													Dentro do projeto, clique em Enviar primeira versão,
													escolha o arquivo de áudio e, se quiser, escreva o que
													você gostaria que fosse analisado.
												</p>

											</CardDescription>

										</CardHeader>

									</Card>

								</section>


								{/* ==================================================
								    5 + 6
								================================================== */}

								<section className="min-w-0">

									<Card
										className="
											h-auto
											min-h-60
											bg-login-card
										"
									>

										<CardHeader>

											<CardTitle className="text-zinc-300">

												5 - Aguarde o feedback

											</CardTitle>


											<CardDescription>

												<p
													className="
														mt-2
														text-sm
														leading-5
														text-zinc-500
													"
												>
													Clique em Enviar material e aguarde a análise do seu
													trabalho.
												</p>

											</CardDescription>


											<CardTitle
												className="
													mt-5
													text-zinc-300
												"
											>
												6 - Receba o feedback e faça as alterações
											</CardTitle>


											<CardDescription>

												<p
													className="
														mt-2
														text-sm
														leading-5
														text-zinc-500
													"
												>
													Quando o feedback for recebido, analise as orientações
													e faça as alterações necessárias no seu trabalho.
												</p>


												<p
													className="
														mt-1
														text-sm
														leading-5
														text-zinc-500
													"
												>
													Cada projeto permite o envio de 5 comentários que são
													enviados diretamente para o Pablo, quando atingir esse
													limite, já não é mais possível enviar outros
													comentários dentro desse mesmo projeto/feedback.
												</p>

											</CardDescription>

										</CardHeader>

									</Card>

								</section>


								{/* ==================================================
								    7 + 8
								================================================== */}

								<section className="min-w-0">

									<Card
										className="
											h-auto
											min-h-60
											bg-login-card
										"
									>

										<CardHeader>

											<CardTitle className="text-zinc-300">

												7 - Envie uma nova versão

											</CardTitle>


											<CardDescription>

												<p
													className="
														mt-2
														text-sm
														leading-5
														text-zinc-500
													"
												>
													Quando o projeto for reaberto, clique em + Nova
													versão para enviar o novo áudio.
												</p>

											</CardDescription>


											<CardTitle
												className="
													mt-5
													text-zinc-300
												"
											>
												8 - Acompanhe seu histórico
											</CardTitle>


											<CardDescription>

												<p
													className="
														mt-2
														text-sm
														leading-5
														text-zinc-500
													"
												>
													A plataforma está otimizada para utilização em todos
													os dispositivos.
												</p>


												<p
													className="
														mt-1
														text-sm
														leading-5
														text-zinc-500
													"
												>
													Todas as versões e feedbacks ficam registrados no
													histórico do projeto, permitindo acompanhar toda a
													evolução do seu trabalho.
												</p>

											</CardDescription>

										</CardHeader>

									</Card>

								</section>


								{/* ==================================================
								    AVATAR
								================================================== */}

								<section
									className="
										mt-2
										mb-8
										w-full
										min-w-0
										rounded-2xl
										border
										border-zinc-800
										bg-zinc-900/30
										p-5
										md:col-span-2
									"
								>

									<h2
										className="
											text-sm
											font-semibold
											text-zinc-300
										"
									>
										Como adicionar ou alterar o avatar
									</h2>


									<p
										className="
											mt-3
											text-sm
											leading-7
											text-zinc-500
										"
									>
										No painel, acesse Configurações.
									</p>


									<p
										className="
											mt-2
											text-sm
											leading-7
											text-zinc-500
										"
									>
										Na área de perfil, escolha uma imagem para o seu avatar e
										salve as alterações.
									</p>

								</section>

							</div>

						</div>


						{/* FOOTER */}

						<p className="text-xs text-zinc-700">

							© {year} - Hybrid Producer Feedback

						</p>

					</div>

				</div>

			</div>


			{/* ========================================================
			    RIGHT SIDE
			======================================================== */}

			<div
				className="
					relative
					flex
					min-h-0
					h-screen
					w-full
					min-w-0
					max-w-full
					flex-col
					items-center
					justify-start
					overflow-hidden
					px-4
					py-8
					sm:px-6
					sm:py-12
					lg:w-130
					lg:shrink-0
					lg:justify-center
					lg:border-l
					lg:border-zinc-800/70
					lg:px-12
				"
			>


				{/* DECORATIVE ELEMENTS (camada fixa, nunca rola) */}

				<div className="pointer-events-none absolute inset-0 overflow-hidden">

					<div
						className="
							absolute
							-left-32
							-top-32
							h-96
							w-96
							max-w-[100vw]
							rounded-full
							bg-violet-950/20
							blur-3xl
						"
					></div>

					<div
						className="
							absolute
							h-96
							w-96
							max-w-[100vw]
							rounded-full
							bg-violet-950/20
							blur-3xl
						"
					></div>

				</div>


				{/* CONTEÚDO (única camada que rola) */}

				<div
					className="
						relative
						z-10
						w-full
						min-w-0
						max-w-sm
						min-h-0
						overflow-y-auto
						overflow-x-hidden
						login-scroll
						scrollbar-none
						[-ms-overflow-style:none]
						[&::-webkit-scrollbar]:hidden
						[&::-webkit-scrollbar]:w-0
					"
				>


					{/* ==================================================
					    MOBILE BRAND
					================================================== */}

					<div
						className="
							mb-12
							w-full
							min-w-0
							lg:hidden
						"
					>

						<p
							className="
								font-['Fira_Code']
								text-sm
								font-bold
								tracking-[0.25em]
								text-white
							"
						>
							Hybrid Producer Feedback
						</p>


						<p
							className="
								mt-2
								text-xs
								text-zinc-600
							"
						>
							Mentoria Musical
						</p>

					</div>


					{/* ==================================================
					    MOBILE INSTRUCTIONS
					================================================== */}

					<div
						className="
							mb-8
							w-full
							min-w-0
							lg:hidden
						"
					>


						{/* QUICK GUIDE */}

						<div
							className="
								mb-5
								w-full
								min-w-0
								rounded-2xl
								border
								border-[#285C70]/40
								bg-[#285C70]/10
								p-4
								sm:p-5
							"
						>

							<div
								className="
									flex
									min-w-0
									items-start
									gap-3
								"
							>

								<div
									className="
										flex
										h-9
										w-9
										shrink-0
										items-center
										justify-center
										rounded-xl
										border
										border-[#285C70]/40
										bg-[#285C70]/20
										text-[#9FC3D0]
									"
								>
									✓
								</div>


								<div className="min-w-0">

									<p
										className="
											text-[10px]
											font-semibold
											uppercase
											tracking-[0.18em]
											text-zinc-300
										"
									>
										Guia rápido
									</p>


									<h3
										className="
											mt-1
											text-base
											font-semibold
											text-white
										"
									>
										Como usar a plataforma
									</h3>


									<p
										className="
											mt-2
											text-xs
											leading-5
											text-zinc-400
										"
									>
										A plataforma está otimizada para utilização em vários
										dispositivos. Você pode realizar as principais ações
										diretamente pelo celular ou pelo tablet.
									</p>

								</div>

							</div>

						</div>


						{/* MOBILE CARDS */}

						<div
							className="
								grid
								w-full
								min-w-0
								gap-3
								sm:grid-cols-2
							"
						>


							{/* 1 + 2 */}

							<div
								className="
									min-w-0
									rounded-2xl
									border
									border-[#285C70]/40
									bg-[#285C70]/10
								"
							>

								<div
									className="
										flex
										items-center
										gap-2
										p-2
									"
								>

									<span
										className="
											text-[10px]
											font-semibold
											tracking-[0.15em]
											text-violet-400
										"
									>
										01
									</span>


									<span
										className="
											h-px
											min-w-0
											flex-1
											bg-zinc-800
										"
									></span>


									<span
										className="
											text-[10px]
											font-semibold
											tracking-[0.15em]
											text-violet-400
										"
									>
										02
									</span>

								</div>


								<div className="mt-4 px-3">

									<h4
										className="
											text-sm
											font-semibold
											text-zinc-200
										"
									>
										1 - Entre na sua conta
									</h4>


									<p
										className="
											mt-2
											text-xs
											leading-5
											text-zinc-500
										"
									>
										Acesse a plataforma utilizando seu e-mail e senha.
									</p>

								</div>


								<div className="mt-2 px-3 py-3">

									<h4
										className="
											text-sm
											font-semibold
											text-zinc-200
										"
									>
										2 - Altere sua senha
									</h4>


									<p
										className="
											mt-2
											text-xs
											leading-5
											text-zinc-500
										"
									>
										Acesse Configurações no painel.
									</p>


									<p
										className="
											mt-1
											text-xs
											leading-5
											text-zinc-500
										"
									>
										Na área de segurança, informe sua senha atual e depois
										digite a nova senha. Confirme a nova senha e salve as
										alterações.
									</p>

								</div>

							</div>


							{/* 3 + 4 */}

							<div
								className="
									min-w-0
									rounded-2xl
									border
									border-[#285C70]/40
									bg-[#285C70]/10
								"
							>

								<div
									className="
										flex
										items-center
										gap-2
										p-2
									"
								>

									<span
										className="
											text-[10px]
											font-semibold
											tracking-[0.15em]
											text-violet-400
										"
									>
										03
									</span>


									<span
										className="
											h-px
											min-w-0
											flex-1
											bg-zinc-800
										"
									></span>


									<span
										className="
											text-[10px]
											font-semibold
											tracking-[0.15em]
											text-violet-400
										"
									>
										04
									</span>

								</div>


								<div className="mt-4 px-3">

									<h4
										className="
											text-sm
											font-semibold
											text-zinc-200
										"
									>
										3 - Crie um projeto
									</h4>


									<p
										className="
											mt-2
											text-xs
											leading-5
											text-zinc-500
										"
									>
										No painel, clique em Novo projeto e preencha as
										informações sobre o trabalho que deseja enviar para
										feedback.
									</p>

								</div>


								<div className="mt-2 px-3 py-3">

									<h4
										className="
											text-sm
											font-semibold
											text-zinc-200
										"
									>
										4 - Envie a sua primeira versão
									</h4>


									<p
										className="
											mt-2
											text-xs
											leading-5
											text-zinc-500
										"
									>
										Dentro do projeto, clique em Enviar primeira versão,
										escolha o arquivo de áudio e, se quiser, escreva o que
										você gostaria que fosse analisado.
									</p>

								</div>

							</div>


							{/* 5 + 6 */}

							<div
								className="
									min-w-0
									rounded-2xl
									border
									border-[#285C70]/40
									bg-[#285C70]/10
								"
							>

								<div
									className="
										flex
										items-center
										gap-2
										p-2
									"
								>

									<span
										className="
											text-[10px]
											font-semibold
											tracking-[0.15em]
											text-violet-400
										"
									>
										05
									</span>


									<span
										className="
											h-px
											min-w-0
											flex-1
											bg-zinc-800
										"
									></span>


									<span
										className="
											text-[10px]
											font-semibold
											tracking-[0.15em]
											text-violet-400
										"
									>
										06
									</span>

								</div>


								<div className="mt-4 px-3">

									<h4
										className="
											text-sm
											font-semibold
											text-zinc-200
										"
									>
										5 - Aguarde o feedback
									</h4>


									<p
										className="
											mt-2
											text-xs
											leading-5
											text-zinc-500
										"
									>
										Clique em Enviar material e aguarde a análise do seu
										trabalho.
									</p>

								</div>


								<div className="mt-2 px-3 py-3">

									<h4
										className="
											text-sm
											font-semibold
											text-zinc-200
										"
									>
										6 - Receba o feedback e faça alterações
									</h4>


									<p
										className="
											mt-2
											text-xs
											leading-5
											text-zinc-500
										"
									>
										Quando o feedback for recebido, analise as orientações e
										faça as alterações necessárias no seu trabalho.
									</p>

								</div>

							</div>


							{/* 7 + 8 */}

							<div
								className="
									min-w-0
									rounded-2xl
									border
									border-[#285C70]/40
									bg-[#285C70]/10
								"
							>

								<div
									className="
										flex
										items-center
										gap-2
										p-2
									"
								>

									<span
										className="
											text-[10px]
											font-semibold
											tracking-[0.15em]
											text-violet-400
										"
									>
										07
									</span>


									<span
										className="
											h-px
											min-w-0
											flex-1
											bg-zinc-800
										"
									></span>


									<span
										className="
											text-[10px]
											font-semibold
											tracking-[0.15em]
											text-violet-400
										"
									>
										08
									</span>

								</div>


								<div className="mt-4 px-3">

									<h4
										className="
											text-sm
											font-semibold
											text-zinc-200
										"
									>
										7 - Envie uma nova versão
									</h4>


									<p
										className="
											mt-2
											text-xs
											leading-5
											text-zinc-500
										"
									>
										Quando o projeto for reaberto, clique em + Nova versão
										para enviar o novo áudio.
									</p>

								</div>


								<div className="mt-2 px-3 py-3">

									<h4
										className="
											text-sm
											font-semibold
											text-zinc-200
										"
									>
										8 - Acompanhe seu histórico
									</h4>


									<p
										className="
											mt-2
											text-xs
											leading-5
											text-zinc-500
										"
									>
										A plataforma está otimizada para a utilização em todos os
										dispositivos.
									</p>


									<p
										className="
											mt-1
											text-xs
											leading-5
											text-zinc-500
										"
									>
										Todas as versões e feedbacks ficam registrados no histórico
										do projeto, permitindo acompanhar toda a evolução do seu
										trabalho.
									</p>

								</div>

							</div>

						</div>


						{/* AVATAR */}

						<div
							className="
								mt-4
								w-full
								min-w-0
								rounded-2xl
								border
								border-[#285C70]/30
							"
						>

							<p
								className="
									p-3
									text-[10px]
									font-semibold
									uppercase
									tracking-[0.15em]
									text-zinc-400
								"
							>
								Como adicionar ou alterar o seu avatar.
							</p>


							<p
								className="
									px-3
									text-xs
									leading-5
									text-zinc-500
								"
							>
								No painel, acesse Configurações.
							</p>


							<p
								className="
									px-3
									pb-3
									text-xs
									leading-5
									text-zinc-500
								"
							>
								Na área de perfil, escolha uma imagem para o seu avatar e
								salve as alterações.
							</p>

						</div>

					</div>


					{/* ==================================================
					    LOGIN HEADER
					================================================== */}

					<div className="mb-8">

						<h2
							className="
								text-2xl
								font-semibold
								tracking-tight
								text-white
							"
						>
							Bem-vindo(a) de volta!
						</h2>


						<p
							className="
								mt-2
								text-sm
								text-zinc-600
							"
						>
							Entre na sua conta para continuar.
						</p>

					</div>


					{/* ==================================================
					    LOGIN FORM
					================================================== */}

					<form
						onSubmit={handleSubmit}
						className="
							w-full
							min-w-0
							space-y-5
						"
					>


						{/* NON FIELD ERRORS */}

						{error && (

							<div
								className="
									rounded-xl
									border
									border-red-400/20
									bg-red-400/10
									px-4
									py-3
								"
							>

								<p
									className="
										text-xs
										leading-5
										text-red-400
									"
								>
									{error}
								</p>

							</div>

						)}


						{/* USERNAME */}

						<div className="min-w-0">

							<label
								htmlFor="id_username"
								className="
									mb-2
									block
									text-xs
									font-medium
									text-zinc-400
								"
							>
								Usuário
							</label>


							<input
								type="text"
								name="username"
								id="id_username"
								autoComplete="username"
								required
								value={username}
								onChange={(event) => {

									setUsername(
										event.target.value,
									);

									setUsernameError("");
									setError("");

								}}
								placeholder="Digite seu usuário"
								className="
									box-border
									h-12
									w-full
									max-w-full
									rounded-xl
									border
									border-zinc-800
									bg-zinc-900/50
									px-4
									text-sm
									text-zinc-100
									outline-none
									transition
									placeholder:text-zinc-700
									focus:border-zinc-600
									focus:bg-zinc-900
								"
							/>


							{usernameError && (

								<div className="mt-2">

									<p
										className="
											text-xs
											text-red-400
										"
									>
										{usernameError}
									</p>

								</div>

							)}

						</div>


						{/* PASSWORD */}

						<div className="min-w-0">

							<label
								htmlFor="id_password"
								className="
									mb-2
									block
									text-xs
									font-medium
									text-zinc-400
								"
							>
								Senha
							</label>


							<input
								type="password"
								name="password"
								id="id_password"
								autoComplete="current-password"
								required
								value={password}
								onChange={(event) => {

									setPassword(
										event.target.value,
									);

									setPasswordError("");
									setError("");

								}}
								placeholder="Digite sua senha"
								className="
									box-border
									h-12
									w-full
									max-w-full
									rounded-xl
									border
									border-zinc-800
									bg-zinc-900/50
									px-4
									text-sm
									text-zinc-100
									outline-none
									transition
									placeholder:text-zinc-700
									focus:border-zinc-600
									focus:bg-zinc-900
								"
							/>


							{passwordError && (

								<div className="mt-2">

									<p
										className="
											text-xs
											text-red-400
										"
									>
										{passwordError}
									</p>

								</div>

							)}

						</div>


						{/* SUBMIT */}

						<button
							type="submit"
							disabled={loading}
							className="
								mt-2
								flex
								h-12
								w-full
								max-w-full
								items-center
								justify-center
								rounded-xl
								bg-white
								text-sm
								font-semibold
								text-zinc-950
								transition
								hover:bg-zinc-200
								active:scale-[0.99]
								disabled:cursor-not-allowed
								disabled:opacity-60
							"
						>

							{loading
								? "Acessando..."
								: "Entrar"}

						</button>

					</form>


					{/* ==================================================
					    IMPORTANT INFORMATION
					================================================== */}

					<div
						className="
							mt-6
							mb-6
							w-full
							min-w-0
							rounded-2xl
							border
							border-[#285C70]/30
							bg-linear-to-br
							from-[#224D5F]/45
							via-[#255548]/25
							to-zinc-900/50
							p-4
							sm:p-5
						"
						style={{
							background:
								"linear-gradient(135deg, rgba(40,92,112,.32) 0%, rgba(31,70,86,.20) 55%, rgba(20,25,27,.55) 100%)",
							borderColor:
								"rgba(40,92,112,.55)",
						}}
					>

						<h3
							className="
								mb-5
								text-base
								font-semibold
								tracking-tight
								text-white
							"
						>
							Informações importantes
						</h3>


						<div className="space-y-5">


							<div>

								<h4
									className="
										text-sm
										font-semibold
										text-zinc-300
									"
								>
									Comentários
								</h4>


								<p
									className="
										mt-2
										text-xs
										leading-5
										text-zinc-500
									"
								>
									Cada projeto permite o envio de até 5 comentários para o
									Pablo. Eles podem ser utilizados como resposta ao feedback
									recebido ou para tirar dúvidas relacionadas ao tema do
									feedback.
								</p>

							</div>


							<div>

								<h4
									className="
										text-sm
										font-semibold
										text-zinc-300
									"
								>
									Versões
								</h4>


								<p
									className="
										mt-2
										text-xs
										leading-5
										text-zinc-500
									"
								>
									Cada projeto permite o envio de um número ilimitado de
									versões. Cada arquivo de áudio enviado deve ter, no máximo,
									150 MB.
								</p>

							</div>


							<div>

								<h4
									className="
										text-sm
										font-semibold
										text-zinc-300
									"
								>
									Espectrômetro e equalizador
								</h4>


								<p
									className="
										mt-2
										text-xs
										leading-5
										text-zinc-500
									"
								>
									Durante a reprodução do áudio, é possível alternar entre o
									espectrômetro e o equalizador. Isso permite acompanhar as
									frequências do áudio ou realizar ajustes de frequência em
									tempo real.
								</p>


								<p
									className="
										mt-2
										text-xs
										leading-5
										text-zinc-500
									"
								>
									Os ajustes do equalizador afetam apenas a reprodução do
									áudio dentro da plataforma e não modificam o arquivo
									original.
								</p>

							</div>


							<div>

								<h4
									className="
										text-sm
										font-semibold
										text-zinc-300
									"
								>
									Encerramento do feedback
								</h4>


								<p
									className="
										mt-2
										text-xs
										leading-5
										text-zinc-500
									"
								>
									Após o feedback ser encerrado pelo Pablo, não será mais
									possível enviar novas versões ou comentários naquele projeto.
								</p>

							</div>

						</div>

					</div>


					{/* ==================================================
					    SECURITY MESSAGE
					================================================== */}

					<div
						className="
							mt-8
							flex
							min-w-0
							items-start
							gap-3
							border-t
							border-zinc-800/70
							pt-6
						"
					>

						<div
							className="
								mt-0.5
								flex
								h-7
								w-7
								shrink-0
								items-center
								justify-center
								rounded-lg
								bg-zinc-900
								text-xs
								text-zinc-600
							"
						>
							✓
						</div>


						<p
							className="
								min-w-0
								text-[11px]
								leading-5
								text-zinc-600
							"
						>
							Seus projetos e materiais são acessíveis somente aos usuários
							autorizados da mentoria.
						</p>

					</div>

				</div>

			</div>

		</main>
	);
}


export default App;
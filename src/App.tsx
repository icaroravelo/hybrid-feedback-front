import "./App.css";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardPanel,
	CardTitle,
} from "../components/ui/card";

function App() {
  var thisYear = new Date()

  var year = thisYear.getFullYear()

	return (
		<main className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
			{/* LEFT SIDE */}
      <div className="relative hidden flex-1 overflow-hidden lg:flex">
			  {/* BACKGROUND */}
        <div className="absolute inset-0 bg-zinc-950"></div>
        
			  {/* DECORATIVE ELEMENTS */}
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-violet-950/60 blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-violet-950/50 blur-3xl"></div>

        <div className="relaive z-10 flex w-full flex-col justify-between p-12 xl:p-16">
          	{/* BRAND */}

          <div>
            <p className="text-s font-bold tracking-[0.25em] text-white font-['Fira_Code']">
              Hybrid Producer - Feedbacks
            </p>
            <p className="mt-2 text-xs text-zinc-300 tracking-widest font-[roboto]">
              Mentoria Musical
            </p>
          </div>

          	{/* INSTRUCTIONS */}

            <div className="my-10 min-h-10 flex-1 overfllow-y-auto pr-8">
              <div className="w-full">
          	    
                {/* HEADER */}

                <div className="mb-10">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-violet-900 bg-purple-900/50 text-xl text-zinc-400">
                    ♪
                  </div>

                  <h1 className="text-3xl font-semibold tracking-wide text-white xl:text-4xl mt-10 font-roboto">
                    Como usar a plataforma
                  </h1>

                  <p className="mt-4 text-sm leading-7 text-zinc-500">
                    Siga estas orientações para utilizar a plataforma e acompanhar o desenvolvimento dos seus projetos.
                  </p>

                </div>


                <div className="grid w-ful gap-4 md:grid-cols-2">
                  {/* 1 + 2 */}
                  <section>
                    <Card className="bg-login-card h-64">
                    <CardHeader>
                      <CardTitle className="text-zinc-300">
                        1 - Entre na sua conta
                      </CardTitle>
                      <CardDescription>
                        <p className="mt-2 text-sm leading-5 text-zinc-500">
                          Acesse a plataforma utilizando seu usuário e senha.
                        </p>
                      </CardDescription>
                      
                      <CardTitle className="text-zinc-300 mt-2">
                        2 - Altere a sua senha
                      </CardTitle>
                      <CardDescription>
                        <p className="mt-2 text-sm leading-5 text-zinc-500">
                            Acesse Configurações no painel.
                        </p>

                        <p className="mt-1 text-sm leading-5 text-zinc-500">
                          Na área de segurança, informe sua senha atual e depois digite
                          a nova senha. Confirme a nova senha e salve as alterações.
                        </p>
                      </CardDescription>
                    </CardHeader>
                    </Card>
                  </section>

                  {/* 3 + 4 */}
                  <section>
                    <Card className="bg-login-card h-64">
                      <CardHeader>
                        <CardTitle className="text-zinc-300">
                          3 - Crie um projeto
                        </CardTitle>
                        <CardDescription>
                          <p className="mt-2 text-sm leading-5 text-zinc-500">
                            No painel, clique em Novo projeto e preencha as informações
                            sobre o trabalho que deseja enviar para feedback.
                          </p>
                        </CardDescription>
                        
                        <CardTitle className="text-zinc-300 mt-2">
                          4 - Envie a sua primeira versão
                        </CardTitle>
                        <CardDescription>
                          <p className="mt-2 text-sm leading-5 text-zinc-500">
                            Dentro do projeto, clique em Enviar primeira versão, escolha
                            o arquivo de áudio e, se quiser, escreva o que você gostaria
                            que fosse analisado.
                          </p>

                          <p className="mt-1 text-sm leading-5 text-zinc-500">
                            Na área de segurança, informe sua senha atual e depois digite
                            a nova senha. Confirme a nova senha e salve as alterações.
                          </p>
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </section>

                  {/* 5 + 6 */}
                  <section>
                    <Card className="bg-login-card h-64">
                      <CardHeader>
                        <CardTitle className="text-zinc-300">
                          5 - Aguarde o feedback
                        </CardTitle>
                        <CardDescription>
                          <p className="mt-2 text-sm leading-5 text-zinc-500">
                            Clique em Enviar material e aguarde a análise do seu trabalho.
                          </p>
                        </CardDescription>
                        
                        <CardTitle className="text-zinc-300 mt-2">
                          6 - Receba o feedback e faça as alterações
                        </CardTitle>
                        <CardDescription>
                          <p className="mt-2 text-sm leading-5 text-zinc-500">
                            Quando o feedback for recebido, analise as orientações e faça
                            as alterações necessárias no seu trabalho.
                          </p>

                          <p className="mt-1 text-sm leading-5 text-zinc-500">
                            Cada projeto permite o envio de 5 comentários que são enviados diretamente para o Pablo, 
                            quando atingir esse limite, já não é mais possível enviar outros comentários dentro desse mesmo projeto/feedback.
                          </p>
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </section>

                  {/* 7 + 8 */}
                  <section>
                    <Card className="bg-login-card h-64">
                      <CardHeader>
                        <CardTitle className="text-zinc-300">
                          7 - Envie uma nova versão
                        </CardTitle>
                        <CardDescription>
                          <p className="mt-2 text-sm leading-5 text-zinc-500">
                            Quando o projeto for reaberto, clique em + Nova versão para
                            enviar o novo áudio.
                          </p>
                        </CardDescription>
                        
                        <CardTitle className="text-zinc-300 mt-2">
                          8 - Acompanhe seu histórico
                        </CardTitle>
                        <CardDescription>
                          <p className="mt-2 text-sm leading-5 text-zinc-500">
                            A plataforma está otimizada para utilização no modo mobile (celular).
                          </p>

                          <p className="mt-1 text-sm leading-5 text-zinc-500">
                            Todas as versões e feedbacks ficam registrados no histórico
                            do projeto, permitindo acompanhar toda a evolução do seu trabalho.
                          </p>
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </section>

                  {/* AVATAR */}
                  <section className="mt-6 mb-10 rounded-2xl border p-5 w-[73em]">
                    <h2 className="text-sm font-semibold text-zinc-300">
                      Como adicionar ou alterar o avatar
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-zinc-500">
                      No painel, acesse Configurações;
                    </p>

                    <p className="mt-2 text-sm leading-7 text-zinc-500">
                      Na área de perfil, escolha uma imagem para o seu avatar e salve as alterações.
                    </p>
                  </section>
                </div>
              </div>

              {/* FOOTER */}
              <p>
                © {year} - Hybrid Producer Feedback
              </p>
            </div>          
        </div>

        
      </div>
      
      {/* RIGHT SIDE */}
      <div className="flex w-full items-center justify-center px-6 py-12 lg:w-[520px] lg:shrink-0 lg:border-l lg:border-zinc-800/70 lg:px-12" >
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-violet-950/20 blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-violet-950/20 blur-3xl"></div>

        <div>
          {/* MOBILE BRAND */}

          <div className="mb-12 lg:hidden">
            <p className="text-sm font-bold tracking-[0.25em] text-white font-['Fira_Code']">
              Hybrid Producer Feedback
            </p>

            <p className="mt-2 text-xs text-zinc-600">
              Mentoria Musical
            </p>
          </div>

          {/* MOBILE INSTRUCTIONS */}
          <div className="mb-8 lg:hidden">
            <div className="mb-5 rounded-2xl border border-[#285C70]/40 bg-[#285C70]/10 p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#285C70]/40 [#285C70]/20 text-[#9FC3D0]">
                  ✓
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-300">
                    Guia rápido
                  </p>

                  <h3 className="mt-1 text-base font-semibold text-white"> 
                    Como usar a plataforma
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-zinc-400">
                    A plataforma está otimizada para utilização em vários dispositivos.
                    Você pode realizar as principais ações diretamente pelo celular ou pelo tablet.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {/* 1 + 2 */}
              <div className="rounded-2xl border border-[#285C70]/40 bg-[#285C70]/10">
                <div className="flex items-center gap-2 p-2">
                  <span className="text-[10px] font-semibold tracking-[0.15em] text-violet-400">01</span>
                  <span className="h-px flex-1 bg-zinc-800"></span>
                  <span className="text-[10px] font-semibold tracking-[0.15em] text-violet-400">02</span>
                </div>
                
                <div className="mt-4 px-2">
                  <h4 className="text-sm font-semibold text-zinc-200">1 - Entre na sua conta</h4>
                  <p className="mt-2 text-xs leading-5 text-zinc-500">
                    Acesse a plataforma utilizando seu e-mail e senha.
                  </p>
                </div>

                <div className="mt-2 px-2 py-3">
                  <h4 className="text-sm font-semibold text-zinc-200">2 - Altere sua senha</h4>
                  <p className="mt-2 text-xs leading-5 text-zinc-500">
                    Acesse Configurações no painel.
                  </p>
                  <p className="text-xs leading-5 text-zinc-500">
                    Na área de segurança, informe sua senha atual e depois digite a nova senha.
                    Confirme a nova senha e salve as alterações.
                  </p>
                </div>
              </div>

              {/* 3 + 4 */}
              <div className="rounded-2xl border border-[#285C70]/40 bg-[#285C70]/10">
                <div className="flex items-center gap-2 p-2">
                  <span className="text-[10px] font-semibold tracking-[0.15em] text-violet-400">03</span>
                  <span className="h-px flex-1 bg-zinc-800"></span>
                  <span className="text-[10px] font-semibold tracking-[0.15em] text-violet-400">04</span>
                </div>
                
                <div className="mt-4 px-2">
                  <h4 className="text-sm font-semibold text-zinc-200">3 - Crie um projeto</h4>
                  <p className="mt-2 text-xs leading-5 text-zinc-500">
                    Acesse a plataforma utilizando seu e-mail e senha.
                  </p>
                </div>

                <div className="mt-2 px-2 py-3">
                  <h4 className="text-sm font-semibold text-zinc-200">2 - Altere sua senha</h4>
                  <p className="mt-2 text-xs leading-5 text-zinc-500">
                    Acesse Configurações no painel.
                  </p>
                  <p className="text-xs leading-5 text-zinc-500">
                    Na área de segurança, informe sua senha atual e depois digite a nova senha.
                    Confirme a nova senha e salve as alterações.
                  </p>
                </div>
              </div>

              {/* 5 + 6 */}
              <div className="rounded-2xl border border-[#285C70]/40 bg-[#285C70]/10">
                <div className="flex items-center gap-2 p-2">
                  <span className="text-[10px] font-semibold tracking-[0.15em] text-violet-400">05</span>
                  <span className="h-px flex-1 bg-zinc-800"></span>
                  <span className="text-[10px] font-semibold tracking-[0.15em] text-violet-400">06</span>
                </div>
                
                <div className="mt-4 px-2">
                  <h4 className="text-sm font-semibold text-zinc-200">5 - Aguarde o feedback</h4>
                  <p className="mt-2 text-xs leading-5 text-zinc-500">
                    Clique em Enviar material e aguarde a análise do seu trabalho.
                  </p>
                </div>

                <div className="mt-2 px-2 py-3">
                  <h4 className="text-sm font-semibold text-zinc-200">6 - Receba o feedback e faça alterações</h4>
                  <p className="mt-2 text-xs leading-5 text-zinc-500">
                    Quando o feedback for recebido, analise as orientações e faça as alterações necessárias no seu trabalho.
                  </p>
                </div>
              </div>

              {/* 7 + 8 */}
              <div className="rounded-2xl border border-[#285C70]/40 bg-[#285C70]/10">
                <div className="flex items-center gap-2 p-2">
                  <span className="text-[10px] font-semibold tracking-[0.15em] text-violet-400">07</span>
                  <span className="h-px flex-1 bg-zinc-800"></span>
                  <span className="text-[10px] font-semibold tracking-[0.15em] text-violet-400">08</span>
                </div>
                
                <div className="mt-4 px-2">
                  <h4 className="text-sm font-semibold text-zinc-200">7 - Envie uma nova versão</h4>
                  <p className="mt-2 text-xs leading-5 text-zinc-500">
                    Quando o projeto for reaberto, clique em + Nova versão para enviar o novo áudio.
                  </p>
                </div>

                <div className="mt-2 px-2 py-3">
                  <h4 className="text-sm font-semibold text-zinc-200">8 - Acompanhe seu histórico</h4>
                  <p className="mt-2 text-xs leading-5 text-zinc-500">
                    A plataforma está otimizada para a utilização em todos os dispositivos.
                  </p>
                  <p className="text-xs leading-5 text-zinc-500">
                    Todas as versões e feedbacks ficam registrados no histórico do projeto, permitindo acompanhar toda a evolução do seu trabalho.
                  </p>
                </div>
              </div>

            </div>
            
            {/* AVATAR */}
            <div className="mt-4 rounded-2xl border border-[#285C70]/30">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-400 p-2">
                Como adicionar ou alterar o seu avatar.
              </p>
              
              <p className="text-xs leading-5 text-zinc-500 px-2">
                  No painel, acesse Configurações.
              </p>

              <p className="text-xs leading-5 text-zinc-500 px-2 pb-2">
                  Na área de perfil, escolha uma imagem para o seu avatar e salve as alterações.
              </p>
            </div>
          </div>

          {/* HEADER */}

          <div className="mb-8">
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Bem-vindo(a) de volta!
            </h2>

            <p className="mt-2 text-sm text-zinc-60">
              Entre na sua conta para continuar.
            </p>
          </div>

          {/* FORM */}
          <form
            method="POST"
            className="space-y-5"
          >
            
          </form>
        </div>
      </div>

		</main>
	);
}

export default App;

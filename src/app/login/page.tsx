"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiInfo, FiLock, FiMail } from "react-icons/fi";
import { GovBar } from "@/components/gov-bar";
import { GovernmentLogo, LibraryMark, SPGeometry } from "@/components/sp-identity";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-sp-gray-light text-sp-black">
      <GovBar />
      <main className="sp-container grid min-h-[calc(100vh-40px)] gap-8 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <section className="relative hidden min-h-[560px] overflow-hidden rounded-lg border border-sp-gray-medium bg-sp-white p-8 lg:block">
          <SPGeometry className="absolute right-8 top-8 h-52 w-56" />
          <div className="relative z-10">
            <GovernmentLogo />
            <div className="mt-16 max-w-[460px]">
              <div className="sp-subtitle text-[12px] uppercase text-sp-red">Acesso institucional</div>
              <h1 className="sp-title mt-3 text-[44px] leading-tight text-sp-black">
                Biblioteca Digital de Logística Pública
              </h1>
              <p className="mt-5 text-[14px] leading-relaxed text-sp-black/66">
                Ambiente de gestão para servidores autorizados. Documentos públicos
                permanecem disponíveis para consulta sem autenticação.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[460px]">
          <div className="mb-8 flex justify-center">
            <LibraryMark />
          </div>

          <div className="sp-panel p-7 md:p-8">
            <div className="mb-6">
              <h2 className="sp-title text-[28px] text-sp-black">Entrar</h2>
              <p className="mt-2 text-[13px] leading-relaxed text-sp-black/62">
                Utilize seu e-mail institucional do Governo do Estado de São Paulo.
              </p>
            </div>

            <div className="space-y-4">
              <label className="block">
                <span className="sp-subtitle mb-2 block text-[12px] text-sp-black">
                  E-mail institucional <span className="text-sp-red">*</span>
                </span>
                <span className="relative block">
                  <FiMail
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sp-blue"
                    aria-hidden="true"
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu.nome@sp.gov.br"
                    className="h-12 w-full rounded-lg border border-sp-gray-medium bg-sp-white px-4 pl-11 text-[13px] text-sp-black outline-none transition-colors placeholder:text-sp-black/42 focus:border-sp-blue"
                  />
                </span>
              </label>

              <label className="block">
                <span className="sp-subtitle mb-2 block text-[12px] text-sp-black">
                  Senha <span className="text-sp-red">*</span>
                </span>
                <span className="relative block">
                  <FiLock
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sp-blue"
                    aria-hidden="true"
                  />
                  <input
                    type="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    placeholder="••••••••"
                    className="h-12 w-full rounded-lg border border-sp-gray-medium bg-sp-white px-4 pl-11 text-[13px] text-sp-black outline-none transition-colors placeholder:text-sp-black/42 focus:border-sp-blue"
                  />
                </span>
              </label>
            </div>

            <button
              type="button"
              onClick={handleLogin}
              className="sp-button-primary mt-6 h-12 w-full px-4 text-[14px]"
            >
              Entrar
            </button>

            <div className="mt-4 text-center text-[12px]">
              <a href="#" className="text-sp-blue no-underline hover:underline">
                Esqueci minha senha
              </a>
            </div>
          </div>

          <div className="mt-4 flex items-start gap-3 rounded-lg border border-sp-blue/20 bg-sp-blue/10 p-4 text-[12px] leading-relaxed text-sp-blue-petrol">
            <FiInfo className="mt-0.5 shrink-0 text-sp-blue" aria-hidden="true" />
            <span>
              Acesso restrito a servidores do Governo do Estado de São Paulo.
              Documentos públicos estão disponíveis sem login.
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}

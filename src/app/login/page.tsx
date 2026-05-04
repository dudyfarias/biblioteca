"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaBook, FaInfoCircle } from "react-icons/fa";
import { GovBar } from "@/components/gov-bar";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen flex flex-col bg-off-white font-sans">
      <GovBar />
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-[440px]">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="w-14 h-14 bg-slate-800 rounded-lg flex items-center justify-center mx-auto mb-3">
              <FaBook className="text-gov-red-700 text-2xl" />
            </div>
            <div className="text-xl font-bold text-slate-800">BIBLIOTECA</div>
            <div className="text-xs text-slate-500">Digital de Logistica Publica</div>
          </div>

          <div className="bg-white border border-slate-100 rounded p-7 shadow-md">
            <h2 className="text-lg font-bold text-slate-800 mb-1.5">Acesso a conta</h2>
            <p className="text-[13px] text-slate-500 mb-6">
              Utilize seu e-mail institucional do Governo do Estado de SP.
            </p>

            <div className="mb-4">
              <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                E-mail institucional <span className="text-gov-red-700">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu.nome@sp.gov.br"
                className="w-full py-[9px] px-3 border border-slate-300 rounded text-sm font-sans text-slate-800 outline-none focus:border-gov-red-700"
              />
            </div>
            <div className="mb-6">
              <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                Senha <span className="text-gov-red-700">*</span>
              </label>
              <input
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="••••••••"
                className="w-full py-[9px] px-3 border border-slate-300 rounded text-sm font-sans outline-none focus:border-gov-red-700"
              />
            </div>
            <button
              onClick={handleLogin}
              className="w-full bg-gov-red-700 text-white border-none rounded py-[11px] text-[15px] font-semibold cursor-pointer font-sans mb-3 transition-colors hover:bg-gov-red-800"
            >
              Entrar
            </button>
            <div className="text-center text-xs text-slate-500">
              <a href="#" className="text-gov-red-700 no-underline hover:underline">
                Esqueci minha senha
              </a>
            </div>
          </div>

          <div className="mt-4 flex items-start gap-2.5 bg-slate-100 border-l-[3px] border-slate-600 rounded-r px-4 py-2.5 text-[13px] text-slate-800">
            <FaInfoCircle className="text-slate-600 mt-0.5 shrink-0" />
            <span>
              Acesso restrito a servidores do Governo do Estado de Sao Paulo. Documentos
              publicos estao disponiveis sem login.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

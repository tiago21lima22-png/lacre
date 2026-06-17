/* ============================================================
   app.js — gerado automaticamente a partir do código-fonte React/JSX
   do Painel de Despacho de Docas. Já vem compilado para JavaScript puro
   (sem JSX, sem necessidade de Babel no navegador), pronto para rodar
   direto como arquivo estático — inclusive no GitHub Pages.

   Não precisa editar este arquivo. Para configurar o Firebase, edite
   js/firebase-config.js. Para mudanças de funcionalidade, peça ao Claude.
   ============================================================ */
const { useState, useEffect } = React;
const Trash2 = ({ size = 24, className = "" }) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React.createElement("path", { d: "M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2M10 11v6M14 11v6" }));
const User = ({ size = 24, className = "" }) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React.createElement("path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }), /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "7", r: "4" }));
const Package = ({ size = 24, className = "" }) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React.createElement("path", { d: "m7.5 4.27 9 5.15M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" }), /* @__PURE__ */ React.createElement("path", { d: "m3.3 7 8.7 5 8.7-5M12 22V12" }));
const Box = ({ size = 24, className = "" }) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React.createElement("path", { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }), /* @__PURE__ */ React.createElement("polyline", { points: "3.27 6.96 12 12.01 20.73 6.96" }), /* @__PURE__ */ React.createElement("line", { x1: "12", y1: "22.08", x2: "12", y2: "12" }));
const MapPin = ({ size = 24, className = "" }) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React.createElement("path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" }), /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "10", r: "3" }));
const Zap = ({ size = 24, className = "" }) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React.createElement("polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2" }));
const LayoutGrid = ({ size = 24, className = "" }) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React.createElement("rect", { x: "3", y: "3", width: "7", height: "9", rx: "1" }), /* @__PURE__ */ React.createElement("rect", { x: "14", y: "3", width: "7", height: "5", rx: "1" }), /* @__PURE__ */ React.createElement("rect", { x: "14", y: "12", width: "7", height: "9", rx: "1" }), /* @__PURE__ */ React.createElement("rect", { x: "3", y: "16", width: "7", height: "5", rx: "1" }));
const Container = ({ size = 24, className = "" }) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React.createElement("path", { d: "M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9c-.5-.3-1.1-.3-1.6 0L7 6.2M22 7.7v8.8c0 .8-.5 1.5-1.1 1.8l-6.3 3.4c-.6.3-1.2.3-1.8 0L6.5 18.3c-.6-.3-1-1-1-1.8V7.7M22 7.7l-8.5 4.6c-.3.2-.7.2-1 0L4 7.7M12 12.3v9.3" }));
const Save = ({ size = 24, className = "" }) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React.createElement("path", { d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" }), /* @__PURE__ */ React.createElement("polyline", { points: "17 21 17 13 7 13 7 21" }), /* @__PURE__ */ React.createElement("polyline", { points: "7 3 7 8 15 8" }));
const Clipboard = ({ size = 24, className = "" }) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React.createElement("rect", { x: "8", y: "2", width: "8", height: "4", rx: "1", ry: "1" }), /* @__PURE__ */ React.createElement("path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }));
const LogOut = ({ size = 24, className = "" }) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React.createElement("path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }), /* @__PURE__ */ React.createElement("polyline", { points: "16 17 21 12 16 7" }), /* @__PURE__ */ React.createElement("line", { x1: "21", y1: "12", x2: "9", y2: "12" }));
const LogIn = ({ size = 24, className = "" }) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React.createElement("path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" }), /* @__PURE__ */ React.createElement("polyline", { points: "10 17 15 12 10 7" }), /* @__PURE__ */ React.createElement("line", { x1: "15", y1: "12", x2: "3", y2: "12" }));
const UserPlus = ({ size = 24, className = "" }) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React.createElement("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }), /* @__PURE__ */ React.createElement("circle", { cx: "9", cy: "7", r: "4" }), /* @__PURE__ */ React.createElement("line", { x1: "19", y1: "8", x2: "19", y2: "14" }), /* @__PURE__ */ React.createElement("line", { x1: "22", y1: "11", x2: "16", y2: "11" }));
const AlertTriangle = ({ size = 24, className = "" }) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React.createElement("path", { d: "m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" }), /* @__PURE__ */ React.createElement("path", { d: "M12 9v4" }), /* @__PURE__ */ React.createElement("path", { d: "M12 17h.01" }));
const CheckCircle = ({ size = 24, className = "" }) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React.createElement("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }), /* @__PURE__ */ React.createElement("polyline", { points: "22 4 12 14.01 9 11.01" }));
const Shield = ({ size = 24, className = "" }) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React.createElement("path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }));
const Mail = ({ size = 24, className = "" }) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React.createElement("rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }), /* @__PURE__ */ React.createElement("path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }));
const Lock = ({ size = 24, className = "" }) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React.createElement("rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2" }), /* @__PURE__ */ React.createElement("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" }));
const Eye = ({ size = 24, className = "" }) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React.createElement("path", { d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" }), /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "3" }));
const EyeOff = ({ size = 24, className = "" }) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React.createElement("path", { d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" }), /* @__PURE__ */ React.createElement("path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242" }), /* @__PURE__ */ React.createElement("path", { d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" }), /* @__PURE__ */ React.createElement("path", { d: "m2 2 20 20" }));
const History = ({ size = 24, className = "" }) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React.createElement("path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }), /* @__PURE__ */ React.createElement("path", { d: "M3 3v5h5" }), /* @__PURE__ */ React.createElement("path", { d: "M12 7v5l4 2" }));
const Loader2 = ({ size = 24, className = "" }) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React.createElement("path", { d: "M21 12a9 9 0 1 1-6.219-8.56" }));
const firebaseConfigured = !!(firebaseConfig.apiKey && firebaseConfig.apiKey !== "SUA_API_KEY");
let auth = null;
let db = null;
if (firebaseConfigured) {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  auth = firebase.auth();
  db = firebase.firestore();
}
const COL_USERS = "controleCarga_users";
const COL_DOCAS = "controleCarga_docas";
const COL_CHAMADOS = "controleCarga_chamados";
const COL_ALTERACOES = "controleCarga_alteracoes";
function traduzirErroAuth(codigo) {
  const mapa = {
    "auth/email-already-in-use": "Este e-mail j\xE1 est\xE1 cadastrado.",
    "auth/invalid-email": "E-mail inv\xE1lido.",
    "auth/weak-password": "A senha precisa ter pelo menos 6 caracteres.",
    "auth/user-not-found": "E-mail ou senha incorretos.",
    "auth/wrong-password": "E-mail ou senha incorretos.",
    "auth/invalid-credential": "E-mail ou senha incorretos.",
    "auth/too-many-requests": "Muitas tentativas. Tente novamente em alguns minutos."
  };
  return mapa[codigo] || "Ocorreu um erro. Tente novamente.";
}
function formatarData(iso) {
  if (!iso) return "\u2014";
  try {
    return new Date(iso).toLocaleString("pt-BR", { day: "2-digit", month: "2-digit", year: "2-digit", hour: "2-digit", minute: "2-digit" });
  } catch (e) {
    return "\u2014";
  }
}
function badgeChamado(status) {
  if (status === "aberto") return { texto: "\u{1F6A8} Aberto", classe: "bg-red-100 text-red-700 border-red-300" };
  if (status === "atendendo") return { texto: "\u{1F7E0} Em Atendimento", classe: "bg-amber-100 text-amber-700 border-amber-300" };
  return { texto: "\u2705 Resolvido", classe: "bg-green-100 text-green-700 border-green-300" };
}
const CAMPOS_DOCA = [
  { campo: "numeroDoca", label: "N\xFAmero da Doca", icon: MapPin, tipo: "text" },
  { campo: "posicoes", label: "Posi\xE7\xF5es", icon: LayoutGrid, tipo: "number" },
  { campo: "mangas", label: "Mangas", icon: Zap, tipo: "number" },
  { campo: "paletes", label: "Paletes", icon: Box, tipo: "number" },
  { campo: "gaylord", label: "Gaylord", icon: Container, tipo: "number" },
  { campo: "pacotes", label: "Total Pacotes", icon: Package, tipo: "number" }
];
function diffCampos(antigo, novo) {
  const mudancas = [];
  CAMPOS_DOCA.forEach(({ campo, label }) => {
    var _a, _b;
    const valorAntigo = ((_a = antigo[campo]) != null ? _a : "").toString();
    const valorNovo = ((_b = novo[campo]) != null ? _b : "").toString();
    if (valorAntigo !== valorNovo) {
      mudancas.push({ campo: label, valorAnterior: valorAntigo || "\u2014", valorNovo: valorNovo || "\u2014" });
    }
  });
  return mudancas;
}
async function registrarAlteracao(dados) {
  if (!db) return;
  try {
    await db.collection(COL_ALTERACOES).add({ ...dados, criadoEm: (/* @__PURE__ */ new Date()).toISOString() });
  } catch (e) {
    console.error("Erro ao registrar altera\xE7\xE3o:", e);
  }
}
function ConfirmModal({ titulo, mensagem, textoConfirmar = "Confirmar", onConfirmar, onCancelar }) {
  return /* @__PURE__ */ React.createElement("div", { className: "fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" }, /* @__PURE__ */ React.createElement("div", { className: "bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl border border-gray-100" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3 text-red-600 mb-4" }, /* @__PURE__ */ React.createElement(AlertTriangle, { size: 28 }), /* @__PURE__ */ React.createElement("h3", { className: "font-extrabold text-xl text-gray-950" }, titulo)), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600 text-base mb-6 leading-relaxed" }, mensagem), /* @__PURE__ */ React.createElement("div", { className: "flex gap-3" }, /* @__PURE__ */ React.createElement("button", { onClick: onCancelar, className: "flex-grow py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-all text-sm" }, "Cancelar"), /* @__PURE__ */ React.createElement("button", { onClick: onConfirmar, className: "flex-grow py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-all text-sm shadow-md" }, textoConfirmar))));
}
function EmergencyModal({ doca, onConfirm, onCancel, enviando }) {
  const motivos = ["Falta de paletes", "Equipamento com defeito", "Atraso na carga", "Risco de seguran\xE7a", "Outro"];
  const [motivo, setMotivo] = useState(motivos[0]);
  const [mensagem, setMensagem] = useState("");
  return /* @__PURE__ */ React.createElement("div", { className: "fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" }, /* @__PURE__ */ React.createElement("div", { className: "bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl border border-red-100" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3 text-red-600 mb-4" }, /* @__PURE__ */ React.createElement(AlertTriangle, { size: 32 }), /* @__PURE__ */ React.createElement("h3", { className: "font-extrabold text-xl text-gray-950" }, "Abrir Chamado de Emerg\xEAncia")), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-gray-600 mb-4" }, "Doca ", /* @__PURE__ */ React.createElement("span", { className: "font-bold" }, doca.numeroDoca), " \u2014 o chamado \xE9 enviado em tempo real para o administrador."), /* @__PURE__ */ React.createElement("label", { className: "block text-xs font-bold text-gray-500 mb-1" }, "Motivo"), /* @__PURE__ */ React.createElement("select", { className: "w-full border-2 border-gray-200 rounded-lg p-2 mb-3 outline-none", value: motivo, onChange: (e) => setMotivo(e.target.value) }, motivos.map((m) => /* @__PURE__ */ React.createElement("option", { key: m, value: m }, m))), /* @__PURE__ */ React.createElement("label", { className: "block text-xs font-bold text-gray-500 mb-1" }, "Detalhes (opcional)"), /* @__PURE__ */ React.createElement(
    "textarea",
    {
      className: "w-full border-2 border-gray-200 rounded-lg p-2 mb-4 outline-none text-sm",
      rows: "3",
      placeholder: "Descreva rapidamente o que est\xE1 acontecendo...",
      value: mensagem,
      onChange: (e) => setMensagem(e.target.value)
    }
  ), /* @__PURE__ */ React.createElement("div", { className: "flex gap-3" }, /* @__PURE__ */ React.createElement("button", { onClick: onCancel, disabled: enviando, className: "flex-grow py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 text-sm disabled:opacity-50" }, "Cancelar"), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => onConfirm(motivo, mensagem),
      disabled: enviando,
      className: "flex-grow py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 text-sm shadow-md disabled:opacity-50 flex items-center justify-center gap-2"
    },
    enviando ? /* @__PURE__ */ React.createElement(Loader2, { size: 18, className: "animate-spin" }) : /* @__PURE__ */ React.createElement(AlertTriangle, { size: 18 }),
    enviando ? "Enviando..." : "Abrir Chamado"
  ))));
}
function ReportModal({ titulo, conteudo, onFechar }) {
  const [copiado, setCopiado] = useState(false);
  return /* @__PURE__ */ React.createElement("div", { className: "fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" }, /* @__PURE__ */ React.createElement("div", { className: "bg-white rounded-2xl p-6 max-w-sm w-full" }, /* @__PURE__ */ React.createElement("h2", { className: "font-black text-xl mb-4" }, titulo), /* @__PURE__ */ React.createElement("textarea", { readOnly: true, className: "w-full h-64 bg-gray-50 p-3 rounded-lg text-xs font-mono mb-4 border border-gray-200", value: conteudo }), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => {
        navigator.clipboard.writeText(conteudo);
        setCopiado(true);
        setTimeout(() => setCopiado(false), 2e3);
      },
      className: `w-full py-3 rounded-xl font-bold text-white ${copiado ? "bg-green-500" : "bg-[#3483FA]"}`
    },
    copiado ? "Copiado!" : "Copiar Relat\xF3rio"
  ), /* @__PURE__ */ React.createElement("button", { onClick: onFechar, className: "w-full mt-2 py-2 text-gray-500 font-bold hover:text-gray-700" }, "Fechar")));
}
function AuthScreen() {
  const [modo, setModo] = useState("login");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);
  const alternarModo = (novoModo) => {
    setModo(novoModo);
    setErro("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro("");
    if (!email.trim() || !senha) {
      setErro("Preencha e-mail e senha.");
      return;
    }
    if (modo === "cadastro" && !nome.trim()) {
      setErro("Informe seu nome.");
      return;
    }
    setCarregando(true);
    try {
      if (modo === "cadastro") {
        const credencial = await auth.createUserWithEmailAndPassword(email.trim(), senha);
        await db.collection(COL_USERS).doc(credencial.user.uid).set({
          nome: nome.trim(),
          email: email.trim(),
          role: "user",
          criadoEm: (/* @__PURE__ */ new Date()).toISOString()
        });
      } else {
        await auth.signInWithEmailAndPassword(email.trim(), senha);
      }
    } catch (err) {
      console.error(err);
      setErro(traduzirErroAuth(err.code));
    } finally {
      setCarregando(false);
    }
  };
  return /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-gray-50 flex items-center justify-center p-4" }, /* @__PURE__ */ React.createElement("div", { className: "w-full max-w-sm" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col items-center mb-6" }, /* @__PURE__ */ React.createElement("div", { className: "bg-[#2D3277] p-4 rounded-2xl mb-3" }, /* @__PURE__ */ React.createElement(Container, { size: 32, className: "text-[#FFE600]" })), /* @__PURE__ */ React.createElement("h1", { className: "text-2xl font-black text-[#2D3277]" }, "Controle de Carga"), /* @__PURE__ */ React.createElement("p", { className: "text-gray-500 text-sm" }, "Painel de Despacho de Docas")), /* @__PURE__ */ React.createElement("div", { className: "bg-white rounded-2xl shadow-sm border border-gray-200 p-6" }, /* @__PURE__ */ React.createElement("div", { className: "flex mb-6 bg-gray-100 rounded-xl p-1" }, /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => alternarModo("login"), className: `flex-1 py-2 rounded-lg font-bold text-sm transition-all ${modo === "login" ? "bg-white shadow-sm text-[#2D3277]" : "text-gray-500"}` }, "Entrar"), /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => alternarModo("cadastro"), className: `flex-1 py-2 rounded-lg font-bold text-sm transition-all ${modo === "cadastro" ? "bg-white shadow-sm text-[#2D3277]" : "text-gray-500"}` }, "Cadastrar")), /* @__PURE__ */ React.createElement("form", { onSubmit: handleSubmit, className: "space-y-4" }, modo === "cadastro" && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "flex items-center gap-2 text-xs font-bold text-gray-500 mb-1" }, /* @__PURE__ */ React.createElement(User, { size: 14 }), " Nome"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      className: "w-full border-2 border-gray-200 rounded-lg p-3 outline-none focus:border-[#3483FA]",
      placeholder: "Seu nome completo",
      value: nome,
      onChange: (e) => setNome(e.target.value)
    }
  )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "flex items-center gap-2 text-xs font-bold text-gray-500 mb-1" }, /* @__PURE__ */ React.createElement(Mail, { size: 14 }), " E-mail"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "email",
      className: "w-full border-2 border-gray-200 rounded-lg p-3 outline-none focus:border-[#3483FA]",
      placeholder: "seu@email.com",
      value: email,
      onChange: (e) => setEmail(e.target.value)
    }
  )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "flex items-center gap-2 text-xs font-bold text-gray-500 mb-1" }, /* @__PURE__ */ React.createElement(Lock, { size: 14 }), " Senha"), /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: mostrarSenha ? "text" : "password",
      className: "w-full border-2 border-gray-200 rounded-lg p-3 pr-10 outline-none focus:border-[#3483FA]",
      placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
      value: senha,
      onChange: (e) => setSenha(e.target.value)
    }
  ), /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => setMostrarSenha(!mostrarSenha), className: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" }, mostrarSenha ? /* @__PURE__ */ React.createElement(EyeOff, { size: 18 }) : /* @__PURE__ */ React.createElement(Eye, { size: 18 })))), erro && /* @__PURE__ */ React.createElement("p", { className: "text-red-600 text-sm font-semibold bg-red-50 border border-red-200 rounded-lg p-2" }, erro), /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "submit",
      disabled: carregando,
      className: "w-full py-3 bg-[#3483FA] text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-[#2968C8] transition-all disabled:opacity-60"
    },
    carregando ? /* @__PURE__ */ React.createElement(Loader2, { size: 20, className: "animate-spin" }) : modo === "login" ? /* @__PURE__ */ React.createElement(LogIn, { size: 20 }) : /* @__PURE__ */ React.createElement(UserPlus, { size: 20 }),
    carregando ? "Aguarde..." : modo === "login" ? "Entrar" : "Criar Conta"
  ))), /* @__PURE__ */ React.createElement("p", { className: "text-center text-xs text-gray-400 mt-4" }, "Acesso restrito a operadores autorizados.")));
}
function UserPanel({ user, profile, onLogout }) {
  const docaVazia = { numeroDoca: "", posicoes: "", mangas: "", paletes: "", gaylord: "", pacotes: "" };
  const [docas, setDocas] = useState([]);
  const [chamados, setChamados] = useState([]);
  const [activeDoca, setActiveDoca] = useState(docaVazia);
  const [editingId, setEditingId] = useState(null);
  const [originalDoca, setOriginalDoca] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [docaToDelete, setDocaToDelete] = useState(null);
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);
  const [docaEmergencia, setDocaEmergencia] = useState(null);
  const [enviandoChamado, setEnviandoChamado] = useState(false);
  const [aviso, setAviso] = useState("");
  useEffect(() => {
    if (!db) return;
    const unsub = db.collection(COL_DOCAS).where("donoUid", "==", user.uid).onSnapshot(
      (snap) => {
        const dados = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        dados.sort((a, b) => (b.atualizadoEm || "").localeCompare(a.atualizadoEm || ""));
        setDocas(dados);
      },
      (e) => console.error(e)
    );
    return unsub;
  }, [user.uid]);
  useEffect(() => {
    if (!db) return;
    const unsub = db.collection(COL_CHAMADOS).where("donoUid", "==", user.uid).onSnapshot(
      (snap) => {
        const dados = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        dados.sort((a, b) => (b.criadoEm || "").localeCompare(a.criadoEm || ""));
        setChamados(dados);
      },
      (e) => console.error(e)
    );
    return unsub;
  }, [user.uid]);
  const chamadoAbertoDaDoca = (docaId) => chamados.find((c) => c.docaId === docaId && c.status !== "resolvido");
  const handleSave = async () => {
    if (!activeDoca.numeroDoca.trim()) {
      alert("Por favor, informe o n\xFAmero da doca.");
      return;
    }
    const agora = (/* @__PURE__ */ new Date()).toISOString();
    try {
      if (editingId) {
        const mudancas = diffCampos(originalDoca, activeDoca);
        await db.collection(COL_DOCAS).doc(editingId).update({ ...activeDoca, atualizadoEm: agora });
        for (const m of mudancas) {
          await registrarAlteracao({
            docaId: editingId,
            numeroDoca: activeDoca.numeroDoca,
            autorUid: user.uid,
            autorNome: profile.nome,
            tipo: "edicao",
            campo: m.campo,
            valorAnterior: m.valorAnterior,
            valorNovo: m.valorNovo
          });
        }
      } else {
        const ref = await db.collection(COL_DOCAS).add({
          ...activeDoca,
          donoUid: user.uid,
          donoNome: profile.nome,
          criadoEm: agora,
          atualizadoEm: agora
        });
        await registrarAlteracao({
          docaId: ref.id,
          numeroDoca: activeDoca.numeroDoca,
          autorUid: user.uid,
          autorNome: profile.nome,
          tipo: "criacao",
          campo: "Doca",
          valorAnterior: "\u2014",
          valorNovo: "cadastrada"
        });
      }
      setActiveDoca(docaVazia);
      setEditingId(null);
      setOriginalDoca(null);
    } catch (e) {
      console.error("Erro ao salvar doca:", e);
      alert("N\xE3o foi poss\xEDvel salvar. Tente novamente.");
    }
  };
  const handleStartEdit = (doca) => {
    setEditingId(doca.id);
    setOriginalDoca(doca);
    setActiveDoca({
      numeroDoca: doca.numeroDoca || "",
      posicoes: doca.posicoes || "",
      mangas: doca.mangas || "",
      paletes: doca.paletes || "",
      gaylord: doca.gaylord || "",
      pacotes: doca.pacotes || ""
    });
  };
  const handleCancelEdit = () => {
    setEditingId(null);
    setOriginalDoca(null);
    setActiveDoca(docaVazia);
  };
  const handleDeleteClick = (doca) => {
    setDocaToDelete(doca);
    setShowDeleteModal(true);
  };
  const confirmDelete = async () => {
    if (!docaToDelete) return;
    try {
      await db.collection(COL_DOCAS).doc(docaToDelete.id).delete();
      await registrarAlteracao({
        docaId: docaToDelete.id,
        numeroDoca: docaToDelete.numeroDoca,
        autorUid: user.uid,
        autorNome: profile.nome,
        tipo: "exclusao",
        campo: "Doca",
        valorAnterior: "cadastrada",
        valorNovo: "exclu\xEDda"
      });
    } catch (e) {
      console.error(e);
    }
    if (editingId === docaToDelete.id) handleCancelEdit();
    setShowDeleteModal(false);
    setDocaToDelete(null);
  };
  const handleAbrirChamado = (doca) => {
    setDocaEmergencia(doca);
    setShowEmergencyModal(true);
  };
  const confirmarChamado = async (motivo, mensagem) => {
    if (!docaEmergencia) return;
    setEnviandoChamado(true);
    try {
      await db.collection(COL_CHAMADOS).add({
        docaId: docaEmergencia.id,
        numeroDoca: docaEmergencia.numeroDoca,
        donoUid: user.uid,
        donoNome: profile.nome,
        motivo,
        mensagem,
        status: "aberto",
        criadoEm: (/* @__PURE__ */ new Date()).toISOString()
      });
      setShowEmergencyModal(false);
      setDocaEmergencia(null);
      setAviso("Chamado aberto! O administrador foi notificado.");
      setTimeout(() => setAviso(""), 4e3);
    } catch (e) {
      console.error(e);
      alert("N\xE3o foi poss\xEDvel abrir o chamado. Tente novamente.");
    } finally {
      setEnviandoChamado(false);
    }
  };
  return /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-gray-50 pb-12 font-sans text-lg" }, /* @__PURE__ */ React.createElement("header", { className: "bg-[#FFE600] p-4 shadow-md mb-6 sticky top-0 z-10" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-2xl mx-auto flex items-center justify-between" }, /* @__PURE__ */ React.createElement("h1", { className: "text-[#2D3277] text-xl font-black flex items-center gap-2" }, /* @__PURE__ */ React.createElement(Container, { className: "w-6 h-6 text-[#2D3277]" }), " Controle de Carga"), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ React.createElement("span", { className: "text-[#2D3277] text-sm font-bold hidden sm:inline" }, profile.nome), /* @__PURE__ */ React.createElement("button", { onClick: onLogout, className: "p-2 bg-[#2D3277]/10 hover:bg-[#2D3277]/20 rounded-lg text-[#2D3277]", title: "Sair" }, /* @__PURE__ */ React.createElement(LogOut, { size: 18 }))))), /* @__PURE__ */ React.createElement("main", { className: "max-w-2xl mx-auto px-4" }, aviso && /* @__PURE__ */ React.createElement("div", { className: "bg-green-50 border border-green-300 text-green-700 font-semibold text-sm rounded-lg p-3 mb-4 flex items-center gap-2" }, /* @__PURE__ */ React.createElement(CheckCircle, { size: 18 }), " ", aviso), /* @__PURE__ */ React.createElement("div", { className: "bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-6" }, /* @__PURE__ */ React.createElement("h2", { className: "text-lg font-bold text-[#2D3277] mb-4 flex items-center gap-2" }, /* @__PURE__ */ React.createElement(Box, { size: 18, className: "text-[#2D3277]" }), " ", editingId ? "Editar Doca" : "Cadastrar Nova Doca"), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-3 mb-4" }, CAMPOS_DOCA.map((item) => /* @__PURE__ */ React.createElement("div", { key: item.campo }, /* @__PURE__ */ React.createElement("label", { className: "flex items-center gap-1 text-xs font-bold text-gray-500 mb-1" }, /* @__PURE__ */ React.createElement(item.icon, { size: 14, className: "text-[#3483FA]" }), " ", item.label), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: item.tipo,
      className: "w-full border-2 border-gray-200 rounded-lg p-2 outline-none",
      value: activeDoca[item.campo],
      onChange: (e) => setActiveDoca({ ...activeDoca, [item.campo]: e.target.value })
    }
  )))), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2" }, /* @__PURE__ */ React.createElement("button", { onClick: handleSave, className: "flex-grow py-3 bg-[#3483FA] text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-[#2968C8] transition-all" }, /* @__PURE__ */ React.createElement(Save, { size: 20 }), " ", editingId ? "Atualizar Doca" : "Salvar Doca"), editingId && /* @__PURE__ */ React.createElement("button", { onClick: handleCancelEdit, className: "py-3 px-4 bg-gray-200 text-gray-700 rounded-lg font-bold hover:bg-gray-300 transition-all text-sm" }, "Cancelar"))), /* @__PURE__ */ React.createElement("div", { className: "space-y-3 mb-6" }, /* @__PURE__ */ React.createElement("h2", { className: "text-xl font-black text-gray-800" }, "Minhas Docas"), docas.length === 0 && /* @__PURE__ */ React.createElement("p", { className: "text-gray-400 text-center py-4 italic" }, "Nenhuma doca cadastrada."), docas.map((h) => {
    const chamadoAtivo = chamadoAbertoDaDoca(h.id);
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        key: h.id,
        className: `bg-white p-4 rounded-xl shadow-sm border-l-4 transition-all ${editingId === h.id ? "border-[#3483FA] bg-blue-50/30" : chamadoAtivo ? "border-red-400" : "border-[#e2e8f0]"}`
      },
      /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-start gap-2" }, /* @__PURE__ */ React.createElement("div", { onClick: () => handleStartEdit(h), className: "cursor-pointer flex-grow" }, /* @__PURE__ */ React.createElement("p", { className: "font-bold text-gray-800" }, "Doca ", h.numeroDoca, " ", editingId === h.id && /* @__PURE__ */ React.createElement("span", { className: "text-xs text-[#3483FA] ml-1 font-normal" }, "(editando)")), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-gray-500" }, h.pacotes || 0, " pacotes \u2022 ", h.posicoes || 0, " posi\xE7\xF5es"), chamadoAtivo && /* @__PURE__ */ React.createElement(
        "span",
        {
          className: `inline-flex items-center gap-1 mt-1 text-xs font-bold px-2 py-0.5 rounded-full border ${chamadoAtivo.status === "aberto" ? "bg-red-100 text-red-700 border-red-300 animate-pulse" : "bg-amber-100 text-amber-700 border-amber-300"}`
        },
        /* @__PURE__ */ React.createElement(AlertTriangle, { size: 12 }),
        " ",
        chamadoAtivo.status === "aberto" ? "Chamado aberto" : "Em atendimento"
      )), /* @__PURE__ */ React.createElement("div", { className: "flex gap-1 shrink-0" }, /* @__PURE__ */ React.createElement("button", { onClick: () => handleAbrirChamado(h), className: "p-2 text-red-600 hover:bg-red-50 rounded-lg", title: "Abrir chamado de emerg\xEAncia" }, /* @__PURE__ */ React.createElement(AlertTriangle, { size: 18 })), /* @__PURE__ */ React.createElement("button", { onClick: () => handleDeleteClick(h), className: "p-2 text-gray-400 hover:bg-gray-100 hover:text-red-500 rounded-lg", title: "Excluir" }, /* @__PURE__ */ React.createElement(Trash2, { size: 18 }))))
    );
  })), chamados.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "space-y-3" }, /* @__PURE__ */ React.createElement("h2", { className: "text-xl font-black text-gray-800" }, "Meus Chamados"), chamados.map((c) => {
    const b = badgeChamado(c.status);
    return /* @__PURE__ */ React.createElement("div", { key: c.id, className: "bg-white p-4 rounded-xl shadow-sm border border-gray-200" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-start mb-1 gap-2" }, /* @__PURE__ */ React.createElement("p", { className: "font-bold text-gray-800" }, "Doca ", c.numeroDoca, " \u2022 ", c.motivo), /* @__PURE__ */ React.createElement("span", { className: `text-xs font-bold px-2 py-0.5 rounded-full border whitespace-nowrap ${b.classe}` }, b.texto)), c.mensagem && /* @__PURE__ */ React.createElement("p", { className: "text-sm text-gray-600 mb-1" }, c.mensagem), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-gray-400" }, "Aberto em ", formatarData(c.criadoEm), c.atendidoPor ? ` \u2022 Atendido por ${c.atendidoPor}` : ""));
  }))), showDeleteModal && docaToDelete && /* @__PURE__ */ React.createElement(
    ConfirmModal,
    {
      titulo: "Excluir Registro",
      mensagem: `Tem certeza que deseja remover a Doca ${docaToDelete.numeroDoca}? Esta a\xE7\xE3o \xE9 permanente.`,
      textoConfirmar: "Excluir",
      onConfirmar: confirmDelete,
      onCancelar: () => {
        setShowDeleteModal(false);
        setDocaToDelete(null);
      }
    }
  ), showEmergencyModal && docaEmergencia && /* @__PURE__ */ React.createElement(
    EmergencyModal,
    {
      doca: docaEmergencia,
      enviando: enviandoChamado,
      onConfirm: confirmarChamado,
      onCancel: () => {
        setShowEmergencyModal(false);
        setDocaEmergencia(null);
      }
    }
  ));
}
function AdminPanel({ user, profile, onLogout }) {
  const [docas, setDocas] = useState([]);
  const [chamados, setChamados] = useState([]);
  const [alteracoes, setAlteracoes] = useState([]);
  const [aba, setAba] = useState("chamados");
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportContent, setReportContent] = useState("");
  useEffect(() => {
    if (!db) return;
    const unsub = db.collection(COL_DOCAS).onSnapshot(
      (snap) => {
        const dados = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        dados.sort((a, b) => (b.atualizadoEm || "").localeCompare(a.atualizadoEm || ""));
        setDocas(dados);
      },
      (e) => console.error(e)
    );
    return unsub;
  }, []);
  useEffect(() => {
    if (!db) return;
    const unsub = db.collection(COL_CHAMADOS).onSnapshot(
      (snap) => {
        const dados = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        const peso = { aberto: 0, atendendo: 1, resolvido: 2 };
        dados.sort((a, b) => peso[a.status] - peso[b.status] || (b.criadoEm || "").localeCompare(a.criadoEm || ""));
        setChamados(dados);
      },
      (e) => console.error(e)
    );
    return unsub;
  }, []);
  useEffect(() => {
    if (!db) return;
    const unsub = db.collection(COL_ALTERACOES).orderBy("criadoEm", "desc").limit(150).onSnapshot(
      (snap) => setAlteracoes(snap.docs.map((d) => ({ id: d.id, ...d.data() }))),
      (e) => console.error(e)
    );
    return unsub;
  }, []);
  const totalAbertos = chamados.filter((c) => c.status !== "resolvido").length;
  const handleAtender = async (c) => {
    try {
      await db.collection(COL_CHAMADOS).doc(c.id).update({ status: "atendendo", atendidoPor: profile.nome, atendidoEm: (/* @__PURE__ */ new Date()).toISOString() });
      await registrarAlteracao({
        docaId: c.docaId,
        numeroDoca: c.numeroDoca,
        autorUid: user.uid,
        autorNome: profile.nome,
        tipo: "chamado_atendido",
        campo: "Chamado",
        valorAnterior: "aberto",
        valorNovo: "em atendimento"
      });
    } catch (e) {
      console.error(e);
    }
  };
  const handleResolver = async (c) => {
    try {
      await db.collection(COL_CHAMADOS).doc(c.id).update({ status: "resolvido", resolvidoEm: (/* @__PURE__ */ new Date()).toISOString() });
      await registrarAlteracao({
        docaId: c.docaId,
        numeroDoca: c.numeroDoca,
        autorUid: user.uid,
        autorNome: profile.nome,
        tipo: "chamado_resolvido",
        campo: "Chamado",
        valorAnterior: "em atendimento",
        valorNovo: "resolvido"
      });
    } catch (e) {
      console.error(e);
    }
  };
  const handleGerarRelatorio = () => {
    const dataAtual = (/* @__PURE__ */ new Date()).toLocaleDateString("pt-BR");
    let text = `\u{1F4CB} RELAT\xD3RIO GERAL DE MOVIMENTA\xC7\xC3O
\u{1F4C5} Data: ${dataAtual}
\u{1F464} Gerado por: ${profile.nome}

`;
    const totais = { posicoes: 0, mangas: 0, paletes: 0, gaylord: 0, pacotes: 0 };
    docas.forEach((d) => {
      text += `\u{1F69B} DOCA ${d.numeroDoca || "..."}  (Respons\xE1vel: ${d.donoNome || "\u2014"})
`;
      text += `\u{1F4E6} Pacotes: ${d.pacotes || 0} | \u{1F522} Posi\xE7\xF5es: ${d.posicoes || 0} | \u{1F6E1}\uFE0F Mangas: ${d.mangas || 0} | \u{1F3D7}\uFE0F Paletes: ${d.paletes || 0} | \u{1F4E6} Gaylord: ${d.gaylord || 0}

`;
      totais.posicoes += Number(d.posicoes) || 0;
      totais.mangas += Number(d.mangas) || 0;
      totais.paletes += Number(d.paletes) || 0;
      totais.gaylord += Number(d.gaylord) || 0;
      totais.pacotes += Number(d.pacotes) || 0;
    });
    text += `\u2014 TOTAIS \u2014
Pacotes: ${totais.pacotes} | Posi\xE7\xF5es: ${totais.posicoes} | Mangas: ${totais.mangas} | Paletes: ${totais.paletes} | Gaylord: ${totais.gaylord}

`;
    const abertos = chamados.filter((c) => c.status !== "resolvido");
    text += `\u{1F6A8} CHAMADOS PENDENTES: ${abertos.length}
`;
    abertos.forEach((c) => {
      text += `- Doca ${c.numeroDoca} (${c.donoNome}): ${c.motivo}
`;
    });
    setReportContent(text);
    setShowReportModal(true);
  };
  return /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-gray-50 pb-12 font-sans text-lg" }, /* @__PURE__ */ React.createElement("header", { className: "bg-[#2D3277] p-4 shadow-md mb-6 sticky top-0 z-10" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-2xl mx-auto flex items-center justify-between" }, /* @__PURE__ */ React.createElement("h1", { className: "text-white text-xl font-black flex items-center gap-2" }, /* @__PURE__ */ React.createElement(Shield, { className: "w-6 h-6 text-[#FFE600]" }), " Painel Administrativo"), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ React.createElement("span", { className: "text-white text-sm font-bold hidden sm:inline" }, profile.nome), /* @__PURE__ */ React.createElement("button", { onClick: onLogout, className: "p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white", title: "Sair" }, /* @__PURE__ */ React.createElement(LogOut, { size: 18 }))))), /* @__PURE__ */ React.createElement("main", { className: "max-w-2xl mx-auto px-4" }, /* @__PURE__ */ React.createElement("button", { onClick: handleGerarRelatorio, className: "w-full py-3 bg-[#3483FA] text-white rounded-xl font-bold mb-6 flex items-center justify-center gap-2 hover:bg-[#2968C8]" }, /* @__PURE__ */ React.createElement(Clipboard, { size: 18 }), " Gerar Relat\xF3rio Geral"), /* @__PURE__ */ React.createElement("div", { className: "flex bg-gray-100 rounded-xl p-1 mb-6 gap-1" }, /* @__PURE__ */ React.createElement("button", { onClick: () => setAba("chamados"), className: `flex-1 py-2 rounded-lg font-bold text-xs flex items-center justify-center gap-1 ${aba === "chamados" ? "bg-white shadow-sm text-[#2D3277]" : "text-gray-500"}` }, /* @__PURE__ */ React.createElement(AlertTriangle, { size: 14 }), " Chamados", totalAbertos > 0 && /* @__PURE__ */ React.createElement("span", { className: "bg-red-600 text-white rounded-full w-5 h-5 text-[10px] flex items-center justify-center ml-1" }, totalAbertos)), /* @__PURE__ */ React.createElement("button", { onClick: () => setAba("docas"), className: `flex-1 py-2 rounded-lg font-bold text-xs flex items-center justify-center gap-1 ${aba === "docas" ? "bg-white shadow-sm text-[#2D3277]" : "text-gray-500"}` }, /* @__PURE__ */ React.createElement(Box, { size: 14 }), " Docas"), /* @__PURE__ */ React.createElement("button", { onClick: () => setAba("historico"), className: `flex-1 py-2 rounded-lg font-bold text-xs flex items-center justify-center gap-1 ${aba === "historico" ? "bg-white shadow-sm text-[#2D3277]" : "text-gray-500"}` }, /* @__PURE__ */ React.createElement(History, { size: 14 }), " Hist\xF3rico")), aba === "chamados" && /* @__PURE__ */ React.createElement("div", { className: "space-y-3" }, chamados.length === 0 && /* @__PURE__ */ React.createElement("p", { className: "text-gray-400 text-center py-4 italic" }, "Nenhum chamado registrado."), chamados.map((c) => {
    const b = badgeChamado(c.status);
    const cor = c.status === "aberto" ? "border-red-400" : c.status === "atendendo" ? "border-amber-400" : "border-green-400";
    return /* @__PURE__ */ React.createElement("div", { key: c.id, className: `bg-white p-4 rounded-xl shadow-sm border-l-4 ${cor}` }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-start mb-1 gap-2" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "font-bold text-gray-800" }, "Doca ", c.numeroDoca, " \u2022 ", c.motivo), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-gray-500" }, "Aberto por ", c.donoNome)), /* @__PURE__ */ React.createElement("span", { className: `text-xs font-bold px-2 py-0.5 rounded-full border whitespace-nowrap ${b.classe}` }, b.texto)), c.mensagem && /* @__PURE__ */ React.createElement("p", { className: "text-sm text-gray-600 mb-2" }, c.mensagem), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-gray-400 mb-2" }, formatarData(c.criadoEm), c.atendidoPor ? ` \u2022 Atendido por ${c.atendidoPor}` : ""), c.status === "aberto" && /* @__PURE__ */ React.createElement("button", { onClick: () => handleAtender(c), className: "w-full py-2 bg-amber-500 text-white rounded-lg font-bold text-sm hover:bg-amber-600" }, "Atender Chamado"), c.status === "atendendo" && /* @__PURE__ */ React.createElement("button", { onClick: () => handleResolver(c), className: "w-full py-2 bg-green-600 text-white rounded-lg font-bold text-sm hover:bg-green-700 flex items-center justify-center gap-2" }, /* @__PURE__ */ React.createElement(CheckCircle, { size: 16 }), " Marcar como Resolvido"));
  })), aba === "docas" && /* @__PURE__ */ React.createElement("div", { className: "space-y-3" }, docas.length === 0 && /* @__PURE__ */ React.createElement("p", { className: "text-gray-400 text-center py-4 italic" }, "Nenhuma doca cadastrada."), docas.map((d) => /* @__PURE__ */ React.createElement("div", { key: d.id, className: "bg-white p-4 rounded-xl shadow-sm border border-gray-200" }, /* @__PURE__ */ React.createElement("p", { className: "font-bold text-gray-800" }, "Doca ", d.numeroDoca), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-gray-500" }, d.pacotes || 0, " pacotes \u2022 ", d.posicoes || 0, " posi\xE7\xF5es \u2022 Respons\xE1vel: ", d.donoNome), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-gray-400 mt-1" }, "Atualizado em ", formatarData(d.atualizadoEm))))), aba === "historico" && /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, alteracoes.length === 0 && /* @__PURE__ */ React.createElement("p", { className: "text-gray-400 text-center py-4 italic" }, "Nenhuma altera\xE7\xE3o registrada."), alteracoes.map((a) => {
    const ehAcaoAdmin = a.tipo === "chamado_atendido" || a.tipo === "chamado_resolvido";
    return /* @__PURE__ */ React.createElement("div", { key: a.id, className: `bg-white p-3 rounded-lg shadow-sm border text-sm ${ehAcaoAdmin ? "border-amber-200 bg-amber-50/40" : "border-gray-200"}` }, /* @__PURE__ */ React.createElement("p", { className: "text-gray-700" }, /* @__PURE__ */ React.createElement("span", { className: "font-bold" }, a.autorNome), ehAcaoAdmin && /* @__PURE__ */ React.createElement("span", { className: "ml-1 text-[10px] font-bold uppercase tracking-wide text-amber-600 bg-amber-100 px-1.5 py-0.5 rounded" }, "admin"), " ", a.tipo === "criacao" && /* @__PURE__ */ React.createElement(React.Fragment, null, "cadastrou a Doca ", /* @__PURE__ */ React.createElement("span", { className: "font-bold" }, a.numeroDoca)), a.tipo === "exclusao" && /* @__PURE__ */ React.createElement(React.Fragment, null, "excluiu a Doca ", /* @__PURE__ */ React.createElement("span", { className: "font-bold" }, a.numeroDoca)), a.tipo === "edicao" && /* @__PURE__ */ React.createElement(React.Fragment, null, "alterou ", /* @__PURE__ */ React.createElement("span", { className: "font-bold" }, a.campo), " da Doca ", /* @__PURE__ */ React.createElement("span", { className: "font-bold" }, a.numeroDoca), ": ", a.valorAnterior, " \u2192 ", a.valorNovo), a.tipo === "chamado_atendido" && /* @__PURE__ */ React.createElement(React.Fragment, null, "passou a atender o chamado da Doca ", /* @__PURE__ */ React.createElement("span", { className: "font-bold" }, a.numeroDoca)), a.tipo === "chamado_resolvido" && /* @__PURE__ */ React.createElement(React.Fragment, null, "resolveu o chamado da Doca ", /* @__PURE__ */ React.createElement("span", { className: "font-bold" }, a.numeroDoca))), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-gray-400" }, formatarData(a.criadoEm)));
  }))), showReportModal && /* @__PURE__ */ React.createElement(ReportModal, { titulo: "Relat\xF3rio Geral", conteudo: reportContent, onFechar: () => setShowReportModal(false) }));
}
function App() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [carregandoAuth, setCarregandoAuth] = useState(true);
  useEffect(() => {
    if (!auth) {
      setCarregandoAuth(false);
      return;
    }
    const unsub = auth.onAuthStateChanged((u) => {
      setUser(u);
      if (!u) setProfile(null);
      setCarregandoAuth(false);
    });
    return unsub;
  }, []);
  useEffect(() => {
    if (!user || !db) return;
    const unsub = db.collection(COL_USERS).doc(user.uid).onSnapshot(
      (doc) => setProfile(doc.exists ? doc.data() : null),
      (e) => console.error(e)
    );
    return unsub;
  }, [user]);
  const handleLogout = () => {
    if (auth) auth.signOut();
  };
  if (!firebaseConfigured) {
    return /* @__PURE__ */ React.createElement("div", { className: "min-h-screen flex items-center justify-center bg-gray-50 p-6 text-center" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-md" }, /* @__PURE__ */ React.createElement(AlertTriangle, { className: "mx-auto text-amber-500 mb-4", size: 48 }), /* @__PURE__ */ React.createElement("h1", { className: "text-xl font-black text-gray-800 mb-2" }, "Firebase n\xE3o configurado"), /* @__PURE__ */ React.createElement("p", { className: "text-gray-500 text-sm" }, "Edite o objeto ", /* @__PURE__ */ React.createElement("code", { className: "bg-gray-100 px-1 rounded" }, "firebaseConfig"), " no in\xEDcio do c\xF3digo com as credenciais do seu projeto Firebase.")));
  }
  if (carregandoAuth || user && !profile) {
    return /* @__PURE__ */ React.createElement("div", { className: "min-h-screen flex items-center justify-center bg-gray-50" }, /* @__PURE__ */ React.createElement(Loader2, { size: 32, className: "animate-spin text-[#3483FA]" }));
  }
  if (!user) return /* @__PURE__ */ React.createElement(AuthScreen, null);
  return profile.role === "admin" ? /* @__PURE__ */ React.createElement(AdminPanel, { user, profile, onLogout: handleLogout }) : /* @__PURE__ */ React.createElement(UserPanel, { user, profile, onLogout: handleLogout });
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(/* @__PURE__ */ React.createElement(App, null));

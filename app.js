/*! O'Caisse 2.0.0 : caisse et suivi des ventes pour salons, restaurants et services.
 *  Copyright (C) 2026 Aliou Badara Sadian FOFANA — Training Soft Mali.
 *  Logiciel libre sous licence GNU AGPL v3 ou ultérieure : voir le fichier LICENSE.
 *  Code source lisible dans le dossier src/ du dépôt. */
(function () {
"use strict";
const SEED = {"config":{"commerces":{"salon":{"nom":"O'thentik Barber Shop","court":"O'thentik","type":"salon","couleur":"#E06A1B","couleur2":"#1374BA","ordre":0,"actif":true},"snack":{"nom":"O'snack","court":"O'snack","type":"snack","couleur":"#E0433A","couleur2":"#EFA11B","ordre":1,"actif":true}},"modes":[{"id":"especes","nom":"Espèces","couleur":"#2E7D4F","actif":true},{"id":"om","nom":"Orange Money","couleur":"#FF7900","actif":true},{"id":"moov","nom":"Moov Money","couleur":"#1B5DAB","actif":true},{"id":"wave","nom":"Wave","couleur":"#1DC3F2","actif":true},{"id":"credit","nom":"Crédit","couleur":"#8A5A00","actif":true}],"sources":["Bouche-à-oreille","Facebook","TikTok","WhatsApp","Instagram","En passant","Autre"],"depenses":["Achats marché","Boissons et glace","Produits salon","Électricité","Eau","Carburant groupe","Salaires et avances","Loyer","Transport","Communication","Réparations","Autre"],"autoLockMin":30,"version":2,"ticket":{"adresse":"Kati Fouga, près de la boulangerie Baba","tel":"77 63 00 04 / 79 59 47 83","message":"Merci et à bientôt ! Ouvert 7j/7 de 9 h à 23 h."}},"catalogue":{"salon":{"categories":{"c_coupes":{"nom":"Coupes","ordre":1},"c_barbe":{"nom":"Barbe et finitions","ordre":2},"c_soins":{"nom":"Soins","ordre":3},"c_femme":{"nom":"Femme","ordre":4}},"articles":{"a_coupe":{"nom":"Coupe simple","cat":"c_coupes","emoji":"💈","prix":[1000],"libre":false,"actif":true,"ordre":1},"a_degrade":{"nom":"Dégradé","cat":"c_coupes","emoji":"✂️","prix":[1500],"libre":false,"actif":true,"ordre":2},"a_coupe_barbe":{"nom":"Coupe + barbe","cat":"c_coupes","emoji":"🧔🏾","prix":[2000],"libre":false,"actif":true,"ordre":3},"a_coupe_enfant":{"nom":"Coupe enfant","cat":"c_coupes","emoji":"👦🏾","prix":[1000],"libre":false,"actif":true,"ordre":4},"a_barbe":{"nom":"Barbe","cat":"c_barbe","emoji":"🪒","prix":[1000],"libre":false,"actif":true,"ordre":1},"a_contours":{"nom":"Contours","cat":"c_barbe","emoji":"✏️","prix":[500],"libre":false,"actif":true,"ordre":2},"a_shampoing":{"nom":"Shampoing","cat":"c_soins","emoji":"🧴","prix":[500],"libre":false,"actif":true,"ordre":1},"a_soin_visage":{"nom":"Soin du visage","cat":"c_soins","emoji":"🧖","prix":[],"libre":true,"actif":true,"ordre":2},"a_teinture":{"nom":"Teinture","cat":"c_soins","emoji":"🎨","prix":[],"libre":true,"actif":true,"ordre":3},"a_tresses":{"nom":"Tresses","cat":"c_femme","emoji":"💇🏾‍♀️","prix":[],"libre":true,"actif":true,"ordre":1},"a_coiffure_femme":{"nom":"Coiffure femme","cat":"c_femme","emoji":"👩🏾","prix":[],"libre":true,"actif":true,"ordre":2},"a_defrisage":{"nom":"Défrisage","cat":"c_femme","emoji":"🌀","prix":[],"libre":true,"actif":true,"ordre":3},"a_meches":{"nom":"Pose de mèches","cat":"c_femme","emoji":"🧵","prix":[],"libre":true,"actif":true,"ordre":4}}},"snack":{"categories":{"c_plats":{"nom":"Plats","ordre":1},"c_abats":{"nom":"Grillades et abats","ordre":2},"c_petits":{"nom":"Petits creux","ordre":3},"c_jus":{"nom":"Jus","ordre":4},"c_loisirs":{"nom":"Loisirs et événements","ordre":5}},"articles":{"s_poulet_braise":{"nom":"Poulet braisé","cat":"c_plats","emoji":"🍗","prix":[2000,2500,3000,3500,4000,4500],"libre":false,"actif":true,"ordre":1},"s_poulet_mayo":{"nom":"Poulet mayo","cat":"c_plats","emoji":"🍗","prix":[2500,3000,4000,5000],"libre":false,"actif":true,"ordre":2},"s_poulet_saute":{"nom":"Poulet sauté","cat":"c_plats","emoji":"🍲","prix":[2000,3000,4000,5000],"libre":false,"actif":true,"ordre":3},"s_poisson_braise":{"nom":"Poisson braisé","cat":"c_plats","emoji":"🐟","prix":[2000,2500,3000],"libre":false,"actif":true,"ordre":4},"s_attieke":{"nom":"Attiéké garba","cat":"c_plats","emoji":"🍚","prix":[500,750,1000],"libre":false,"actif":true,"ordre":5},"s_verm_poulet":{"nom":"Vermicelle poulet","cat":"c_plats","emoji":"🍜","prix":[2000,3000,4000],"libre":false,"actif":true,"ordre":6},"s_verm_viande":{"nom":"Vermicelle viande","cat":"c_plats","emoji":"🍜","prix":[1500,2000,2500],"libre":false,"actif":true,"ordre":7},"s_macaroni":{"nom":"Macaroni","cat":"c_plats","emoji":"🍝","prix":[500,1500,2000],"libre":false,"actif":true,"ordre":8},"s_petit_pois":{"nom":"Petit pois","cat":"c_plats","emoji":"🥘","prix":[1500],"libre":false,"actif":true,"ordre":9},"s_brochette":{"nom":"Brochette","cat":"c_abats","emoji":"🍢","prix":[250,500],"libre":false,"actif":true,"ordre":1},"s_foie":{"nom":"Foie","cat":"c_abats","emoji":"🥩","prix":[1500],"libre":false,"actif":true,"ordre":2},"s_coeur":{"nom":"Cœur","cat":"c_abats","emoji":"🥩","prix":[1500],"libre":false,"actif":true,"ordre":3},"s_rognon":{"nom":"Rognon","cat":"c_abats","emoji":"🥩","prix":[1500],"libre":false,"actif":true,"ordre":4},"s_sandwich":{"nom":"Sandwich","cat":"c_petits","emoji":"🥪","prix":[500,1000],"libre":false,"actif":true,"ordre":1},"s_pate":{"nom":"Pâté","cat":"c_petits","emoji":"🥟","prix":[500,1000],"libre":false,"actif":true,"ordre":2},"s_pastel":{"nom":"Pastels (3 pièces)","cat":"c_petits","emoji":"🥟","prix":[500],"libre":false,"actif":true,"ordre":3},"s_nem":{"nom":"Nems (3 pièces)","cat":"c_petits","emoji":"🌯","prix":[500],"libre":false,"actif":true,"ordre":4},"s_bissap":{"nom":"Bissap","cat":"c_jus","emoji":"🌺","prix":[500,1000],"libre":false,"actif":true,"ordre":1},"s_gingembre":{"nom":"Gingembre","cat":"c_jus","emoji":"🥤","prix":[500,1000],"libre":false,"actif":true,"ordre":2},"s_babyfoot":{"nom":"Baby-foot","cat":"c_loisirs","emoji":"⚽","prix":[],"libelles":[],"libre":false,"actif":true,"ordre":1},"s_privatisation":{"nom":"Privatisation de l'espace","cat":"c_loisirs","emoji":"🎉","prix":[],"libelles":[],"libre":true,"actif":true,"reservable":true,"ordre":2},"s_shooting":{"nom":"Shooting photo","cat":"c_loisirs","emoji":"📸","prix":[],"libelles":[],"libre":true,"actif":true,"reservable":true,"ordre":3},"s_autre_service":{"nom":"Autre service","cat":"c_loisirs","emoji":"⭐","prix":[],"libelles":[],"libre":true,"actif":true,"ordre":4}}}}};
const FIRESTORE_RULES = "rules_version = '2';\n\n// Regles de securite O'Caisse.\n// A coller dans la console Firebase : Firestore Database > Regles > Publier.\n// Seuls le compte proprietaire et les appareils autorises lisent et ecrivent.\nservice cloud.firestore {\n  match /databases/{database}/documents {\n\n    function connecte() {\n      return request.auth != null;\n    }\n    function proprietaire() {\n      return connecte()\n        && exists(/databases/$(database)/documents/meta/proprietaire)\n        && get(/databases/$(database)/documents/meta/proprietaire).data.uid == request.auth.uid;\n    }\n    function appareil() {\n      return connecte()\n        && exists(/databases/$(database)/documents/appareils/$(request.auth.uid))\n        && get(/databases/$(database)/documents/appareils/$(request.auth.uid)).data.actif == true;\n    }\n    function membre() {\n      return proprietaire() || appareil();\n    }\n\n    // Le premier compte qui s'inscrit devient proprietaire, une seule fois.\n    match /meta/proprietaire {\n      allow read: if connecte();\n      allow create: if connecte() && request.resource.data.uid == request.auth.uid;\n      allow update, delete: if false;\n    }\n\n    // Comptes des tablettes et telephones de la boutique.\n    match /appareils/{uid} {\n      allow read: if proprietaire() || (connecte() && request.auth.uid == uid);\n      allow write: if proprietaire();\n    }\n\n    // Reglages, prix, equipe, photos : lus par tous, modifies par le proprietaire.\n    match /config/{id} {\n      allow read: if membre();\n      allow write: if proprietaire();\n    }\n    match /catalogue/{id} {\n      allow read: if membre();\n      allow write: if proprietaire();\n    }\n    match /equipe/{id} {\n      allow read: if membre();\n      allow write: if proprietaire();\n    }\n    match /photos/{id} {\n      allow read: if membre();\n      allow write: if proprietaire();\n    }\n\n    // Journees de caisse, credits et reservations : ecrits par tous les appareils,\n    // effaces seulement par le proprietaire.\n    match /sessions/{id} {\n      allow read, create, update: if membre();\n      allow delete: if proprietaire();\n    }\n    match /credits/{id} {\n      allow read, create, update: if membre();\n      allow delete: if proprietaire();\n    }\n    match /reservations/{id} {\n      allow read, create, update: if membre();\n      allow delete: if proprietaire();\n    }\n  }\n}\n";
/* ===================== Utilitaires ===================== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const esc = v => String(v ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const nf = new Intl.NumberFormat("fr-FR", {maximumFractionDigits: 0});
const N = n => nf.format(Math.round(Number(n) || 0)).replace(/[\u202F\u2009]/g, "\u00A0");
const F = n => N(n) + "\u00A0F";
const pad2 = n => String(n).padStart(2, "0");
const dkey = (d = new Date()) => `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
const parseKey = k => { const [y, m, d] = String(k).split("-").map(Number); return new Date(y, m - 1, d); };
const addDays = (k, n) => { const d = parseKey(k); d.setDate(d.getDate() + n); return dkey(d); };
const hm = iso => { const d = new Date(iso); return `${pad2(d.getHours())}:${pad2(d.getMinutes())}`; };
const MOIS = ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];
const JOURS = ["dim.","lun.","mar.","mer.","jeu.","ven.","sam."];
const dLabel = k => { const d = parseKey(k); return `${JOURS[d.getDay()]} ${d.getDate()} ${MOIS[d.getMonth()]}`; };
const uid = p => p + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
const clone = o => (o == null ? o : JSON.parse(JSON.stringify(o)));
const isObj = v => v !== null && typeof v === "object" && !Array.isArray(v);
function deepMerge(t, s) {
  for (const k of Object.keys(s)) {
    const sv = s[k];
    if (isObj(sv) && isObj(t[k])) deepMerge(t[k], sv); else t[k] = clone(sv);
  }
  return t;
}
const sleep = ms => new Promise(r => setTimeout(r, ms));
const hashStr = s => { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return Math.abs(h); };
const intOf = v => { const n = parseInt(String(v ?? "").replace(/[^\d]/g, ""), 10); return Number.isFinite(n) ? n : 0; };
const reducedMotion = () => !!(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches);
const inRange = (k, a, b) => !!k && k >= a && k <= b;
const ls = {
  get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} },
  del(k) { try { localStorage.removeItem(k); } catch (e) {} }
};

/* ===================== Réglages par défaut ===================== */
const PALETTE = [["#E06A1B", "#1374BA"], ["#E0433A", "#EFA11B"], ["#1F8A5B", "#F2C94C"], ["#7E4BB5", "#F2994A"], ["#0E7C86", "#F28C28"], ["#C2185B", "#5C6BC0"]];
const COM_FALLBACK = {salon: {type: "salon", couleur: "#E06A1B", couleur2: "#1374BA"}, snack: {type: "snack", couleur: "#E0433A", couleur2: "#EFA11B"}};
const TYPES = {salon: "Salon : prestations réalisées par un coiffeur", snack: "Restauration : sur place, à emporter, livraison", services: "Services et loisirs"};
const DEFAULT_CONFIG = {
  commerces: {
    salon: {nom: "O'thentik Barber Shop", court: "O'thentik", type: "salon", ordre: 0},
    snack: {nom: "O'snack", court: "O'snack", type: "snack", ordre: 1}
  },
  modes: [
    {id: "especes", nom: "Espèces", couleur: "#2E7D4F", actif: true},
    {id: "om", nom: "Orange Money", couleur: "#FF7900", actif: true},
    {id: "moov", nom: "Moov Money", couleur: "#1B5DAB", actif: true},
    {id: "wave", nom: "Wave", couleur: "#1DC3F2", actif: true},
    {id: "credit", nom: "Crédit", couleur: "#8A5A00", actif: true}
  ],
  sources: ["Bouche-à-oreille", "Facebook", "TikTok", "WhatsApp", "Instagram", "En passant", "Autre"],
  depenses: ["Achats marché", "Boissons et glace", "Produits salon", "Électricité", "Eau", "Carburant groupe", "Salaires et avances", "Loyer", "Transport", "Communication", "Réparations", "Autre"],
  autoLockMin: 30
};
const ROLE_LABEL = {admin: "Administrateur", gerant: "Gérant", vendeur: "Vendeur (caisse)", aucun: "Sans accès"};
const CANAUX = {place: "Sur place", emporter: "À emporter", livraison: "Livraison"};
const AV_COLORS = ["#E06A1B", "#1374BA", "#D93A31", "#2E8B57", "#7E4BB5", "#B7791F", "#0E7C86", "#C2185B"];
const EMOJI_SUGG = {
  salon: ["💈","✂️","🧔🏾","👦🏾","🪒","✏️","🧴","🧖","🎨","💇🏾‍♀️","👩🏾","🌀","🧵","💆🏾‍♂️","🧼","⭐"],
  snack: ["🍗","🐟","🍚","🍜","🍝","🥘","🍲","🍢","🥩","🥪","🥟","🌯","🌺","🥤","🧃","💧","☕","🍌","🥗","🍟"],
  services: ["⚽","📸","🎉","🎂","🎤","🎮","🎯","🪩","🎟️","🏓","🎱","🎶","🍽️","🎁","🔑","⭐"]
};

/* ===================== État ===================== */
const S = {
  mode: "boot",            // boot | nodb | setup | lock | app | revoked
  demo: false,
  cap: null,
  db: null, user: null, assets: null, downloads: null,
  me: {id: null, isOwner: false, canEdit: false, canWrite: null},
  subs: [],
  raw: {}, exists: {}, loaded: {},
  rawOpen: [], rawCredits: [],
  config: null, catalogues: {salon: null, snack: null}, membres: {},
  sessionsOpen: [], credits: [],
  rep: {period: "today", com: "all", raw: null, unsub: null, from: null},
  op: null,
  com: ls.get("oth.com", null),
  view: "caisse", gestionTab: "catalogue", catalogCom: null,
  backend: null, rawCat: {}, rawResa: [], resas: [], photos: {},
  carts: {},
  cat: "all",
  pinBuf: "", pinFails: 0, pinLockUntil: 0,
  lastActivity: Date.now(), lastPersist: 0,
  syncErr: null,
  tkSheet: null
};

const newCart = () => ({lines: [], prest: null, canal: "place"});
Object.defineProperty(S, "cart", {get() { const c = curCom(); return S.carts[c] || (S.carts[c] = newCart()); }});
const cartOf = c => S.carts[c] || (S.carts[c] = newCart());

/* ===================== Base de démonstration (en mémoire) ===================== */
function mockSnap(id, v) {
  const d = v ? clone(v) : undefined;
  return {id, exists: !!v, data: () => (d ? clone(d) : undefined), metadata: {fromCache: false, hasPendingWrites: false}};
}
function mockCmp(a, op, b) {
  switch (op) {
    case "==": return a === b;
    case "!=": return a !== b;
    case "<": return a < b;
    case "<=": return a <= b;
    case ">": return a > b;
    case ">=": return a >= b;
    case "in": return Array.isArray(b) && b.includes(a);
    case "not-in": return Array.isArray(b) && !b.includes(a);
    case "array-contains": return Array.isArray(a) && a.includes(b);
  }
  return false;
}
class MockDB {
  constructor() { this.store = new Map(); this.listeners = new Set(); this._q = false; }
  doc(path) { if (path.split("/").length % 2) throw new TypeError("chemin de document invalide"); return new MockDocRef(this, path); }
  collection(path) { if (path.split("/").length % 2 === 0) throw new TypeError("chemin de collection invalide"); return new MockQuery(this, path, [], null, 0); }
  _notify() { if (this._q) return; this._q = true; setTimeout(() => { this._q = false; for (const l of [...this.listeners]) l(); }, 0); }
}
class MockDocRef {
  constructor(db, path) { this.db = db; this.path = path; this.id = path.split("/").pop(); }
  async get() { return mockSnap(this.id, this.db.store.get(this.path)); }
  async set(data) { this.db.store.set(this.path, clone(data)); this.db._notify(); }
  async update(data) {
    const cur = this.db.store.get(this.path);
    if (!cur) { const e = new Error("document absent"); e.code = "invalid_argument"; throw e; }
    this.db.store.set(this.path, deepMerge(clone(cur), data)); this.db._notify();
  }
  async delete() { this.db.store.delete(this.path); this.db._notify(); }
  async acquire() { return {acquired: true}; }
  onSnapshot(next) {
    let last = null, first = true;
    const fire = () => { const v = this.db.store.get(this.path); const s = JSON.stringify(v ?? null); if (!first && s === last) return; first = false; last = s; next(mockSnap(this.id, v)); };
    this.db.listeners.add(fire); setTimeout(fire, 0);
    return () => this.db.listeners.delete(fire);
  }
  collection(p) { return this.db.collection(this.path + "/" + p); }
}
class MockQuery {
  constructor(db, path, filters, order, lim) { Object.assign(this, {db, path, filters, order, lim}); }
  where(f, op, v) { return new MockQuery(this.db, this.path, [...this.filters, [f, op, v]], this.order, this.lim); }
  orderBy(f, dir = "asc") { return new MockQuery(this.db, this.path, this.filters, [f, dir], this.lim); }
  limit(n) { return new MockQuery(this.db, this.path, this.filters, this.order, n); }
  doc(id) { return new MockDocRef(this.db, this.path + "/" + (id || uid("d"))); }
  async add(data) { const r = this.doc(); await r.set(data); return r; }
  _run() {
    const depth = this.path.split("/").length + 1; const out = [];
    for (const [p, v] of this.db.store) {
      if (!p.startsWith(this.path + "/") || p.split("/").length !== depth) continue;
      if (this.filters.every(([f, op, val]) => mockCmp(v[f], op, val))) out.push([p, v]);
    }
    if (this.order) { const [f, dir] = this.order; out.sort((a, b) => (a[1][f] > b[1][f] ? 1 : a[1][f] < b[1][f] ? -1 : 0) * (dir === "desc" ? -1 : 1)); }
    else out.sort((a, b) => (a[0] > b[0] ? 1 : -1));
    return this.lim ? out.slice(0, this.lim) : out;
  }
  _snap(r) { const docs = r.map(([p, v]) => mockSnap(p.split("/").pop(), v)); return {docs, size: docs.length, empty: !docs.length, docChanges: () => [], metadata: {fromCache: false, hasPendingWrites: false}}; }
  async get() { return this._snap(this._run()); }
  onSnapshot(next) {
    let last = null, first = true;
    const fire = () => { const r = this._run(); const s = JSON.stringify(r); if (!first && s === last) return; first = false; last = s; next(this._snap(r)); };
    this.db.listeners.add(fire); setTimeout(fire, 0);
    return () => this.db.listeners.delete(fire);
  }
}
window.OMockDB = MockDB;

/* ===================== Codes PIN ===================== */
function cyrb53(str, seed = 0) {
  let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
  for (let i = 0, ch; i < str.length; i++) { ch = str.charCodeAt(i); h1 = Math.imul(h1 ^ ch, 2654435761); h2 = Math.imul(h2 ^ ch, 1597334677); }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(16);
}
async function sha256hex(txt) {
  try {
    if (window.crypto && crypto.subtle) {
      const b = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(txt));
      return Array.from(new Uint8Array(b)).map(x => x.toString(16).padStart(2, "0")).join("");
    }
  } catch (e) {}
  return "c53:" + cyrb53(txt);
}
const pinHash = (pin, salt) => sha256hex(`oth|${salt}|${pin}`);
async function findMemberByPin(pin, filterFn) {
  for (const [id, m] of Object.entries(S.membres)) {
    if (m.actif === false || !m.pinHash || m.acces === "aucun") continue;
    if (filterFn && !filterFn(m)) continue;
    if ((await pinHash(pin, m.pinSalt)) === m.pinHash) return id;
  }
  return null;
}
async function pinTaken(pin, exceptId) {
  for (const [id, m] of Object.entries(S.membres)) {
    if (id === exceptId || !m.pinHash || m.actif === false) continue;
    if ((await pinHash(pin, m.pinSalt)) === m.pinHash) return true;
  }
  return false;
}

/* ===================== Accès et membres ===================== */
const opM = () => (S.op ? S.membres[S.op] || null : null);
const role = () => opM()?.acces || null;
const isAdmin = () => role() === "admin";
const isGerantPlus = () => role() === "admin" || role() === "gerant";
function opComs() {
  const m = opM(); if (!m) return [];
  const all = coms();
  if (m.acces === "admin" || m.commerce === "tous") return all;
  return all.includes(m.commerce) ? [m.commerce] : all.slice(0, 1);
}
function curCom() { const c = opComs(); return c.includes(S.com) ? S.com : (c[0] || coms()[0]); }
const mName = id => (id && S.membres[id] ? S.membres[id].nom : "");
const firstName = n => String(n || "").trim().split(/\s+/)[0] || "";
function avatarHTML(id, nomFallback, size) {
  const nom = (S.membres[id] && S.membres[id].nom) || nomFallback || "?";
  const ini = nom.replace(/[^\p{L}\s'-]/gu, " ").split(/[\s'-]+/).filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase() || "?";
  const c = AV_COLORS[hashStr(String(id || nom)) % AV_COLORS.length];
  const sz = size ? `;width:${size}px;height:${size}px;font-size:${Math.round(size * .36)}px` : "";
  return `<span class="av" style="background:${c}${sz}" aria-hidden="true">${esc(ini)}</span>`;
}
const canEditCfg = () => !!(S.demo || S.me.isOwner || S.me.canEdit || (S.backend === "claude" && !S.user));
function prestataires(com) {
  return Object.entries(S.membres)
    .filter(([id, m]) => m.actif !== false && m.prestataire && (m.commerce === com || m.commerce === "tous"))
    .sort((a, b) => a[1].nom.localeCompare(b[1].nom, "fr"));
}
function approverFilter(com) { return m => m.acces === "admin" || (m.acces === "gerant" && (m.commerce === com || m.commerce === "tous")); }

/* ===================== Réglages / catalogue ===================== */
let cfgMemo = {src: undefined, v: null};
function cfg() {
  if (cfgMemo.src === S.config && cfgMemo.v) return cfgMemo.v;
  const c = S.config || {};
  const raw = c.commerces && Object.keys(c.commerces).length ? c.commerces : DEFAULT_CONFIG.commerces;
  const commerces = {};
  Object.entries(raw).forEach(([k, v], i) => {
    const pal = PALETTE[i % PALETTE.length];
    const x = {type: "services", couleur: pal[0], couleur2: pal[1], ordre: i, ...(COM_FALLBACK[k] || {}), ...(DEFAULT_CONFIG.commerces[k] || {}), ...(v || {})};
    if (!x.nom) x.nom = x.court || k;
    if (!x.court) x.court = x.nom;
    commerces[k] = x;
  });
  const v = {
    ...DEFAULT_CONFIG, ...c, commerces,
    modes: Array.isArray(c.modes) && c.modes.length ? c.modes : DEFAULT_CONFIG.modes,
    sources: Array.isArray(c.sources) ? c.sources : DEFAULT_CONFIG.sources,
    depenses: Array.isArray(c.depenses) && c.depenses.length ? c.depenses : DEFAULT_CONFIG.depenses,
    autoLockMin: c.autoLockMin == null ? DEFAULT_CONFIG.autoLockMin : c.autoLockMin,
    ticket: {adresse: "", tel: "", message: "Merci et à bientôt !", ...(c.ticket || {})}
  };
  cfgMemo = {src: S.config, v};
  return v;
}
function coms() {
  return Object.entries(cfg().commerces).filter(([, c]) => c.actif !== false)
    .sort((a, b) => (a[1].ordre ?? 0) - (b[1].ordre ?? 0)).map(([k]) => k);
}
const comName = k => cfg().commerces[k]?.court || k;
const comFull = k => cfg().commerces[k]?.nom || comName(k);
const comType = k => cfg().commerces[k]?.type || "services";
const comColor = k => cfg().commerces[k]?.couleur || "#E06A1B";
const comColor2 = k => cfg().commerces[k]?.couleur2 || "#1374BA";
const comBadge = k => `<span class="badge"><i class="dot" style="background:${esc(comColor(k))}"></i>${esc(comName(k))}</span>`;
function artVariants(a) {
  const p = a.prix || [];
  return p.map((prix, i) => ({prix, lib: (a.libelles || [])[i] || ""})).filter(v => v.prix > 0);
}
const lineName = l => l.nom + (l.var ? ` (${l.var})` : "");
const modesActifs = () => cfg().modes.filter(m => m.actif !== false);
const modeName = id => (cfg().modes.find(m => m.id === id) || DEFAULT_CONFIG.modes.find(m => m.id === id) || {nom: id}).nom;
const modeColor = id => (cfg().modes.find(m => m.id === id) || DEFAULT_CONFIG.modes.find(m => m.id === id) || {couleur: "#888"}).couleur;
function catalog(com) { const c = S.catalogues[com] || {}; return {categories: c.categories || {}, articles: c.articles || {}}; }
const byOrdre = (a, b) => (a[1].ordre ?? 999) - (b[1].ordre ?? 999) || String(a[1].nom).localeCompare(String(b[1].nom), "fr");
function priceLabel(a) {
  if (a.libre) return "Prix libre";
  const p = (a.prix || []).filter(x => x > 0);
  if (!p.length) return "Prix à définir";
  if (p.length === 1) return F(p[0]);
  return `${N(Math.min(...p))} à ${F(Math.max(...p))}`;
}
function photoURL(id) {
  if (!id) return "";
  if (S.backend === "claude") return "/_blob/" + id;
  return S.photos[id] || "";
}

/* ===================== File d'envoi (tient les coupures de réseau) ===================== */
const OB_KEY = "oth.outbox.v1";
const obKey = () => OB_KEY + (S.backend === "firebase" && S.fb ? "." + S.fb.conf.projectId : "");
const TRANSIENT = ["unavailable", "deadline_exceeded", "aborted", "internal", "unknown", "timeout", "network", "rate_limited", "cancelled", "offline"];
const OB = {
  ops: [], running: false,
  load() { this.ops = S.demo ? [] : ls.get(obKey(), []); if (!Array.isArray(this.ops)) this.ops = []; this.ops = this.ops.filter(o => !o.done); },
  save() { if (!S.demo) ls.set(obKey(), this.ops); },
  push(path, kind, data) {
    const op = {id: uid("op"), path, kind, data: clone(data), tries: 0, at: Date.now()};
    this.ops.push(op); this.save(); overlayChanged(path); this.run(); return op;
  },
  pending() { return this.ops.filter(o => !o.blocked && !o.done).length; },
  prune(test) {
    const now = Date.now(), before = this.ops.length;
    this.ops = this.ops.filter(o => !(o.done && (test(o.path) || now - o.doneAt > 30000)));
    if (this.ops.length !== before) this.save();
  },
  blocked() { return this.ops.filter(o => o.blocked).length; },
  async run() {
    if (this.running || !S.db) return;
    this.running = true;
    try {
      for (;;) {
        const op = this.ops.find(o => !o.blocked && !o.done);
        if (!op) break;
        const db = S.db;
        try {
          const ref = db.doc(op.path);
          if (op.kind === "set") await ref.set(op.data);
          else if (op.kind === "update") await ref.update(op.data);
          else if (op.kind === "delete") await ref.delete();
          if (db !== S.db) break;
          op.done = true; op.doneAt = Date.now(); this.save();
          if (S.syncErr === "offline") S.syncErr = null;
          renderSync();
        } catch (e) {
          if (db !== S.db) break;
          const code = (e && e.code) || "unavailable";
          op.tries++;
          if (!TRANSIENT.includes(code)) {
            op.blocked = code; op.err = String((e && e.message) || code); this.save();
            toast(syncErrMsg(code), "bad"); overlayChanged(op.path);
            if (code === "revoked") { S.mode = "revoked"; render(); break; }
            continue;
          }
          S.syncErr = "offline"; renderSync();
          await Promise.race([sleep(Math.min(30000, 1200 * Math.pow(2, Math.min(op.tries, 5))) + Math.random() * 700), new Promise(r => { this.wake = r; })]);
          this.wake = null;
        }
      }
    } finally { this.running = false; renderSync(); }
  },
  waitFor(op, ms) {
    return new Promise(res => {
      const t0 = Date.now();
      const tick = () => {
        if (op.done) return res("ok");
        if (op.blocked) return res("blocked");
        if (!this.ops.includes(op)) return res("ok");
        if (Date.now() - t0 > ms) return res("timeout");
        setTimeout(tick, 120);
      };
      tick();
    });
  },
  retryBlocked() { for (const o of this.ops) { delete o.blocked; delete o.err; o.tries = 0; } this.save(); S.syncErr = null; overlayChanged(""); this.run(); },
  dropBlocked() { this.ops = this.ops.filter(o => !o.blocked); this.save(); overlayChanged(""); }
};
function syncErrMsg(code) {
  if (code === "quota_exceeded") return "Limite gratuite du jour atteinte : les envois reprendront demain. Prévenez l'administrateur.";
  if (code === "revoked") return "Accès retiré sur cet appareil.";
  if (code === "not_granted" || code === "invalid_argument") return "Enregistrement refusé : cet appareil n'a pas ce droit.";
  if (code === "not_signed_in") return "Cet appareil n'est plus connecté. Reconnectez-le.";
  return "Enregistrement refusé (" + code + ").";
}
function applyPending(v, path) {
  let cur = v ? clone(v) : null;
  for (const op of OB.ops) {
    if (op.blocked || op.path !== path) continue;
    if (op.kind === "set") cur = clone(op.data);
    else if (op.kind === "update") { if (cur) deepMerge(cur, op.data); }
    else if (op.kind === "delete") cur = null;
  }
  return cur;
}
function writeDoc(path, patch) {
  const exists = S.exists[path] || OB.ops.some(o => o.path === path && !o.blocked && o.kind !== "delete");
  OB.push(path, exists ? "update" : "set", patch);
}
function refreshDerived() {
  S.config = applyPending(S.raw["config/general"], "config/general");
  const keys = new Set([...Object.keys(S.rawCat), ...Object.keys(cfg().commerces)]);
  for (const o of OB.ops) if (!o.blocked && o.path.startsWith("catalogue/")) keys.add(o.path.split("/")[1]);
  const cats = {};
  for (const k of keys) cats[k] = applyPending(S.rawCat[k] || null, "catalogue/" + k);
  S.catalogues = cats;
  const eq = applyPending(S.raw["equipe/membres"], "equipe/membres");
  S.membres = (eq && eq.membres) || {};
}
function recomputeOpen() {
  const byId = new Map();
  for (const d of S.rawOpen) byId.set(d.id, clone(d));
  for (const op of OB.ops) {
    if (op.blocked || !op.path.startsWith("sessions/")) continue;
    const id = op.path.split("/")[1];
    if (op.kind === "set") byId.set(id, {id, ...clone(op.data)});
    else if (op.kind === "update") { const cur = byId.get(id); if (cur) deepMerge(cur, op.data); }
    else if (op.kind === "delete") byId.delete(id);
  }
  S.sessionsOpen = [...byId.values()].filter(s => s.statut === "ouverte");
}
function recomputeCredits() {
  const byId = new Map();
  for (const d of S.rawCredits) byId.set(d.id, clone(d));
  for (const op of OB.ops) {
    if (op.blocked || !op.path.startsWith("credits/")) continue;
    const id = op.path.split("/")[1];
    if (op.kind === "set") byId.set(id, {id, ...clone(op.data)});
    else if (op.kind === "update") { const cur = byId.get(id); if (cur) deepMerge(cur, op.data); }
    else if (op.kind === "delete") byId.delete(id);
  }
  S.credits = [...byId.values()].filter(c => c.statut === "ouvert");
}
function recomputeResas() {
  const byId = new Map();
  for (const d of S.rawResa) byId.set(d.id, clone(d));
  for (const op of OB.ops) {
    if (op.blocked || !op.path.startsWith("reservations/")) continue;
    const id = op.path.split("/")[1];
    if (op.kind === "set") byId.set(id, {id, ...clone(op.data)});
    else if (op.kind === "update") { const cur = byId.get(id); if (cur) deepMerge(cur, op.data); }
    else if (op.kind === "delete") byId.delete(id);
  }
  S.resas = [...byId.values()];
}
function overlayChanged(path) {
  refreshDerived();
  if (!path || path.startsWith("sessions/")) recomputeOpen();
  if (!path || path.startsWith("credits/")) recomputeCredits();
  if (!path || path.startsWith("reservations/")) recomputeResas();
  if (path && path.startsWith("photos/")) { const op = OB.ops.filter(o => o.path === path && o.kind === "set").pop(); if (op && op.data && op.data.data) S.photos[path.split("/")[1]] = op.data.data; }
  render();
}

/* ===================== Abonnements aux données ===================== */
function unsubAll() {
  for (const u of S.subs) { try { u(); } catch (e) {} }
  S.subs = [];
  if (S.rep.unsub) { try { S.rep.unsub(); } catch (e) {} }
  S.rep.unsub = null; S.rep.raw = null; S.rep.from = null;
}
function onSubErr(e) {
  const code = e && e.code;
  if (code === "revoked") { S.mode = "revoked"; render(); return; }
  if (S.backend === "firebase" && (code === "not_granted" || code === "not_signed_in")) { fbOnDenied(code); return; }
  if (code === "unavailable") { toast("Connexion perdue. Rechargez la page si les chiffres ne bougent plus.", "warn"); return; }
  toast("Lecture impossible (" + (code || "erreur") + ")", "bad");
}
function subscribeAll() {
  unsubAll();
  const db = S.db;
  S.raw = {}; S.exists = {}; S.loaded = {}; S.rawOpen = []; S.rawCredits = []; S.rawCat = {}; S.rawResa = []; S.resas = [];
  const docPaths = ["config/general", "equipe/membres"];
  for (const p of docPaths) {
    S.subs.push(db.doc(p).onSnapshot(s => {
      if (db !== S.db) return;
      S.raw[p] = s.exists ? s.data() : null; S.exists[p] = !!s.exists; S.loaded[p] = true;
      OB.prune(x => x === p); refreshDerived(); onData();
    }, onSubErr));
  }
  S.subs.push(db.collection("sessions").where("statut", "==", "ouverte").onSnapshot(q => {
    if (db !== S.db) return;
    S.rawOpen = q.docs.map(d => ({id: d.id, ...d.data()})); S.loaded.open = true;
    OB.prune(x => x.startsWith("sessions/")); recomputeOpen(); onData();
  }, onSubErr));
  S.subs.push(db.collection("credits").where("statut", "==", "ouvert").onSnapshot(q => {
    if (db !== S.db) return;
    S.rawCredits = q.docs.map(d => ({id: d.id, ...d.data()})); S.loaded.credits = true;
    OB.prune(x => x.startsWith("credits/")); recomputeCredits(); onData();
  }, onSubErr));
  S.subs.push(db.collection("catalogue").onSnapshot(q => {
    if (db !== S.db) return;
    const m = {};
    for (const k of Object.keys(S.exists)) if (k.startsWith("catalogue/")) S.exists[k] = false;
    for (const d of q.docs) { m[d.id] = d.data(); S.exists["catalogue/" + d.id] = true; }
    S.rawCat = m; S.loaded.catalogue = true;
    OB.prune(x => x.startsWith("catalogue/")); refreshDerived(); onData();
  }, onSubErr));
  S.subs.push(db.collection("reservations").where("date", ">=", addDays(dkey(), -45)).onSnapshot(q => {
    if (db !== S.db) return;
    S.rawResa = q.docs.map(d => ({id: d.id, ...d.data()})); S.loaded.resa = true;
    OB.prune(x => x.startsWith("reservations/")); recomputeResas(); onData();
  }, onSubErr));
  if (S.backend !== "claude") {
    S.subs.push(db.collection("photos").onSnapshot(q => {
      if (db !== S.db) return;
      for (const d of q.docs) { const v = d.data(); if (v && v.data) S.photos[d.id] = v.data; }
      OB.prune(x => x.startsWith("photos/")); render();
    }, () => {}));
  }
}
function ensureReportSub() {
  if (!S.db) return;
  const r = periodRange(S.rep.period);
  const from = addDays(r.prevFrom, -1);
  if (S.rep.unsub && S.rep.from === from) return;
  if (S.rep.unsub) { try { S.rep.unsub(); } catch (e) {} }
  S.rep.from = from; S.rep.raw = null;
  const db = S.db;
  S.rep.unsub = db.collection("sessions").where("date", ">=", from).onSnapshot(q => {
    if (db !== S.db) return;
    S.rep.raw = q.docs.map(d => ({id: d.id, ...d.data()}));
    if (S.mode === "app" && effView() === "rapports") render();
  }, onSubErr);
}
function allLoaded() {
  return ["config/general", "equipe/membres", "catalogue", "open", "credits", "resa"].every(k => S.loaded[k]);
}
const autoLockMs = () => { const m = cfg().autoLockMin; return m ? m * 60000 : Infinity; };
function onData() {
  if (!allLoaded()) { render(); return; }
  if (["boot", "setup", "lock", "app"].includes(S.mode)) {
    const hasAdmin = Object.values(S.membres).some(m => m.acces === "admin" && m.actif !== false && m.pinHash);
    if (!hasAdmin) { S.mode = "setup"; S.op = null; }
    else if (S.mode === "boot" || S.mode === "setup") {
      const saved = S.demo ? null : ls.get("oth.op", null);
      const m = saved && S.membres[saved.id];
      if (m && m.actif !== false && m.acces !== "aucun" && Date.now() - saved.at < autoLockMs()) { S.op = saved.id; S.mode = "app"; }
      else S.mode = "lock";
    }
    if (S.mode === "app") { const m = opM(); if (!m || m.actif === false || m.acces === "aucun") { S.op = null; S.mode = "lock"; } }
  }
  render();
}

/* ===================== Périodes ===================== */
function periodRange(p) {
  const t = dkey();
  if (p === "yesterday") { const y = addDays(t, -1); return {from: y, to: y, prevFrom: addDays(t, -2), prevTo: addDays(t, -2), label: "Hier", vs: "par rapport à avant-hier"}; }
  if (p === "7d") return {from: addDays(t, -6), to: t, prevFrom: addDays(t, -13), prevTo: addDays(t, -7), label: "7 derniers jours", vs: "par rapport aux 7 jours précédents"};
  const d = parseKey(t);
  if (p === "month") {
    const lastPrev = new Date(d.getFullYear(), d.getMonth(), 0).getDate();
    return {from: dkey(new Date(d.getFullYear(), d.getMonth(), 1)), to: t,
      prevFrom: dkey(new Date(d.getFullYear(), d.getMonth() - 1, 1)), prevTo: dkey(new Date(d.getFullYear(), d.getMonth() - 1, Math.min(d.getDate(), lastPrev))),
      label: "Ce mois-ci", vs: "par rapport au même moment le mois dernier"};
  }
  if (p === "lastmonth") {
    return {from: dkey(new Date(d.getFullYear(), d.getMonth() - 1, 1)), to: dkey(new Date(d.getFullYear(), d.getMonth(), 0)),
      prevFrom: dkey(new Date(d.getFullYear(), d.getMonth() - 2, 1)), prevTo: dkey(new Date(d.getFullYear(), d.getMonth() - 1, 0)),
      label: "Le mois dernier", vs: "par rapport au mois d'avant"};
  }
  const now = new Date();
  return {from: t, to: t, prevFrom: addDays(t, -1), prevTo: addDays(t, -1), label: "Aujourd'hui", vs: `par rapport à hier à ${pad2(now.getHours())} h ${pad2(now.getMinutes())}`, prevCut: now.getHours() * 60 + now.getMinutes()};
}

/* ===================== Calculs ===================== */
function openSession(com) {
  const list = S.sessionsOpen.filter(s => s.commerce === com && s.statut === "ouverte");
  list.sort((a, b) => String(b.ouverture?.at || "").localeCompare(String(a.ouverture?.at || "")));
  return list[0] || null;
}
function sessionCalc(s) {
  const r = {n: 0, ca: 0, byMode: {}, cashSales: 0, cashIn: 0, cashOut: 0, remb: {}, rembTotal: 0, credit: 0, depenses: 0, annules: 0, fond: s?.ouverture?.fond || 0};
  if (!s) return r;
  for (const t of Object.values(s.tickets || {})) {
    if (t.statut === "annule") { r.annules++; continue; }
    r.n++; r.ca += t.net || 0;
    r.byMode[t.mode] = (r.byMode[t.mode] || 0) + (t.net || 0);
    if (t.mode === "especes") r.cashSales += t.net || 0;
    if (t.mode === "credit") r.credit += t.net || 0;
  }
  for (const g of Object.values(s.reglements || {})) { r.remb[g.mode] = (r.remb[g.mode] || 0) + g.montant; r.rembTotal += g.montant; if (g.mode === "especes") r.cashIn += g.montant; }
  for (const dp of Object.values(s.depenses || {})) { r.depenses += dp.montant; if ((dp.mode || "especes") === "especes") r.cashOut += dp.montant; }
  r.cashExpected = r.fond + r.cashSales + r.cashIn - r.cashOut;
  return r;
}
const creditPaid = c => Object.values(c.paiements || {}).reduce((s, p) => s + (p.montant || 0), 0);
const creditLeft = c => Math.max(0, (c.montant || 0) - creditPaid(c));
function visibleCredits() {
  const coms = opComs();
  return S.credits.filter(c => isAdmin() || coms.includes(c.commerce)).sort((a, b) => String(a.at).localeCompare(String(b.at)));
}
function blankBucket() {
  return {n: 0, ca: 0, remises: 0, annules: 0, annulesMontant: 0, byMode: {}, byCom: {}, hours: {}, sources: {}, canaux: {}, prest: {}, vendeurs: {}, arts: {}, cats: {}, dep: 0, depCats: {}, remb: 0, rembByMode: {}, clotures: []};
}
function computeReport(raw, range, comF) {
  const cur = blankBucket(), prev = blankBucket();
  for (const s of raw || []) {
    if (comF !== "all" && s.commerce !== comF) continue;
    for (const t of Object.values(s.tickets || {})) {
      let b = inRange(t.d, range.from, range.to) ? cur : inRange(t.d, range.prevFrom, range.prevTo) ? prev : null;
      if (b === prev && range.prevCut != null) { const x = new Date(t.at); if (x.getHours() * 60 + x.getMinutes() > range.prevCut) b = null; }
      if (!b) continue;
      if (t.statut === "annule") { b.annules++; b.annulesMontant += t.net || 0; continue; }
      const net = t.net || 0;
      b.n++; b.ca += net; b.remises += t.remise || 0;
      b.byMode[t.mode] = (b.byMode[t.mode] || 0) + net;
      b.byCom[s.commerce] = (b.byCom[s.commerce] || 0) + net;
      b.hours[t.h] = (b.hours[t.h] || 0) + net;
      if (t.source) b.sources[t.source] = (b.sources[t.source] || 0) + 1;
      if (t.canal) b.canaux[t.canal] = (b.canaux[t.canal] || 0) + net;
      if (t.prest) { const p = b.prest[t.prest] || (b.prest[t.prest] = {n: 0, ca: 0}); p.n++; p.ca += net; }
      if (t.par) { const v = b.vendeurs[t.par] || (b.vendeurs[t.par] = {n: 0, ca: 0}); v.n++; v.ca += net; }
      const ratio = t.total ? net / t.total : 1;
      for (const l of t.lignes || []) {
        const k = s.commerce + "|" + l.art;
        const a = b.arts[k] || (b.arts[k] = {nom: l.nom, com: s.commerce, qte: 0, ca: 0});
        const v = (l.prix || 0) * (l.qte || 0) * ratio;
        a.qte += l.qte || 0; a.ca += v;
        const catId = (catalog(s.commerce).articles[l.art] || {}).cat || "_autres";
        const ck = s.commerce + "|" + catId;
        b.cats[ck] = (b.cats[ck] || 0) + v;
      }
    }
    for (const dp of Object.values(s.depenses || {})) {
      const b = inRange(dp.d, range.from, range.to) ? cur : inRange(dp.d, range.prevFrom, range.prevTo) ? prev : null;
      if (!b) continue;
      b.dep += dp.montant || 0; b.depCats[dp.cat || "Autre"] = (b.depCats[dp.cat || "Autre"] || 0) + (dp.montant || 0);
    }
    for (const g of Object.values(s.reglements || {})) {
      if (!inRange(g.d, range.from, range.to)) continue;
      cur.remb += g.montant || 0; cur.rembByMode[g.mode] = (cur.rembByMode[g.mode] || 0) + (g.montant || 0);
    }
    if (s.statut === "cloturee" && s.cloture && inRange(s.date, range.from, range.to)) cur.clotures.push(s);
  }
  return {cur, prev};
}

/* ===================== Icônes ===================== */
const svg = p => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
const ICON = {
  caisse: svg('<rect x="3" y="11" width="18" height="9" rx="2"/><path d="M7 11V5h10v6"/><path d="M9.5 8h5"/><path d="M7 15.5h2M11 15.5h2M15 15.5h2"/>'),
  tickets: svg('<path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9 8h6M9 12h6M9 16h3"/>'),
  credits: svg('<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6 1.2 0 2.3.3 3.2.9"/><circle cx="17" cy="16" r="4"/><path d="M17 14v4M15.3 16h3.4"/>'),
  rapports: svg('<path d="M4 20V11M10 20V5M16 20v-6M21 20H3"/>'),
  gestion: svg('<path d="M4 6h9M17 6h3M4 12h3M11 12h9M4 18h11M19 18h1"/><circle cx="15" cy="6" r="2"/><circle cx="9" cy="12" r="2"/><circle cx="17" cy="18" r="2"/>'),
  agenda: svg('<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/><path d="M8 14h3v3H8z"/>')
};
const TABS = {caisse: "Caisse", tickets: "Tickets", credits: "Crédits", agenda: "Agenda", rapports: "Rapports", gestion: "Gestion"};

/* ===================== Rendu principal ===================== */
let rafPending = false;
function render() { if (rafPending) return; rafPending = true; requestAnimationFrame(() => { rafPending = false; doRender(); }); }
function doRender() {
  const app = $("#app");
  if (S.mode !== "app") {
    const fbm = S.mode === "welcome" || S.mode.startsWith("fb");
    const key = S.mode + "|" + S.demo + (fbm ? "|" + JSON.stringify(S.fbSetup || {}) + "|" + (S.fbNote || "") + "|" + (S.fbDenied || "") : "");
    if (app.dataset.screen !== key || S.mode === "boot") { app.innerHTML = screenHTML(); app.dataset.screen = key; }
    else if (S.mode === "lock") { const d = $("#lock-dots"); if (d) d.innerHTML = dotsHTML(S.pinBuf.length); }
    return;
  }
  app.dataset.screen = "app";
  const com = curCom();
  const key = com + "|" + S.demo + "|" + comColor(com) + "|" + comColor2(com);
  let shell = $(".shell", app);
  if (!shell || shell.dataset.key !== key) {
    app.innerHTML = `<div class="shell" data-key="${esc(key)}" style="--accent:${esc(comColor(com))};--pole-a:${esc(comColor(com))};--pole-b:${esc(comColor2(com))}">${S.demo ? demoBannerHTML() : ""}<header class="topbar" id="topbar"></header><nav class="tabs" id="tabs" aria-label="Sections"></nav><main class="main" id="main"></main></div>`;
    shell = $(".shell", app);
  }
  $("#topbar").innerHTML = topbarHTML();
  $("#tabs").innerHTML = tabsHTML();
  const main = $("#main");
  const view = effView();
  const same = main.dataset.view === view;
  const keep = {};
  $$("[data-scroll]", main).forEach(el => { keep[el.dataset.scroll] = el.scrollTop; });
  const top = main.scrollTop;
  main.dataset.view = view;
  main.className = "main" + (view === "caisse" ? " is-pos" : "");
  main.innerHTML = viewHTML();
  if (same) { main.scrollTop = top; $$("[data-scroll]", main).forEach(el => { if (keep[el.dataset.scroll] != null) el.scrollTop = keep[el.dataset.scroll]; }); }
  refreshTicketSheet();
}
function screenHTML() {
  if (S.mode === "welcome" || S.mode.startsWith("fb")) return fbScreenHTML();
  if (S.mode === "boot") return `<div class="boot"><div><div class="wordmark" style="color:var(--ink)">${wordmark(S.config ? comName(coms()[0]) : APP_NAME)}</div><p>Chargement de la caisse…</p></div></div>`;
  if (S.mode === "revoked") return `<div class="boot"><div><h1 class="lock-title">Accès retiré</h1><p>Cet appareil n'a plus accès à la plateforme. Rechargez la page ou demandez l'accès au propriétaire.</p></div></div>`;
  if (S.mode === "nodb") return `<div class="lock">${brandHTML()}<section class="lock-pane"><h1 class="lock-title">Ouvrez la plateforme depuis son lien Claude</h1><p>Ici, les ventes ne peuvent pas être enregistrées. Ouvrez le lien de la plateforme dans Claude, ou essayez-la sans rien enregistrer.</p><button class="btn btn-primary btn-lg" data-act="demo-start">Découvrir en mode démo</button></section></div>`;
  if (S.mode === "setup") {
    const can = canEditCfg();
    return `<div class="lock">${brandHTML()}<section class="lock-pane"><h1 class="lock-title">Bienvenue</h1>${can
      ? `<p>Créez d'abord votre profil administrateur. C'est lui qui fixe les prix, gère l'équipe et voit tous les chiffres.</p><button class="btn btn-primary btn-lg" data-act="setup-start">Créer mon profil</button><button class="linkish" data-act="demo-start">Ou découvrir en mode démo</button>`
      : `<p>La plateforme n'est pas encore configurée. Le propriétaire doit d'abord créer le profil administrateur.</p>`}</section></div>`;
  }
  return lockHTML();
}
const APP_NAME = "O'Caisse";
function wordmark(name) {
  const n = String(name || "");
  const m = n.match(/^(O['’])(.*)$/i);
  return m ? `<span class="o1">${esc(m[1])}</span>${esc(m[2])}` : esc(n);
}
function brandHTML() {
  const list = S.config ? coms().slice(0, 3) : [];
  const marks = list.length ? list.map((k, i) => `<div class="wordmark${i ? " wm-2" : ""}" style="--wm:${esc(comColor(k))}">${wordmark(comName(k))}</div>`).join("") : `<div class="wordmark">${wordmark(APP_NAME)}</div>`;
  return `<section class="lock-brand"><div class="lock-pole" aria-hidden="true"></div>${marks}<p class="lock-sub">Caisse et suivi des ventes</p></section>`;
}
const dotsHTML = n => [0, 1, 2, 3].map(i => `<i class="${i < n ? "on" : ""}"></i>`).join("");
function keypadHTML() {
  return `<div class="keypad">${[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => `<button class="key" data-act="pin-key" data-k="${n}">${n}</button>`).join("")}<span></span><button class="key" data-act="pin-key" data-k="0">0</button><button class="key key-del" data-act="pin-del" aria-label="Effacer le dernier chiffre">⌫</button></div>`;
}
function lockHTML() {
  return `<div class="lock">${brandHTML()}<section class="lock-pane">
    <h1 class="lock-title">Entrez votre code</h1>
    <div class="pin-dots" id="lock-dots" aria-live="polite">${dotsHTML(S.pinBuf.length)}</div>
    ${keypadHTML()}
    <p class="lock-help">Code oublié ? L'administrateur peut le changer dans Gestion, onglet Équipe.</p>
    ${S.demo
      ? `<div class="demo-codes">Codes de démonstration : <b>1234</b> administrateur, <b>2222</b> gérant du salon, <b>1111</b> caissière du salon, <b>3333</b> caissière du snack.</div><button class="linkish" data-act="demo-exit">Quitter la démo</button>`
      : `<button class="linkish" data-act="demo-start">Découvrir en mode démo</button>`}
  </section></div>`;
}
const demoBannerHTML = () => `<div class="demo-banner">Mode démo : rien n'est enregistré. <button class="linkish" data-act="demo-exit">Quitter la démo</button></div>`;
function syncState() {
  if (S.demo) return {cls: "demo", txt: "Démo"};
  const pend = OB.pending(), blk = OB.blocked();
  if (blk) return {cls: "bad", txt: `${blk} refusé${blk > 1 ? "s" : ""}`};
  if (pend) return S.syncErr === "offline" ? {cls: "warn", txt: `Hors ligne, ${pend} en attente`} : {cls: "busy", txt: `Envoi (${pend})`};
  return {cls: "ok", txt: "À jour"};
}
const syncPillHTML = () => { const s = syncState(); return `<button class="sync-pill ${s.cls}" data-act="sync-panel" aria-label="État de l'enregistrement : ${esc(s.txt)}"><i></i><span>${esc(s.txt)}</span></button>`; };
function renderSync() { const el = $(".sync-pill"); if (el) el.outerHTML = syncPillHTML(); }
function topbarHTML() {
  const com = curCom(), coms = opComs(), m = opM();
  const left = coms.length > 2
    ? `<button class="com-switch" data-act="com-menu" aria-label="Changer d'activité"><span class="tb-name">${esc(comName(com))}</span><span aria-hidden="true">▾</span></button>`
    : coms.length > 1
    ? `<div class="seg seg-com" role="group" aria-label="Activité">${coms.map(c => `<button data-act="set-com" data-c="${esc(c)}" aria-pressed="${c === com}">${esc(comName(c))}</button>`).join("")}</div>`
    : `<strong class="tb-name">${esc(comName(com))}</strong>`;
  return `<div class="tb-left"><span class="tb-mark" aria-hidden="true"></span>${left}</div>
    <div class="tb-right">${syncPillHTML()}<button class="op-chip" data-act="op-menu" aria-label="Utilisateur : ${esc(m?.nom || "")}">${avatarHTML(S.op)}<span class="op-name">${esc(firstName(m?.nom))}</span></button></div>`;
}
function allowedViews() { const v = ["caisse", "tickets", "credits", "agenda"]; if (isGerantPlus()) v.push("rapports"); if (isAdmin()) v.push("gestion"); return v; }
function effView() { const a = allowedViews(); return a.includes(S.view) ? S.view : a[0]; }
function tabsHTML() {
  const nCred = visibleCredits().length;
  const cur = effView();
  return allowedViews().map(v => `<button class="tab" data-act="tab" data-v="${v}" ${cur === v ? 'aria-current="page"' : ""}><span class="tab-ico">${ICON[v]}</span><span>${TABS[v]}</span>${v === "credits" && nCred ? `<i class="tab-badge">${nCred}</i>` : ""}</button>`).join("");
}
function viewHTML() {
  const v = effView();
  if (v === "tickets") return ticketsHTML();
  if (v === "credits") return creditsHTML();
  if (v === "agenda") return agendaHTML();
  if (v === "rapports") { ensureReportSub(); return rapportsHTML(); }
  if (v === "gestion") return gestionHTML();
  return caisseHTML();
}

/* ===================== Caisse ===================== */
const cartTotal = () => S.cart.lines.reduce((s, l) => s + l.prix * l.qte, 0);
const cartCount = () => S.cart.lines.reduce((s, l) => s + l.qte, 0);
const needsPrest = com => comType(com) === "salon" && prestataires(com).length > 0;
function caisseHTML() {
  const com = curCom();
  const sess = openSession(com);
  if (!sess) {
    return `<div class="closed"><div class="closed-card"><div class="closed-mark" aria-hidden="true">🔒</div>
      <h1>La caisse ${esc(comName(com))} est fermée</h1>
      <p>Comptez l'argent du tiroir, puis ouvrez la caisse pour commencer à encaisser.</p>
      <button class="btn btn-accent btn-lg btn-block" data-act="open-caisse">Ouvrir la caisse</button></div></div>`;
  }
  const {categories, articles} = catalog(com);
  const cats = Object.entries(categories).filter(([, c]) => !c.supprime).sort(byOrdre);
  if (S.cat !== "all" && !cats.some(([id]) => id === S.cat)) S.cat = "all";
  const arts = Object.entries(articles).filter(([, a]) => !a.supprime && a.actif !== false && (S.cat === "all" || a.cat === S.cat))
    .sort((a, b) => {
      const ca = categories[a[1].cat]?.ordre ?? 99, cb = categories[b[1].cat]?.ordre ?? 99;
      return ca - cb || byOrdre(a, b);
    });
  const qty = {}; for (const l of S.cart.lines) qty[l.art] = (qty[l.art] || 0) + l.qte;
  const tiles = arts.map(([id, a]) => {
    const pic = a.photo ? `<img src="${esc(photoURL(a.photo))}" alt="" loading="lazy">` : esc(a.emoji || "•");
    return `<button class="tile ${a.photo ? "has-photo" : ""} ${qty[id] ? "in-cart" : ""}" data-act="add" data-id="${esc(id)}">
      <span class="tile-pic">${pic}</span><span class="tile-name">${esc(a.nom)}</span><span class="tile-price">${esc(priceLabel(a))}</span>
      ${qty[id] ? `<span class="qty-badge">${qty[id]}</span>` : ""}</button>`;
  }).join("");
  const n = cartCount(), tot = cartTotal();
  return `<div class="pos">
    <section class="catalog" data-scroll="catalog" aria-label="Articles">
      <div class="cats"><div class="chips scroll" role="group" aria-label="Catégories">
        <button class="chip" data-act="cat" data-id="all" aria-pressed="${S.cat === "all"}">Tout</button>
        ${cats.map(([id, c]) => `<button class="chip" data-act="cat" data-id="${esc(id)}" aria-pressed="${S.cat === id}">${esc(c.nom)}</button>`).join("")}
      </div></div>
      ${tiles ? `<div class="grid">${tiles}</div>` : `<div class="empty">Aucun article ici. ${isAdmin() ? "Ajoutez-en dans Gestion, onglet Catalogue." : "L'administrateur peut en ajouter dans Gestion."}</div>`}
    </section>
    <aside class="ticket" aria-label="Ticket en cours">${ticketPanelHTML(com)}</aside>
    <div class="tk-bar">
      <button class="tk-bar-btn" data-act="ticket-sheet" ${n ? "" : "disabled"}><span>${n ? `${n} article${n > 1 ? "s" : ""}, voir le ticket` : "Ticket vide"}</span><strong>${F(tot)}</strong></button>
      <button class="btn pole" data-act="checkout" ${n ? "" : "disabled"}><span class="pole-label">Encaisser</span></button>
    </div>
  </div>`;
}
function ticketPanelHTML(com) {
  const lines = S.cart.lines, tot = cartTotal();
  let who = "";
  if (comType(com) === "salon") {
    const ps = prestataires(com);
    if (ps.length) who = `<div class="tk-who"><div class="tk-label">Réalisé par</div><div class="chips">${ps.map(([id, m]) => `<button class="chip" data-act="prest" data-id="${esc(id)}" aria-pressed="${S.cart.prest === id}">${avatarHTML(id)}${esc(firstName(m.nom))}</button>`).join("")}</div></div>`;
  } else {
    who = `<div class="tk-who"><div class="chips">${Object.entries(CANAUX).map(([k, v]) => `<button class="chip" data-act="canal" data-id="${k}" aria-pressed="${S.cart.canal === k}">${v}</button>`).join("")}</div></div>`;
  }
  const items = lines.map((l, i) => `<li class="line">
      <div class="ln-name">${esc(lineName(l))}${l.libre ? `<small>Prix libre : ${F(l.prix)}</small>` : `<small>${F(l.prix)} l'unité</small>`}</div>
      <div class="ln-total">${F(l.prix * l.qte)}</div>
      <div class="stepper"><button data-act="line-dec" data-i="${i}" aria-label="Retirer un ${esc(l.nom)}">−</button><span>${l.qte}</span><button data-act="line-inc" data-i="${i}" aria-label="Ajouter un ${esc(l.nom)}">+</button></div>
    </li>`).join("");
  return `<div class="tk">
    <div class="tk-head"><h2>Ticket</h2>${lines.length ? `<button class="linkish" data-act="cart-clear">Vider</button>` : `<button class="linkish" data-act="close-caisse">Clôturer la caisse</button>`}</div>
    ${who}
    <ul class="tk-lines" data-scroll="lines">${items || `<li class="tk-empty">Touchez un article pour l'ajouter.</li>`}</ul>
    <div class="tk-foot"><div class="total-row"><span>Total</span><strong>${F(tot)}</strong></div>
      <button class="btn pole btn-block" data-act="checkout" ${lines.length ? "" : "disabled"}><span class="pole-label">Encaisser</span></button></div>
  </div>`;
}
function refreshTicketSheet() {
  if (!S.tkSheet) return;
  if (!document.body.contains(S.tkSheet.wrap) || S.mode !== "app" || effView() !== "caisse") { S.tkSheet = null; return; }
  const el = S.tkSheet.el.querySelector(".tk-sheet-body");
  if (el) el.innerHTML = ticketPanelHTML(curCom());
  if (!S.cart.lines.length) { S.tkSheet.close(); S.tkSheet = null; }
}
function addLine(art, a, prix, opts = {}) {
  const v = opts.var || "";
  const ex = S.cart.lines.find(l => l.art === art && l.prix === prix && (l.var || "") === v && !a.libre);
  if (ex) ex.qte++;
  else S.cart.lines.push({art, nom: a.nom, var: v, prix, qte: 1, libre: !!a.libre || !(a.prix || []).length});
  if (!opts.silent) render();
}

/* ===================== Tickets de la session ===================== */
function ticketSummary(t) {
  const parts = (t.lignes || []).map(l => (l.qte > 1 ? `${l.qte} × ` : "") + lineName(l));
  return parts.join(", ") || "Ticket";
}
function ticketsHTML() {
  const com = curCom(), s = openSession(com);
  if (!s) return `<div class="page"><div class="page-head"><h1>Tickets ${esc(comName(com))}</h1></div><div class="panel empty">La caisse ${esc(comName(com))} est fermée. Ouvrez-la depuis l'onglet Caisse pour voir les tickets du jour.</div></div>`;
  const c = sessionCalc(s);
  const tickets = Object.values(s.tickets || {}).sort((a, b) => String(b.at).localeCompare(String(a.at)));
  const deps = Object.values(s.depenses || {}).sort((a, b) => String(b.at).localeCompare(String(a.at)));
  const regs = Object.values(s.reglements || {}).sort((a, b) => String(b.at).localeCompare(String(a.at)));
  const summary = isGerantPlus() ? `<section class="panel"><div class="sum-grid">
      <div class="sum"><span>Tickets</span><b>${c.n}</b></div>
      <div class="sum"><span>Encaissé</span><b>${F(c.ca)}</b></div>
      <div class="sum"><span>Dépenses</span><b>${F(c.depenses)}</b></div>
      <div class="sum"><span>Espèces attendues</span><b>${F(c.cashExpected)}</b></div>
    </div>
    <div class="chips" style="margin-top:10px">${Object.entries(c.byMode).map(([k, v]) => `<span class="badge"><i class="dot" style="background:${esc(modeColor(k))}"></i>${esc(modeName(k))} ${F(v)}</span>`).join("")}</div>
  </section>` : "";
  return `<div class="page">
    <div class="page-head"><div><h1>Caisse ${esc(comName(com))}</h1><p class="muted">Ouverte à ${hm(s.ouverture?.at)} par ${esc(mName(s.ouverture?.par) || "?")}, fond de caisse ${F(s.ouverture?.fond)}</p></div>
      <div class="chips">${isGerantPlus() ? `<button class="btn" data-act="add-expense">Ajouter une dépense</button>` : ""}<button class="btn btn-primary" data-act="close-caisse">Clôturer la caisse</button></div></div>
    ${summary}
    <section class="panel"><h2>Tickets <span class="count">${tickets.length}</span></h2>
      ${tickets.length ? `<ul class="list">${tickets.map(t => `<li><button class="row-item ${t.statut === "annule" ? "annule" : ""}" data-act="ticket-detail" data-id="${esc(t.id)}">
        <span class="tno">N° ${t.n}</span>
        <span class="ri-main"><b>${esc(ticketSummary(t))}</b><span class="meta"><span>${hm(t.at)}</span><span>${esc(modeName(t.mode))}</span>${t.prest ? `<span>${esc(firstName(mName(t.prest)))}</span>` : ""}${t.canal ? `<span>${esc(CANAUX[t.canal] || "")}</span>` : ""}${t.statut === "annule" ? `<span class="badge bad">Annulé</span>` : ""}</span></span>
        <span class="amt">${F(t.net)}</span></button></li>`).join("")}</ul>` : `<p class="empty">Aucun ticket pour l'instant.</p>`}
    </section>
    ${deps.length ? `<section class="panel"><h2>Dépenses <span class="count">${deps.length}</span></h2><ul class="list">${deps.map(d => `<li><div class="row-item" style="cursor:default"><span class="ri-main"><b>${esc(d.cat)}</b><span class="meta"><span>${hm(d.at)}</span><span>${esc(modeName(d.mode || "especes"))}</span>${d.note ? `<span>${esc(d.note)}</span>` : ""}<span>${esc(firstName(mName(d.par)))}</span></span></span><span class="amt">− ${F(d.montant)}</span></div></li>`).join("")}</ul></section>` : ""}
    ${regs.length ? `<section class="panel"><h2>Remboursements de crédit <span class="count">${regs.length}</span></h2><ul class="list">${regs.map(g => `<li><div class="row-item" style="cursor:default"><span class="ri-main"><b>${esc(g.client?.nom || "Client")}</b><span class="meta"><span>${hm(g.at)}</span><span>${esc(modeName(g.mode))}</span></span></span><span class="amt">+ ${F(g.montant)}</span></div></li>`).join("")}</ul></section>` : ""}
  </div>`;
}

/* ===================== Crédits ===================== */
function creditsHTML() {
  const list = visibleCredits();
  const total = list.reduce((s, c) => s + creditLeft(c), 0);
  return `<div class="page">
    <div class="page-head"><div><h1>Crédits en cours</h1><p class="muted">${list.length ? `${list.length} client${list.length > 1 ? "s" : ""} doivent au total ${F(total)}` : "Personne ne doit d'argent."}</p></div></div>
    ${list.length ? `<section class="panel"><ul class="list">${list.map(c => {
      const paid = creditPaid(c);
      return `<li><button class="row-item" data-act="credit-pay" data-id="${esc(c.id)}">
        <span class="ri-main"><b>${esc(c.client?.nom || "Client")}</b><span class="meta">${c.client?.tel ? `<span>${esc(c.client.tel)}</span>` : ""}<span>${esc(dLabel(c.d))}</span>${comBadge(c.commerce)}${paid ? `<span>Déjà payé ${F(paid)}</span>` : ""}</span></span>
        <span class="amt">${F(creditLeft(c))}</span></button></li>`;
    }).join("")}</ul></section>` : `<div class="panel empty">Quand un client paie plus tard, choisissez « Crédit » au moment d'encaisser. Il apparaîtra ici jusqu'à ce qu'il rembourse.</div>`}
  </div>`;
}

/* ===================== Rapports ===================== */
function barsHTML(rows, total, fmt = F) {
  return `<div class="bars">${rows.map(([label, v, color]) => `<div class="bar-row"><span class="bl" title="${esc(label)}">${esc(label)}</span><span class="bar"><i style="width:${total ? Math.max(2, (v / total) * 100) : 0}%${color ? `;background:${esc(color)}` : ""}"></i></span><span class="amt">${fmt(v)}</span></div>`).join("")}</div>`;
}
function rapportsHTML() {
  const range = periodRange(S.rep.period);
  const all = coms();
  if (!isAdmin()) S.rep.com = curCom();
  if (S.rep.com !== "all" && !all.includes(S.rep.com)) S.rep.com = "all";
  const comF = isAdmin() ? S.rep.com : curCom();
  const periods = [["today", "Aujourd'hui"], ["yesterday", "Hier"], ["7d", "7 jours"], ["month", "Ce mois"], ["lastmonth", "Mois dernier"]];
  const filters = `<div class="rep-filters" style="margin-bottom:12px"><div class="seg" role="group" aria-label="Période">${periods.map(([k, v]) => `<button data-act="rep-period" data-p="${k}" aria-pressed="${S.rep.period === k}">${v}</button>`).join("")}</div>
    ${isAdmin() && all.length > 1 ? `<div class="seg" role="group" aria-label="Activité">${[["all", "Tout"], ...all.map(k => [k, comName(k)])].map(([k, v]) => `<button data-act="rep-com" data-c="${esc(k)}" aria-pressed="${S.rep.com === k}">${esc(v)}</button>`).join("")}</div>` : ""}</div>`;
  const when = range.from === range.to ? dLabel(range.from) : `du ${dLabel(range.from)} au ${dLabel(range.to)}`;
  const head = `<div class="page-head"><div><h1>Rapports${comF === "all" ? "" : " " + esc(comName(comF))}</h1><p class="muted">${esc(when)}</p></div><button class="btn" data-act="export-csv">Exporter les ventes (Excel)</button></div>`;
  if (!S.rep.raw) return `<div class="page">${head}${filters}<div class="panel empty">Chargement des chiffres…</div></div>`;
  const {cur, prev} = computeReport(S.rep.raw, range, comF);
  const delta = prev.ca > 0 ? Math.round(((cur.ca - prev.ca) / prev.ca) * 100) : null;
  const deltaHTML = delta === null ? `<span class="delta">Pas encore de chiffre à comparer</span>`
    : `<span class="delta ${delta >= 0 ? "up" : "down"}">${delta >= 0 ? "+" : "−"}${Math.abs(delta)} % ${esc(range.vs)}</span>`;
  let split = "";
  const splitComs = all.filter(k => cur.byCom[k]);
  if (comF === "all" && cur.ca > 0 && splitComs.length > 1) {
    split = `<div class="split" aria-hidden="true">${splitComs.map(k => `<i style="width:${(cur.byCom[k] / cur.ca) * 100}%;background:${esc(comColor(k))}"></i>`).join("")}</div>
      <div class="split-legend">${splitComs.map(k => `<span><i class="dot" style="background:${esc(comColor(k))}"></i> ${esc(comName(k))} <b>${F(cur.byCom[k])}</b></span>`).join("")}</div>`;
  }
  const hero = `<section class="rep-hero"><div class="lbl">Chiffre d'affaires</div><div class="hero-num">${F(cur.ca)}</div>${deltaHTML}${split}</section>`;
  const kpis = `<section class="panel"><div class="sum-grid">
      <div class="sum"><span>Tickets</span><b>${cur.n}</b></div>
      <div class="sum"><span>Panier moyen</span><b>${F(cur.n ? cur.ca / cur.n : 0)}</b></div>
      <div class="sum"><span>Dépenses</span><b>${F(cur.dep)}</b></div>
      <div class="sum"><span>Recettes moins dépenses</span><b>${F(cur.ca - cur.dep)}</b></div></div>
      ${cur.annules || cur.remises ? `<p class="muted" style="margin:10px 0 0">${cur.annules ? `${cur.annules} ticket${cur.annules > 1 ? "s" : ""} annulé${cur.annules > 1 ? "s" : ""} (${F(cur.annulesMontant)}). ` : ""}${cur.remises ? `Remises accordées : ${F(cur.remises)}.` : ""}</p>` : ""}</section>`;
  const modeRows = Object.entries(cur.byMode).sort((a, b) => b[1] - a[1]).map(([k, v]) => [modeName(k), v, modeColor(k)]);
  const modesP = `<section class="panel"><h2>Encaissements par mode</h2>${modeRows.length ? barsHTML(modeRows, cur.ca) : `<p class="muted">Aucune vente sur la période.</p>`}${cur.remb ? `<p class="muted" style="margin:8px 0 0">Remboursements de crédit reçus : <b>${F(cur.remb)}</b></p>` : ""}</section>`;
  const hrs = []; for (let h = 9; h <= 23; h++) hrs.push(h);
  let early = 0; for (let h = 0; h < 9; h++) early += cur.hours[h] || 0;
  const hv = hrs.map(h => (cur.hours[h] || 0) + (h === 9 ? early : 0));
  const hmax = Math.max(0, ...hv);
  const eve = hrs.reduce((s2, h, i) => s2 + (h >= 20 ? hv[i] : 0), 0);
  const hoursP = `<section class="panel"><h2>Affluence par heure</h2>
    <div class="hours" role="img" aria-label="Chiffre d'affaires par heure, de 9 h à 23 h">${hv.map((v, i) => `<div class="h ${hrs[i] >= 20 ? "eve" : ""}" title="${hrs[i]} h : ${esc(F(v))}"><i style="height:${hmax ? Math.max(1.5, (v / hmax) * 100) : 0}%"></i></div>`).join("")}</div>
    <div class="hours-axis" aria-hidden="true">${hrs.map(h => `<span>${h % 2 ? h + "h" : ""}</span>`).join("")}</div>
    ${cur.ca ? `<p class="big-note"><b>${Math.round((eve / cur.ca) * 100)} %</b> du chiffre est fait après 20 h.</p>` : ""}</section>`;
  const prestRows = Object.entries(cur.prest).sort((a, b) => b[1].ca - a[1].ca);
  let totalCom = 0;
  const prestP = prestRows.length ? `<section class="panel"><h2>Coiffeurs et commissions</h2><div class="tbl-wrap"><table class="t"><thead><tr><th>Coiffeur</th><th class="n">Clients</th><th class="n">Chiffre</th><th class="n">Taux</th><th class="n">À verser</th></tr></thead><tbody>${prestRows.map(([id, p]) => {
      const m = S.membres[id] || {}; const pct = m.commission || 0; const due = Math.round((p.ca * pct) / 100); totalCom += due;
      return `<tr><td class="strong">${esc(m.nom || "Ancien membre")}</td><td class="n">${p.n}</td><td class="n">${F(p.ca)}</td><td class="n">${pct ? pct + " %" : "Fixe"}</td><td class="n strong">${pct ? F(due) : "—"}</td></tr>`;
    }).join("")}</tbody></table></div>${totalCom ? `<p class="muted" style="margin:8px 0 0">Total des commissions : <b>${F(totalCom)}</b></p>` : ""}</section>` : "";
  const catRows = Object.entries(cur.cats).sort((a, b) => b[1] - a[1]).map(([k, v]) => {
    const [c, catId] = k.split("|");
    const nom = catId === "_autres" ? "Autres" : ((catalog(c).categories[catId] || {}).nom || "Autres");
    return [comF === "all" && all.length > 1 ? `${nom} · ${comName(c)}` : nom, v, comColor(c)];
  });
  const catP = `<section class="panel"><h2>Chiffre par catégorie</h2>${catRows.length ? barsHTML(catRows, catRows[0][1]) : `<p class="muted">Aucune vente sur la période.</p>`}</section>`;
  const top = Object.values(cur.arts).sort((a, b) => b.ca - a.ca).slice(0, 8);
  const topP = `<section class="panel"><h2>Ce qui se vend le mieux</h2>${top.length ? barsHTML(top.map(a => [`${a.nom} × ${a.qte}`, a.ca, comColor(a.com)]), top[0].ca) : `<p class="muted">Aucune vente sur la période.</p>`}</section>`;
  const src = Object.entries(cur.sources).sort((a, b) => b[1] - a[1]);
  const srcTot = src.reduce((s2, x) => s2 + x[1], 0);
  const srcP = `<section class="panel"><h2>Nouveaux clients : comment ils vous ont connus</h2>${src.length ? barsHTML(src.map(([k, v]) => [k, v, "var(--blue)"]), srcTot, v => `${v} client${v > 1 ? "s" : ""}`) : `<p class="muted">Aucun nouveau client noté. Au moment d'encaisser, touchez la source quand c'est un premier passage : vous saurez ce que rapportent Facebook, TikTok ou le bouche-à-oreille.</p>`}</section>`;
  const canRows = Object.entries(cur.canaux).sort((a, b) => b[1] - a[1]);
  const canTot = canRows.reduce((s2, x) => s2 + x[1], 0);
  const canP = canRows.length ? `<section class="panel"><h2>Sur place, à emporter, livraison</h2>${barsHTML(canRows.map(([k, v]) => [CANAUX[k] || k, v, "var(--red)"]), canTot)}</section>` : "";
  const depRows = Object.entries(cur.depCats).sort((a, b) => b[1] - a[1]);
  const depP = `<section class="panel"><h2>Dépenses</h2>${depRows.length ? barsHTML(depRows.map(([k, v]) => [k, v, "var(--muted)"]), cur.dep) : `<p class="muted">Aucune dépense notée sur la période.</p>`}</section>`;
  const vendRows = Object.entries(cur.vendeurs).sort((a, b) => b[1].ca - a[1].ca);
  const vendP = vendRows.length ? `<section class="panel"><h2>Encaissé par</h2><div class="tbl-wrap"><table class="t"><thead><tr><th>Caissier</th><th class="n">Tickets</th><th class="n">Montant</th></tr></thead><tbody>${vendRows.map(([id, v]) => `<tr><td class="strong">${esc(mName(id) || "Ancien membre")}</td><td class="n">${v.n}</td><td class="n">${F(v.ca)}</td></tr>`).join("")}</tbody></table></div></section>` : "";
  const upcoming = S.resas.filter(r => r.statut !== "annulee" && r.date >= dkey() && (comF === "all" || r.commerce === comF));
  const resaP = upcoming.length ? `<div class="notice info">Réservations à venir : <b>${upcoming.length}</b>, pour ${F(upcoming.reduce((s2, r) => s2 + (r.montant || 0), 0))} dont ${F(upcoming.reduce((s2, r) => s2 + resaPaid(r), 0))} d'acomptes déjà reçus. <button class="linkish" data-act="tab" data-v="agenda">Voir l'agenda</button></div>` : "";
  const clo = cur.clotures.slice().sort((a, b) => String(b.cloture.at).localeCompare(String(a.cloture.at)));
  const ecartTot = clo.reduce((s2, x) => s2 + (x.cloture.ecart || 0), 0);
  const cloP = `<section class="panel"><h2>Clôtures de caisse</h2>${clo.length ? `<div class="tbl-wrap"><table class="t"><thead><tr><th>Jour</th><th>Caisse</th><th>Par</th><th class="n">Attendu</th><th class="n">Compté</th><th class="n">Écart</th><th></th></tr></thead><tbody>${clo.map(s2 => {
      const e = s2.cloture.ecart || 0;
      return `<tr><td>${esc(dLabel(s2.date))}</td><td>${comBadge(s2.commerce)}</td><td>${esc(firstName(mName(s2.cloture.par)) || "?")}</td><td class="n">${F(s2.cloture.attendu)}</td><td class="n">${F(s2.cloture.compte)}</td><td class="n strong ${e < 0 ? "ecart-neg" : e > 0 ? "ecart-pos" : ""}">${e === 0 ? "0" : (e > 0 ? "+" : "−") + N(Math.abs(e))}</td><td class="n"><button class="linkish" data-act="z-report" data-id="${esc(s2.id)}">Voir</button></td></tr>`;
    }).join("")}</tbody></table></div><p class="muted" style="margin:8px 0 0">Écart cumulé : <b class="${ecartTot < 0 ? "ecart-neg" : ""}">${ecartTot === 0 ? "aucun" : (ecartTot > 0 ? "+" : "−") + F(Math.abs(ecartTot))}</b></p>` : `<p class="muted">Aucune caisse clôturée sur la période.</p>`}</section>`;
  const credList = S.credits.filter(c => comF === "all" || c.commerce === comF);
  const credTot = credList.reduce((s2, c) => s2 + creditLeft(c), 0);
  const credP = credList.length ? `<div class="notice info">Crédits en cours : <b>${F(credTot)}</b> dus par ${credList.length} client${credList.length > 1 ? "s" : ""}. <button class="linkish" data-act="tab" data-v="credits">Voir les crédits</button></div>` : "";
  const list = [modesP, hoursP, catP, topP, prestP, srcP, canP, depP, vendP].filter(Boolean);
  let grid = "";
  for (let i = 0; i < list.length; i += 2) grid += list[i + 1] ? `<div class="cols">${list[i]}${list[i + 1]}</div><div style="height:12px"></div>` : list[i];
  return `<div class="page">${head}${filters}${hero}${kpis}${credP}${resaP}${grid}${cloP}</div>`;
}
async function exportCSV() {
  const range = periodRange(S.rep.period);
  const comF = isAdmin() ? S.rep.com : curCom();
  const rows = [];
  for (const s of S.rep.raw || []) {
    if (comF !== "all" && s.commerce !== comF) continue;
    for (const t of Object.values(s.tickets || {})) {
      if (!inRange(t.d, range.from, range.to)) continue;
      rows.push([t.d, hm(t.at), comName(s.commerce), t.n, (t.lignes || []).map(l => `${l.qte} x ${lineName(l)} (${l.prix})`).join(" + "), mName(t.prest), mName(t.par), modeName(t.mode), t.total, t.remise || 0, t.net, t.statut === "annule" ? "Annulé" : "Validé", t.client?.nom || "", t.client?.tel || "", t.source || "", CANAUX[t.canal] || ""]);
    }
  }
  if (!rows.length) { toast("Aucune vente à exporter sur cette période.", "warn"); return; }
  rows.sort((a, b) => (a[0] + a[1]).localeCompare(b[0] + b[1]));
  const head = ["Date", "Heure", "Activité", "N° ticket", "Articles", "Réalisé par", "Caissier", "Mode de paiement", "Total", "Remise", "Net", "Statut", "Client", "Téléphone", "Source", "Service"];
  const cell = v => { const s = String(v ?? ""); return /[";\r\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s; };
  const csv = "\uFEFF" + [head, ...rows].map(r => r.map(cell).join(";")).join("\r\n");
  const filename = `ventes_${comF === "all" ? "tout" : slug(comName(comF))}_${range.from}_${range.to}.csv`;
  if (!S.downloads) { saveFileLocal(filename, csv, "text/csv;charset=utf-8"); return; }
  try { await S.downloads.save({filename, data: csv}); toast("Fichier enregistré"); }
  catch (e) {
    if (e && e.code === "declined") return;
    toast(e && e.code === "extension_not_enabled" ? "Les fichiers Excel ne peuvent pas être téléchargés ici." : "L'export a échoué. Réessayez.", "bad");
  }
}

function slug(v) { return String(v || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "x"; }
function saveFileLocal(filename, data, type) {
  try {
    const url = URL.createObjectURL(new Blob([data], {type}));
    const a = document.createElement("a"); a.href = url; a.download = filename; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 4000); toast("Fichier téléchargé");
  } catch (e) { toast("Le téléchargement a échoué.", "bad"); }
}

/* ===================== Gestion ===================== */
function gestionHTML() {
  const tabs = [["catalogue", "Catalogue"], ["equipe", "Équipe"], ["reglages", "Réglages"]];
  if (S.backend === "firebase" && S.me.isOwner) tabs.push(["appareils", "Appareils"]);
  if (!tabs.some(t => t[0] === S.gestionTab)) S.gestionTab = "catalogue";
  const head = `<div class="page-head"><h1>Gestion</h1><div class="seg" role="group" aria-label="Rubrique">${tabs.map(([k, v]) => `<button data-act="g-tab" data-t="${k}" aria-pressed="${S.gestionTab === k}">${v}</button>`).join("")}</div></div>`;
  const note = canEditCfg() ? "" : `<div class="notice">${S.backend === "claude"
    ? "Ce compte Claude peut encaisser, mais pas modifier les réglages. Ouvrez la plateforme avec le compte du propriétaire, ou donnez à ce compte le droit « Peut modifier »."
    : "Cet appareil peut encaisser, mais pas modifier les prix, l'équipe ni les réglages. Faites ces changements depuis l'appareil connecté avec le compte propriétaire."}</div>`;
  const body = S.gestionTab === "equipe" ? equipeHTML() : S.gestionTab === "reglages" ? reglagesHTML() : S.gestionTab === "appareils" ? appareilsHTML() : catalogueHTML();
  return `<div class="page">${head}${note}${body}</div>`;
}
function catalogueHTML() {
  if (!S.catalogCom || !cfg().commerces[S.catalogCom]) S.catalogCom = curCom();
  const com = S.catalogCom;
  const {categories, articles} = catalog(com);
  const cats = Object.entries(categories).filter(([, c]) => !c.supprime).sort(byOrdre);
  const arts = Object.entries(articles).filter(([, a]) => !a.supprime);
  const dis = canEditCfg() ? "" : "disabled";
  const groups = cats.map(([cid, c]) => [cid, c.nom, arts.filter(([, a]) => a.cat === cid).sort(byOrdre)]);
  const orphans = arts.filter(([, a]) => !categories[a.cat] || categories[a.cat].supprime);
  if (orphans.length) groups.push(["", "Sans catégorie", orphans.sort(byOrdre)]);
  const all = Object.keys(cfg().commerces).sort((x, y) => (cfg().commerces[x].ordre ?? 0) - (cfg().commerces[y].ordre ?? 0));
  const offerLoisirs = comType(com) === "snack" && !categories.c_loisirs && !Object.values(articles).some(a => a.reservable) && canEditCfg();
  return `${offerLoisirs ? `<div class="notice info">Nouveau : baby-foot, privatisation de l'espace, shooting photo, avec réservations et acomptes. <button class="linkish" data-act="import-loisirs">Ajouter la catégorie « Loisirs et événements »</button></div>` : ""}
    <div class="chips" style="margin-bottom:12px;justify-content:space-between;align-items:center">
      ${all.length > 1 ? `<div class="seg" role="group" aria-label="Activité">${all.map(c => `<button data-act="cat-com" data-c="${esc(c)}" aria-pressed="${com === c}">${esc(comName(c))}</button>`).join("")}</div>` : `<span></span>`}
      <div class="chips"><button class="btn" data-act="cat-new" ${dis}>Ajouter une catégorie</button><button class="btn btn-primary" data-act="art-new" ${dis}>Ajouter un article</button></div></div>
    ${groups.length ? groups.map(([cid, nom, list]) => `<section class="panel"><div class="panel-head"><h2>${esc(nom)} <span class="count">${list.length}</span></h2>${cid ? `<button class="linkish" data-act="cat-edit" data-id="${esc(cid)}" ${dis}>Renommer</button>` : ""}</div>
      ${list.length ? `<ul class="list">${list.map(([id, a]) => `<li><button class="row-item" data-act="art-edit" data-id="${esc(id)}" ${dis}><span class="tile-pic" style="width:44px;height:44px;font-size:25px">${a.photo && photoURL(a.photo) ? `<img src="${esc(photoURL(a.photo))}" alt="">` : esc(a.emoji || "•")}</span><span class="ri-main"><b>${esc(a.nom)}</b><span class="meta"><span>${esc(priceLabel(a))}</span>${a.reservable ? `<span class="badge">Sur réservation</span>` : ""}${a.actif === false ? `<span class="badge warn">Indisponible</span>` : ""}</span></span><span class="muted">Modifier</span></button></li>`).join("")}</ul>` : `<p class="muted">Aucun article dans cette catégorie.</p>`}</section>`).join("")
      : `<div class="panel empty">Le catalogue de ${esc(comName(com))} est vide. Ajoutez une catégorie, puis vos articles.</div>`}`;
}
function equipeHTML() {
  const list = Object.entries(S.membres).sort((a, b) => (a[1].actif === false) - (b[1].actif === false) || String(a[1].commerce).localeCompare(String(b[1].commerce)) || String(a[1].nom).localeCompare(String(b[1].nom), "fr"));
  const dis = canEditCfg() ? "" : "disabled";
  return `<div class="chips" style="margin-bottom:12px;justify-content:flex-end"><button class="btn btn-primary" data-act="mem-new" ${dis}>Ajouter une personne</button></div>
    <section class="panel"><ul class="list">${list.map(([id, m]) => `<li><button class="row-item" data-act="mem-edit" data-id="${esc(id)}" ${dis}>${avatarHTML(id)}<span class="ri-main"><b>${esc(m.nom)}</b><span class="meta"><span>${esc(ROLE_LABEL[m.acces] || m.acces)}</span><span>${m.commerce === "tous" ? "Toutes les activités" : esc(comName(m.commerce))}</span>${m.prestataire ? `<span>Coiffeur${m.commission ? `, commission ${m.commission} %` : ", salaire fixe"}</span>` : ""}${m.actif === false ? `<span class="badge">Inactif</span>` : ""}</span></span><span class="muted">Modifier</span></button></li>`).join("")}</ul></section>
    <div class="notice info">Un coiffeur n'a pas besoin de code s'il n'encaisse pas : il apparaît dans « Réalisé par » à la caisse, et sa commission se calcule toute seule dans les rapports.</div>`;
}
function reglagesHTML() {
  const c = cfg(); const dis = canEditCfg() ? "" : "disabled";
  const locks = [[5, "5 min"], [15, "15 min"], [30, "30 min"], [60, "1 h"], [0, "Jamais"]];
  const pr = printPrefs();
  const acts = Object.entries(c.commerces).sort((a, b) => (a[1].ordre ?? 0) - (b[1].ordre ?? 0));
  const backendLabel = S.demo ? "Démonstration" : S.backend === "firebase" ? "Firebase (votre base)" : S.backend === "claude" ? "Claude" : "—";
  return `<div class="cols">
    <section class="panel"><div class="panel-head"><h2>Activités</h2><button class="linkish" data-act="act-new" ${dis}>Ajouter une activité</button></div>
      <ul class="list">${acts.map(([k, a]) => `<li><button class="row-item" data-act="act-edit" data-id="${esc(k)}" ${dis}><span class="act-dot" style="background:linear-gradient(135deg,${esc(a.couleur)} 50%,${esc(a.couleur2)} 50%)"></span><span class="ri-main"><b>${esc(a.nom)}</b><span class="meta"><span>${esc((TYPES[a.type] || a.type).split(" :")[0])}</span>${a.actif === false ? `<span class="badge">Désactivée</span>` : ""}</span></span><span class="muted">Modifier</span></button></li>`).join("")}</ul>
      <p class="muted" style="margin:8px 0 0">Chaque activité a sa caisse et son catalogue. Un service vendu au snack (baby-foot, privatisation) se range plutôt dans le catalogue du snack.</p></section>
    <section class="panel"><div class="panel-head"><h2>Ticket imprimé</h2><button class="linkish" data-act="set-ticket" ${dis}>Modifier</button></div>
      <div class="kv"><span>Adresse</span><b>${esc(c.ticket.adresse || "—")}</b></div>
      <div class="kv"><span>Téléphone</span><b>${esc(c.ticket.tel || "—")}</b></div>
      <div class="kv"><span>Message</span><b>${esc(c.ticket.message || "—")}</b></div></section>
    <section class="panel"><div class="panel-head"><h2>Impression sur cet appareil</h2><button class="linkish" data-act="print-settings">Modifier</button></div>
      <div class="kv"><span>Largeur du papier</span><b>${pr.largeur} mm</b></div>
      <div class="kv"><span>Après chaque vente</span><b>${pr.auto ? "Impression automatique" : "Impression sur demande"}</b></div>
      <button class="btn" style="margin-top:10px" data-act="print-test">Imprimer un ticket d'essai</button></section>
    <section class="panel"><h2>Modes de paiement acceptés</h2>${c.modes.map(m => `<label class="check"><input type="checkbox" data-act="mode-toggle" data-id="${esc(m.id)}" ${m.actif !== false ? "checked" : ""} ${m.id === "especes" || dis ? "disabled" : ""}><i class="dot" style="background:${esc(m.couleur)}"></i>${esc(m.nom)}</label>`).join("")}</section>
    <section class="panel"><div class="panel-head"><h2>Comment les clients vous connaissent</h2><button class="linkish" data-act="set-sources" ${dis}>Modifier</button></div><div class="chips">${c.sources.map(x => `<span class="badge">${esc(x)}</span>`).join("")}</div></section>
    <section class="panel"><div class="panel-head"><h2>Catégories de dépenses</h2><button class="linkish" data-act="set-depenses" ${dis}>Modifier</button></div><div class="chips">${c.depenses.map(x => `<span class="badge">${esc(x)}</span>`).join("")}</div></section>
    <section class="panel"><h2>Verrouillage automatique</h2><p class="muted" style="margin:6px 0 10px">Après ce délai sans utilisation, l'appareil redemande le code.</p><div class="seg" role="group" aria-label="Délai">${locks.map(([v, l]) => `<button data-act="set-lock" data-v="${v}" aria-pressed="${(c.autoLockMin || 0) === v}" ${dis}>${l}</button>`).join("")}</div></section>
    <section class="panel"><h2>Cet appareil</h2>
      <div class="kv"><span>Base de données</span><b>${esc(backendLabel)}</b></div>
      <div class="kv"><span>Modifier les réglages</span><b>${canEditCfg() ? "Autorisé" : "Non autorisé"}</b></div>
      <div class="kv"><span>Envois en attente</span><b>${OB.pending()}</b></div>
      ${S.backend === "firebase" ? `<div class="kv"><span>Compte connecté</span><b>${esc(S.fb && S.fb.user ? (S.fb.user.email || "") : "—")}</b></div><button class="btn" style="margin-top:10px" data-act="fb-signout">Déconnecter cet appareil</button>` : ""}</section>
  </div>
  <section class="panel" style="margin-top:12px"><h2>Repartir de zéro</h2><p class="muted" style="margin:6px 0 12px">Efface toutes les ventes, dépenses, clôtures, crédits et réservations, par exemple après vos essais. Le catalogue et l'équipe sont conservés.</p><button class="btn btn-danger" data-act="reset-data" ${dis}>Effacer les ventes</button></section>`;
}

/* ===================== Fenêtres ===================== */
function openSheet({html, actions = {}, onMount, onClose, wide = false, dismissable = true}) {
  const wrap = document.createElement("div");
  wrap.className = "sheet-wrap";
  wrap.innerHTML = `<div class="sheet ${wide ? "wide" : ""}" role="dialog" aria-modal="true">${html}</div>`;
  const el = wrap.firstElementChild;
  let closed = false;
  const api = {wrap, el, actions, dismissable, close() { if (closed) return; closed = true; wrap.remove(); if (onClose) onClose(api); }, isClosed: () => closed};
  wrap._api = api;
  wrap.addEventListener("click", e => { if (e.target === wrap && api.dismissable) api.close(); });
  $("#sheets").appendChild(wrap);
  if (onMount) onMount(api);
  const f = el.querySelector("[autofocus]");
  if (f) setTimeout(() => { try { f.focus(); } catch (e) {} }, 60);
  return api;
}
const topSheet = () => { const w = $$("#sheets .sheet-wrap"); return w.length ? w[w.length - 1]._api : null; };
function closeAllSheets() { $$("#sheets .sheet-wrap").forEach(w => w._api && w._api.close()); S.tkSheet = null; }
function enterSubmits(sh, act) {
  sh.el.addEventListener("keydown", e => {
    if (e.key === "Enter" && e.target.tagName === "INPUT" && e.target.type !== "checkbox") {
      const b = sh.el.querySelector(`[data-act="${act}"]`);
      if (b) { e.preventDefault(); b.click(); }
    }
  });
}
function toast(msg, kind = "") {
  const box = $("#toasts"); if (!box) return;
  const el = document.createElement("div");
  el.className = "toast " + kind; el.textContent = msg; el.setAttribute("role", kind === "bad" ? "alert" : "status");
  box.appendChild(el);
  setTimeout(() => { el.classList.add("out"); setTimeout(() => el.remove(), 320); }, 2800);
}
function shakeEl(el) { if (!el) return; el.classList.remove("shake"); void el.offsetWidth; el.classList.add("shake"); }
function askApproval(com, title) {
  return new Promise(resolve => {
    let buf = "", done = false, busy = false, fails = 0;
    const finish = v => { if (!done) { done = true; resolve(v); } };
    const sh = openSheet({
      html: `<h2>${esc(title)}</h2><p class="sub">Un gérant ou l'administrateur tape son code pour autoriser.</p>
        <div style="display:flex;flex-direction:column;align-items:center;gap:16px;margin-top:8px"><div class="pin-dots" id="ap-dots">${dotsHTML(0)}</div>${keypadHTML()}</div>
        <div class="sheet-actions"><button class="btn btn-block" data-act="cancel">Annuler</button></div>`,
      actions: {
        "pin-key": async t => {
          if (busy || buf.length >= 4) return;
          buf += t.dataset.k; upd();
          if (buf.length < 4) return;
          busy = true; const id = await findMemberByPin(buf, approverFilter(com)); busy = false;
          if (id) { finish(id); sh.close(); return; }
          buf = ""; upd(); shakeEl($("#ap-dots", sh.el)); fails++;
          if (fails >= 4) { toast("Trop d'essais.", "bad"); sh.close(); } else toast("Code refusé", "bad");
        },
        "pin-del": () => { buf = buf.slice(0, -1); upd(); },
        cancel: () => sh.close()
      },
      onClose: () => finish(null)
    });
    function upd() { const d = $("#ap-dots", sh.el); if (d) d.innerHTML = dotsHTML(buf.length); }
  });
}
function askText(title, placeholder, sugg = []) {
  return new Promise(resolve => {
    let done = false; const finish = v => { if (!done) { done = true; resolve(v); } };
    const sh = openSheet({
      html: `<h2>${esc(title)}</h2>${sugg.length ? `<div class="chips" style="margin:12px 0 4px">${sugg.map(s => `<button class="chip" data-act="s" data-v="${esc(s)}">${esc(s)}</button>`).join("")}</div>` : ""}
        <div class="field"><input id="at-v" class="input" autocomplete="off" placeholder="${esc(placeholder)}" aria-label="${esc(title)}"></div><p class="form-err" id="at-err" role="alert"></p>
        <div class="sheet-actions"><button class="btn" data-act="cancel">Annuler</button><button class="btn btn-primary grow" data-act="ok">Valider</button></div>`,
      actions: {
        s: t => { $("#at-v", sh.el).value = t.dataset.v; },
        cancel: () => sh.close(),
        ok: () => { const v = $("#at-v", sh.el).value.trim(); if (!v) { $("#at-err", sh.el).textContent = "Ce champ est obligatoire."; return; } finish(v); sh.close(); }
      },
      onClose: () => finish(null)
    });
    enterSubmits(sh, "ok");
  });
}
function askAmount(title, sub, max) {
  return new Promise(resolve => {
    let done = false; const finish = v => { if (!done) { done = true; resolve(v); } };
    const sh = openSheet({
      html: `<h2>${esc(title)}</h2>${sub ? `<p class="sub">${esc(sub)}</p>` : ""}
        <div class="field"><input id="aa-v" class="input amount" inputmode="numeric" autocomplete="off" placeholder="0" aria-label="${esc(title)}" autofocus></div><p class="form-err" id="aa-err" role="alert"></p>
        <div class="sheet-actions"><button class="btn" data-act="cancel">Annuler</button><button class="btn btn-primary grow" data-act="ok">Valider</button></div>`,
      actions: {
        cancel: () => sh.close(),
        ok: () => { const v = intOf($("#aa-v", sh.el).value); if (v <= 0 || (max && v > max)) { $("#aa-err", sh.el).textContent = max ? `Indiquez un montant entre 1 et ${F(max)}.` : "Indiquez un montant."; return; } finish(v); sh.close(); }
      },
      onClose: () => finish(null)
    });
    enterSubmits(sh, "ok");
  });
}

/* ===================== Caisse : actions ===================== */
function onAddArticle(id) {
  const com = curCom(); const a = catalog(com).articles[id]; if (!a) return;
  if (a.reservable) {
    const sh = openSheet({
      html: `<h2>${esc(a.emoji || "")} ${esc(a.nom)}</h2><p class="sub">Ce service peut se réserver à l'avance.</p>
        <div class="variants choice">
          <button class="variant" data-act="resa">Réserver une date<small>Agenda, acompte, confirmation WhatsApp</small></button>
          <button class="variant" data-act="now">Encaisser maintenant<small>Le service est fait tout de suite</small></button></div>
        <div class="sheet-actions"><button class="btn btn-block" data-act="close">Annuler</button></div>`,
      actions: {resa: () => { sh.close(); openResaEditor(null, {com, art: id}); }, now: () => { sh.close(); pickVariant(id, a); }, close: () => sh.close()}
    });
    return;
  }
  pickVariant(id, a);
}
function pickVariant(id, a) {
  const vars = artVariants(a);
  if (a.libre || !vars.length) { openPrixLibre(id, a); return; }
  if (vars.length === 1 && !vars[0].lib) { addLine(id, a, vars[0].prix); return; }
  const sh = openSheet({
    html: `<h2>${esc(a.emoji || "")} ${esc(a.nom)}</h2><p class="sub">Choisissez.</p><div class="variants">${vars.map((v, i) => `<button class="variant" data-act="pick" data-i="${i}">${v.lib ? `<small>${esc(v.lib)}</small>` : ""}${F(v.prix)}</button>`).join("")}</div><div class="sheet-actions"><button class="btn btn-block" data-act="close">Annuler</button></div>`,
    actions: {pick: t => { const v = vars[+t.dataset.i]; addLine(id, a, v.prix, {var: v.lib}); sh.close(); }, close: () => sh.close()}
  });
}
function openPrixLibre(id, a) {
  const sh = openSheet({
    html: `<h2>${esc(a.emoji || "")} ${esc(a.nom)}</h2><p class="sub">Prix libre : tapez le montant convenu avec le client.</p>
      <div class="field"><label for="pl-m">Montant</label><input id="pl-m" class="input amount" inputmode="numeric" autocomplete="off" placeholder="0" autofocus></div>
      <p class="form-err" id="pl-err" role="alert"></p>
      <div class="sheet-actions"><button class="btn" data-act="close">Annuler</button><button class="btn btn-primary grow" data-act="ok">Ajouter au ticket</button></div>`,
    actions: {
      close: () => sh.close(),
      ok: () => { const v = intOf($("#pl-m", sh.el).value); if (v <= 0) { $("#pl-err", sh.el).textContent = "Indiquez un montant."; return; } addLine(id, a, v); sh.close(); }
    }
  });
  enterSubmits(sh, "ok");
}
function openTicketSheet() {
  if (!S.cart.lines.length) return;
  S.tkSheet = openSheet({html: `<div class="tk-sheet-body">${ticketPanelHTML(curCom())}</div>`, onClose: () => { S.tkSheet = null; }});
}
function openCaisseSheet() {
  const com = curCom();
  if (openSession(com)) { render(); return; }
  const sh = openSheet({
    html: `<h2>Ouvrir la caisse ${esc(comName(com))}</h2><p class="sub">Comptez l'argent déjà présent dans le tiroir : c'est le fond de caisse.</p>
      <div class="field"><label for="oc-fond">Fond de caisse</label><input id="oc-fond" class="input amount" inputmode="numeric" autocomplete="off" placeholder="0" autofocus></div>
      <div class="chips">${[0, 5000, 10000, 20000].map(v => `<button class="chip" data-act="q" data-v="${v}">${F(v)}</button>`).join("")}</div>
      <div class="sheet-actions"><button class="btn" data-act="close">Annuler</button><button class="btn btn-accent grow" data-act="ok">Ouvrir la caisse</button></div>`,
    actions: {
      q: t => { $("#oc-fond", sh.el).value = N(+t.dataset.v); },
      close: () => sh.close(),
      ok: () => {
        if (openSession(com)) { sh.close(); return; }
        const fond = intOf($("#oc-fond", sh.el).value);
        const now = new Date();
        const id = `${com}-${dkey(now).replace(/-/g, "")}-${pad2(now.getHours())}${pad2(now.getMinutes())}${pad2(now.getSeconds())}-${Math.random().toString(36).slice(2, 6)}`;
        OB.push(`sessions/${id}`, "set", {commerce: com, date: dkey(now), statut: "ouverte", ouverture: {at: now.toISOString(), par: S.op, fond, compte: S.me.id || null}, tickets: {}, depenses: {}, reglements: {}});
        sh.close(); toast(`Caisse ${comName(com)} ouverte`);
      }
    }
  });
  enterSubmits(sh, "ok");
}
function openPayment(custom) {
  const com = custom ? custom.com : curCom();
  const lines = custom ? custom.lines : S.cart.lines;
  if (!lines.length) return;
  if (!openSession(com)) { toast(`La caisse ${comName(com)} est fermée. Ouvrez-la d'abord dans l'onglet Caisse.`, "bad"); return; }
  if (!custom && needsPrest(com) && !S.cart.prest) {
    toast("Choisissez d'abord qui a réalisé la prestation.", "warn");
    if (window.innerWidth < 900 && !S.tkSheet) openTicketSheet();
    setTimeout(() => $$(".tk-who .chip").forEach(c => { c.classList.remove("need"); void c.offsetWidth; c.classList.add("need"); }), 30);
    return;
  }
  const total = lines.reduce((x, l) => x + l.prix * l.qte, 0);
  const ms = modesActifs().filter(m => !(custom && custom.resa && m.id === "credit"));
  const st = {mode: ms.some(m => m.id === "especes") ? "especes" : ms[0].id, recu: "", remise: 0, remiseBy: null, nom: custom && custom.client ? custom.client.nom || "" : "", tel: custom && custom.client ? custom.client.tel || "" : "", source: null, moreOpen: false};
  const net = () => Math.max(0, total - (st.remise || 0));
  const sh = openSheet({
    html: "",
    actions: {
      mode: t => { st.mode = t.dataset.id; draw(); },
      quick: t => { st.recu = t.dataset.v; const i = $("#pay-recu", sh.el); if (i) i.value = N(+st.recu); updChange(); },
      src: t => { st.source = st.source === t.dataset.v ? null : t.dataset.v; $$("[data-act=src]", sh.el).forEach(b => b.setAttribute("aria-pressed", String(b.dataset.v === st.source))); },
      remise: async () => {
        let by = S.op;
        if (!isGerantPlus()) { by = await askApproval(com, "Autoriser une remise"); if (!by) return; }
        const v = await askAmount("Montant de la remise", `Sur un total de ${F(total)}`, total);
        if (!v) return;
        st.remise = Math.min(v, total); st.remiseBy = by; st.moreOpen = true; st.recu = ""; draw();
      },
      "remise-del": () => { st.remise = 0; st.remiseBy = null; draw(); },
      cancel: () => sh.close(),
      confirm: t => confirmPay(t)
    }
  });
  enterSubmits(sh, "confirm");
  function payHTML() {
    const n = net();
    let area = "";
    if (st.mode === "especes") {
      const quick = [...new Set([n, ...[500, 1000, 2000, 5000, 10000].map(u => Math.ceil(n / u) * u)])].filter(v => v >= n && v > 0).sort((a, b) => a - b).slice(0, 5);
      area = `<div class="field"><label for="pay-recu">Montant reçu du client</label><input id="pay-recu" class="input amount" inputmode="numeric" autocomplete="off" placeholder="${esc(N(n))}" value="${st.recu ? esc(N(intOf(st.recu))) : ""}"></div>
        <div class="chips">${quick.map(v => `<button class="chip" data-act="quick" data-v="${v}">${v === n ? "Compte juste" : F(v)}</button>`).join("")}</div><div id="pay-change"></div>`;
    } else if (st.mode === "credit") {
      area = `<p class="sub" style="margin:12px 0 0">Le client paiera plus tard. Son nom et son téléphone sont obligatoires.</p>
        <div class="two"><div class="field"><label for="pay-nom">Nom du client</label><input id="pay-nom" class="input" autocomplete="off" value="${esc(st.nom)}"></div><div class="field"><label for="pay-tel">Téléphone</label><input id="pay-tel" class="input" inputmode="tel" autocomplete="off" value="${esc(st.tel)}"></div></div>`;
    } else {
      area = `<p class="notice info" style="margin:12px 0 0">Vérifiez que le message ${esc(modeName(st.mode))} de ${F(n)} est bien arrivé sur le téléphone avant de valider.</p>`;
    }
    const sources = cfg().sources;
    const srcHTML = sources.length ? `<div class="field"><span class="field-label">Premier passage ? Comment a-t-il connu ${esc(comName(com))} (facultatif)</span><div class="chips">${sources.map(x => `<button class="chip" data-act="src" data-v="${esc(x)}" aria-pressed="${st.source === x}">${esc(x)}</button>`).join("")}</div></div>` : "";
    const remiseHTML = st.remise
      ? `<p style="margin:10px 0">Remise de <b>${F(st.remise)}</b>${st.remiseBy && st.remiseBy !== S.op ? `, autorisée par ${esc(firstName(mName(st.remiseBy)))}` : ""}. <button class="linkish" data-act="remise-del">Retirer la remise</button></p>`
      : `<p style="margin:10px 0"><button class="btn" data-act="remise">${isGerantPlus() ? "Faire une remise" : "Demander une remise au gérant"}</button></p>`;
    const clientHTML = st.mode !== "credit" ? `<div class="two"><div class="field"><label for="pay-nom">Nom du client</label><input id="pay-nom" class="input" autocomplete="off" value="${esc(st.nom)}"></div><div class="field"><label for="pay-tel">Téléphone (pour lui envoyer le ticket)</label><input id="pay-tel" class="input" inputmode="tel" autocomplete="off" value="${esc(st.tel)}"></div></div>` : "";
    return `<h2>${esc(custom && custom.titre ? custom.titre : "Encaisser")}</h2>
      ${custom ? `<p class="sub">${custom.lines.map(l => esc(lineName(l))).join(", ")}</p>` : ""}
      <div class="pay-total"><span>À payer${st.remise ? `<small>Remise de ${F(st.remise)} déduite</small>` : ""}</span><strong>${F(n)}</strong></div>
      <div class="modes" role="group" aria-label="Mode de paiement">${ms.map(m => `<button class="mode" data-act="mode" data-id="${esc(m.id)}" aria-pressed="${st.mode === m.id}"><i class="dot" style="background:${esc(m.couleur)}"></i>${esc(m.nom)}</button>`).join("")}</div>
      ${area}${srcHTML}
      <details class="more"><summary>${st.mode !== "credit" ? "Client et remise" : "Remise"}</summary>${clientHTML}${remiseHTML}</details>
      <p class="form-err" id="pay-err" role="alert"></p>
      <div class="sheet-actions"><button class="btn" data-act="cancel">Retour</button><button class="btn pole grow" data-act="confirm"><span class="pole-label">Valider le paiement</span></button></div>`;
  }
  function draw() {
    sh.el.innerHTML = payHTML();
    const r = $("#pay-recu", sh.el); if (r) r.addEventListener("input", () => { st.recu = r.value; updChange(); });
    const nm = $("#pay-nom", sh.el); if (nm) nm.addEventListener("input", () => { st.nom = nm.value; });
    const tl = $("#pay-tel", sh.el); if (tl) tl.addEventListener("input", () => { st.tel = tl.value; });
    const d = $("details.more", sh.el); if (d) { d.open = !!st.moreOpen; d.addEventListener("toggle", () => { st.moreOpen = d.open; }); }
    updChange();
  }
  function updChange() {
    const box = $("#pay-change", sh.el); if (!box) return;
    const n = net();
    if (!String(st.recu).trim()) { box.innerHTML = ""; return; }
    const recu = intOf(st.recu);
    box.innerHTML = recu < n ? `<div class="change short"><span>Il manque</span><strong>${F(n - recu)}</strong></div>` : `<div class="change"><span>Monnaie à rendre</span><strong>${F(recu - n)}</strong></div>`;
  }
  async function confirmPay(btn) {
    if (btn.classList.contains("busy")) return;
    const err = $("#pay-err", sh.el); err.textContent = "";
    const n = net();
    let recu = null, rendu = null;
    if (st.mode === "especes") {
      recu = String(st.recu).trim() ? intOf(st.recu) : n;
      if (recu < n) { err.textContent = "Le montant reçu est inférieur au total."; return; }
      rendu = recu - n;
    }
    const nom = st.nom.trim(), tel = st.tel.trim();
    if (st.mode === "credit" && (!nom || tel.replace(/\D/g, "").length < 8)) { err.textContent = "Pour un crédit, indiquez le nom et un numéro de téléphone complet."; return; }
    if (!openSession(com)) { err.textContent = "La caisse vient d'être fermée."; return; }
    btn.classList.add("busy");
    $$("button", sh.el).forEach(b => { if (b !== btn) b.disabled = true; });
    sh.dismissable = false;
    await sleep(reducedMotion() ? 0 : 480);
    const t = commitTicket(com, {mode: st.mode, recu, rendu, remise: st.remise, remiseBy: st.remiseBy, client: nom || tel ? {nom, tel} : null, source: st.source}, custom);
    sh.close();
    if (t) { showSuccess(t, com); if (custom && custom.onDone) custom.onDone(t); }
  }
  draw();
}
function commitTicket(com, pay, custom) {
  const sess = openSession(com);
  if (!sess) { toast("La caisse est fermée.", "bad"); return null; }
  const cart = custom ? {lines: custom.lines, prest: null, canal: null} : cartOf(com);
  const now = new Date();
  const lignes = cart.lines.map(l => ({art: l.art, nom: l.nom, var: l.var || "", prix: l.prix, qte: l.qte}));
  const total = lignes.reduce((x, l) => x + l.prix * l.qte, 0);
  const remise = Math.min(pay.remise || 0, total);
  const n = Object.keys(sess.tickets || {}).length + 1;
  const id = uid("t");
  const t = {id, n, at: now.toISOString(), d: dkey(now), h: now.getHours(), par: S.op, compte: S.me.id || null, lignes, total, remise, net: total - remise,
    mode: pay.mode, recu: pay.recu, rendu: pay.rendu, prest: comType(com) === "salon" ? cart.prest || null : null, canal: comType(com) === "snack" ? cart.canal || null : null,
    client: pay.client || null, source: pay.source || null, remiseBy: remise ? pay.remiseBy || S.op : null, statut: "ok", resa: custom && custom.resa ? custom.resa : null};
  OB.push(`sessions/${sess.id}`, "update", {tickets: {[id]: t}});
  if (pay.mode === "credit") OB.push(`credits/${id}`, "set", {commerce: com, session: sess.id, ticket: id, n, d: t.d, at: t.at, client: t.client, montant: t.net, paiements: {}, statut: "ouvert", par: S.op});
  if (custom && custom.resa) OB.push(`reservations/${custom.resa}`, "update", {paiements: {[id]: {montant: t.net, mode: t.mode, at: t.at, ticket: id, n, session: sess.id, par: S.op, type: custom.type || "acompte"}}});
  if (!custom) S.carts[com] = {lines: [], prest: null, canal: cart.canal || "place"};
  render();
  return t;
}
function showSuccess(t, com) {
  const pr = printPrefs();
  const sh = openSheet({
    html: `<div class="success"><div class="ok-mark" aria-hidden="true">✓</div><h2>Ticket n° ${t.n} enregistré</h2>
      <p class="big">${F(t.net)}</p><p class="muted">${esc(modeName(t.mode))}${t.prest ? `, réalisé par ${esc(firstName(mName(t.prest)))}` : ""}</p>
      ${t.rendu ? `<div class="change-big">Monnaie à rendre<strong>${F(t.rendu)}</strong></div>` : ""}
      ${t.mode === "credit" ? `<p class="notice">Crédit noté au nom de ${esc(t.client?.nom || "")}.</p>` : ""}
      <div class="chips" style="justify-content:center;margin-top:14px"><button class="btn" data-act="print">🖨️ Imprimer</button><button class="btn" data-act="share">Envoyer ${t.client && t.client.tel ? "au client" : "(WhatsApp…)"}</button>${t.resa ? `<button class="btn" data-act="resa-wa">Confirmer la réservation (WhatsApp)</button>` : ""}</div>
      <div class="sheet-actions"><button class="btn btn-primary btn-lg btn-block" data-act="close">Ticket suivant</button></div></div>`,
    actions: {
      close: () => sh.close(),
      print: () => { keep = true; printTicket(t, com); },
      share: () => { keep = true; shareTicket(t, com); },
      "resa-wa": () => { keep = true; const r = S.resas.find(x => x.id === t.resa); if (r && r.client && r.client.tel) openExternal(waLink(r.client.tel, resaMessage(r))); }
    }
  });
  let keep = false;
  if (pr.auto) { keep = true; setTimeout(() => printTicket(t, com), 150); }
  if (!t.rendu) setTimeout(() => { if (!keep) sh.close(); }, 2600);
}
function openClotureSheet() {
  const com = curCom(); const s0 = openSession(com);
  if (!s0) { toast(`La caisse ${comName(com)} est déjà fermée.`, "warn"); return; }
  const show = isGerantPlus();
  const st = {step: 1, compte: "", op: null, cloture: null};
  const sh = openSheet({
    html: "",
    actions: {
      close: () => sh.close(),
      next: () => {
        const v = $("#cl-cpt", sh.el).value;
        if (!v.trim()) { $("#cl-err", sh.el).textContent = "Indiquez le montant compté (0 si le tiroir est vide)."; return; }
        st.compte = intOf(v); st.step = 2; draw();
      },
      back: () => { st.step = 1; draw(); },
      ok: t => finish(t),
      retry: t => { OB.retryBlocked(); finish(t, true); }
    }
  });
  enterSubmits(sh, "next");
  async function finish(btn, isRetry) {
    if (btn.disabled) return;
    const err = $("#cl-err2", sh.el); if (err) err.textContent = "";
    if (!isRetry) {
      const cur = openSession(com); if (!cur) { sh.close(); return; }
      const c = sessionCalc(cur); const note = ($("#cl-note", sh.el)?.value || "").trim(); const now = new Date();
      st.cloture = {at: now.toISOString(), par: S.op, compte: st.compte, attendu: c.cashExpected, ecart: st.compte - c.cashExpected, note, compteClaude: S.me.id || null};
      st.session = cur;
      st.op = OB.push(`sessions/${cur.id}`, "update", {statut: "cloturee", cloture: st.cloture});
    }
    btn.disabled = true; btn.textContent = "Clôture en cours…"; sh.dismissable = false;
    const res = await OB.waitFor(st.op, 8000);
    if (res === "blocked") {
      sh.dismissable = true; btn.disabled = false; btn.textContent = "Réessayer"; btn.dataset.act = "retry";
      if (err) err.textContent = `La clôture a été refusée : ${syncErrMsg(st.op.blocked)}`;
      return;
    }
    sh.close(); S.carts[com] = newCart(); S.view = "caisse"; render();
    openZReport({...st.session, statut: "cloturee", cloture: st.cloture}, {offline: res === "timeout"});
  }
  function draw() {
    const c = sessionCalc(openSession(com) || s0);
    if (st.step === 1) {
      sh.el.innerHTML = `<h2>Clôturer la caisse ${esc(comName(com))}</h2><p class="sub">Comptez tous les billets et pièces du tiroir, fond de caisse compris.</p>
        <div class="field"><label for="cl-cpt">Espèces comptées</label><input id="cl-cpt" class="input amount" inputmode="numeric" autocomplete="off" placeholder="0" value="${st.compte !== "" ? esc(N(st.compte)) : ""}"></div>
        <p class="form-err" id="cl-err" role="alert"></p>
        <div class="sheet-actions"><button class="btn" data-act="close">Annuler</button><button class="btn btn-primary grow" data-act="next">Continuer</button></div>`;
      setTimeout(() => { const i = $("#cl-cpt", sh.el); if (i) i.focus(); }, 60);
      return;
    }
    const ecart = st.compte - c.cashExpected;
    const mobile = Object.entries(c.byMode).filter(([k]) => k !== "especes" && k !== "credit");
    sh.el.innerHTML = `<h2>Vérification avant clôture</h2>
      ${show ? `<div class="kv"><span>Fond de caisse</span><b>${F(c.fond)}</b></div>
        <div class="kv"><span>Ventes en espèces</span><b>+ ${F(c.cashSales)}</b></div>
        ${c.cashIn ? `<div class="kv"><span>Remboursements de crédit en espèces</span><b>+ ${F(c.cashIn)}</b></div>` : ""}
        ${c.cashOut ? `<div class="kv"><span>Dépenses payées en espèces</span><b>− ${F(c.cashOut)}</b></div>` : ""}
        <div class="kv"><span>Espèces attendues</span><b>${F(c.cashExpected)}</b></div>
        <div class="kv"><span>Espèces comptées</span><b>${F(st.compte)}</b></div>
        <div class="kv"><span>Écart</span><b class="${ecart < 0 ? "ecart-neg" : ecart > 0 ? "ecart-pos" : ""}">${ecart === 0 ? "Aucun, la caisse est juste" : (ecart > 0 ? "+ " : "− ") + F(Math.abs(ecart))}</b></div>
        ${mobile.length ? `<h3 style="font-size:16px;margin:14px 0 2px">À vérifier sur les téléphones</h3>${mobile.map(([k, v]) => `<div class="kv"><span>${esc(modeName(k))}</span><b>${F(v)}</b></div>`).join("")}` : ""}
        ${c.credit ? `<div class="kv"><span>Crédits accordés</span><b>${F(c.credit)}</b></div>` : ""}`
      : `<div class="kv"><span>Espèces comptées</span><b>${F(st.compte)}</b></div><p class="notice info" style="margin-top:12px">Le gérant verra le résultat de la clôture.</p>`}
      <div class="field"><label for="cl-note">Remarque (facultatif)</label><input id="cl-note" class="input" autocomplete="off" placeholder="Ex. : billet abîmé mis de côté"></div>
      <p class="form-err" id="cl-err2" role="alert"></p>
      <div class="sheet-actions"><button class="btn" data-act="back">Recompter</button><button class="btn btn-danger grow" data-act="ok">Clôturer la caisse</button></div>`;
  }
  draw();
}
function openExpenseSheet() {
  const com = curCom(); if (!openSession(com)) return;
  const cats = cfg().depenses;
  const payModes = modesActifs().filter(m => m.id !== "credit");
  let mode = "especes";
  const sh = openSheet({
    html: `<h2>Ajouter une dépense</h2><p class="sub">Caisse ${esc(comName(com))}</p>
      <div class="field"><label for="dp-m">Montant</label><input id="dp-m" class="input amount" inputmode="numeric" autocomplete="off" placeholder="0" autofocus></div>
      <div class="field"><label for="dp-c">Catégorie</label><select id="dp-c" class="input">${cats.map(c => `<option>${esc(c)}</option>`).join("")}</select></div>
      <div class="field"><span class="field-label">Payée avec</span><div class="chips" id="dp-modes">${payModes.map(m => `<button class="chip" data-act="pm" data-id="${esc(m.id)}" aria-pressed="${m.id === mode}">${esc(m.nom)}</button>`).join("")}</div><span class="hint">Seules les dépenses payées en espèces sortent du tiroir.</span></div>
      <div class="field"><label for="dp-n">Détail (facultatif)</label><input id="dp-n" class="input" autocomplete="off" placeholder="Ex. : 10 poulets au marché"></div>
      <p class="form-err" id="dp-err" role="alert"></p>
      <div class="sheet-actions"><button class="btn" data-act="close">Annuler</button><button class="btn btn-primary grow" data-act="ok">Enregistrer la dépense</button></div>`,
    actions: {
      pm: t => { mode = t.dataset.id; $$("#dp-modes .chip", sh.el).forEach(b => b.setAttribute("aria-pressed", String(b.dataset.id === mode))); },
      close: () => sh.close(),
      ok: () => {
        const montant = intOf($("#dp-m", sh.el).value);
        if (montant <= 0) { $("#dp-err", sh.el).textContent = "Indiquez le montant."; return; }
        const cur = openSession(com); if (!cur) { sh.close(); return; }
        const now = new Date(); const id = uid("d");
        OB.push(`sessions/${cur.id}`, "update", {depenses: {[id]: {id, at: now.toISOString(), d: dkey(now), par: S.op, montant, cat: $("#dp-c", sh.el).value, note: $("#dp-n", sh.el).value.trim(), mode}}});
        sh.close(); toast("Dépense enregistrée");
      }
    }
  });
  enterSubmits(sh, "ok");
}
function openTicketDetail(id) {
  const com = curCom(); const s = openSession(com); const t = s && s.tickets && s.tickets[id]; if (!t) return;
  const sh = openSheet({
    html: `<h2>Ticket n° ${t.n}</h2><p class="sub">${hm(t.at)}, encaissé par ${esc(mName(t.par) || "?")}</p>
      ${(t.lignes || []).map(l => `<div class="kv"><span>${l.qte} × ${esc(lineName(l))}</span><b>${F(l.prix * l.qte)}</b></div>`).join("")}
      ${t.remise ? `<div class="kv"><span>Remise${t.remiseBy ? ` (${esc(firstName(mName(t.remiseBy)))})` : ""}</span><b>− ${F(t.remise)}</b></div>` : ""}
      <div class="kv"><span>Total payé</span><b>${F(t.net)}</b></div>
      <div class="kv"><span>Mode de paiement</span><b>${esc(modeName(t.mode))}</b></div>
      ${t.mode === "especes" && t.recu != null ? `<div class="kv"><span>Reçu, rendu</span><b>${F(t.recu)}, ${F(t.rendu || 0)}</b></div>` : ""}
      ${t.prest ? `<div class="kv"><span>Réalisé par</span><b>${esc(mName(t.prest))}</b></div>` : ""}
      ${t.canal ? `<div class="kv"><span>Service</span><b>${esc(CANAUX[t.canal] || "")}</b></div>` : ""}
      ${t.client && (t.client.nom || t.client.tel) ? `<div class="kv"><span>Client</span><b>${esc([t.client.nom, t.client.tel].filter(Boolean).join(", "))}</b></div>` : ""}
      ${t.source ? `<div class="kv"><span>Nous a connus par</span><b>${esc(t.source)}</b></div>` : ""}
      ${t.statut === "annule" ? `<p class="notice" style="margin-top:12px">Annulé à ${hm(t.annulation?.at)} par ${esc(mName(t.annulation?.par) || "?")}${t.annulation?.autorise && t.annulation.autorise !== t.annulation.par ? `, autorisé par ${esc(mName(t.annulation.autorise))}` : ""}. Motif : ${esc(t.annulation?.motif || "")}</p>` : ""}
      <div class="chips" style="margin-top:14px"><button class="btn" data-act="print">🖨️ Réimprimer</button><button class="btn" data-act="share">Envoyer ${t.client && t.client.tel ? "au client" : "(WhatsApp…)"}</button></div>
      <div class="sheet-actions"><button class="btn" data-act="close">Fermer</button>${t.statut !== "annule" ? `<button class="btn btn-danger grow" data-act="cancel-t">Annuler ce ticket</button>` : ""}</div>`,
    actions: {
      close: () => sh.close(),
      print: () => printTicket(t, com),
      share: () => shareTicket(t, com),
      "cancel-t": async () => {
        let by = S.op;
        if (!isGerantPlus()) { by = await askApproval(com, "Autoriser l'annulation du ticket"); if (!by) return; }
        const motif = await askText("Motif de l'annulation", "Ex. : erreur de saisie", ["Erreur de saisie", "Doublon", "Client parti sans payer"]);
        if (!motif) return;
        const cur = openSession(com); if (!cur) return;
        OB.push(`sessions/${cur.id}`, "update", {tickets: {[id]: {statut: "annule", annulation: {at: new Date().toISOString(), par: S.op, autorise: by, motif}}}});
        if (t.mode === "credit") OB.push(`credits/${id}`, "update", {statut: "annule"});
        sh.close(); toast(`Ticket n° ${t.n} annulé`);
      }
    }
  });
}
function openCreditPay(id) {
  const c = S.credits.find(x => x.id === id); if (!c) return;
  const com = curCom(); const left = creditLeft(c); const sess = openSession(com);
  const payModes = modesActifs().filter(m => m.id !== "credit");
  let mode = "especes";
  const paid = Object.values(c.paiements || {}).sort((a, b) => String(a.at).localeCompare(String(b.at)));
  const sh = openSheet({
    html: `<h2>${esc(c.client?.nom || "Client")}</h2><p class="sub">${c.client?.tel ? esc(c.client.tel) + ", " : ""}crédit du ${esc(dLabel(c.d))} au ${esc(comName(c.commerce))}, ticket n° ${c.n}</p>
      <div class="kv"><span>Montant du crédit</span><b>${F(c.montant)}</b></div>
      ${paid.map(p => `<div class="kv"><span>Payé le ${esc(dLabel(dkey(new Date(p.at))))}</span><b>− ${F(p.montant)}</b></div>`).join("")}
      <div class="kv"><span>Reste à payer</span><b>${F(left)}</b></div>
      ${sess ? `<div class="field"><label for="cp-m">Montant remboursé maintenant</label><input id="cp-m" class="input amount" inputmode="numeric" autocomplete="off" value="${esc(N(left))}"></div>
        <div class="field"><span class="field-label">Payé avec</span><div class="chips" id="cp-modes">${payModes.map(m => `<button class="chip" data-act="pm" data-id="${esc(m.id)}" aria-pressed="${m.id === mode}">${esc(m.nom)}</button>`).join("")}</div></div>
        <p class="form-err" id="cp-err" role="alert"></p>
        <div class="sheet-actions"><button class="btn" data-act="close">Fermer</button><button class="btn btn-primary grow" data-act="ok">Encaisser le remboursement</button></div>`
      : `<p class="notice" style="margin-top:12px">Ouvrez la caisse ${esc(comName(com))} pour encaisser ce remboursement.</p><div class="sheet-actions"><button class="btn btn-block" data-act="close">Fermer</button></div>`}`,
    actions: {
      pm: t => { mode = t.dataset.id; $$("#cp-modes .chip", sh.el).forEach(b => b.setAttribute("aria-pressed", String(b.dataset.id === mode))); },
      close: () => sh.close(),
      ok: () => {
        const v = intOf($("#cp-m", sh.el).value);
        if (v <= 0 || v > left) { $("#cp-err", sh.el).textContent = `Indiquez un montant entre 1 et ${F(left)}.`; return; }
        const cur = openSession(com); if (!cur) return;
        const now = new Date(); const rid = uid("r");
        OB.push(`sessions/${cur.id}`, "update", {reglements: {[rid]: {id: rid, at: now.toISOString(), d: dkey(now), par: S.op, montant: v, mode, credit: c.id, client: c.client || null, commerceOrigine: c.commerce}}});
        const upd = {paiements: {[rid]: {montant: v, mode, at: now.toISOString(), session: cur.id, par: S.op}}};
        if (v >= left) upd.statut = "solde";
        OB.push(`credits/${c.id}`, "update", upd);
        sh.close(); toast(v >= left ? "Crédit soldé" : `Remboursement de ${F(v)} enregistré`);
      }
    }
  });
  enterSubmits(sh, "ok");
}
function openOpMenu() {
  const m = opM(); if (!m) return;
  const com = curCom(); const open = !!openSession(com);
  const sh = openSheet({
    html: `<div style="display:flex;align-items:center;gap:14px;margin-bottom:6px">${avatarHTML(S.op, "", 54)}<div><h2 style="margin:0">${esc(m.nom)}</h2><p class="sub" style="margin:0">${esc(ROLE_LABEL[m.acces] || "")}, ${m.commerce === "tous" ? "toutes les activités" : esc(comName(m.commerce))}</p></div></div>
      <div class="menu-list">
        ${open ? `<button class="row-item" data-act="m-close"><span class="ri-main"><b>Clôturer la caisse ${esc(comName(com))}</b><span class="meta">Compter le tiroir et fermer la journée</span></span></button>` : `<button class="row-item" data-act="m-open"><span class="ri-main"><b>Ouvrir la caisse ${esc(comName(com))}</b><span class="meta">Saisir le fond de caisse</span></span></button>`}
        <button class="row-item" data-act="m-print"><span class="ri-main"><b>Imprimante et tickets</b><span class="meta">Largeur du papier, impression automatique, essai</span></span></button>
        ${S.installPrompt ? `<button class="row-item" data-act="m-install"><span class="ri-main"><b>Installer l'application</b><span class="meta">Une icône sur l'écran d'accueil, ouverture même sans réseau</span></span></button>` : ""}
      </div>
      <p class="muted">Verrouillez avant de passer l'appareil à quelqu'un d'autre : chacun encaisse avec son propre code.</p>
      <div class="sheet-actions"><button class="btn" data-act="close">Fermer</button><button class="btn btn-primary grow" data-act="lock">Verrouiller</button></div>`,
    actions: {
      close: () => sh.close(), lock: () => { sh.close(); lock(); },
      "m-close": () => { sh.close(); openClotureSheet(); },
      "m-open": () => { sh.close(); S.view = "caisse"; render(); openCaisseSheet(); },
      "m-print": () => { sh.close(); openPrintSettings(); },
      "m-install": () => { sh.close(); promptInstall(); }
    }
  });
}
function openSyncPanel() {
  const pend = OB.pending(), blk = OB.ops.filter(o => o.blocked);
  const sh = openSheet({
    html: `<h2>Enregistrement</h2>
      ${S.demo ? `<p>Mode démo : rien n'est enregistré. Tout disparaît quand vous quittez la démo.</p>`
      : `${pend ? `<p><b>${pend}</b> opération${pend > 1 ? "s" : ""} en attente d'envoi. Gardez cette page ouverte : ${pend > 1 ? "elles partiront" : "elle partira"} dès le retour du réseau.</p>` : `<p>Tout est enregistré.</p>`}
        ${blk.length ? `<p class="notice">${blk.length} opération${blk.length > 1 ? "s" : ""} refusée${blk.length > 1 ? "s" : ""}. ${esc(syncErrMsg(blk[0].blocked))}</p>` : ""}
        <p class="muted">Les ventes en attente restent gardées sur cet appareil, même si la page se recharge.</p>`}
      <div class="sheet-actions"><button class="btn" data-act="close">Fermer</button>${blk.length ? `${isAdmin() ? `<button class="btn btn-danger" data-act="drop">Abandonner</button>` : ""}<button class="btn btn-primary grow" data-act="retry">Réessayer</button>` : ""}</div>`,
    actions: {close: () => sh.close(), retry: () => { OB.retryBlocked(); sh.close(); }, drop: () => { OB.dropBlocked(); sh.close(); }}
  });
}

/* ===================== Gestion : éditeurs ===================== */
function openCategoryEditor(id) {
  const com = S.catalogCom; const {categories, articles} = catalog(com);
  const c = id ? categories[id] : null;
  const used = id ? Object.values(articles).filter(a => a.cat === id && !a.supprime).length : 0;
  const sh = openSheet({
    html: `<h2>${id ? "Renommer la catégorie" : "Nouvelle catégorie"}</h2><p class="sub">${esc(comName(com))}</p>
      <div class="field"><label for="ce-n">Nom</label><input id="ce-n" class="input" autocomplete="off" value="${esc(c?.nom || "")}" autofocus></div><p class="form-err" id="ce-err" role="alert"></p>
      <div class="sheet-actions">${id && !used ? `<button class="btn btn-danger" data-act="del">Supprimer</button>` : ""}<button class="btn" data-act="close">Annuler</button><button class="btn btn-primary grow" data-act="ok">Enregistrer</button></div>`,
    actions: {
      close: () => sh.close(),
      del: () => { writeDoc("catalogue/" + com, {categories: {[id]: {supprime: true}}}); sh.close(); toast("Catégorie supprimée"); },
      ok: () => {
        const nom = $("#ce-n", sh.el).value.trim();
        if (!nom) { $("#ce-err", sh.el).textContent = "Donnez un nom."; return; }
        const cid = id || uid("c");
        const ordre = id ? (c.ordre ?? 99) : Math.max(0, ...Object.values(categories).map(x => x.ordre || 0)) + 1;
        writeDoc("catalogue/" + com, {categories: {[cid]: {nom, ordre, supprime: false}}});
        sh.close(); toast(id ? "Catégorie renommée" : "Catégorie ajoutée");
      }
    }
  });
  enterSubmits(sh, "ok");
}
function pickFile(accept) {
  return new Promise(resolve => {
    const inp = document.createElement("input");
    inp.type = "file"; inp.accept = accept; inp.style.display = "none";
    document.body.appendChild(inp);
    inp.addEventListener("change", () => { const f = inp.files && inp.files[0]; inp.remove(); resolve(f || null); });
    inp.click();
  });
}
async function downscale(file, max, quality = 0.82) {
  const dataUrl = await blobToDataURL(file);
  const img = await new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = dataUrl; });
  const k = Math.min(1, max / Math.max(img.naturalWidth, img.naturalHeight));
  const w = Math.max(1, Math.round(img.naturalWidth * k)), h = Math.max(1, Math.round(img.naturalHeight * k));
  const cv = document.createElement("canvas"); cv.width = w; cv.height = h;
  cv.getContext("2d").drawImage(img, 0, 0, w, h);
  return new Promise(res => cv.toBlob(b => res(b), "image/jpeg", quality));
}
function blobToDataURL(b) { return new Promise((res, rej) => { const fr = new FileReader(); fr.onload = () => res(fr.result); fr.onerror = rej; fr.readAsDataURL(b); }); }
function canUploadPhoto() { return S.backend === "claude" ? !!S.assets : canEditCfg(); }
async function uploadPhoto(file) {
  if (S.backend === "claude") { const blob = await downscale(file, 640); const r = await S.assets.upload(blob, {type: "image/jpeg"}); return r.id; }
  const blob = await downscale(file, 360, 0.72);
  const data = await blobToDataURL(blob);
  if (data.length > 700000) { const e = new Error("trop lourd"); e.code = "too_large"; throw e; }
  const id = uid("p");
  S.photos[id] = data;
  OB.push("photos/" + id, "set", {data, at: new Date().toISOString()});
  return id;
}
function parseVariants(txt) {
  const out = [];
  for (const part of String(txt || "").split(/[;,\n]+/)) {
    const p = part.trim(); if (!p) continue;
    const m = p.match(/^(.*?)[=:]\s*([\d\s\u00a0\u202f.]+)\s*(?:f|fcfa)?\s*$/i);
    if (m && m[1].trim()) out.push({lib: m[1].trim(), prix: intOf(m[2])});
    else out.push({lib: "", prix: intOf(p)});
  }
  const seen = new Set();
  return out.filter(v => v.prix > 0 && !seen.has(v.lib + "|" + v.prix) && seen.add(v.lib + "|" + v.prix));
}
function openArticleEditor(id) {
  const com = S.catalogCom || curCom(); const {categories, articles} = catalog(com);
  const cats = Object.entries(categories).filter(([, c]) => !c.supprime).sort(byOrdre);
  if (!cats.length) { toast("Créez d'abord une catégorie.", "warn"); openCategoryEditor(null); return; }
  const type = comType(com);
  const sugg = EMOJI_SUGG[type] || EMOJI_SUGG.services;
  const a = id ? clone(articles[id]) : {nom: "", cat: cats[0][0], emoji: sugg[0], prix: [], libelles: [], libre: false, actif: true, photo: null, reservable: false};
  const vars0 = artVariants(a);
  const st = {type: a.libre ? "libre" : vars0.length > 1 || (vars0[0] && vars0[0].lib) ? "multi" : "unique", emoji: a.emoji || "", photo: a.photo || null};
  const hints = {
    unique: ["Ex. : 1 500", "Le prix affiché à la caisse."],
    multi: ["Ex. : Quart = 2 000, Demi = 3 500, Entier = 6 000", "Une portion par virgule, avec son nom si vous voulez (30 min = 500, 1 h = 1 000). À la caisse, on choisit."],
    libre: ["", "Le caissier tape le montant à chaque vente (tresses, soins, privatisation…)."]
  };
  const emojis = [...new Set([st.emoji, ...sugg].filter(Boolean))];
  const valTxt = vars0.map(v => v.lib ? `${v.lib} = ${N(v.prix)}` : N(v.prix)).join(", ");
  const sh = openSheet({
    wide: true,
    html: `<h2>${id ? "Modifier l'article" : "Nouvel article"}</h2><p class="sub">${esc(comName(com))}</p>
      <div class="two"><div class="field"><label for="ae-n">Nom</label><input id="ae-n" class="input" autocomplete="off" value="${esc(a.nom)}"></div>
      <div class="field"><label for="ae-c">Catégorie</label><select id="ae-c" class="input">${cats.map(([cid, c]) => `<option value="${esc(cid)}" ${cid === a.cat ? "selected" : ""}>${esc(c.nom)}</option>`).join("")}</select></div></div>
      <div class="field"><span class="field-label">Prix</span><div class="seg" role="group" aria-label="Type de prix" id="ae-types">${[["unique", "Prix unique"], ["multi", "Plusieurs choix"], ["libre", "Prix libre"]].map(([k, v]) => `<button data-act="ptype" data-v="${k}" aria-pressed="${st.type === k}">${v}</button>`).join("")}</div>
        <input id="ae-p" class="input" autocomplete="off" aria-label="Prix" value="${esc(valTxt)}" placeholder="${esc(hints[st.type][0])}" ${st.type === "libre" ? "hidden" : ""}>
        <span class="hint" id="ae-ph">${esc(hints[st.type][1])}</span></div>
      <div class="field"><span class="field-label">Image à la caisse</span><div id="ae-photo"></div>
        <div class="emoji-row" id="ae-emo" role="group" aria-label="Emoji">${emojis.map(e => `<button data-act="emo" data-v="${esc(e)}" aria-pressed="${st.emoji === e}">${esc(e)}</button>`).join("")}</div>
        <span class="hint">Sans photo, c'est l'emoji choisi qui s'affiche.</span></div>
      <label class="check"><input type="checkbox" id="ae-r" ${a.reservable ? "checked" : ""}> Se réserve à l'avance (agenda, acompte)</label>
      <label class="check"><input type="checkbox" id="ae-a" ${a.actif !== false ? "checked" : ""}> Disponible à la vente</label>
      <p class="form-err" id="ae-err" role="alert"></p>
      <div class="sheet-actions">${id ? `<button class="btn btn-danger" data-act="del">Supprimer</button>` : ""}<button class="btn" data-act="close">Annuler</button><button class="btn btn-primary grow" data-act="ok">Enregistrer</button></div>`,
    actions: {
      ptype: t => {
        st.type = t.dataset.v;
        $$("#ae-types button", sh.el).forEach(b => b.setAttribute("aria-pressed", String(b.dataset.v === st.type)));
        const p = $("#ae-p", sh.el); p.hidden = st.type === "libre"; p.placeholder = hints[st.type][0];
        $("#ae-ph", sh.el).textContent = hints[st.type][1];
      },
      emo: t => { st.emoji = t.dataset.v; $$("#ae-emo button", sh.el).forEach(b => b.setAttribute("aria-pressed", String(b.dataset.v === st.emoji))); },
      photo: async t => {
        const file = await pickFile("image/*"); if (!file) return;
        t.disabled = true; t.textContent = "Envoi de la photo…";
        try { st.photo = await uploadPhoto(file); toast("Photo ajoutée"); }
        catch (e) { toast(e && e.code === "too_large" ? "Photo trop lourde." : "La photo n'a pas pu être envoyée.", "bad"); }
        drawPhoto();
      },
      "photo-del": () => { st.photo = null; drawPhoto(); },
      close: () => sh.close(),
      del: () => { writeDoc("catalogue/" + com, {articles: {[id]: {supprime: true, actif: false}}}); sh.close(); toast("Article supprimé"); },
      ok: () => {
        const err = $("#ae-err", sh.el); err.textContent = "";
        const nom = $("#ae-n", sh.el).value.trim();
        if (!nom) { err.textContent = "Donnez un nom à l'article."; return; }
        const cat = $("#ae-c", sh.el).value;
        let vars = [];
        if (st.type !== "libre") {
          vars = parseVariants($("#ae-p", sh.el).value);
          if (!vars.length) { err.textContent = "Indiquez au moins un prix."; return; }
          if (st.type === "unique") vars = [{lib: "", prix: vars[0].prix}];
          if (st.type === "multi" && vars.length < 2 && !(vars[0] && vars[0].lib)) { err.textContent = "Indiquez au moins deux choix, ou choisissez « Prix unique »."; return; }
        }
        const aid = id || uid("a");
        const ordre = id && a.cat === cat ? (a.ordre ?? 99) : Math.max(0, ...Object.values(articles).filter(x => x.cat === cat && !x.supprime).map(x => x.ordre || 0)) + 1;
        writeDoc("catalogue/" + com, {articles: {[aid]: {nom, cat, emoji: st.emoji, prix: vars.map(v => v.prix), libelles: vars.map(v => v.lib), libre: st.type === "libre", actif: $("#ae-a", sh.el).checked, reservable: $("#ae-r", sh.el).checked, photo: st.photo || null, ordre, supprime: false}}});
        sh.close(); toast(id ? "Article modifié" : "Article ajouté");
      }
    }
  });
  function drawPhoto() {
    const box = $("#ae-photo", sh.el); if (!box) return;
    const src = st.photo ? photoURL(st.photo) : "";
    box.innerHTML = `<div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;margin-bottom:8px">${src ? `<img class="photo-prev" src="${esc(src)}" alt="Photo de l'article">` : ""}
      ${canUploadPhoto() ? `<button class="btn" data-act="photo">${st.photo ? "Changer la photo" : "Ajouter une vraie photo"}</button>${st.photo ? `<button class="linkish" data-act="photo-del">Retirer la photo</button>` : ""}` : (st.photo ? "" : `<span class="hint">L'ajout de photos se fait depuis le compte propriétaire.</span>`)}</div>`;
  }
  drawPhoto();
  enterSubmits(sh, "ok");
}
const ROLE_HINT = {
  admin: "Voit tout, sur les deux commerces : prix, équipe, rapports.",
  gerant: "Encaisse, annule, fait les remises, note les dépenses et clôture la caisse. Voit les rapports de son commerce.",
  vendeur: "Encaisse, ouvre et clôture la caisse. Pour annuler ou faire une remise, il faut le code d'un gérant.",
  aucun: "N'utilise pas l'application. Pratique pour les coiffeurs : ils apparaissent dans « Réalisé par »."
};
function openMemberEditor(id) {
  const isNew = !id;
  const m = isNew ? {nom: "", acces: "vendeur", commerce: curCom(), prestataire: false, commission: 0, actif: true} : clone(S.membres[id]);
  const sh = openSheet({
    wide: true,
    html: `<h2>${isNew ? "Ajouter une personne" : "Modifier la fiche"}</h2>
      <div class="field"><label for="me-n">Nom</label><input id="me-n" class="input" autocomplete="off" value="${esc(m.nom)}"></div>
      <div class="two"><div class="field"><label for="me-c">Travaille à</label><select id="me-c" class="input">${[...new Set([...coms(), ...(m.commerce && m.commerce !== "tous" && cfg().commerces[m.commerce] ? [m.commerce] : [])])].map(k => [k, comName(k)]).concat([["tous", "Toutes les activités"]]).map(([k, v]) => `<option value="${esc(k)}" ${m.commerce === k ? "selected" : ""}>${esc(v)}</option>`).join("")}</select></div>
      <div class="field"><label for="me-a">Accès à l'application</label><select id="me-a" class="input">${Object.entries(ROLE_LABEL).map(([k, v]) => `<option value="${k}" ${m.acces === k ? "selected" : ""}>${esc(v)}</option>`).join("")}</select></div></div>
      <p class="hint muted" id="me-a-hint" style="margin:0"></p>
      <div class="field" id="me-pin-f"><label for="me-p">Code personnel (4 chiffres)</label><input id="me-p" class="input pin-input" type="password" inputmode="numeric" maxlength="4" autocomplete="new-password" placeholder="${!isNew && m.pinHash ? "••••" : ""}"><span class="hint">${!isNew && m.pinHash ? "Laissez vide pour garder le code actuel." : "À donner uniquement à cette personne."}</span></div>
      <label class="check"><input type="checkbox" id="me-pr" ${m.prestataire ? "checked" : ""}> Réalise des prestations (coiffeur, coiffeuse)</label>
      <div class="field" id="me-com-f"><label for="me-cm">Commission sur ses prestations (%)</label><input id="me-cm" class="input" inputmode="numeric" autocomplete="off" value="${m.commission || 0}"><span class="hint">Mettez 0 s'il est payé au salaire fixe.</span></div>
      ${isNew ? "" : `<label class="check"><input type="checkbox" id="me-act" ${m.actif !== false ? "checked" : ""}> Fiche active</label>`}
      <p class="form-err" id="me-err" role="alert"></p>
      <div class="sheet-actions"><button class="btn" data-act="close">Annuler</button><button class="btn btn-primary grow" data-act="ok">Enregistrer</button></div>`,
    actions: {close: () => sh.close(), ok: t => save(t)}
  });
  const sync = () => {
    const acc = $("#me-a", sh.el).value;
    $("#me-pin-f", sh.el).hidden = acc === "aucun";
    $("#me-com-f", sh.el).hidden = !$("#me-pr", sh.el).checked;
    $("#me-a-hint", sh.el).textContent = ROLE_HINT[acc] || "";
    $("#me-c", sh.el).disabled = acc === "admin";
  };
  $("#me-a", sh.el).addEventListener("change", sync);
  $("#me-pr", sh.el).addEventListener("change", sync);
  sync();
  enterSubmits(sh, "ok");
  setTimeout(() => { if (isNew) $("#me-n", sh.el).focus(); }, 60);
  async function save(btn) {
    const err = $("#me-err", sh.el); err.textContent = "";
    const nom = $("#me-n", sh.el).value.trim();
    const acces = $("#me-a", sh.el).value, commerce = $("#me-c", sh.el).value;
    const prest = $("#me-pr", sh.el).checked;
    const commission = Math.min(100, intOf($("#me-cm", sh.el).value));
    const actif = isNew ? true : $("#me-act", sh.el).checked;
    const pin = $("#me-p", sh.el).value.trim();
    if (!nom) { err.textContent = "Indiquez le nom."; return; }
    if (acces !== "aucun") {
      if (pin && !/^\d{4}$/.test(pin)) { err.textContent = "Le code doit contenir exactement 4 chiffres."; return; }
      if (!pin && !m.pinHash) { err.textContent = "Choisissez un code à 4 chiffres pour cette personne."; return; }
      btn.disabled = true;
      const taken = pin ? await pinTaken(pin, id) : false;
      btn.disabled = false;
      if (taken) { err.textContent = "Ce code est déjà pris par quelqu'un d'autre. Choisissez-en un autre."; return; }
    }
    const otherAdmins = Object.entries(S.membres).filter(([mid, x]) => x.acces === "admin" && x.actif !== false && mid !== id);
    if (!isNew && m.acces === "admin" && (acces !== "admin" || !actif) && !otherAdmins.length) { err.textContent = "Il faut garder au moins un administrateur actif."; return; }
    const mid = id || uid("m");
    const patch = {nom, acces, commerce: acces === "admin" ? "tous" : commerce, prestataire: prest, commission: prest ? commission : 0, actif};
    if (pin && acces !== "aucun") { const salt = uid("s"); patch.pinSalt = salt; patch.pinHash = await pinHash(pin, salt); }
    if (isNew) patch.cree = new Date().toISOString();
    writeDoc("equipe/membres", {membres: {[mid]: patch}});
    sh.close(); toast(isNew ? `${firstName(nom)} ajouté à l'équipe` : "Fiche enregistrée");
    if (mid === S.op && (!actif || acces === "aucun")) lock();
  }
}
function openActivityEditor(k) {
  const all = cfg().commerces; const isNew = !k;
  const n = Object.keys(all).length;
  const a = isNew ? {nom: "", court: "", type: "services", couleur: PALETTE[n % PALETTE.length][0], couleur2: PALETTE[n % PALETTE.length][1], actif: true} : clone(all[k]);
  let pal = [a.couleur, a.couleur2];
  const sh = openSheet({
    wide: true,
    html: `<h2>${isNew ? "Nouvelle activité" : "Modifier l'activité"}</h2><p class="sub">Une activité a sa propre caisse, son catalogue et ses chiffres.</p>
      <div class="two"><div class="field"><label for="ac-n">Nom complet</label><input id="ac-n" class="input" autocomplete="off" value="${esc(a.nom)}" placeholder="Ex. : O'loisirs"></div>
      <div class="field"><label for="ac-c">Nom court (menu)</label><input id="ac-c" class="input" autocomplete="off" value="${esc(a.court)}" placeholder="Ex. : Loisirs"></div></div>
      <div class="field"><label for="ac-t">Type</label><select id="ac-t" class="input">${Object.entries(TYPES).map(([t, l]) => `<option value="${t}" ${a.type === t ? "selected" : ""}>${esc(l)}</option>`).join("")}</select></div>
      <div class="field"><span class="field-label">Couleurs</span><div class="chips" id="ac-pal">${PALETTE.map((p, i) => `<button class="chip" data-act="pal" data-i="${i}" aria-pressed="${p[0] === pal[0] && p[1] === pal[1]}" aria-label="Couleurs ${i + 1}"><span class="act-dot" style="background:linear-gradient(135deg,${p[0]} 50%,${p[1]} 50%)"></span></button>`).join("")}</div></div>
      ${isNew ? "" : `<label class="check"><input type="checkbox" id="ac-a" ${a.actif !== false ? "checked" : ""}> Activité ouverte (décochez pour la masquer sans rien effacer)</label>`}
      <p class="form-err" id="ac-err" role="alert"></p>
      <div class="sheet-actions"><button class="btn" data-act="close">Annuler</button><button class="btn btn-primary grow" data-act="ok">Enregistrer</button></div>`,
    actions: {
      close: () => sh.close(),
      pal: t => { pal = PALETTE[+t.dataset.i]; $$("#ac-pal .chip", sh.el).forEach(b => b.setAttribute("aria-pressed", String(b === t))); },
      ok: () => {
        const err = $("#ac-err", sh.el);
        const nom = $("#ac-n", sh.el).value.trim(), court = $("#ac-c", sh.el).value.trim() || nom;
        if (!nom) { err.textContent = "Donnez un nom à l'activité."; return; }
        const actif = isNew ? true : $("#ac-a", sh.el).checked;
        if (!actif && coms().filter(x => x !== k).length === 0) { err.textContent = "Il faut garder au moins une activité ouverte."; return; }
        const id = k || uid("act");
        const full = {};
        Object.entries(all).forEach(([x, v]) => { full[x] = {nom: v.nom, court: v.court, type: v.type, couleur: v.couleur, couleur2: v.couleur2, ordre: v.ordre ?? 0, actif: v.actif !== false}; });
        full[id] = {nom, court, type: $("#ac-t", sh.el).value, couleur: pal[0], couleur2: pal[1], ordre: isNew ? Math.max(0, ...Object.values(all).map(v => v.ordre ?? 0)) + 1 : (a.ordre ?? 0), actif};
        writeDoc("config/general", {commerces: full});
        sh.close(); toast(isNew ? `Activité ${court} ajoutée` : "Activité enregistrée");
        if (isNew) { S.catalogCom = id; S.gestionTab = "catalogue"; render(); }
      }
    }
  });
  enterSubmits(sh, "ok");
}
function openTicketInfoEditor() {
  const t = cfg().ticket;
  const sh = openSheet({
    html: `<h2>Ticket imprimé</h2><p class="sub">Ces informations apparaissent en haut et en bas de chaque ticket.</p>
      <div class="field"><label for="ti-a">Adresse</label><input id="ti-a" class="input" autocomplete="off" value="${esc(t.adresse)}"></div>
      <div class="field"><label for="ti-t">Téléphone</label><input id="ti-t" class="input" autocomplete="off" value="${esc(t.tel)}"></div>
      <div class="field"><label for="ti-m">Message de fin</label><input id="ti-m" class="input" autocomplete="off" value="${esc(t.message)}"></div>
      <div class="sheet-actions"><button class="btn" data-act="close">Annuler</button><button class="btn btn-primary grow" data-act="ok">Enregistrer</button></div>`,
    actions: {
      close: () => sh.close(),
      ok: () => { writeDoc("config/general", {ticket: {adresse: $("#ti-a", sh.el).value.trim(), tel: $("#ti-t", sh.el).value.trim(), message: $("#ti-m", sh.el).value.trim()}}); sh.close(); toast("Ticket enregistré"); }
    }
  });
  enterSubmits(sh, "ok");
}
function openListEditor(key, title, hint) {
  const cur = cfg()[key];
  const sh = openSheet({
    html: `<h2>${esc(title)}</h2><div class="field"><label for="le-t">${esc(hint)}</label><textarea id="le-t" class="input">${esc(cur.join("\n"))}</textarea></div>
      <div class="sheet-actions"><button class="btn" data-act="close">Annuler</button><button class="btn btn-primary grow" data-act="ok">Enregistrer</button></div>`,
    actions: {
      close: () => sh.close(),
      ok: () => { const list = [...new Set($("#le-t", sh.el).value.split("\n").map(s => s.trim()).filter(Boolean))].slice(0, 30); writeDoc("config/general", {[key]: list}); sh.close(); toast("Liste enregistrée"); }
    }
  });
}
function openResetSheet() {
  const sh = openSheet({
    html: `<h2>Effacer les ventes</h2><p>Toutes les ventes, dépenses, clôtures, crédits et réservations seront supprimés. Le catalogue et l'équipe restent.</p>
      <div class="field"><label for="rs-t">Pour confirmer, tapez EFFACER</label><input id="rs-t" class="input" autocomplete="off" autocapitalize="characters"></div><p class="form-err" id="rs-err" role="alert"></p>
      <div class="sheet-actions"><button class="btn" data-act="close">Annuler</button><button class="btn btn-danger grow" data-act="ok">Tout effacer</button></div>`,
    actions: {
      close: () => sh.close(),
      ok: async t => {
        if ($("#rs-t", sh.el).value.trim().toUpperCase() !== "EFFACER") { $("#rs-err", sh.el).textContent = "Tapez EFFACER pour confirmer."; return; }
        t.disabled = true; t.textContent = "Suppression…";
        try {
          for (const col of ["sessions", "credits", "reservations"]) { const q = await S.db.collection(col).get(); for (const d of q.docs) await S.db.doc(`${col}/${d.id}`).delete(); }
          OB.ops = OB.ops.filter(o => !/^(sessions|credits|reservations)\//.test(o.path)); OB.save();
          S.carts = {};
          overlayChanged(""); sh.close(); toast("Ventes effacées");
        } catch (e) { $("#rs-err", sh.el).textContent = `La suppression a échoué (${(e && e.code) || "erreur"}). Réessayez.`; t.disabled = false; t.textContent = "Tout effacer"; }
      }
    }
  });
}
function openSetup() {
  const sh = openSheet({
    html: `<h2>Votre profil administrateur</h2><p class="sub">Vous vous connecterez avec ce code. Ne le donnez à personne.</p>
      <div class="field"><label for="su-nom">Votre nom</label><input id="su-nom" class="input" autocomplete="name" autofocus></div>
      <div class="two"><div class="field"><label for="su-pin">Code (4 chiffres)</label><input id="su-pin" class="input pin-input" type="password" inputmode="numeric" maxlength="4" autocomplete="new-password"></div>
      <div class="field"><label for="su-pin2">Répétez le code</label><input id="su-pin2" class="input pin-input" type="password" inputmode="numeric" maxlength="4" autocomplete="new-password"></div></div>
      <p class="form-err" id="su-err" role="alert"></p>
      <div class="sheet-actions"><button class="btn" data-act="close">Annuler</button><button class="btn btn-primary grow" data-act="save">Créer mon profil</button></div>`,
    actions: {
      close: () => sh.close(),
      save: async t => {
        const err = $("#su-err", sh.el);
        const nom = $("#su-nom", sh.el).value.trim(), pin = $("#su-pin", sh.el).value.trim(), pin2 = $("#su-pin2", sh.el).value.trim();
        if (!nom) { err.textContent = "Indiquez votre nom."; return; }
        if (!/^\d{4}$/.test(pin)) { err.textContent = "Le code doit contenir exactement 4 chiffres."; return; }
        if (pin !== pin2) { err.textContent = "Les deux codes ne sont pas identiques."; return; }
        t.disabled = true;
        const id = uid("m"), salt = uid("s");
        const m = {nom, acces: "admin", commerce: "tous", prestataire: false, commission: 0, actif: true, pinSalt: salt, pinHash: await pinHash(pin, salt), cree: new Date().toISOString()};
        writeDoc("equipe/membres", {membres: {[id]: m}});
        sh.close(); login(id); S.view = "gestion"; S.gestionTab = "equipe"; render();
        toast("Profil créé. Ajoutez maintenant votre équipe.");
      }
    }
  });
  enterSubmits(sh, "save");
}

/* ===================== Verrouillage ===================== */
async function lockKey(k) {
  if (S.mode !== "lock" || S.pinBusy) return;
  if (Date.now() < S.pinLockUntil) { toast("Patientez quelques secondes.", "warn"); return; }
  if (S.pinBuf.length >= 4) return;
  S.pinBuf += k; updLockDots();
  if (S.pinBuf.length < 4) return;
  S.pinBusy = true;
  const id = await findMemberByPin(S.pinBuf);
  S.pinBusy = false;
  if (id) { S.pinFails = 0; login(id); return; }
  S.pinFails++; S.pinBuf = ""; updLockDots(); shakeEl($("#lock-dots"));
  if (S.pinFails >= 5) { S.pinFails = 0; S.pinLockUntil = Date.now() + 30000; toast("Trop d'essais. Réessayez dans 30 secondes.", "bad"); }
  else toast("Code incorrect", "bad");
}
function updLockDots() { const d = $("#lock-dots"); if (d) d.innerHTML = dotsHTML(S.pinBuf.length); }
function persistOp(force) {
  if (S.demo || !S.op) return;
  const now = Date.now();
  if (!force && now - S.lastPersist < 15000) return;
  S.lastPersist = now; ls.set("oth.op", {id: S.op, at: now});
}
function login(id) {
  S.op = id; S.mode = "app"; S.pinBuf = ""; S.lastActivity = Date.now();
  const m = S.membres[id];
  if (m && m.commerce && m.commerce !== "tous") S.com = m.commerce;
  S.view = "caisse"; S.cat = "all";
  persistOp(true); render();
}
function lock() { closeAllSheets(); S.op = null; S.mode = "lock"; S.pinBuf = ""; ls.del("oth.op"); render(); }

/* ===================== Actions globales ===================== */
const A = {
  "demo-start": () => startDemo(),
  "demo-exit": () => exitDemo(),
  "setup-start": () => openSetup(),
  "pin-key": t => lockKey(t.dataset.k),
  "pin-del": () => { S.pinBuf = S.pinBuf.slice(0, -1); updLockDots(); },
  tab: t => { closeAllSheets(); S.view = t.dataset.v; if (S.view === "rapports") ensureReportSub(); render(); },
  "set-com": t => { S.com = t.dataset.c; ls.set("oth.com", S.com); S.cat = "all"; render(); },
  cat: t => { S.cat = t.dataset.id; render(); },
  add: t => onAddArticle(t.dataset.id),
  "line-inc": t => { const l = S.cart.lines[+t.dataset.i]; if (l) { l.qte++; render(); } },
  "line-dec": t => { const i = +t.dataset.i; const l = S.cart.lines[i]; if (!l) return; l.qte--; if (l.qte <= 0) S.cart.lines.splice(i, 1); render(); },
  "cart-clear": () => { S.cart.lines = []; S.cart.prest = null; render(); },
  prest: t => { S.cart.prest = S.cart.prest === t.dataset.id ? null : t.dataset.id; render(); },
  canal: t => { S.cart.canal = t.dataset.id; render(); },
  "ticket-sheet": () => openTicketSheet(),
  checkout: () => openPayment(),
  "open-caisse": () => openCaisseSheet(),
  "close-caisse": () => openClotureSheet(),
  "add-expense": () => openExpenseSheet(),
  "ticket-detail": t => openTicketDetail(t.dataset.id),
  "credit-pay": t => openCreditPay(t.dataset.id),
  "op-menu": () => openOpMenu(),
  "sync-panel": () => openSyncPanel(),
  "rep-period": t => { S.rep.period = t.dataset.p; ensureReportSub(); render(); },
  "rep-com": t => { S.rep.com = t.dataset.c; render(); },
  "export-csv": () => exportCSV(),
  "g-tab": t => { S.gestionTab = t.dataset.t; render(); },
  "cat-com": t => { S.catalogCom = t.dataset.c; render(); },
  "art-new": () => openArticleEditor(null),
  "art-edit": t => openArticleEditor(t.dataset.id),
  "cat-new": () => openCategoryEditor(null),
  "cat-edit": t => openCategoryEditor(t.dataset.id),
  "mem-new": () => openMemberEditor(null),
  "mem-edit": t => openMemberEditor(t.dataset.id),
  "act-new": () => openActivityEditor(null),
  "act-edit": t => openActivityEditor(t.dataset.id),
  "set-ticket": () => openTicketInfoEditor(),
  "com-menu": () => openComMenu(),
  "import-loisirs": () => {
    const com = S.catalogCom || curCom(); const src = SEED.catalogue.snack; const arts = {};
    for (const [k, v] of Object.entries(src.articles)) if (v.cat === "c_loisirs") arts[k] = clone(v);
    writeDoc("catalogue/" + com, {categories: {c_loisirs: clone(src.categories.c_loisirs)}, articles: arts});
    toast("Loisirs et événements ajoutés : fixez le prix du baby-foot");
  },
  "z-report": t => { const s2 = (S.rep.raw || []).find(x => x.id === t.dataset.id); if (s2) openZReport(s2, {}); },
  "set-sources": () => openListEditor("sources", "Comment les clients vous connaissent", "Une source par ligne."),
  "set-depenses": () => openListEditor("depenses", "Catégories de dépenses", "Une catégorie par ligne."),
  "mode-toggle": t => { const modes = clone(cfg().modes); const m = modes.find(x => x.id === t.dataset.id); if (!m || m.id === "especes") return; m.actif = m.actif === false; writeDoc("config/general", {modes}); },
  "set-lock": t => writeDoc("config/general", {autoLockMin: +t.dataset.v}),
  "reset-data": () => openResetSheet()
};
function openComMenu() {
  const cur = curCom();
  const sh = openSheet({
    html: `<h2>Activité</h2><div class="menu-list">${opComs().map(k => `<button class="row-item" data-act="pick" data-c="${esc(k)}"><span class="act-dot" style="background:linear-gradient(135deg,${esc(comColor(k))} 50%,${esc(comColor2(k))} 50%)"></span><span class="ri-main"><b>${esc(comFull(k))}</b><span class="meta">${openSession(k) ? "Caisse ouverte" : "Caisse fermée"}</span></span>${k === cur ? `<span class="badge ok">Actuelle</span>` : ""}</button>`).join("")}</div>
      <div class="sheet-actions"><button class="btn btn-block" data-act="close">Fermer</button></div>`,
    actions: {close: () => sh.close(), pick: t => { S.com = t.dataset.c; ls.set("oth.com", S.com); S.cat = "all"; sh.close(); render(); }}
  });
}
document.addEventListener("click", e => {
  const t = e.target.closest("[data-act]");
  if (!t || t.disabled) return;
  const wrap = t.closest(".sheet-wrap");
  const act = t.dataset.act;
  if (wrap && wrap._api && wrap._api.actions[act]) { e.preventDefault(); wrap._api.actions[act](t, e, wrap._api); return; }
  if (A[act]) { e.preventDefault(); A[act](t, e); }
});
document.addEventListener("keydown", e => {
  const top = topSheet();
  if (e.key === "Escape" && top) { if (top.dismissable) top.close(); return; }
  const tag = (document.activeElement && document.activeElement.tagName) || "";
  if (/INPUT|TEXTAREA|SELECT/.test(tag)) return;
  const scope = top ? top.el : S.mode === "lock" ? $("#app") : null;
  const pad = scope && scope.querySelector(".keypad");
  if (!pad) return;
  if (/^[0-9]$/.test(e.key)) { const b = pad.querySelector(`[data-k="${e.key}"]`); if (b) { e.preventDefault(); b.click(); } }
  else if (e.key === "Backspace") { const b = pad.querySelector(".key-del"); if (b) { e.preventDefault(); b.click(); } }
});
["pointerdown", "keydown"].forEach(ev => document.addEventListener(ev, () => { S.lastActivity = Date.now(); if (S.mode === "app") persistOp(false); }, {capture: true, passive: true}));
setInterval(() => {
  if (S.mode !== "app") return;
  const ms = autoLockMs();
  if (ms !== Infinity && Date.now() - S.lastActivity > ms) { lock(); toast("Verrouillé après inactivité"); }
}, 15000);
window.addEventListener("online", () => { S.syncErr = null; if (OB.wake) OB.wake(); OB.run(); });
document.addEventListener("visibilitychange", () => { if (!document.hidden) { if (OB.wake) OB.wake(); OB.run(); } });

/* ===================== Démo ===================== */
function mulberry32(a) {
  return function () { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
function pickW(rnd, pairs) { const tot = pairs.reduce((s, p) => s + p[1], 0); let r = rnd() * tot; for (const [v, w] of pairs) { r -= w; if (r < 0) return v; } return pairs[pairs.length - 1][0]; }
async function demoSeed(db) {
  const seed = clone(SEED);
  await db.doc("config/general").set(seed.config);
  seed.catalogue.snack.articles.s_babyfoot.prix = [200, 500, 1000];
  seed.catalogue.snack.articles.s_babyfoot.libelles = ["1 partie", "30 min", "1 heure"];
  await db.doc("catalogue/salon").set(seed.catalogue.salon);
  await db.doc("catalogue/snack").set(seed.catalogue.snack);
  const people = [
    ["m_admin", "Aliou", "admin", "tous", false, 0, "1234"],
    ["m_ibrahim", "Ibrahim", "gerant", "salon", true, 0, "2222"],
    ["m_fatou", "Fatoumata", "vendeur", "salon", false, 0, "1111"],
    ["m_mariam", "Mariam", "vendeur", "snack", false, 0, "3333"],
    ["m_moussa", "Moussa", "aucun", "salon", true, 40, null],
    ["m_bakary", "Bakary", "aucun", "salon", true, 40, null],
    ["m_seydou", "Seydou", "aucun", "salon", true, 35, null],
    ["m_awa", "Awa", "aucun", "snack", false, 0, null]
  ];
  const membres = {};
  for (const [id, nom, acces, commerce, prest, comm, pin] of people) {
    membres[id] = {nom, acces, commerce, prestataire: prest, commission: comm, actif: true, pinSalt: "demo-" + id, pinHash: pin ? await pinHash(pin, "demo-" + id) : null};
  }
  await db.doc("equipe/membres").set({membres});
  const rnd = mulberry32(20260921);
  const now = new Date(); const today = dkey(now);
  const salonW = [["a_coupe", 40], ["a_degrade", 26], ["a_coupe_barbe", 15], ["a_barbe", 7], ["a_contours", 6], ["a_coupe_enfant", 5], ["a_shampoing", 3], ["a_tresses", 2]];
  const snackW = [["s_babyfoot", 9], ["s_poulet_braise", 14], ["s_attieke", 14], ["s_brochette", 12], ["s_bissap", 14], ["s_gingembre", 10], ["s_sandwich", 9], ["s_poisson_braise", 7], ["s_verm_poulet", 5], ["s_macaroni", 5], ["s_pastel", 5], ["s_nem", 4], ["s_pate", 4], ["s_poulet_mayo", 3], ["s_petit_pois", 3], ["s_foie", 2]];
  const hSalon = [[9, 3], [10, 4], [11, 4], [12, 4], [13, 3], [14, 3], [15, 4], [16, 6], [17, 8], [18, 9], [19, 10], [20, 10], [21, 8], [22, 5]];
  const hSnack = [[9, 2], [10, 2], [11, 4], [12, 9], [13, 9], [14, 5], [15, 3], [16, 3], [17, 4], [18, 6], [19, 9], [20, 10], [21, 8], [22, 4]];
  const modesW = [["especes", 59], ["om", 22], ["wave", 10], ["moov", 7], ["credit", 1.4]];
  const srcW = [["Bouche-à-oreille", 34], ["Facebook", 20], ["TikTok", 22], ["WhatsApp", 14], ["En passant", 10]];
  const prestW = [["m_moussa", 5], ["m_bakary", 5], ["m_seydou", 4], ["m_ibrahim", 2]];
  const clients = [["Adama K.", "76 12 34 56"], ["Souleymane D.", "79 45 12 78"], ["Oumar T.", "66 21 90 43"], ["Kadiatou S.", "70 88 12 05"], ["Boubacar C.", "65 43 21 09"]];
  for (let back = 13; back >= 0; back--) {
    const day = addDays(today, -back); const dd = parseKey(day); const dow = dd.getDay();
    const boost = dow === 5 || dow === 6 || dow === 0 ? 1.3 : 1;
    const maxH = back === 0 ? Math.max(10, Math.min(22, now.getHours())) : 22;
    for (const com of ["salon", "snack"]) {
      const sid = `${com}-${day.replace(/-/g, "")}-0900-demo`;
      const vendeur = com === "salon" ? (rnd() < 0.7 ? "m_fatou" : "m_ibrahim") : "m_mariam";
      const openAt = new Date(dd.getFullYear(), dd.getMonth(), dd.getDate(), 9, 2 + Math.floor(rnd() * 8));
      const s = {commerce: com, date: day, statut: back === 0 ? "ouverte" : "cloturee", ouverture: {at: openAt.toISOString(), par: vendeur, fond: com === "salon" ? 10000 : 15000}, tickets: {}, depenses: {}, reglements: {}};
      const hW = (com === "salon" ? hSalon : hSnack).filter(([h]) => h <= maxH);
      const count = Math.round((com === "salon" ? 18 + rnd() * 14 : 26 + rnd() * 20) * boost * (back === 0 ? Math.max(0.15, (maxH - 9) / 13) : 1));
      const times = [];
      for (let i = 0; i < count; i++) times.push(new Date(dd.getFullYear(), dd.getMonth(), dd.getDate(), pickW(rnd, hW), Math.floor(rnd() * 60)));
      times.sort((a, b) => a - b);
      const cat = seed.catalogue[com].articles;
      times.forEach((at, i) => {
        const lignes = [];
        const nL = com === "salon" ? 1 : pickW(rnd, [[1, 55], [2, 35], [3, 10]]);
        for (let k = 0; k < nL; k++) {
          const aid = pickW(rnd, com === "salon" ? salonW : snackW); const a = cat[aid];
          const vi = Math.floor(rnd() * Math.max(1, (a.prix || []).length));
          const prix = a.libre ? pickW(rnd, [[5000, 3], [7500, 2], [10000, 1]]) : a.prix[vi];
          const vr = (a.libelles || [])[vi] || "";
          const ex = lignes.find(l => l.art === aid && l.prix === prix && l.var === vr);
          if (ex) ex.qte++; else lignes.push({art: aid, nom: a.nom, var: vr, prix, qte: aid === "s_brochette" ? 1 + Math.floor(rnd() * 3) : 1});
        }
        const total = lignes.reduce((x, l) => x + l.prix * l.qte, 0);
        const mode = pickW(rnd, modesW);
        const id = `t-${sid}-${i}`;
        const t = {id, n: i + 1, at: at.toISOString(), d: day, h: at.getHours(), par: vendeur, lignes, total, remise: 0, net: total, mode, recu: null, rendu: null,
          prest: com === "salon" ? pickW(rnd, prestW) : null, canal: com === "snack" ? pickW(rnd, [["place", 55], ["emporter", 32], ["livraison", 13]]) : null,
          client: null, source: rnd() < 0.17 ? pickW(rnd, srcW) : null, statut: rnd() < 0.012 ? "annule" : "ok"};
        if (t.statut === "annule") t.annulation = {at: at.toISOString(), par: com === "salon" ? "m_ibrahim" : "m_admin", autorise: com === "salon" ? "m_ibrahim" : "m_admin", motif: "Erreur de saisie"};
        if (mode === "especes") { const r = [500, 1000, 2000, 5000].map(u => Math.ceil(total / u) * u)[Math.floor(rnd() * 4)]; t.recu = Math.max(r, total); t.rendu = t.recu - total; }
        if (mode === "credit") { const [nom, tel] = clients[Math.floor(rnd() * clients.length)]; t.client = {nom, tel}; }
        s.tickets[id] = t;
      });
      const deps = com === "salon" ? [["Produits salon", 2500, 7500, 0.5], ["Carburant groupe", 3000, 6000, 0.3], ["Électricité", 5000, 12000, 0.06]] : [["Achats marché", 9000, 26000, 0.95], ["Boissons et glace", 2000, 6000, 0.7], ["Carburant groupe", 3000, 6000, 0.3]];
      deps.forEach(([dc, mi, ma, p], j) => {
        if (rnd() >= p || (back === 0 && 10 + j > maxH)) return;
        const at = new Date(dd.getFullYear(), dd.getMonth(), dd.getDate(), 10 + j, Math.floor(rnd() * 50));
        const id = `d-${sid}-${j}`;
        s.depenses[id] = {id, at: at.toISOString(), d: day, par: com === "salon" ? "m_ibrahim" : "m_admin", montant: Math.round((mi + rnd() * (ma - mi)) / 500) * 500, cat: dc, note: "", mode: "especes"};
      });
      if (back > 0) {
        const c = sessionCalc(s); const ecart = pickW(rnd, [[0, 70], [-500, 12], [500, 6], [-1000, 7], [-2500, 5]]);
        s.cloture = {at: new Date(dd.getFullYear(), dd.getMonth(), dd.getDate(), 23, 5).toISOString(), par: vendeur, compte: c.cashExpected + ecart, attendu: c.cashExpected, ecart, note: ""};
      }
      await db.doc("sessions/" + sid).set(s);
      for (const t of Object.values(s.tickets)) {
        if (t.mode !== "credit" || t.statut !== "ok") continue;
        const paid = back > 2 && rnd() < 0.75;
        await db.doc("credits/" + t.id).set({commerce: com, session: sid, ticket: t.id, n: t.n, d: day, at: t.at, client: t.client, montant: t.net,
          paiements: paid ? {["r-" + t.id]: {montant: t.net, mode: "especes", at: t.at, session: sid, par: vendeur}} : {}, statut: paid ? "solde" : "ouvert", par: vendeur});
      }
    }
  }
  const resas = [
    [1, "s_privatisation", "Privatisation de l'espace", "15:00", "20:00", "Awa Traoré", "76 45 88 12", 40, 150000, 50000],
    [3, "s_shooting", "Shooting photo", "10:00", "12:00", "Studio Kati Photo", "66 12 45 78", 0, 25000, 10000],
    [6, "s_privatisation", "Privatisation de l'espace", "18:00", "23:00", "Famille Coulibaly", "79 32 10 54", 60, 200000, 0]
  ];
  for (const [inDays, art, nom, debut, fin, cn, tel, pers, montant, acompte] of resas) {
    const id = "r-demo-" + inDays;
    const paiements = acompte ? {["p-" + id]: {montant: acompte, mode: "om", at: new Date().toISOString(), ticket: null, n: null, session: null, par: "m_admin", type: "acompte"}} : {};
    await db.doc("reservations/" + id).set({commerce: "snack", art, nom, date: addDays(today, inDays), debut, fin, client: {nom: cn, tel}, personnes: pers, montant, paiements, statut: "confirmee", note: "", cree: {at: new Date().toISOString(), par: "m_admin"}});
  }
}

/* ===================== Impression et envoi des tickets ===================== */
function printPrefs() {
  const p = ls.get("oc.print", {}) || {};
  return {largeur: p.largeur === 80 ? 80 : 58, auto: !!p.auto};
}
function setPrintPrefs(patch) { ls.set("oc.print", {...printPrefs(), ...patch}); }
const dateFr = iso => { const d = new Date(iso); return `${pad2(d.getDate())}/${pad2(d.getMonth() + 1)}/${d.getFullYear()} ${pad2(d.getHours())}:${pad2(d.getMinutes())}`; };
function waNumber(tel) {
  let d = String(tel || "").replace(/\D/g, "");
  if (d.startsWith("00")) d = d.slice(2);
  if (d.length === 8) d = "223" + d;
  return d.length >= 8 ? d : "";
}
function waLink(tel, text) { const n = waNumber(tel); return `https://wa.me/${n}?text=${encodeURIComponent(text)}`; }
function openExternal(url) {
  try { const w = window.open(url, "_blank", "noopener"); if (!w) location.href = url; }
  catch (e) { location.href = url; }
}
async function shareText(title, text, tel) {
  if (waNumber(tel)) { openExternal(waLink(tel, text)); return; }
  if (navigator.share) {
    try { await navigator.share({title, text}); return; }
    catch (e) { if (e && e.name === "AbortError") return; }
  }
  openExternal(waLink("", text));
}

/* ----- Ticket de vente ----- */
function shopHeader(com) {
  const t = cfg().ticket;
  return {nom: comFull(com), adresse: t.adresse || "", tel: t.tel || "", message: t.message || ""};
}
function ticketHTML(t, com) {
  const h = shopHeader(com);
  const row = (a, b, cls = "") => `<div class="rc-row ${cls}"><span>${a}</span><span>${b}</span></div>`;
  return `<div class="rc-c rc-big">${esc(h.nom)}</div>
    ${h.adresse ? `<div class="rc-c">${esc(h.adresse)}</div>` : ""}${h.tel ? `<div class="rc-c">Tél. ${esc(h.tel)}</div>` : ""}
    <div class="rc-sep"></div>
    ${row(`Ticket n° ${t.n}`, esc(dateFr(t.at)))}
    <div>Caisse : ${esc(firstName(mName(t.par)) || "—")}</div>
    ${t.prest ? `<div>Réalisé par : ${esc(firstName(mName(t.prest)))}</div>` : ""}
    ${t.canal ? `<div>Service : ${esc(CANAUX[t.canal] || "")}</div>` : ""}
    ${t.client && t.client.nom ? `<div>Client : ${esc(t.client.nom)}</div>` : ""}
    <div class="rc-sep"></div>
    ${(t.lignes || []).map(l => row(`${l.qte} × ${esc(lineName(l))}`, N(l.prix * l.qte))).join("")}
    <div class="rc-sep"></div>
    ${t.remise ? row("Remise", "− " + N(t.remise)) : ""}
    ${row("TOTAL", F(t.net), "rc-tot")}
    ${row(esc(modeName(t.mode)), t.mode === "especes" && t.recu != null ? N(t.recu) : N(t.net))}
    ${t.mode === "especes" && t.rendu ? row("Monnaie rendue", N(t.rendu)) : ""}
    ${t.mode === "credit" ? `<div class="rc-c">À régler plus tard</div>` : ""}
    ${t.statut === "annule" ? `<div class="rc-c rc-big">*** TICKET ANNULÉ ***</div>` : ""}
    <div class="rc-sep"></div>
    ${h.message ? `<div class="rc-c">${esc(h.message)}</div>` : ""}`;
}
function ticketText(t, com) {
  const h = shopHeader(com);
  const L = [h.nom, `Ticket n° ${t.n} du ${dateFr(t.at)}`];
  for (const l of t.lignes || []) L.push(`${l.qte} × ${lineName(l)} : ${F(l.prix * l.qte)}`);
  if (t.remise) L.push(`Remise : − ${F(t.remise)}`);
  L.push(`Total : ${F(t.net)} (${modeName(t.mode)})`);
  if (t.mode === "especes" && t.rendu) L.push(`Monnaie rendue : ${F(t.rendu)}`);
  if (t.prest) L.push(`Réalisé par ${firstName(mName(t.prest))}`);
  if (t.statut === "annule") L.push("TICKET ANNULÉ");
  if (h.message) L.push("", h.message);
  if (h.adresse || h.tel) L.push([h.adresse, h.tel].filter(Boolean).join(" · "));
  return L.join("\n");
}
function printTicket(t, com) { printHTML(ticketHTML(t, com)); }
function shareTicket(t, com) { shareText(`Ticket n° ${t.n}`, ticketText(t, com), t.client && t.client.tel); }

/* ----- Rapport de clôture (ticket Z) ----- */
function zData(s) {
  const c = sessionCalc(s);
  const prest = {}, arts = {};
  for (const t of Object.values(s.tickets || {})) {
    if (t.statut === "annule") continue;
    if (t.prest) { const p = prest[t.prest] || (prest[t.prest] = {n: 0, ca: 0}); p.n++; p.ca += t.net || 0; }
    for (const l of t.lignes || []) { const a = arts[l.art] || (arts[l.art] = {nom: l.nom, qte: 0, ca: 0}); a.qte += l.qte || 0; a.ca += (l.prix || 0) * (l.qte || 0); }
  }
  return {c, prest, arts: Object.values(arts).sort((a, b) => b.ca - a.ca).slice(0, 5), deps: Object.values(s.depenses || {})};
}
function zRows(s, full) {
  const {c, prest, arts, deps} = zData(s);
  const cl = s.cloture || {};
  const R = [];
  R.push(["h", `Clôture de caisse · ${comFull(s.commerce)}`]);
  R.push(["t", dLabel(s.date)]);
  R.push(["kv", "Ouverture", `${hm(s.ouverture?.at)} par ${firstName(mName(s.ouverture?.par)) || "?"}`]);
  if (cl.at) R.push(["kv", "Clôture", `${hm(cl.at)} par ${firstName(mName(cl.par)) || "?"}`]);
  R.push(["sep"]);
  R.push(["kv", "Tickets", `${c.n}${c.annules ? ` (+ ${c.annules} annulé${c.annules > 1 ? "s" : ""})` : ""}`]);
  R.push(["kvb", "Chiffre d'affaires", F(c.ca)]);
  for (const [k, v] of Object.entries(c.byMode).sort((a, b) => b[1] - a[1])) R.push(["kv", "  " + modeName(k), F(v)]);
  if (c.rembTotal) R.push(["kv", "Remboursements de crédit", F(c.rembTotal)]);
  if (deps.length) { R.push(["kv", "Dépenses", "− " + F(c.depenses)]); for (const d of deps) R.push(["kv", "  " + d.cat + (d.note ? " (" + d.note + ")" : ""), F(d.montant)]); }
  R.push(["sep"]);
  R.push(["kv", "Fond de caisse", F(c.fond)]);
  if (full) {
    R.push(["kv", "Espèces attendues", F(cl.attendu ?? c.cashExpected)]);
    if (cl.at) {
      R.push(["kv", "Espèces comptées", F(cl.compte)]);
      const e = cl.ecart || 0;
      R.push(["kvb", "Écart", e === 0 ? "Aucun" : (e > 0 ? "+ " : "− ") + F(Math.abs(e))]);
    }
  } else if (cl.at) R.push(["kv", "Espèces comptées", F(cl.compte)]);
  const pr = Object.entries(prest);
  if (pr.length) {
    R.push(["sep"]); R.push(["h2", "Coiffeurs"]);
    for (const [id, p] of pr.sort((a, b) => b[1].ca - a[1].ca)) {
      const m = S.membres[id] || {}; const pct = m.commission || 0;
      R.push(["kv", `${firstName(m.nom || "?")} · ${p.n} client${p.n > 1 ? "s" : ""}`, F(p.ca) + (pct ? ` (${F(Math.round(p.ca * pct / 100))} à verser)` : "")]);
    }
  }
  if (arts.length) { R.push(["sep"]); R.push(["h2", "Meilleures ventes"]); for (const a of arts) R.push(["kv", `${a.qte} × ${a.nom}`, F(a.ca)]); }
  if (cl.note) { R.push(["sep"]); R.push(["t", "Remarque : " + cl.note]); }
  return R;
}
function zHTML(s, full) {
  return zRows(s, full).map(r => {
    if (r[0] === "h") return `<div class="rc-c rc-big">${esc(r[1])}</div>`;
    if (r[0] === "h2") return `<div class="rc-b">${esc(r[1])}</div>`;
    if (r[0] === "t") return `<div class="rc-c">${esc(r[1])}</div>`;
    if (r[0] === "sep") return `<div class="rc-sep"></div>`;
    const sub = r[1].startsWith("  ");
    return `<div class="rc-row${r[0] === "kvb" ? " rc-tot" : ""}${sub ? " rc-sub" : ""}"><span>${esc(r[1].trim())}</span><span>${esc(r[2])}</span></div>`;
  }).join("");
}
function zText(s, full) {
  return zRows(s, full).map(r => r[0] === "sep" ? "" : r[0] === "kv" || r[0] === "kvb" ? `${r[1].trim()} : ${r[2]}` : r[1]).join("\n").replace(/\n{3,}/g, "\n\n");
}
function openZReport(s, opts = {}) {
  const full = isGerantPlus();
  const sh = openSheet({
    wide: true,
    html: `<h2>${s.statut === "cloturee" ? "Caisse clôturée" : "Point de caisse"}</h2>
      ${opts.offline ? `<p class="notice">Pas de réseau : la clôture est gardée sur cet appareil et partira toute seule au retour de la connexion. Laissez l'application ouverte.</p>` : ""}
      <div class="z-preview"><div class="rc">${zHTML(s, full)}</div></div>
      <div class="chips" style="margin-top:14px"><button class="btn" data-act="print">🖨️ Imprimer</button><button class="btn" data-act="share">Envoyer (WhatsApp…)</button></div>
      <div class="sheet-actions"><button class="btn btn-primary btn-block" data-act="close">Terminé</button></div>`,
    actions: {
      close: () => sh.close(),
      print: () => printHTML(zHTML(s, full)),
      share: () => shareText("Clôture de caisse", zText(s, full))
    }
  });
}

/* ----- Impression ----- */
function printHTML(inner) {
  const w = printPrefs().largeur;
  let root = $("#print-root");
  if (!root) { root = document.createElement("div"); root.id = "print-root"; document.body.appendChild(root); }
  root.innerHTML = `<div class="rc" style="width:${w - 4}mm">${inner}</div>`;
  root.style.cssText = "display:block;position:absolute;left:-10000px;top:0";
  const hmm = Math.ceil(root.firstElementChild.getBoundingClientRect().height / 3.7795) + 10;
  root.style.cssText = "";
  let st = $("#print-page");
  if (!st) { st = document.createElement("style"); st.id = "print-page"; document.head.appendChild(st); }
  st.textContent = `@page{size:${w}mm ${Math.max(70, hmm)}mm;margin:0}`;
  setTimeout(() => {
    try { window.print(); }
    catch (e) { toast("L'impression n'est pas possible sur cet appareil.", "bad"); }
  }, 60);
}
function testTicket() {
  const now = new Date();
  const com = curCom();
  return {id: "essai", n: 0, at: now.toISOString(), d: dkey(now), h: now.getHours(), par: S.op, lignes: [{art: "x", nom: "Ticket d'essai", var: "", prix: 1000, qte: 1}], total: 1000, remise: 0, net: 1000, mode: "especes", recu: 1000, rendu: 0, prest: null, canal: null, client: null, statut: "ok", _com: com};
}
function openPrintSettings() {
  const p = printPrefs();
  const sh = openSheet({
    html: `<h2>Imprimante et tickets</h2><p class="sub">Réglages propres à cet appareil.</p>
      <div class="field"><span class="field-label">Largeur du papier</span><div class="seg" role="group" aria-label="Largeur" id="pp-w">${[58, 80].map(v => `<button data-act="w" data-v="${v}" aria-pressed="${p.largeur === v}">${v} mm</button>`).join("")}</div>
        <span class="hint">58 mm pour les petites imprimantes Bluetooth, 80 mm pour les imprimantes de comptoir.</span></div>
      <label class="check"><input type="checkbox" id="pp-a" ${p.auto ? "checked" : ""}> Imprimer automatiquement après chaque vente</label>
      <details class="more"><summary>Comment brancher une imprimante</summary>
        <p><b>Téléphone ou tablette Android</b> avec une imprimante Bluetooth : installez l'application gratuite RawBT depuis le Play Store, jumelez l'imprimante dans RawBT, puis choisissez RawBT quand la fenêtre d'impression s'ouvre (réglez le papier sur ${p.largeur} mm).</p>
        <p><b>Ordinateur</b> : installez le pilote de l'imprimante de tickets, puis choisissez-la dans la fenêtre d'impression, avec des marges à zéro.</p>
        <p>Sans imprimante, le bouton « Envoyer » transmet le ticket au client par WhatsApp.</p></details>
      <div class="sheet-actions"><button class="btn" data-act="test">Imprimer un essai</button><button class="btn btn-primary grow" data-act="ok">Enregistrer</button></div>`,
    actions: {
      w: t => { $$("#pp-w button", sh.el).forEach(b => b.setAttribute("aria-pressed", String(b === t))); },
      test: () => { save(); printTicket(testTicket(), curCom()); },
      ok: () => { save(); sh.close(); toast("Réglages d'impression enregistrés"); render(); }
    }
  });
  function save() {
    const b = $("#pp-w [aria-pressed=true]", sh.el);
    setPrintPrefs({largeur: b ? +b.dataset.v : 58, auto: $("#pp-a", sh.el).checked});
  }
}
Object.assign(A, {
  "print-settings": () => openPrintSettings(),
  "print-test": () => printTicket(testTicket(), curCom())
});

/* ===================== Agenda des réservations ===================== */
const RESA_STATUT = {confirmee: "Confirmée", terminee: "Terminée", annulee: "Annulée"};
const resaPaid = r => Object.values(r.paiements || {}).reduce((x, p) => x + (p.montant || 0), 0);
const resaLeft = r => Math.max(0, (r.montant || 0) - resaPaid(r));
const dShort = k => { const d = parseKey(k); return `${JOURS[d.getDay()]} ${d.getDate()}/${pad2(d.getMonth() + 1)}`; };
function resaVisible() {
  const cs = opComs();
  return S.resas.filter(r => isAdmin() || cs.includes(r.commerce));
}
function agendaHTML() {
  const today = dkey(), tomorrow = addDays(today, 1);
  const list = resaVisible().slice().sort((a, b) => (a.date + (a.debut || "")).localeCompare(b.date + (b.debut || "")));
  const upcoming = list.filter(r => r.date >= today && r.statut !== "annulee");
  const past = list.filter(r => r.date < today || r.statut === "annulee").reverse().slice(0, 15);
  const groups = {};
  for (const r of upcoming) (groups[r.date] || (groups[r.date] = [])).push(r);
  const label = k => k === today ? "Aujourd'hui" : k === tomorrow ? "Demain" : dLabel(k);
  const item = r => {
    const paid = resaPaid(r), left = resaLeft(r);
    return `<li><button class="row-item resa-row" data-act="resa-detail" data-id="${esc(r.id)}">
      <span class="resa-time"><b>${esc(r.debut || "")}</b><span>${esc(r.fin || "")}</span></span>
      <span class="ri-main"><b>${esc(r.nom)}</b><span class="meta"><span>${esc(r.client?.nom || "")}</span>${r.personnes ? `<span>${r.personnes} pers.</span>` : ""}${coms().length > 1 ? comBadge(r.commerce) : ""}
        ${r.statut === "annulee" ? `<span class="badge bad">Annulée</span>` : r.statut === "terminee" ? `<span class="badge">Terminée</span>` : left === 0 && r.montant ? `<span class="badge ok">Soldée</span>` : paid ? `<span class="badge ok">Acompte ${F(paid)}</span>` : `<span class="badge warn">Sans acompte</span>`}</span></span>
      <span class="amt">${r.montant ? F(r.montant) : ""}${left && r.statut !== "annulee" && r.montant ? `<small class="resa-left">reste ${F(left)}</small>` : ""}</span></button></li>`;
  };
  return `<div class="page">
    <div class="page-head"><div><h1>Agenda</h1><p class="muted">Privatisations, séances photo et autres services réservés à l'avance.</p></div>
      <button class="btn btn-primary" data-act="resa-new">Nouvelle réservation</button></div>
    ${Object.keys(groups).length ? Object.entries(groups).map(([d, rs]) => `<section class="panel"><h2>${esc(label(d))}</h2><ul class="list">${rs.map(item).join("")}</ul></section>`).join("")
      : `<div class="panel empty">Aucune réservation à venir. Touchez « Nouvelle réservation », ou un service « sur réservation » dans la caisse.</div>`}
    ${past.length ? `<details class="more" style="background:var(--paper)"><summary>Passées et annulées (${past.length})</summary><ul class="list">${past.map(item).join("")}</ul></details>` : ""}
  </div>`;
}
function resaArticles(com) {
  const {articles} = catalog(com);
  return Object.entries(articles).filter(([, a]) => a.reservable && !a.supprime && a.actif !== false).sort(byOrdre);
}
function resaConflicts(r, exceptId) {
  const toMin = x => { const [h, m] = String(x || "0:0").split(":").map(Number); return (h || 0) * 60 + (m || 0); };
  const a1 = toMin(r.debut), a2 = r.fin ? toMin(r.fin) : a1 + 60;
  return S.resas.filter(x => x.id !== exceptId && x.statut !== "annulee" && x.commerce === r.commerce && x.date === r.date && (x.art || x.nom) === (r.art || r.nom))
    .filter(x => { const b1 = toMin(x.debut), b2 = x.fin ? toMin(x.fin) : b1 + 60; return a1 < b2 && b1 < a2; });
}
function openResaEditor(id, preset = {}) {
  const ex = id ? S.resas.find(r => r.id === id) : null;
  if (id && !ex) return;
  const coms0 = opComs();
  const r = ex ? clone(ex) : {commerce: preset.com && coms0.includes(preset.com) ? preset.com : (coms0.find(c => resaArticles(c).length) || curCom()), art: preset.art || null, nom: "", date: addDays(dkey(), 1), debut: "18:00", fin: "22:00", client: {nom: "", tel: ""}, personnes: null, montant: 0, note: ""};
  let arts = resaArticles(r.commerce);
  if (!ex && !r.art && arts.length) r.art = arts[0][0];
  const st = {warned: false};
  const sh = openSheet({wide: true, html: "", actions: {
    com: t => { r.commerce = t.dataset.c; arts = resaArticles(r.commerce); r.art = arts.length ? arts[0][0] : null; keep(); draw(); },
    art: t => { r.art = t.dataset.id || null; keep(); draw(); },
    close: () => sh.close(),
    ok: t => save(t)
  }});
  function keep() {
    const g = (x) => { const e = $(x, sh.el); return e ? e.value : null; };
    if (!$("#rs-d", sh.el)) return;
    r.date = g("#rs-d") || r.date; r.debut = g("#rs-h1") || ""; r.fin = g("#rs-h2") || "";
    r.client = {nom: g("#rs-cn").trim(), tel: g("#rs-ct").trim()};
    r.personnes = intOf(g("#rs-p")) || null; r.montant = intOf(g("#rs-m")); r.note = g("#rs-note").trim();
    if (!r.art) r.nom = g("#rs-autre").trim();
    st.acompte = g("#rs-a");
  }
  function draw() {
    const artChips = arts.map(([aid, a]) => `<button class="chip" data-act="art" data-id="${esc(aid)}" aria-pressed="${r.art === aid}">${esc(a.emoji || "")} ${esc(a.nom)}</button>`).join("");
    sh.el.innerHTML = `<h2>${ex ? "Modifier la réservation" : "Nouvelle réservation"}</h2>
      ${coms0.length > 1 ? `<div class="field"><span class="field-label">Activité</span><div class="chips">${coms0.map(c => `<button class="chip" data-act="com" data-c="${esc(c)}" aria-pressed="${r.commerce === c}">${esc(comName(c))}</button>`).join("")}</div></div>` : ""}
      <div class="field"><span class="field-label">Service</span><div class="chips">${artChips}<button class="chip" data-act="art" data-id="" aria-pressed="${!r.art}">Autre</button></div>
        ${!r.art ? `<input id="rs-autre" class="input" style="margin-top:8px" autocomplete="off" placeholder="Ex. : Anniversaire, réunion…" value="${esc(r.nom)}" aria-label="Nom du service">` : ""}
        ${!arts.length ? `<span class="hint">Astuce : dans Gestion > Catalogue, cochez « Se réserve à l'avance » sur vos services pour les retrouver ici.</span>` : ""}</div>
      <div class="three"><div class="field"><label for="rs-d">Date</label><input id="rs-d" type="date" class="input" value="${esc(r.date)}"></div>
        <div class="field"><label for="rs-h1">Début</label><input id="rs-h1" type="time" class="input" value="${esc(r.debut)}"></div>
        <div class="field"><label for="rs-h2">Fin</label><input id="rs-h2" type="time" class="input" value="${esc(r.fin)}"></div></div>
      <div class="two"><div class="field"><label for="rs-cn">Nom du client</label><input id="rs-cn" class="input" autocomplete="off" value="${esc(r.client?.nom || "")}"></div>
        <div class="field"><label for="rs-ct">Téléphone</label><input id="rs-ct" class="input" inputmode="tel" autocomplete="off" value="${esc(r.client?.tel || "")}"></div></div>
      <div class="two"><div class="field"><label for="rs-m">Prix convenu</label><input id="rs-m" class="input amount" inputmode="numeric" autocomplete="off" placeholder="0" value="${r.montant ? esc(N(r.montant)) : ""}"></div>
        <div class="field"><label for="rs-p">Nombre de personnes</label><input id="rs-p" class="input" inputmode="numeric" autocomplete="off" placeholder="Facultatif" value="${r.personnes || ""}"></div></div>
      ${ex ? "" : `<div class="field"><label for="rs-a">Acompte reçu maintenant (facultatif)</label><input id="rs-a" class="input amount" inputmode="numeric" autocomplete="off" placeholder="0" value="${esc(st.acompte || "")}"><span class="hint">L'acompte est encaissé dans la caisse ${esc(comName(r.commerce))}, qui doit être ouverte.</span></div>`}
      <div class="field"><label for="rs-note">Remarque</label><input id="rs-note" class="input" autocomplete="off" placeholder="Ex. : décoration fournie par le client" value="${esc(r.note || "")}"></div>
      <p class="form-err" id="rs-err" role="alert"></p>
      <div class="sheet-actions"><button class="btn" data-act="close">Annuler</button><button class="btn btn-primary grow" data-act="ok">Enregistrer</button></div>`;
  }
  function save(btn) {
    keep();
    const err = $("#rs-err", sh.el); err.textContent = "";
    const a = r.art ? catalog(r.commerce).articles[r.art] : null;
    const nom = a ? a.nom : (r.nom || "").trim();
    if (!nom) { err.textContent = "Indiquez le service réservé."; return; }
    if (!r.date) { err.textContent = "Choisissez la date."; return; }
    if (!r.client.nom || r.client.tel.replace(/\D/g, "").length < 8) { err.textContent = "Le nom et un numéro de téléphone complet sont obligatoires."; return; }
    if (r.fin && r.debut && r.fin <= r.debut) { err.textContent = "L'heure de fin doit être après l'heure de début."; return; }
    const acompte = ex ? 0 : intOf(st.acompte);
    if (acompte && r.montant && acompte > r.montant) { err.textContent = "L'acompte dépasse le prix convenu."; return; }
    const data = {commerce: r.commerce, art: r.art || null, nom, date: r.date, debut: r.debut || "", fin: r.fin || "", client: r.client, personnes: r.personnes || null, montant: r.montant || 0, note: r.note || ""};
    const conf = resaConflicts(data, id);
    if (conf.length && !st.warned) {
      st.warned = true;
      err.textContent = `Attention : « ${nom} » est déjà réservé ce jour-là de ${conf[0].debut} à ${conf[0].fin || "?"} (${conf[0].client?.nom || ""}). Touchez encore « Enregistrer » pour confirmer quand même.`;
      return;
    }
    const rid = id || uid("r");
    if (ex) OB.push(`reservations/${rid}`, "update", data);
    else OB.push(`reservations/${rid}`, "set", {...data, paiements: {}, statut: "confirmee", cree: {at: new Date().toISOString(), par: S.op}});
    sh.close();
    toast(ex ? "Réservation modifiée" : "Réservation enregistrée");
    if (!ex && acompte) setTimeout(() => payResa(rid, acompte, "acompte"), 120);
    else if (!ex) setTimeout(() => openResaDetail(rid), 120);
  }
  draw();
}
function payResa(id, amount, type) {
  const r = S.resas.find(x => x.id === id); if (!r) return;
  if (!openSession(r.commerce)) { toast(`Ouvrez d'abord la caisse ${comName(r.commerce)} pour encaisser.`, "warn"); openResaDetail(id); return; }
  openPayment({
    com: r.commerce, resa: id, type, client: r.client,
    titre: type === "acompte" ? "Encaisser l'acompte" : "Encaisser le reste",
    lines: [{art: r.art || "resa", nom: `${type === "acompte" ? "Acompte" : "Solde"} · ${r.nom}`, var: dShort(r.date), prix: amount, qte: 1}],
    onDone: () => {}
  });
}
function resaMessage(r) {
  const paid = resaPaid(r), left = resaLeft(r);
  const L = [`Bonjour ${r.client?.nom || ""},`, `votre réservation « ${r.nom} » chez ${comFull(r.commerce)} est confirmée pour le ${dLabel(r.date)}${r.debut ? ` de ${r.debut}` : ""}${r.fin ? ` à ${r.fin}` : ""}.`];
  if (r.montant) L.push(`Prix convenu : ${F(r.montant)}.`);
  if (paid) L.push(`Acompte reçu : ${F(paid)}. Reste à payer : ${F(left)}.`);
  const t = cfg().ticket;
  L.push("À bientôt !", [t.adresse, t.tel].filter(Boolean).join(" · "));
  return L.join("\n");
}
function openResaDetail(id) {
  const r = S.resas.find(x => x.id === id); if (!r) return;
  const paid = resaPaid(r), left = resaLeft(r);
  const pays = Object.values(r.paiements || {}).sort((a, b) => String(a.at).localeCompare(String(b.at)));
  const active = r.statut === "confirmee";
  const sh = openSheet({
    html: `<h2>${esc(r.nom)}</h2><p class="sub">${esc(dLabel(r.date))}${r.debut ? `, ${esc(r.debut)}${r.fin ? `–${esc(r.fin)}` : ""}` : ""} · ${esc(comName(r.commerce))}</p>
      <div class="kv"><span>Client</span><b>${esc([r.client?.nom, r.client?.tel].filter(Boolean).join(", "))}</b></div>
      ${r.personnes ? `<div class="kv"><span>Personnes</span><b>${r.personnes}</b></div>` : ""}
      <div class="kv"><span>Prix convenu</span><b>${r.montant ? F(r.montant) : "À définir"}</b></div>
      ${pays.map(p => `<div class="kv"><span>${p.type === "solde" ? "Solde" : "Acompte"} ${esc(modeName(p.mode))}, ${esc(dShort(dkey(new Date(p.at))))}</span><b>${F(p.montant)}</b></div>`).join("")}
      ${r.montant ? `<div class="kv"><span>Reste à payer</span><b>${F(left)}</b></div>` : ""}
      ${r.note ? `<p class="muted">${esc(r.note)}</p>` : ""}
      <div class="kv"><span>Statut</span><b>${esc(RESA_STATUT[r.statut] || r.statut)}</b></div>
      ${r.statut === "annulee" && paid ? `<p class="notice">Un acompte de ${F(paid)} avait été reçu : à rendre ou à garder selon ce que vous avez convenu avec le client.</p>` : ""}
      <div class="menu-list" style="margin-top:12px">
        ${active && left > 0 && r.montant ? `<button class="row-item" data-act="pay-left"><span class="ri-main"><b>Encaisser le reste (${F(left)})</b><span class="meta">Dans la caisse ${esc(comName(r.commerce))}</span></span></button>` : ""}
        ${active ? `<button class="row-item" data-act="pay-part"><span class="ri-main"><b>Encaisser un acompte</b><span class="meta">Montant au choix</span></span></button>` : ""}
        ${r.client?.tel ? `<button class="row-item" data-act="wa"><span class="ri-main"><b>Envoyer la confirmation sur WhatsApp</b><span class="meta">Date, heure, acompte et reste à payer</span></span></button>` : ""}
        ${active ? `<button class="row-item" data-act="edit"><span class="ri-main"><b>Modifier</b></span></button>` : ""}
        ${active ? `<button class="row-item" data-act="done"><span class="ri-main"><b>Marquer comme terminée</b></span></button>` : ""}
        ${active ? `<button class="row-item" data-act="cancel-r"><span class="ri-main"><b class="ecart-neg">Annuler la réservation</b></span></button>` : ""}
      </div>
      <div class="sheet-actions"><button class="btn btn-block" data-act="close">Fermer</button></div>`,
    actions: {
      close: () => sh.close(),
      "pay-left": () => { sh.close(); payResa(id, left, paid ? "solde" : "acompte"); },
      "pay-part": async () => { const v = await askAmount("Montant de l'acompte", r.montant ? `Reste à payer : ${F(left)}` : "", r.montant ? left : 0); if (!v) return; sh.close(); payResa(id, v, "acompte"); },
      wa: () => openExternal(waLink(r.client.tel, resaMessage(r))),
      edit: () => { sh.close(); openResaEditor(id); },
      done: () => { OB.push(`reservations/${id}`, "update", {statut: "terminee"}); sh.close(); toast("Réservation terminée"); },
      "cancel-r": async () => {
        if (!isGerantPlus()) { const by = await askApproval(r.commerce, "Autoriser l'annulation"); if (!by) return; }
        const motif = await askText("Motif de l'annulation", "Ex. : le client a annulé", ["Le client a annulé", "Date changée", "Erreur de saisie"]);
        if (!motif) return;
        OB.push(`reservations/${id}`, "update", {statut: "annulee", annulation: {at: new Date().toISOString(), par: S.op, motif}});
        sh.close(); toast("Réservation annulée");
      }
    }
  });
}
Object.assign(A, {
  "resa-new": () => openResaEditor(null, {com: curCom()}),
  "resa-detail": t => openResaDetail(t.dataset.id)
});

/* ===================== Base Firebase (version indépendante) ===================== */
const FB_KEY = "oc.firebase";
const fbConfLoad = () => ls.get(FB_KEY, null);
const fbConfSave = c => ls.set(FB_KEY, c);
const b64u = s => btoa(unescape(encodeURIComponent(s))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
const unb64u = s => decodeURIComponent(escape(atob(s.replace(/-/g, "+").replace(/_/g, "/"))));
function parseFbConfig(txt) {
  const t = String(txt || "");
  const pick = k => { const m = t.match(new RegExp("[\"']?" + k + "[\"']?\\s*:\\s*[\"']([^\"']+)[\"']")); return m ? m[1].trim() : ""; };
  const c = {apiKey: pick("apiKey"), authDomain: pick("authDomain"), projectId: pick("projectId"), storageBucket: pick("storageBucket"), messagingSenderId: pick("messagingSenderId"), appId: pick("appId")};
  if (!c.apiKey || !c.projectId || !c.appId) return null;
  if (!c.authDomain) c.authDomain = c.projectId + ".firebaseapp.com";
  return c;
}
function readInstallHash() {
  const m = String(location.hash || "").match(/installer=([A-Za-z0-9_-]+)/);
  if (!m) return null;
  try { const p = JSON.parse(unb64u(m[1])); if (p && p.c && p.c.apiKey && p.c.projectId && p.c.appId) return p.c; } catch (e) {}
  return null;
}
function installLink() {
  const c = S.fb.conf;
  const conf = {apiKey: c.apiKey, authDomain: c.authDomain, projectId: c.projectId, storageBucket: c.storageBucket || "", messagingSenderId: c.messagingSenderId || "", appId: c.appId};
  return location.origin + location.pathname + "#installer=" + b64u(JSON.stringify({v: 1, c: conf}));
}
const identToEmail = v => { v = String(v || "").trim(); return v.includes("@") ? v : `${slug(v)}.caisse@${S.fb.conf.authDomain}`; };
const emailToIdent = e => { const m = String(e || "").match(/^(.+)\.caisse@/); return m ? m[1] : e; };
function withTimeout(p, ms) {
  return Promise.race([p, new Promise((_, rej) => setTimeout(() => { const e = new Error("délai"); e.code = "timeout"; rej(e); }, ms))]);
}
function fbErr(e) {
  if (e && e._oc) return e;
  const c = String((e && e.code) || "").replace(/^(auth|firestore)\//, "");
  const map = {"permission-denied": "not_granted", "unauthenticated": "not_signed_in", "resource-exhausted": "quota_exceeded", "invalid-argument": "invalid_argument", "not-found": "not_found", "failed-precondition": "failed_precondition", "unavailable": "unavailable", "deadline-exceeded": "deadline_exceeded", "aborted": "aborted", "internal": "internal", "cancelled": "cancelled", "unknown": "unknown", "timeout": "timeout", "network-request-failed": "network"};
  const err = new Error((e && e.message) || "erreur");
  err.code = map[c] || c.replace(/-/g, "_") || "unknown"; err.fb = c; err._oc = true;
  return err;
}

/* ----- Adaptateur : même interface que la base Claude et la démo ----- */
function makeFirebaseDB(fs) {
  const F = window.OFirebase;
  const wrapDoc = s => ({id: s.id, exists: s.exists(), data: () => s.data(), metadata: s.metadata});
  const wrapQ = q => ({docs: q.docs.map(d => ({id: d.id, data: () => d.data()})), size: q.size, empty: q.empty, metadata: q.metadata});
  class DocRef {
    constructor(path) { this.path = path; this.id = path.split("/").pop(); this.ref = F.doc(fs, path); }
    get() { return F.getDoc(this.ref).then(wrapDoc, e => { throw fbErr(e); }); }
    set(data) { return F.setDoc(this.ref, data).catch(e => { throw fbErr(e); }); }
    update(data) { return F.setDoc(this.ref, data, {merge: true}).catch(e => { throw fbErr(e); }); }
    delete() { return F.deleteDoc(this.ref).catch(e => { throw fbErr(e); }); }
    onSnapshot(next, err) { return F.onSnapshot(this.ref, s => next(wrapDoc(s)), e => err && err(fbErr(e))); }
  }
  class Query {
    constructor(path, cons) { this.path = path; this.cons = cons || []; }
    doc(id) { return new DocRef(this.path + "/" + id); }
    where(f, op, v) { return new Query(this.path, [...this.cons, F.where(f, op, v)]); }
    orderBy(f, d) { return new Query(this.path, [...this.cons, F.orderBy(f, d || "asc")]); }
    limit(n) { return new Query(this.path, [...this.cons, F.limit(n)]); }
    q() { return F.query(F.collection(fs, this.path), ...this.cons); }
    get() { return F.getDocs(this.q()).then(wrapQ, e => { throw fbErr(e); }); }
    onSnapshot(next, err) { return F.onSnapshot(this.q(), q => next(wrapQ(q)), e => err && err(fbErr(e))); }
  }
  return {doc: p => new DocRef(p), collection: p => new Query(p)};
}

/* ----- Démarrage Firebase ----- */
function fbInit(conf) {
  const F = window.OFirebase;
  if (!F) { const e = new Error("sdk"); e.code = "sdk_missing"; throw e; }
  if (S.fb && S.fb.app) return S.fb;
  const app = F.initializeApp(conf, "oc-" + conf.projectId);
  const auth = F.initializeAuth(app, {persistence: [F.indexedDBLocalPersistence, F.browserLocalPersistence]});
  let fs;
  try { fs = F.initializeFirestore(app, {localCache: F.persistentLocalCache({tabManager: F.persistentMultipleTabManager()}), ignoreUndefinedProperties: true}); }
  catch (e) { fs = F.initializeFirestore(app, {localCache: F.memoryLocalCache(), ignoreUndefinedProperties: true}); }
  S.fb = {app, auth, fs, conf, user: null, role: null, roleUnsubs: [], devUnsub: null, dataOn: false};
  return S.fb;
}
function startFirebase(conf, opts = {}) {
  let fb;
  try { fb = fbInit(conf); }
  catch (e) { S.mode = "welcome"; S.fbNote = "Le module Firebase n'a pas pu démarrer sur cet appareil. Mettez à jour le navigateur (Chrome ou Safari récents)."; render(); return; }
  S.backend = "firebase"; S.demo = false;
  S.downloads = null; S.assets = null;
  S.fbSetup = S.fbSetup || {step: "owner", mode: "create"};
  S.mode = opts.setup ? "fbsetup" : "fbwait"; render();
  if (fb.authUnsub) return;
  fb.authUnsub = window.OFirebase.onAuthStateChanged(fb.auth, user => {
    fb.user = user;
    fbStopRole();
    if (!user) {
      fbStopData();
      if (S.mode !== "fbsetup") { S.mode = "fblogin"; S.fbSetup = {step: "owner", mode: "create"}; }
      render(); return;
    }
    fbWatchRole(user);
  });
}
function fbStopRole() { if (S.fb) { S.fb.roleUnsubs.forEach(u => { try { u(); } catch (e) {} }); S.fb.roleUnsubs = []; } }
function fbStopData() {
  if (!S.fb) return;
  if (S.fb.devUnsub) { try { S.fb.devUnsub(); } catch (e) {} S.fb.devUnsub = null; }
  if (S.fb.dataOn) { unsubAll(); S.db = null; S.fb.dataOn = false; }
}
function fbWatchRole(user) {
  const F = window.OFirebase, fb = S.fb;
  const st = {meta: undefined, dev: undefined, metaErr: null, devErr: null, cache: false};
  const cacheKey = "oc.role." + user.uid;
  const decide = () => {
    if (st.meta === undefined || st.dev === undefined) return;
    let role;
    if (st.metaErr === "not_granted" && st.devErr === "not_granted") role = "norules";
    else if (st.meta && st.meta.uid === user.uid) role = "owner";
    else if (st.dev && st.dev.actif === true) role = "device";
    else if (st.dev && st.dev.actif === false) role = "revoked";
    else if (st.cache && ls.get(cacheKey, null)) role = ls.get(cacheKey, null);
    else if (!st.meta && !st.metaErr) role = "noowner";
    else role = "unknown";
    if ((role === "owner" || role === "device") && !st.cache) ls.set(cacheKey, role);
    fbApplyRole(role, user);
  };
  fb.roleUnsubs.push(F.onSnapshot(F.doc(fb.fs, "meta/proprietaire"), s => {
    st.meta = s.exists() ? s.data() : null; st.metaErr = null; st.cache = st.cache || s.metadata.fromCache; decide();
  }, e => { st.meta = null; st.metaErr = fbErr(e).code; decide(); }));
  fb.roleUnsubs.push(F.onSnapshot(F.doc(fb.fs, "appareils/" + user.uid), s => {
    st.dev = s.exists() ? s.data() : null; st.devErr = null; st.cache = st.cache || s.metadata.fromCache; decide();
  }, e => { st.dev = null; st.devErr = fbErr(e).code; decide(); }));
}
function fbApplyRole(role, user) {
  const fb = S.fb; const prev = fb.role; fb.role = role;
  if (role === "owner" || role === "device") {
    S.me = {id: user.uid, email: user.email || "", isOwner: role === "owner", canEdit: role === "owner", canWrite: true};
    if (!fb.dataOn || prev !== role) fbStartData();
    return;
  }
  fbStopData();
  if (role === "noowner" || role === "norules") {
    S.mode = "fbsetup";
    S.fbSetup = {...(S.fbSetup || {}), step: role === "norules" ? "rules" : "claim"};
  } else { S.mode = "fbdenied"; S.fbDenied = role; }
  render();
}
async function fbStartData() {
  const fb = S.fb;
  closeAllSheets(); unsubAll();
  S.db = makeFirebaseDB(fb.fs); fb.dataOn = true;
  if (S.me.isOwner) fbWatchDevices();
  const cfgSnap = await withTimeout(S.db.doc("config/general").get(), 12000).catch(() => null);
  if (cfgSnap && !cfgSnap.exists && S.me.isOwner && !(cfgSnap.metadata && cfgSnap.metadata.fromCache)) {
    S.mode = "fbsetup"; S.fbSetup = {...(S.fbSetup || {}), step: "modele"}; render(); return;
  }
  resetUi(); S.mode = "boot";
  OB.load(); subscribeAll(); refreshDerived(); render(); OB.run();
}
function fbWatchDevices() {
  const F = window.OFirebase, fb = S.fb;
  if (fb.devUnsub) return;
  fb.devUnsub = F.onSnapshot(F.collection(fb.fs, "appareils"), q => {
    const m = {}; q.docs.forEach(d => { m[d.id] = d.data(); }); S.fbDevices = m; if (S.view === "gestion") render();
  }, () => {});
}
function fbOnDenied(code) {
  if (!S.fb || !S.fb.user) { S.mode = "fblogin"; render(); return; }
  fbStopData(); S.mode = "fbdenied"; S.fbDenied = code === "not_signed_in" ? "unknown" : "revoked"; render();
}

/* ----- Écrans d'accueil, d'installation et de connexion ----- */
const fbForm = () => S.fbForm || (S.fbForm = {});
const fv = k => esc(fbForm()[k] || "");
function fbShell(inner) {
  return `<div class="screen"><div class="setup-card">${poleMark()}${inner}</div></div>`;
}
function poleMark() { return `<div class="brand-pole" aria-hidden="true"></div>`; }
function fbScreenHTML() {
  const st = S.fbSetup || {}; const err = st.err ? `<p class="form-err" role="alert">${esc(st.err)}</p>` : "";
  const busy = st.busy ? "disabled" : "";
  if (S.mode === "welcome") {
    return fbShell(`<h1>Bienvenue</h1><p class="sub">Caisse et suivi des ventes pour salons, restaurants et services.</p>
      ${S.fbNote ? `<p class="notice">${esc(S.fbNote)}</p>` : ""}
      <div class="menu-list">
        <button class="row-item" data-act="fb-setup-start"><span class="ri-main"><b>Première installation</b><span class="meta">Relier l'application à votre base Firebase gratuite</span></span></button>
        <button class="row-item" data-act="demo-start"><span class="ri-main"><b>Découvrir avec des exemples</b><span class="meta">Mode démonstration, rien n'est enregistré</span></span></button>
      </div>
      <p class="muted">Pour une tablette de la boutique : ouvrez le lien d'installation envoyé par le propriétaire (Gestion > Appareils).</p>`);
  }
  if (S.mode === "fbwait") return fbShell(`<h1>Connexion…</h1><p class="sub">Ouverture de votre base de données.</p>`);
  if (S.mode === "fbdenied") {
    const r = S.fbDenied;
    return fbShell(`<h1>Accès refusé</h1><p class="sub">${r === "revoked" ? "Cet appareil a été désactivé par le propriétaire." : "Ce compte n'est pas autorisé à utiliser cette caisse."}</p>
      <p class="muted">Compte : ${esc(S.fb && S.fb.user ? S.fb.user.email : "")}</p>
      <div class="sheet-actions"><button class="btn btn-primary btn-block" data-act="fb-signout-now">Changer de compte</button></div>`);
  }
  if (S.mode === "fblogin") {
    return fbShell(`<h1>Connexion de l'appareil</h1><p class="sub">Base : ${esc(S.fb ? S.fb.conf.projectId : "")}</p>
      <div class="field"><label for="fb-id">Identifiant de l'appareil ou e-mail</label><input id="fb-id" data-fb="id" class="input" autocomplete="username" autocapitalize="off" value="${fv("id")}"></div>
      <div class="field"><label for="fb-pw">Mot de passe</label><input id="fb-pw" data-fb="pw" type="password" class="input" autocomplete="current-password" value="${fv("pw")}"></div>
      ${err}
      <div class="sheet-actions"><button class="btn btn-primary btn-block btn-lg" data-act="fb-login" ${busy}>${st.busy ? "Connexion…" : "Se connecter"}</button></div>
      <p class="muted" style="text-align:center"><button class="linkish" data-act="fb-reset-pwd">Mot de passe du propriétaire oublié</button> · <button class="linkish" data-act="fb-change-base">Changer de base</button> · <button class="linkish" data-act="demo-start">Démonstration</button></p>`);
  }
  // Assistant d'installation
  const steps = ["config", "owner", "modele"];
  const idx = st.step === "config" ? 0 : st.step === "modele" ? 2 : 1;
  const prog = `<ol class="steps">${["Votre base", "Compte propriétaire", "Catalogue"].map((l, i) => `<li class="${i < idx ? "done" : i === idx ? "cur" : ""}">${l}</li>`).join("")}</ol>`;
  if (st.step === "config") {
    return fbShell(`${prog}<h1>Reliez votre base Firebase</h1>
      <p class="sub">Dans la console Firebase : roue dentée > Paramètres du projet > Vos applications > l'application Web. Copiez tout le bloc <code>firebaseConfig</code> et collez-le ici.</p>
      <div class="field"><label for="fb-cfg">Configuration Firebase</label><textarea id="fb-cfg" data-fb="cfg" class="input" rows="7" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder='const firebaseConfig = { apiKey: "…", authDomain: "…", projectId: "…", … };'>${fv("cfg")}</textarea></div>
      ${err}
      <div class="sheet-actions"><button class="btn" data-act="fb-back-welcome">Retour</button><button class="btn btn-primary grow" data-act="fb-config-check" ${busy}>${st.busy ? "Vérification…" : "Continuer"}</button></div>`);
  }
  if (st.step === "rules") {
    return fbShell(`${prog}<h1>Publiez les règles de sécurité</h1>
      <p class="sub">La base refuse encore l'accès : c'est normal tant que les règles ne sont pas publiées. Elles garantissent que seuls vos appareils lisent vos chiffres.</p>
      <ol class="how"><li>Console Firebase > <b>Firestore Database</b> > onglet <b>Règles</b>.</li><li>Effacez tout le texte, collez les règles ci-dessous.</li><li>Touchez <b>Publier</b>, attendez une minute, puis revenez ici.</li></ol>
      <pre class="rules" id="fb-rules">${esc(FIRESTORE_RULES)}</pre>
      ${err}
      <div class="sheet-actions"><button class="btn" data-act="fb-rules-copy">Copier les règles</button><button class="btn btn-primary grow" data-act="fb-rules-retry" ${busy}>${st.busy ? "Vérification…" : "C'est fait, réessayer"}</button></div>`);
  }
  if (st.step === "claim") {
    return fbShell(`${prog}<h1>Terminer l'installation</h1><p class="sub">Vous êtes connecté avec ${esc(S.fb && S.fb.user ? S.fb.user.email : "")}. Cette base n'a pas encore de propriétaire : devenez-le pour gérer prix, équipe et appareils.</p>
      ${err}
      <div class="sheet-actions"><button class="btn" data-act="fb-signout-now">Changer de compte</button><button class="btn btn-primary grow" data-act="fb-claim" ${busy}>${st.busy ? "Un instant…" : "Devenir propriétaire"}</button></div>`);
  }
  if (st.step === "modele") {
    return fbShell(`${prog}<h1>Catalogue de départ</h1><p class="sub">Vous pourrez tout modifier ensuite dans Gestion.</p>
      <div class="menu-list">
        <button class="row-item" data-act="fb-modele" data-v="othentik" ${busy}><span class="ri-main"><b>O'thentik Barber Shop + O'snack</b><span class="meta">Coupes, plats, jus, baby-foot, privatisation, shooting photo : tout est prêt</span></span></button>
        <button class="row-item" data-act="fb-modele" data-v="vide" ${busy}><span class="ri-main"><b>Catalogue vide</b><span class="meta">Une activité à nommer, vous ajoutez vos articles</span></span></button>
      </div>
      <div class="field"><label for="fb-act">Nom de l'activité (catalogue vide)</label><input id="fb-act" data-fb="act" class="input" autocomplete="off" placeholder="Ex. : Salon Kadi" value="${fv("act")}"></div>
      ${err}`);
  }
  // step owner
  const login = st.mode === "login";
  return fbShell(`${prog}<h1>${login ? "Connexion du propriétaire" : "Compte du propriétaire"}</h1>
    <p class="sub">${login ? "Connectez-vous avec le compte propriétaire déjà créé." : "Ce compte gère les prix, l'équipe et les appareils. Utilisez une adresse e-mail à vous : elle servira si vous oubliez le mot de passe."}</p>
    <div class="field"><label for="fb-em">Adresse e-mail</label><input id="fb-em" data-fb="em" type="email" class="input" autocomplete="username" autocapitalize="off" value="${fv("em")}"></div>
    <div class="field"><label for="fb-p1">Mot de passe${login ? "" : " (8 caractères ou plus)"}</label><input id="fb-p1" data-fb="p1" type="password" class="input" autocomplete="${login ? "current-password" : "new-password"}" value="${fv("p1")}"></div>
    ${login ? "" : `<div class="field"><label for="fb-p2">Confirmez le mot de passe</label><input id="fb-p2" data-fb="p2" type="password" class="input" autocomplete="new-password" value="${fv("p2")}"></div>`}
    ${err}
    <div class="sheet-actions"><button class="btn btn-primary btn-block btn-lg" data-act="fb-owner" ${busy}>${st.busy ? "Un instant…" : login ? "Se connecter" : "Créer le compte"}</button></div>
    <p class="muted" style="text-align:center"><button class="linkish" data-act="fb-owner-toggle">${login ? "Créer plutôt un nouveau compte" : "J'ai déjà créé ce compte"}</button></p>`);
}
document.addEventListener("input", e => { const k = e.target && e.target.dataset && e.target.dataset.fb; if (k) fbForm()[k] = e.target.value; });
function fbSetErr(msg) { S.fbSetup = {...(S.fbSetup || {}), err: msg || "", busy: false}; render(); }
function fbBusy() { S.fbSetup = {...(S.fbSetup || {}), err: "", busy: true}; render(); }
function fbMsg(e) {
  const c = String((e && (e.fb || e.code)) || "").replace(/^(auth|firestore)\//, "");
  const m = String((e && e.message) || "");
  if (c === "operation-not-allowed") return "La connexion par e-mail n'est pas activée. Console Firebase > Authentication > Méthode de connexion > « Adresse e-mail/Mot de passe » : activez-la, puis réessayez.";
  if (c === "email-already-in-use") return "Ce compte existe déjà : touchez « J'ai déjà créé ce compte ».";
  if (c === "invalid-email") return "Adresse e-mail invalide.";
  if (c === "weak-password") return "Mot de passe trop court : 8 caractères au minimum.";
  if (c === "invalid-credential" || c === "wrong-password" || c === "user-not-found" || c === "invalid-login-credentials") return "Identifiant ou mot de passe incorrect.";
  if (c === "too-many-requests") return "Trop d'essais. Patientez quelques minutes.";
  if (c === "user-disabled") return "Ce compte a été désactivé.";
  if (c === "network-request-failed" || c === "network" || c === "timeout" || c === "unavailable") return "Pas de réponse de Firebase : vérifiez la connexion internet et réessayez.";
  if (c === "api-key-not-valid" || /api-key-not-valid|API key not valid/i.test(m)) return "La configuration collée ne correspond à aucun projet : recopiez-la depuis la console Firebase.";
  if (c === "not_found" || /database .*does not exist|NOT_FOUND/i.test(m)) return "La base Firestore n'existe pas encore : Console Firebase > Firestore Database > Créer une base de données.";
  if (c === "not_granted") return "Accès refusé par les règles de sécurité.";
  return "Erreur : " + (c || m || "inconnue");
}
async function fbCheckConfig() {
  const conf = parseFbConfig(fbForm().cfg);
  if (!conf) { fbSetErr("Configuration incomplète : il faut au moins apiKey, projectId et appId. Copiez tout le bloc firebaseConfig."); return; }
  fbConfSave(conf);
  if (S.fb && S.fb.app && S.fb.conf.projectId !== conf.projectId) { location.reload(); return; }
  S.fbSetup = {step: "owner", mode: "create"};
  startFirebase(conf, {setup: true});
}
async function fbOwner() {
  const F = window.OFirebase, fb = S.fb, st = S.fbSetup, f = fbForm();
  const em = String(f.em || "").trim(), p1 = f.p1 || "";
  if (!em || !em.includes("@")) { fbSetErr("Indiquez votre adresse e-mail."); return; }
  if (st.mode !== "login") {
    if (p1.length < 8) { fbSetErr("Mot de passe trop court : 8 caractères au minimum."); return; }
    if (p1 !== (f.p2 || "")) { fbSetErr("Les deux mots de passe ne sont pas identiques."); return; }
  }
  fbBusy();
  try {
    if (st.mode === "login") await withTimeout(F.signInWithEmailAndPassword(fb.auth, em, p1), 20000);
    else await withTimeout(F.createUserWithEmailAndPassword(fb.auth, em, p1), 20000);
    S.fbSetup = {...S.fbSetup, step: "claim", busy: false, err: ""};
    await fbClaim();
  } catch (e) { fbSetErr(fbMsg(e.code ? e : fbErr(e))); }
}
async function fbClaim() {
  const F = window.OFirebase, fb = S.fb, u = fb.user || fb.auth.currentUser;
  if (!u) { S.fbSetup = {step: "owner", mode: "login"}; render(); return; }
  fbBusy();
  try {
    await withTimeout(F.setDoc(F.doc(fb.fs, "meta/proprietaire"), {uid: u.uid, email: u.email || "", at: new Date().toISOString()}), 20000);
    S.fbSetup = {...S.fbSetup, busy: false, err: "", step: "modele"}; render();
    fbStopRole(); fbWatchRole(u);
  } catch (e0) {
    const e = fbErr(e0);
    if (e.code === "not_granted") {
      try {
        const snap = await withTimeout(F.getDoc(F.doc(fb.fs, "meta/proprietaire")), 15000);
        if (snap.exists() && snap.data().uid !== u.uid) { S.fbSetup = {...S.fbSetup, step: "claim"}; fbSetErr("Cette base a déjà un propriétaire. Connectez-vous avec son compte."); return; }
        if (snap.exists()) { S.fbSetup = {...S.fbSetup, busy: false, err: "", step: "modele"}; render(); fbStopRole(); fbWatchRole(u); return; }
      } catch (e2) { /* règles non publiées */ }
      S.fbSetup = {...S.fbSetup, step: "rules"}; fbSetErr(""); return;
    }
    fbSetErr(fbMsg(e));
  }
}
async function fbApplyModele(kind) {
  const db = makeFirebaseDB(S.fb.fs);
  const seed = clone(SEED);
  fbBusy();
  try {
    const cur = await withTimeout(db.doc("config/general").get(), 15000);
    if (!cur.exists) {
      if (kind === "othentik") {
        await withTimeout(db.doc("config/general").set(seed.config), 20000);
        for (const [k, v] of Object.entries(seed.catalogue)) await withTimeout(db.doc("catalogue/" + k).set(v), 20000);
      } else {
        const nom = String(fbForm().act || "").trim() || "Ma boutique";
        await withTimeout(db.doc("config/general").set({...seed.config, commerces: {a1: {nom, court: nom, type: "services", couleur: PALETTE[0][0], couleur2: PALETTE[0][1], ordre: 0, actif: true}}, ticket: {adresse: "", tel: "", message: "Merci et à bientôt !"}}), 20000);
        await withTimeout(db.doc("catalogue/a1").set({categories: {}, articles: {}}), 20000);
      }
    }
    S.fbSetup = {step: "done"}; S.fbForm = {};
    fbStartData();
  } catch (e) { fbSetErr(fbMsg(fbErr(e))); }
}
async function fbLogin() {
  const F = window.OFirebase, fb = S.fb, f = fbForm();
  if (!f.id || !f.pw) { fbSetErr("Indiquez l'identifiant et le mot de passe."); return; }
  fbBusy();
  try { await withTimeout(F.signInWithEmailAndPassword(fb.auth, identToEmail(f.id), f.pw), 20000); S.fbForm = {}; S.fbSetup = {step: "owner", mode: "create"}; S.mode = "fbwait"; render(); }
  catch (e) { fbSetErr(fbMsg(e.code ? e : fbErr(e))); }
}
async function fbSignOut() {
  const F = window.OFirebase;
  ls.set("oth.op", null);
  fbStopData(); fbStopRole();
  try { await F.signOut(S.fb.auth); } catch (e) {}
  S.mode = "fblogin"; render();
}
function fbCopy(text, okMsg) {
  const done = () => toast(okMsg || "Copié");
  if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, () => fallback());
  else fallback();
  function fallback() {
    const ta = document.createElement("textarea"); ta.value = text; ta.style.cssText = "position:fixed;left:-9999px"; document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); done(); } catch (e) { toast("Copie impossible : sélectionnez le texte à la main.", "warn"); }
    ta.remove();
  }
}

/* ----- Gestion > Appareils ----- */
function appareilsHTML() {
  const list = Object.entries(S.fbDevices || {}).sort((a, b) => String(a[1].nom).localeCompare(String(b[1].nom), "fr"));
  return `<div class="cols">
    <section class="panel"><div class="panel-head"><h2>Appareils de la boutique</h2><button class="linkish" data-act="dev-new">Ajouter un appareil</button></div>
      ${list.length ? `<ul class="list">${list.map(([uid2, d]) => `<li><div class="row-item static"><span class="ri-main"><b>${esc(d.nom)}</b><span class="meta"><span>Identifiant : ${esc(d.ident || emailToIdent(d.email))}</span>${d.actif ? `<span class="badge ok">Autorisé</span>` : `<span class="badge bad">Désactivé</span>`}</span></span><button class="btn" data-act="dev-toggle" data-id="${esc(uid2)}">${d.actif ? "Désactiver" : "Réactiver"}</button></div></li>`).join("")}</ul>`
        : `<p class="muted">Aucun appareil pour l'instant. Ajoutez la tablette du salon, le téléphone du snack…</p>`}
      <p class="muted" style="margin:8px 0 0">Un appareil perdu ou volé : désactivez-le, il perd l'accès immédiatement.</p></section>
    <section class="panel"><h2>Lien d'installation</h2><p class="muted" style="margin:6px 0 12px">Ouvrez ce lien sur le nouvel appareil (Chrome sur Android), puis connectez-le avec son identifiant et son mot de passe.</p>
      <div class="chips"><button class="btn" data-act="link-copy">Copier le lien</button><button class="btn" data-act="link-wa">Envoyer par WhatsApp</button></div>
      <p class="muted" style="margin:12px 0 0">Ensuite, dans le menu de Chrome : « Ajouter à l'écran d'accueil ». L'application s'ouvre alors comme une vraie application, même sans réseau.</p></section>
    <section class="panel"><h2>Compte propriétaire</h2><div class="kv"><span>E-mail</span><b>${esc(S.fb && S.fb.user ? S.fb.user.email : "")}</b></div><div class="kv"><span>Projet Firebase</span><b>${esc(S.fb ? S.fb.conf.projectId : "")}</b></div></section>
  </div>`;
}
function genPassword() { const a = "abcdefghjkmnpqrstuvwxyz23456789"; let s = ""; const r = crypto.getRandomValues(new Uint32Array(8)); for (const x of r) s += a[x % a.length]; return s; }
function openDeviceEditor() {
  const st = {pw: genPassword()};
  const sh = openSheet({
    html: `<h2>Ajouter un appareil</h2><p class="sub">Chaque tablette ou téléphone de la boutique a son propre compte.</p>
      <div class="field"><label for="dv-n">Nom de l'appareil</label><input id="dv-n" class="input" autocomplete="off" placeholder="Ex. : Tablette du salon"></div>
      <div class="two"><div class="field"><label for="dv-i">Identifiant</label><input id="dv-i" class="input" autocomplete="off" autocapitalize="off" placeholder="Ex. : salon"></div>
      <div class="field"><label for="dv-p">Mot de passe</label><input id="dv-p" class="input" autocomplete="off" autocapitalize="off" value="${esc(st.pw)}"></div></div>
      <p class="form-err" id="dv-err" role="alert"></p>
      <div class="sheet-actions"><button class="btn" data-act="close">Annuler</button><button class="btn btn-primary grow" data-act="ok">Créer l'appareil</button></div>`,
    actions: {
      close: () => sh.close(),
      ok: async t => {
        const err = $("#dv-err", sh.el); err.textContent = "";
        const nom = $("#dv-n", sh.el).value.trim(); const ident = slug($("#dv-i", sh.el).value.trim() || nom); const pw = $("#dv-p", sh.el).value.trim();
        if (!nom) { err.textContent = "Donnez un nom à l'appareil."; return; }
        if (pw.length < 6) { err.textContent = "Mot de passe : 6 caractères au minimum."; return; }
        t.disabled = true; t.textContent = "Création…";
        try {
          const r = await fbCreateDevice(nom, ident, pw);
          sh.close(); openDeviceCreated(nom, ident, pw, r);
        } catch (e) { t.disabled = false; t.textContent = "Créer l'appareil"; err.textContent = fbMsg(e.fb ? e : fbErr(e)).replace("Ce compte existe déjà : touchez « J'ai déjà créé ce compte ».", "Cet identifiant est déjà pris : choisissez-en un autre."); }
      }
    }
  });
  enterSubmits(sh, "ok");
}
async function fbCreateDevice(nom, ident, pw) {
  const F = window.OFirebase, fb = S.fb;
  const email = identToEmail(ident);
  const sec = F.initializeApp(fb.conf, "oc-sec-" + Date.now());
  let uid2;
  try {
    const auth2 = F.initializeAuth(sec, {persistence: F.inMemoryPersistence});
    const cred = await withTimeout(F.createUserWithEmailAndPassword(auth2, email, pw), 20000);
    uid2 = cred.user.uid;
    await F.signOut(auth2).catch(() => {});
  } finally { F.deleteApp(sec).catch(() => {}); }
  await withTimeout(F.setDoc(F.doc(fb.fs, "appareils/" + uid2), {nom, ident, email, actif: true, cree: {at: new Date().toISOString(), par: S.op}}), 20000);
  return {uid: uid2, email};
}
function openDeviceCreated(nom, ident, pw) {
  const sh = openSheet({
    html: `<div class="success"><div class="ok-mark" aria-hidden="true">✓</div><h2>${esc(nom)} est prêt</h2></div>
      <div class="kv"><span>Identifiant</span><b>${esc(ident)}</b></div><div class="kv"><span>Mot de passe</span><b>${esc(pw)}</b></div>
      <p class="notice info">Notez ces deux informations. Sur l'appareil : ouvrez le lien d'installation, puis connectez-vous avec cet identifiant et ce mot de passe. Il reste connecté ensuite ; chacun encaisse avec son code à 4 chiffres.</p>
      <div class="chips"><button class="btn" data-act="wa">Envoyer le lien par WhatsApp</button><button class="btn" data-act="copy">Copier le lien</button></div>
      <div class="sheet-actions"><button class="btn btn-primary btn-block" data-act="close">Terminé</button></div>`,
    actions: {close: () => sh.close(), wa: () => openExternal(waLink("", `Installation de la caisse sur « ${nom} » : ouvrez ce lien avec Chrome, puis connectez-vous avec l'identifiant ${ident}.\n${installLink()}`)), copy: () => fbCopy(installLink(), "Lien copié")}
  });
}
Object.assign(A, {
  "fb-setup-start": () => { S.fbSetup = {step: "config"}; S.mode = "fbsetup"; render(); },
  "fb-back-welcome": () => { S.mode = S.fb ? "fblogin" : "welcome"; render(); },
  "fb-config-check": () => fbCheckConfig(),
  "fb-owner": () => fbOwner(),
  "fb-owner-toggle": () => { S.fbSetup = {...S.fbSetup, mode: S.fbSetup.mode === "login" ? "create" : "login", err: ""}; render(); },
  "fb-claim": () => fbClaim(),
  "fb-rules-copy": () => fbCopy(FIRESTORE_RULES, "Règles copiées : collez-les dans la console Firebase"),
  "fb-rules-retry": () => { S.fbSetup = {...S.fbSetup, step: "claim"}; fbClaim(); },
  "fb-modele": t => fbApplyModele(t.dataset.v),
  "fb-login": () => fbLogin(),
  "fb-reset-pwd": async () => {
    const em = await askText("Adresse e-mail du propriétaire", "vous@exemple.com", []); if (!em) return;
    try { await window.OFirebase.sendPasswordResetEmail(S.fb.auth, em.trim()); toast("E-mail envoyé : suivez le lien reçu pour choisir un nouveau mot de passe."); }
    catch (e) { toast(fbMsg(e), "bad"); }
  },
  "fb-change-base": () => {
    const sh = openSheet({
      html: `<h2>Changer de base ?</h2><p class="sub">Cet appareil oubliera la base actuelle. Vous pourrez coller une autre configuration ou ouvrir un autre lien d'installation.</p><div class="sheet-actions"><button class="btn" data-act="close">Annuler</button><button class="btn btn-danger grow" data-act="ok">Oublier cette base</button></div>`,
      actions: {close: () => sh.close(), ok: () => { ls.set(FB_KEY, null); ls.set("oth.op", null); try { history.replaceState(null, "", location.pathname + location.search); } catch (e) {} location.reload(); }}
    });
  },
  "fb-signout": () => {
    const sh = openSheet({
      html: `<h2>Déconnecter cet appareil ?</h2><p class="sub">Il faudra se reconnecter avec l'identifiant et le mot de passe de l'appareil.${OB.pending() ? ` Attention : ${OB.pending()} envoi(s) sont encore en attente.` : ""}</p><div class="sheet-actions"><button class="btn" data-act="close">Annuler</button><button class="btn btn-danger grow" data-act="ok">Déconnecter</button></div>`,
      actions: {close: () => sh.close(), ok: () => { sh.close(); fbSignOut(); }}
    });
  },
  "fb-signout-now": () => fbSignOut(),
  "dev-new": () => openDeviceEditor(),
  "dev-toggle": t => {
    const d = (S.fbDevices || {})[t.dataset.id]; if (!d) return;
    window.OFirebase.setDoc(window.OFirebase.doc(S.fb.fs, "appareils/" + t.dataset.id), {actif: !d.actif}, {merge: true}).catch(e => toast(fbMsg(fbErr(e)), "bad"));
    toast(d.actif ? `${d.nom} est désactivé` : `${d.nom} est de nouveau autorisé`);
  },
  "link-copy": () => fbCopy(installLink(), "Lien copié"),
  "link-wa": () => openExternal(waLink("", `Installation de la caisse : ouvrez ce lien avec Chrome sur l'appareil de la boutique.\n${installLink()}`))
});

/* ----- Application installable (PWA) ----- */
window.addEventListener("beforeinstallprompt", e => { e.preventDefault(); S.installPrompt = e; });
window.addEventListener("appinstalled", () => { S.installPrompt = null; toast("Application installée"); });
async function promptInstall() {
  const p = S.installPrompt;
  if (!p) { toast("Dans le menu du navigateur, choisissez « Ajouter à l'écran d'accueil ».", "warn"); return; }
  p.prompt();
  try { await p.userChoice; } catch (e) {}
  S.installPrompt = null;
}
function registerSW() {
  if (!("serviceWorker" in navigator) || !/^https?:$/.test(location.protocol) || window.claude) return;
  navigator.serviceWorker.register("sw.js").catch(() => {});
}

/* ===================== Démarrage ===================== */
function resetUi() { S.op = null; S.pinBuf = ""; S.cat = "all"; S.view = "caisse"; S.carts = {}; S.rep.period = "today"; S.rep.com = "all"; S.catalogCom = null; }
async function boot() {
  S.mode = "boot"; render();
  const c = window.claude;
  if (c && typeof c.use === "function") {
    const get = n => Promise.resolve().then(() => c.use(n)).catch(() => null);
    const [db, user, assets, downloads] = await Promise.all([get("db"), get("user"), get("assets"), get("downloads")]);
    S.cap = {db, user, assets, downloads};
    if (db) { await startClaude(); return; }
  }
  registerSW();
  const fromLink = readInstallHash();
  if (fromLink) {
    try { history.replaceState(null, "", location.pathname + location.search); } catch (e) {}
    const cur = fbConfLoad();
    fbConfSave(fromLink);
    if (!cur || cur.projectId !== fromLink.projectId) setTimeout(() => toast("Base de la boutique enregistrée sur cet appareil"), 400);
  }
  const conf = fbConfLoad();
  if (conf) { startFirebase(conf); return; }
  S.backend = null; S.mode = "welcome"; render();
}
async function startClaude() {
  closeAllSheets(); unsubAll();
  S.backend = "claude"; S.demo = false;
  S.db = S.cap.db; S.user = S.cap.user; S.assets = S.cap.assets; S.downloads = S.cap.downloads;
  S.me = {id: null, isOwner: false, canEdit: false, canWrite: null};
  if (S.user) {
    try { const me = await S.user.me(); S.me = {id: me.id || null, isOwner: !!me.isOwner, canEdit: !!me.canEdit, canWrite: null}; S.me.canWrite = await S.user.can("data.write"); } catch (e) {}
  }
  resetUi(); S.mode = "boot";
  OB.load(); subscribeAll(); refreshDerived(); render(); OB.run();
}
async function startDemo() {
  closeAllSheets(); unsubAll();
  if (S.fb) { fbStopData(); fbStopRole(); }
  S.demo = true; S.backend = "demo"; S.mode = "boot"; S.db = null; render();
  const db = new MockDB();
  await demoSeed(db);
  S.db = db; S.user = null; S.assets = null; S.downloads = S.cap ? S.cap.downloads : null;
  S.me = {id: "demo", isOwner: true, canEdit: true, canWrite: true};
  resetUi(); OB.ops = []; S.photos = {};
  subscribeAll(); render();
}
function exitDemo() {
  closeAllSheets(); unsubAll(); S.demo = false; S.db = null; OB.ops = [];
  if (S.cap && S.cap.db) { startClaude(); return; }
  const conf = fbConfLoad();
  if (conf) {
    S.backend = "firebase";
    if (S.fb && S.fb.user) { S.mode = "fbwait"; render(); fbWatchRole(S.fb.user); return; }
    if (S.fb) { S.mode = "fblogin"; render(); return; }
    startFirebase(conf); return;
  }
  S.backend = null; S.mode = "welcome"; render();
}
if (/[?&]debug\b/.test(location.search)) window.__OC = {S, OB};
boot();

})();

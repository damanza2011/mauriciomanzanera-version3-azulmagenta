/* ==========================================================================
   MAURICIO MANZANERA - RED GLOBAL CONSULTORÍAS "MUNDO MEJOR"
   JAVASCRIPT CORE: I18N, VOICE/TEXT AI CHATBOT, DIAGNOSTIC ENGINE, CRM & CALENDAR
   ========================================================================== */

// --- 1. DICCIONARIO INTERNACIONAL I18N (5 IDIOMAS) ---
const translations = {
  es: {
    nav_vision: "Visión & Enfoque",
    nav_soluciones: "Soluciones Ecológicas",
    nav_metodo: "El Método",
    nav_diagnostico: "Diagnóstico Gratuito",
    nav_credenciales: "Trayectoria",
    nav_crm: "CRM Directivo",
    btn_agendar: "Agendar Sesión",
    hero_badge: "Soluciones Ecológicas Organizacionales",
    hero_title_1: "Estrategia Global,",
    hero_title_2: "Negociación de Alto Nivel",
    hero_title_3: "y Soluciones Ecológicas.",
    hero_subtitle: "Presidente de Red Global Consultorías S.A.S. Transformamos organizaciones bajo el principio ecológico: el sistema aprende del error sin penalizar a sus actores, garantizando mejora continua y salvaguardando la inversión.",
    btn_cta_diagnostico: "Obtener Diagnóstico Gratuito",
    btn_cta_hablar: "Hablar con Mauricio",
    stats_years: "+20 Años",
    stats_years_sub: "Trayectoria Multilateral",
    stats_deals: "+150 Acuerdos",
    stats_deals_sub: "Negociaciones y Juntas",
    stats_languages: "5 Idiomas",
    stats_languages_sub: "Negociación Internacional",
    stats_confidential: "100% Ético",
    stats_confidential_sub: "Gobernanza y Confidencialidad",
    vision_badge: "PROPUESTA DE VALOR ÚNICA",
    vision_title: "El Concepto de Solución Ecológica Organizacional",
    vision_quote: "«En nuestras soluciones, ningún actor o elemento paga por los errores cometidos en los procesos. Al haberse generado en el sistema, es el sistema el que aprende para remediar y entrar en Mejoramiento Continuo.»",
    vision_author: "— Mauricio Manzanera Jaramillo, Presidente",
    pillar_1_title: "Negociación & PNL Directiva",
    pillar_1_desc: "Resolución de conflictos societarios y mediación en juntas directivas aplicando Programación Neurolingüística para desbloquear acuerdos.",
    pillar_2_title: "Soluciones Ecológicas",
    pillar_2_desc: "Alineación de procesos organizacionales donde el error genera aprendizaje sistémico, protegiendo el talento y la rentabilidad.",
    pillar_3_title: "Expansión Multilateral",
    pillar_3_desc: "Conexión estratégica internacional entre América Latina, Reino Unido y Medio Oriente con rigor diplomático y comercial.",
    pillar_4_title: "Gobernanza Ética y ESG",
    pillar_4_desc: "Diseño de modelos sostenibles, responsabilidad corporativa y compliance de alto nivel para asegurar el futuro institucional.",
    diag_modal_title: "Diagnóstico Organizacional Inicial (Sin Costo)",
    diag_modal_sub: "Identifique qué está fallando en su organización y reciba una ruta estratégica inmediata.",
    chat_header_title: "Mauricio Manzanera — Asesor Virtual",
    chat_status: "En línea | Voz y Texto Activo",
    chat_welcome: "Hola, soy el asistente ejecutivo de Mauricio Manzanera. ¿En qué desafío organizacional o negociación puedo orientarte hoy? Puedes escribirme o pulsar el micrófono.",
    calendar_title: "Reserve su Sesión de Asesoría Directiva",
    footer_copy: "© 2026 Mauricio Manzanera Jaramillo. Todos los derechos reservados. Red Global Consultorías S.A.S."
  },
  en: {
    nav_vision: "Vision & Approach",
    nav_soluciones: "Ecological Solutions",
    nav_metodo: "The Method",
    nav_diagnostico: "Free Assessment",
    nav_credenciales: "Credentials",
    nav_crm: "Executive CRM",
    btn_agendar: "Book Session",
    hero_badge: "Organizational Ecological Solutions",
    hero_title_1: "Global Strategy,",
    hero_title_2: "High-Stakes Negotiation",
    hero_title_3: "and Ecological Solutions.",
    hero_subtitle: "President of Red Global Consultorías S.A.S. Transforming corporations under the ecological principle: systems learn from errors without penalizing stakeholders, securing continuous improvement.",
    btn_cta_diagnostico: "Get Free Assessment",
    btn_cta_hablar: "Talk with Mauricio",
    stats_years: "+20 Years",
    stats_years_sub: "Multilateral Leadership",
    stats_deals: "+150 Deals",
    stats_deals_sub: "Boardroom Negotiations",
    stats_languages: "5 Languages",
    stats_languages_sub: "International Trade",
    stats_confidential: "100% Ethical",
    stats_confidential_sub: "Governance & Discretion",
    vision_badge: "UNIQUE VALUE PROPOSITION",
    vision_title: "The Organizational Ecological Solution Framework",
    vision_quote: "«In our solutions, no stakeholder pays for systemic errors. Because errors arise within the system, the system itself learns to remediate and drive Continuous Improvement.»",
    vision_author: "— Mauricio Manzanera Jaramillo, President",
    pillar_1_title: "Negotiation & Executive NLP",
    pillar_1_desc: "Boardroom mediation and resolution of shareholder disputes utilizing Neuro-Linguistic Programming to unlock high-stakes impasses.",
    pillar_2_title: "Ecological Solutions",
    pillar_2_desc: "Organizational alignment where systemic errors foster institutional learning, safeguarding investment and talent.",
    pillar_3_title: "Multilateral Expansion",
    pillar_3_desc: "Cross-border bridges between the Americas, the UK, and the Middle East with diplomatic and commercial rigor.",
    pillar_4_title: "Ethical Governance & ESG",
    pillar_4_desc: "Architecting sustainable corporate roadmaps and high-level compliance for institutional longevity.",
    diag_modal_title: "Initial Executive Assessment (Complimentary)",
    diag_modal_sub: "Identify friction points within your organization and receive an immediate strategic roadmap.",
    chat_header_title: "Mauricio Manzanera — Virtual Advisor",
    chat_status: "Online | Voice & Text Enabled",
    chat_welcome: "Greetings, I am Mauricio Manzanera's executive assistant. What corporate challenge or negotiation may I guide you on today? Type or tap the microphone.",
    calendar_title: "Schedule Your Executive Consultation",
    footer_copy: "© 2026 Mauricio Manzanera Jaramillo. All rights reserved. Red Global Consultorías S.A.S."
  },
  fr: {
    nav_vision: "Vision & Approche",
    nav_soluciones: "Solutions Écologiques",
    nav_metodo: "La Méthode",
    nav_diagnostico: "Diagnostic Gratuit",
    nav_credenciales: "Parcours",
    nav_crm: "CRM Directoire",
    btn_agendar: "Prendre Rendez-vous",
    hero_badge: "Solutions Écologiques Organisationnelles",
    hero_title_1: "Stratégie Mondiale,",
    hero_title_2: "Négociation de Haut Niveau",
    hero_title_3: "et Solutions Écologiques.",
    hero_subtitle: "Président de Red Global Consultorías S.A.S. Nous transformons les entreprises : le système apprend de l'erreur sans pénaliser les acteurs, garantissant une amélioration continue.",
    btn_cta_diagnostico: "Diagnostic Offert",
    btn_cta_hablar: "Contacter Mauricio",
    stats_years: "+20 Ans",
    stats_years_sub: "Expérience Internationale",
    stats_deals: "+150 Accords",
    stats_deals_sub: "Négociations Complexes",
    stats_languages: "5 Langues",
    stats_languages_sub: "Commerce International",
    stats_confidential: "100% Éthique",
    stats_confidential_sub: "Confidentialité Totale",
    vision_badge: "PROPOSITION DE VALEUR UNIQUE",
    vision_title: "Le Concept de Solution Écologique d'Entreprise",
    vision_quote: "« Dans nos solutions, aucun acteur ne paie pour les erreurs du système. C'est le système qui apprend pour remédier et garantir l'amélioration continue. »",
    vision_author: "— Mauricio Manzanera Jaramillo, Président",
    pillar_1_title: "Négociation & PNL de Direction",
    pillar_1_desc: "Médiation d'assemblées d'actionnaires appliquant la PNL pour débloquer les litiges corporatifs majeurs.",
    pillar_2_title: "Solutions Écologiques",
    pillar_2_desc: "Alignement où l'erreur génère un apprentissage systémique, protégeant le capital humain et l'investissement.",
    pillar_3_title: "Expansion Multilatérale",
    pillar_3_desc: "Partenariats stratégiques entre l'Amérique latine, le Royaume-Uni et le Moyen-Orient.",
    pillar_4_title: "Gouvernance Éthique & ESG",
    pillar_4_desc: "Modèles durables et conformité éthique garantissant l'avenir des institutions.",
    diag_modal_title: "Diagnostic Organisationnel Initial (Gratuit)",
    diag_modal_sub: "Identifiez les blocages de votre entreprise et recevez une feuille de route claire.",
    chat_header_title: "Mauricio Manzanera — Conseiller Virtuel",
    chat_status: "En ligne | Voix et Texte",
    chat_welcome: "Bonjour, je suis l'assistant de Mauricio Manzanera. Quel défi de négociation ou d'entreprise pouvons-nous aborder aujourd'hui ?",
    calendar_title: "Réservez votre Session Stratégique",
    footer_copy: "© 2026 Mauricio Manzanera Jaramillo. Tous droits réservés. Red Global Consultorías S.A.S."
  },
  it: {
    nav_vision: "Visione & Approccio",
    nav_soluciones: "Soluzioni Ecologiche",
    nav_metodo: "Il Metodo",
    nav_diagnostico: "Diagnosi Gratuita",
    nav_credenciales: "Esperienza",
    nav_crm: "CRM Direttivo",
    btn_agendar: "Prenota Sessione",
    hero_badge: "Soluzioni Ecologiche Organizzative",
    hero_title_1: "Strategia Globale,",
    hero_title_2: "Negoziazione di Alto Livello",
    hero_title_3: "e Soluzioni Ecologiche.",
    hero_subtitle: "Presidente di Red Global Consultorías S.A.S. Trasformiamo le organizzazioni: il sistema impara dall'errore senza penalizzare le persone, assicurando il miglioramento continuo.",
    btn_cta_diagnostico: "Diagnosi Gratuita",
    btn_cta_hablar: "Parla con Mauricio",
    stats_years: "+20 Anni",
    stats_years_sub: "Esperienza Esecutiva",
    stats_deals: "+150 Accordi",
    stats_deals_sub: "Consigli di Amministrazione",
    stats_languages: "5 Lingue",
    stats_languages_sub: "Negoziati Globali",
    stats_confidential: "100% Etico",
    stats_confidential_sub: "Riservatezza Assoluta",
    vision_badge: "PROPOSTA DI VALORE UNICA",
    vision_title: "Il Concetto di Soluzione Ecologica Aziendale",
    vision_quote: "« Nelle nostre soluzioni, nessun collaboratore paga per gli errori commessi. È il sistema che impara per porre rimedio ed entrare nel Miglioramento Continuo. »",
    vision_author: "— Mauricio Manzanera Jaramillo, Presidente",
    pillar_1_title: "Negoziazione & PNL Esecutiva",
    pillar_1_desc: "Risoluzione di conflitti societari attraverso la PNL per sbloccare accordi strategici.",
    pillar_2_title: "Soluzioni Ecologiche",
    pillar_2_desc: "Allineamento dei processi in cui l'errore genera apprendimento, salvaguardando gli investimenti.",
    pillar_3_title: "Espansione Multilaterale",
    pillar_3_desc: "Ponti commerciali tra America Latina, Regno Unito e Medio Oriente con rigore diplomatico.",
    pillar_4_title: "Governance Etica & ESG",
    pillar_4_desc: "Costruzione di modelli sostenibili e conformità ai massimi standard aziendali.",
    diag_modal_title: "Diagnosi Organizzativa Iniziale (Gratuita)",
    diag_modal_sub: "Individua le inefficienze della tua organizzazione e ottieni un piano strategico.",
    chat_header_title: "Mauricio Manzanera — Assistente Virtuale",
    chat_status: "Online | Voce e Testo",
    chat_welcome: "Benvenuto, sono l'assistente virtuale di Mauricio Manzanera. Come posso assisterla oggi?",
    calendar_title: "Prenota la tua Consulenza Direttiva",
    footer_copy: "© 2026 Mauricio Manzanera Jaramillo. Tutti i diritti riservati. Red Global Consultorías S.A.S."
  },
  ar: {
    nav_vision: "الرؤية والنهج",
    nav_soluciones: "حلول بيئية",
    nav_metodo: "المنهجية",
    nav_diagnostico: "تشخيص مجاني",
    nav_credenciales: "المسيرة المهنية",
    nav_crm: "لوحة CRM",
    btn_agendar: "حجز جلسة",
    hero_badge: "حلول بيئية تنظيمية شاملة",
    hero_title_1: "استراتيجية عالمية،",
    hero_title_2: "تفاوض رفيع المستوى",
    hero_title_3: "وحلول بيئية مستدامة.",
    hero_subtitle: "رئيس Red Global Consultorías S.A.S. نقوم بتطوير المؤسسات عبر المبدأ البيئي: يتعلم النظام من الخطأ دون معاقبة الأفراد لضمان التحسين المستمر.",
    btn_cta_diagnostico: "احصل على تشخيص مجاني",
    btn_cta_hablar: "تحدث مع ماوريسيو",
    stats_years: "+20 عاماً",
    stats_years_sub: "قيادة دولية",
    stats_deals: "+150 اتفاقية",
    stats_deals_sub: "مجالس الإدارة",
    stats_languages: "5 لغات",
    stats_languages_sub: "تفاوض دولي",
    stats_confidential: "100% أخلاقي",
    stats_confidential_sub: "حوكمة وسرية تامة",
    vision_badge: "القيمة الفريدة",
    vision_title: "مفهوم الحلول البيئية المؤسسية",
    vision_quote: "«في حلولنا، لا يدفع أي فرد ثمن الأخطاء في النظام. النظام هو الذي يتعلم ويعالج الخلل ليدخل في مسار التحسين المستمر.»",
    vision_author: "— ماوريسيو مانزانيرا جاراميلو، الرئيس",
    pillar_1_title: "التفاوض والبرمجة اللغوية العصبية",
    pillar_1_desc: "حل نزاعات الشركاء وإدارة مجالس الإدارة بالبرمجة اللغوية العصبية لتجاوز العقبات.",
    pillar_2_title: "حلول بيئية مؤسسية",
    pillar_2_desc: "محاذاة الأنظمة حيث يولد الخطأ تعلماً مؤسسياً ويحمي الاستثمار والكوادر البشرية.",
    pillar_3_title: "توسع دولي متعدد الأطراف",
    pillar_3_desc: "ربط استراتيجي بين أمريكا اللاتينية والمملكة المتحدة والشرق الأوسط بأعلى المعايير.",
    pillar_4_title: "الحوكمة الأخلاقية و ESG",
    pillar_4_desc: "تصميم نماذج الاستدامة والامتثال المؤسسي طويل الأجل.",
    diag_modal_title: "التشخيص التنظيمي الأولي (مجاناً)",
    diag_modal_sub: "حدد نقاط الخلل في مؤسستك واحصل على خارطة طريق فورية.",
    chat_header_title: "ماوريسيو مانزانيرا — المستشار الذكي",
    chat_status: "متصل | دعم صوتي ونصي",
    chat_welcome: "مرحباً بك، أنا المساعد التنفيذي لماوريسيو مانزانيرا. كيف يمكنني إرشادك اليوم في تحدياتك المؤسسية؟",
    calendar_title: "احجز جلستك الاستشارية التنفيذية",
    footer_copy: "© 2026 ماوريسيو مانزانيرا جاراميلو. جميع الحقوق محفوظة. Red Global Consultorías S.A.S."
  }
};

let currentLang = 'es';

// Función para cambiar idioma
function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;

  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  // Actualizar textos
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Actualizar placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });

  // Botones de selección de idioma
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  localStorage.setItem('mm_lang', lang);
}

// --- 2. BASE DE CONOCIMIENTO PARA EL CHATBOT IA ("HABLA CON MAURO") ---
const knowledgeBase = [
  {
    triggers: ["solucion", "ecologica", "ecologicas", "ecologico", "error", "errores", "filosofia", "propuesta"],
    response: "Nuestras Soluciones Ecológicas se basan en un principio vital: ningún actor paga por los errores del proceso. Al ocurrir en el sistema, es el sistema el que aprende para remediar y entrar en Mejora Continua, salvaguardando la inversión y el talento."
  },
  {
    triggers: ["quien", "mauricio", "manzanera", "perfil", "trayectoria", "presidente", "red global"],
    response: "Mauricio Manzanera Jaramillo es Solutions Consultant y Presidente de Red Global Consultorías S.A.S. Cuenta con más de 20 años de experiencia ejecutiva internacional, ex-Vicepresidente de I.B.R. Ltda. en Londres y Medellín, con formación en Javeriana, UniAndes y City College of London."
  },
  {
    triggers: ["estudios", "formacion", "universidad", "javeriana", "andes", "london"],
    response: "Mauricio es Administrador de Empresas de la Pontificia Universidad Javeriana (2002), con estudios en Ingeniería Industrial en la Universidad de los Andes y Contabilidad y Finanzas en el City College of London."
  },
  {
    triggers: ["pnl", "neurolinguistica", "negociacion", "socios", "junta"],
    response: "Aplica Programación Neurolingüística (PNL) de nivel directivo para destrabar negociaciones complejas, alinear juntas directivas y resolver conflictos entre accionistas sin desgastar las relaciones."
  },
  {
    triggers: ["contacto", "whatsapp", "telefono", "celular", "hablar", "numero"],
    response: "Puedes contactar directamente a Mauricio por WhatsApp al +57 318 266 4266. También puedes pulsar el botón flotante de WhatsApp o solicitar el Diagnóstico Inicial Gratuito."
  },
  {
    triggers: ["diagnostico", "gratis", "gratuito", "costo", "evaluacion"],
    response: "Ofrecemos un Diagnóstico Inicial Gratuito para identificar con precisión qué anda mal en su organización y trazar la ruta de remedio y mejora continua. Puedes solicitarlo pulsando el botón 'Diagnóstico Gratuito'."
  },
  {
    triggers: ["redes", "redes sociales", "linkedin", "facebook", "instagram", "youtube"],
    response: "Las redes oficiales de Mauricio son: LinkedIn (/in/mauriciomanzanera), Facebook (@mauriciomanzanera), Instagram (@mauriciomanzanera) y YouTube (Mauricio Manzanera)."
  },
  {
    triggers: ["idiomas", "ingles", "frances", "italiano", "arabe"],
    response: "Mauricio negocia fluidamente en 5 idiomas: Español (nativo), Inglés corporativo, Italiano, Francés y Árabe (para misiones en Oriente Medio)."
  }
];

function getBotAnswer(query) {
  const q = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  for (let item of knowledgeBase) {
    for (let trigger of item.triggers) {
      if (q.includes(trigger)) {
        return item.response;
      }
    }
  }
  return "Excelente consulta. Para este desafío específico en su organización, lo más recomendable es coordinar una llamada confidencial con Mauricio Manzanera al WhatsApp +57 318 266 4266 o completar el Diagnóstico Inicial Gratuito.";
}

// --- 3. RECONOCIMIENTO Y SÍNTESIS DE VOZ (WEB SPEECH API) ---
let recognition = null;
let isListening = false;

function setupSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) return;

  recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.onstart = () => {
    isListening = true;
    updateMicButtonUI(true);
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    document.getElementById('chat-input').value = transcript;
    handleSendMessage();
  };

  recognition.onerror = () => {
    isListening = false;
    updateMicButtonUI(false);
  };

  recognition.onend = () => {
    isListening = false;
    updateMicButtonUI(false);
  };
}

function speakText(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  
  const langMap = {
    es: 'es-ES',
    en: 'en-US',
    fr: 'fr-FR',
    it: 'it-IT',
    ar: 'ar-SA'
  };
  utterance.lang = langMap[currentLang] || 'es-ES';
  utterance.rate = 1.0;
  window.speechSynthesis.speak(utterance);
}

function updateMicButtonUI(listening) {
  const micBtn = document.getElementById('chat-mic-btn');
  if (!micBtn) return;
  if (listening) {
    micBtn.classList.add('bg-red-500', 'animate-pulse');
    micBtn.classList.remove('bg-blue-600');
  } else {
    micBtn.classList.remove('bg-red-500', 'animate-pulse');
    micBtn.classList.add('bg-blue-600');
  }
}

// --- 4. GESTIÓN DEL CHATBOT ---
function appendChatMessage(sender, text) {
  const box = document.getElementById('chat-messages');
  if (!box) return;

  const msgDiv = document.createElement('div');
  msgDiv.className = sender === 'user' 
    ? 'flex justify-end mb-3' 
    : 'flex justify-start mb-3';

  const bubble = document.createElement('div');
  bubble.className = sender === 'user'
    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl rounded-tr-none px-4 py-2.5 max-w-[85%] text-sm shadow-md'
    : 'bg-[#151D3B] text-slate-200 border border-slate-700/60 rounded-2xl rounded-tl-none px-4 py-2.5 max-w-[85%] text-sm shadow-md';

  bubble.innerHTML = text;
  msgDiv.appendChild(bubble);
  box.appendChild(msgDiv);
  box.scrollTop = box.scrollHeight;
}

function handleSendMessage() {
  const input = document.getElementById('chat-input');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;

  appendChatMessage('user', text);
  input.value = '';

  setTimeout(() => {
    const answer = getBotAnswer(text);
    appendChatMessage('bot', answer);
    speakText(answer);
  }, 450);
}

// --- 5. MINI CRM LOCAL & DIAGNÓSTICO INTEGRADO ---
function getCRMLeads() {
  const data = localStorage.getItem('mm_crm_leads');
  return data ? JSON.parse(data) : [];
}

function saveCRMLead(lead) {
  const leads = getCRMLeads();
  leads.unshift({
    id: Date.now(),
    date: new Date().toLocaleString(),
    ...lead
  });
  localStorage.setItem('mm_crm_leads', JSON.stringify(leads));
  renderCRMTable();
}

function renderCRMTable() {
  const tbody = document.getElementById('crm-table-body');
  if (!tbody) return;
  const leads = getCRMLeads();

  if (leads.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="text-center py-8 text-slate-400">Aún no hay prospectos registrados. Complete el Diagnóstico Inicial para simular la captura de leads.</td></tr>`;
    return;
  }

  tbody.innerHTML = leads.map(l => `
    <tr class="border-b border-slate-800 hover:bg-slate-800/40 transition">
      <td class="py-3 px-4 text-xs font-mono text-slate-400">${l.date}</td>
      <td class="py-3 px-4 font-semibold text-white">${l.name}</td>
      <td class="py-3 px-4 text-sm text-slate-300">${l.company || 'N/A'}</td>
      <td class="py-3 px-4 text-sm text-cyan-400">${l.challenge}</td>
      <td class="py-3 px-4 text-sm font-mono text-slate-300">${l.phone}</td>
      <td class="py-3 px-4">
        <a href="https://wa.me/${l.phone.replace(/[^0-9]/g, '')}?text=Hola%20${encodeURIComponent(l.name)},%20te%20contacto%20de%20parte%20de%20Mauricio%20Manzanera%20de%20Red%20Global%20Consultor%C3%ADas" target="_blank" class="inline-flex items-center gap-1 text-xs bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 px-2 py-1 rounded hover:bg-emerald-600 hover:text-white transition">
          WhatsApp
        </a>
      </td>
    </tr>
  `).join('');
}

function exportCRMToCSV() {
  const leads = getCRMLeads();
  if (leads.length === 0) {
    alert("No hay leads para exportar.");
    return;
  }

  let csvContent = "data:text/csv;charset=utf-8,Fecha,Nombre,Empresa,Desafio,Telefono,Email\n";
  leads.forEach(l => {
    csvContent += `"${l.date}","${l.name}","${l.company || ''}","${l.challenge}","${l.phone}","${l.email || ''}"\n`;
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `Leads_RedGlobalConsultorias_${new Date().toISOString().slice(0,10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// --- 6. INICIALIZACIÓN GENERAL ---
document.addEventListener('DOMContentLoaded', () => {
  // Cargar idioma guardado o por defecto
  const savedLang = localStorage.getItem('mm_lang') || 'es';
  setLanguage(savedLang);

  // Botones de cambio de idioma
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
    });
  });

  // Configurar Speech Recognition
  setupSpeechRecognition();

  // Chatbot toggle
  const chatToggleBtn = document.getElementById('chat-toggle-btn');
  const chatModal = document.getElementById('chat-modal');
  const chatCloseBtn = document.getElementById('chat-close-btn');

  if (chatToggleBtn && chatModal) {
    chatToggleBtn.addEventListener('click', () => {
      chatModal.classList.toggle('hidden');
      if (!chatModal.classList.contains('hidden')) {
        document.getElementById('chat-input')?.focus();
      }
    });
  }

  if (chatCloseBtn && chatModal) {
    chatCloseBtn.addEventListener('click', () => {
      chatModal.classList.add('hidden');
      window.speechSynthesis?.cancel();
    });
  }

  // Chat send listeners
  const sendBtn = document.getElementById('chat-send-btn');
  const chatInput = document.getElementById('chat-input');
  if (sendBtn) sendBtn.addEventListener('click', handleSendMessage);
  if (chatInput) {
    chatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSendMessage();
      }
    });
  }

  // Mic button
  const micBtn = document.getElementById('chat-mic-btn');
  if (micBtn) {
    micBtn.addEventListener('click', () => {
      if (!recognition) {
        alert("El reconocimiento por voz no está soportado en este navegador. Utiliza Google Chrome o Edge.");
        return;
      }
      if (isListening) {
        recognition.stop();
      } else {
        const langMap = { es: 'es-ES', en: 'en-US', fr: 'fr-FR', it: 'it-IT', ar: 'ar-SA' };
        recognition.lang = langMap[currentLang] || 'es-ES';
        recognition.start();
      }
    });
  }

  // Quick questions in chat
  document.querySelectorAll('.quick-q-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const q = btn.textContent.trim();
      document.getElementById('chat-input').value = q;
      handleSendMessage();
    });
  });

  // Diagnóstico Modal Handlers
  const diagModal = document.getElementById('diagnostic-modal');
  const openDiagBtns = document.querySelectorAll('.open-diagnostic-btn');
  const closeDiagBtn = document.getElementById('close-diagnostic-btn');

  openDiagBtns.forEach(b => {
    b.addEventListener('click', (e) => {
      e.preventDefault();
      diagModal?.classList.remove('hidden');
    });
  });

  if (closeDiagBtn && diagModal) {
    closeDiagBtn.addEventListener('click', () => {
      diagModal.classList.add('hidden');
    });
  }

  // Formulario de Diagnóstico Submit
  const diagForm = document.getElementById('diagnostic-form');
  if (diagForm) {
    diagForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('diag-name').value;
      const company = document.getElementById('diag-company').value;
      const phone = document.getElementById('diag-phone').value;
      const email = document.getElementById('diag-email').value;
      const challenge = document.getElementById('diag-challenge').value;

      // Guardar en CRM
      saveCRMLead({ name, company, phone, email, challenge });

      // Mensaje WhatsApp
      const waMsg = `Hola Mauricio, solicito el Diagnóstico Inicial Gratuito para mi empresa:%0A%0A*Nombre:* ${encodeURIComponent(name)}%0A*Empresa:* ${encodeURIComponent(company)}%0A*Desafío:* ${encodeURIComponent(challenge)}%0A*Teléfono:* ${encodeURIComponent(phone)}`;
      const waUrl = `https://wa.me/573182664266?text=${waMsg}`;

      // Mostrar confirmación y abrir WhatsApp
      alert(`¡Diagnóstico registrado con éxito! Te estamos redirigiendo a WhatsApp con Mauricio Manzanera para coordinar los detalles.`);
      window.open(waUrl, '_blank');
      diagModal.classList.add('hidden');
      diagForm.reset();
    });
  }

  // CRM Modal Handlers
  const crmModal = document.getElementById('crm-modal');
  const openCrmBtns = document.querySelectorAll('.open-crm-btn');
  const closeCrmBtn = document.getElementById('close-crm-btn');
  const exportCrmBtn = document.getElementById('export-crm-btn');

  openCrmBtns.forEach(b => {
    b.addEventListener('click', (e) => {
      e.preventDefault();
      renderCRMTable();
      crmModal?.classList.remove('hidden');
    });
  });

  if (closeCrmBtn && crmModal) {
    closeCrmBtn.addEventListener('click', () => crmModal.classList.add('hidden'));
  }

  if (exportCrmBtn) {
    exportCrmBtn.addEventListener('click', exportCRMToCSV);
  }

  // Pre-cargar 1 lead de prueba si está vacío para ilustrar a Mauricio
  if (getCRMLeads().length === 0) {
    saveCRMLead({
      name: "Andrés Restrepo",
      company: "Grupo Industrial Andino",
      challenge: "Conflicto Societario y Mejora Continua",
      phone: "+57 300 123 4567",
      email: "arestrepo@grupoandino.co"
    });
  }
});

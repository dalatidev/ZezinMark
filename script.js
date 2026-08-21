const lessons = [
  {
    q: "<b>1. Títulos:</b> No Markdown, criamos títulos usando o símbolo <code>#</code> no início da linha. Quanto mais <code>#</code> você colocar, menor fica o título: <code>#</code> = título grande (H1), <code>##</code> = médio (H2), até <code>######</code> (H6). Sempre coloque um espaço entre o <code>#</code> e o texto.<br><br><b>Exemplo:</b> <code># Meu Título</code><br><br><b>Desafio:</b> Crie um título grande (H1) com o texto <b>Oba minha gente</b>",
    hint: "# Oba minha gente",
    regex: /^#\s+Oba minha gente$/i,
    render: (txt) =>
      `<div class="markdown-preview-box"><h1>${txt.replace(
        /^#\s+/,
        ""
      )}</h1></div>`,
  },
  {
    q: "<b>2. Negrito:</b> Para deixar um texto em <b>negrito</b>, coloque dois asteriscos (<code>**</code>) ou dois sublinhados (<code>__</code>) antes e depois da palavra. Não deixe espaço entre os marcadores e o texto.<br><br><b>Exemplo:</b> <code>**texto forte**</code> ou <code>__texto forte__</code><br><br><b>Desafio:</b> Escreva a palavra <b>Oxente</b> em negrito.",
    hint: "**Oxente**",
    regex: /^(\*\*|__)Oxente\1$/,
    render: () =>
      `<div class="markdown-preview-box"><strong>Oxente</strong></div>`,
  },
  {
    q: "<b>3. Itálico:</b> Para deixar um texto em <em>itálico</em>, coloque um asterisco (<code>*</code>) ou um sublinhado (<code>_</code>) antes e depois da palavra.<br><br><b>Exemplo:</b> <code>*texto inclinado*</code> ou <code>_texto inclinado_</code><br><br><b>Desafio:</b> Escreva a palavra <b>Arretado</b> em itálico.",
    hint: "*Arretado*",
    regex: /^(\*|_)Arretado\1$/,
    render: () => `<div class="markdown-preview-box"><em>Arretado</em></div>`,
  },
  {
    q: "<b>4. Citação:</b> Para criar uma citação (blockquote), coloque o símbolo <code>></code> no início da linha, seguido de um espaço.<br><br><b>Exemplo:</b> <code>> Frase importante</code><br><br><b>Desafio:</b> Crie uma citação com o texto <b>Bora simbora</b>",
    hint: "> Bora simbora",
    regex: /^>\s+Bora simbora$/i,
    render: () =>
      `<div class="markdown-preview-box"><blockquote>Bora simbora</blockquote></div>`,
  },
  {
    q: "<b>5. Lista Ordenada:</b> Para criar uma lista numerada, escreva o número, um ponto e um espaço antes de cada item. Cada item fica em uma linha diferente.<br><br><b>Exemplo:</b><br><code>1. Primeiro item</code><br><code>2. Segundo item</code><br><br><b>Desafio:</b> Crie uma lista ordenada com dois itens: <b>O primeiro cabra</b> e <b>O segundo cabra</b><br><br><em>Dica: use Shift+Enter ou o botão de enviar para quebrar a linha.</em>",
    hint: "1. O primeiro cabra\n2. O segundo cabra",
    regex: /^1\.\s+O primeiro cabra\n2\.\s+O segundo cabra$/,
    render: () =>
      `<div class="markdown-preview-box"><ol><li>O primeiro cabra</li><li>O segundo cabra</li></ol></div>`,
  },
  {
    q: "<b>6. Lista Não Ordenada:</b> Para criar um item de lista com marcador, coloque um traço (<code>-</code>) seguido de um espaço antes do texto.<br><br><b>Exemplo:</b> <code>- Meu item</code><br><br><b>Desafio:</b> Crie um item de lista não ordenada com o texto <b>Caju</b>",
    hint: "- Caju",
    regex: /^-\s+Caju$/i,
    render: () =>
      `<div class="markdown-preview-box"><ul><li>Caju</li></ul></div>`,
  },
  {
    q: "<b>7. Código em linha:</b> Para destacar uma palavra como código, coloque uma crase (<code>`</code>) antes e depois do texto. Isso é útil para mostrar comandos, nomes de variáveis ou trechos de código.<br><br><b>Exemplo:</b> <code>`meuComando`</code><br><br><b>Desafio:</b> Escreva a palavra <b>script</b> formatada como código.",
    hint: "`script`",
    regex: /^`script`$/i,
    render: () => `<div class="markdown-preview-box"><code>script</code></div>`,
  },
  {
    q: "<b>8. Linha Horizontal:</b> Para criar uma linha divisória entre seções, escreva três traços (<code>---</code>) sozinhos em uma linha.<br><br><b>Exemplo:</b> <code>---</code><br><br><b>Desafio:</b> Crie uma linha horizontal.",
    hint: "---",
    regex: /^---$/,
    render: () => `<div class="markdown-preview-box"><hr></div>`,
  },
  {
    q: "<b>9. Link:</b> Para criar um link, use a estrutura <code>[texto](endereço)</code>. O texto entre colchetes é o que aparece na tela, e o endereço entre parênteses é para onde o link leva.<br><br><b>Exemplo:</b> <code>[Clique aqui](site.com)</code><br><br><b>Desafio:</b> Crie um link com o texto <b>Comida</b> apontando para <b>arrozdecuxa.com</b>",
    hint: "[Comida](arrozdecuxa.com)",
    regex: /^\[Comida\]\(arrozdecuxa\.com\)$/i,
    render: () =>
      `<div class="markdown-preview-box"><a href="https://www.tudogostoso.com.br/receita/9547-arroz-de-cuxa-maranhense.html" target="_blank" style="color:var(--primary)">Comida</a></div>`,
  },
  {
    q: "<b>10. Imagem:</b> Para inserir uma imagem, é parecido com um link, mas com uma exclamação (<code>!</code>) antes: <code>![descrição](endereço)</code>. A descrição aparece quando a imagem não carrega.<br><br><b>Exemplo:</b> <code>![Logo](logo.png)</code><br><br><b>Desafio:</b> Insira uma imagem com a descrição <b>Imagem</b> e o endereço <b>zezin.png</b>",
    hint: "![Imagem](zezin.png)",
    regex: /^!\[Imagem\]\(zezin\.png\)$/i,
    render: () =>
      `<div class="markdown-preview-box"><img src="Zezin_Cuscuz.png" alt="Robo comendo cuscuz com café"></div>`,
  },
];

// BANCO DE QUESTÕES DA AVALIAÇÃO
const examQuestions = [
  {
    q: "<b>Questão 1 — Títulos:</b> Crie um título de nível 2 (H2) com a palavra <b>Estudos</b>.",
    regex: /^##\s+Estudos$/i,
    expected: "## Estudos",
    topic: "Títulos",
  },
  {
    q: "<b>Questão 2 — Negrito:</b> Escreva a palavra <b>Aprovado</b> em negrito usando asteriscos (<code>**</code>).",
    regex: /^\*\*Aprovado\*\*$/,
    expected: "**Aprovado**",
    topic: "Negrito",
  },
  {
    q: "<b>Questão 3 — Itálico:</b> Escreva a palavra <b>Sucesso</b> em itálico usando sublinhado (<code>_</code>).",
    regex: /^_Sucesso_$/,
    expected: "_Sucesso_",
    topic: "Itálico",
  },
  {
    q: "<b>Questão 4 — Citação:</b> Crie uma citação com a frase <b>Aprender transforma</b>.",
    regex: /^>\s+Aprender transforma$/i,
    expected: "> Aprender transforma",
    topic: "Citação",
  },
  {
    q: "<b>Questão 5 — Lista Ordenada:</b> Crie uma lista numerada com dois itens: <b>Item A</b> e <b>Item B</b>.<br><br><em>Dica: use Shift+Enter para quebrar a linha.</em>",
    regex: /^1\.\s+Item A\n2\.\s+Item B$/,
    expected: "1. Item A\n2. Item B",
    topic: "Lista Ordenada",
  },
  {
    q: "<b>Questão 6 — Lista Não Ordenada:</b> Crie um item de lista com traço (<code>-</code>) para a palavra <b>Café</b>.",
    regex: /^-\s+Café$/i,
    expected: "- Café",
    topic: "Lista Não Ordenada",
  },
  {
    q: "<b>Questão 7 — Código:</b> Formate o texto <b>console.log</b> como código em linha usando crases.",
    regex: /^`console\.log`$/i,
    expected: "`console.log`",
    topic: "Código",
  },
  {
    q: "<b>Questão 8 — Linha Horizontal:</b> Crie uma linha horizontal usando três traços.",
    regex: /^---$/,
    expected: "---",
    topic: "Linha Horizontal",
  },
  {
    q: "<b>Questão 9 — Link:</b> Crie um link com o texto <b>Google</b> apontando para <b>https://google.com</b>.",
    regex: /^\[Google\]\(https:\/\/google\.com\)$/i,
    expected: "[Google](https://google.com)",
    topic: "Link",
  },
  {
    q: "<b>Questão 10 — Imagem:</b> Insira uma imagem com a descrição <b>Foto</b> e o endereço <b>foto.png</b>.",
    regex: /^!\[Foto\]\(foto\.png\)$/i,
    expected: "![Foto](foto.png)",
    topic: "Imagem",
  },
];

// Gerenciador de Estados
let state = {
  userName: localStorage.getItem("md_name") || "",
  index: parseInt(localStorage.getItem("md_index")) || 0,
  currentStep: "naming",
  examIndex: 0,
  examAnswers: [],
};

// Limitar o index ao máximo de lições existentes
if (state.index > lessons.length) {
  state.index = 0;
  localStorage.setItem("md_index", 0);
}

const chatArea = document.getElementById("chat-area");
const userInput = document.getElementById("user-input");
const feedbackStatus = document.getElementById("feedback-status");
const feedbackText = document.getElementById("feedback-text");
const btnSend = document.getElementById("btn-send");
const navControls = document.getElementById("nav-controls");
const btnBack = document.getElementById("btn-back");
const btnSkip = document.getElementById("btn-skip");
const statusLabel = document.getElementById("lesson-status");

window.onload = () => {
  applyTheme(localStorage.getItem("md_theme") || "light");
  if (
    !state.userName ||
    state.userName.trim() === "" ||
    state.userName === "null"
  ) {
    state.currentStep = "naming";
    askName();
  } else {
    state.currentStep = "learning";
    welcomeBack();
  }
};

function scrollToBottom() {
  setTimeout(() => {
    chatArea.scrollTop = chatArea.scrollHeight;
  }, 80);
}

function askName() {
  state.currentStep = "naming";
  statusLabel.textContent = "Identificação";
  addMsg(
    "bot",
    "Olá! Sou o <b>Zezin</b>. Antes de começarmos, como posso te chamar?"
  );
  userInput.placeholder = "Seu nome ou apelido...";
  navControls.style.display = "none";
  resetValidationState();
}

function introZezin() {
  state.currentStep = "intro";
  statusLabel.textContent = "Apresentação";
  addMsg("bot", `Prazer em te conhecer, <b>${state.userName}</b>!`);
  addMsg(
    "bot",
    `Só pra deixar claro: eu <b>não</b> sou uma Inteligência Artificial. Sou um assistente automático criado pelo desenvolvedor <b>Dalati Lacerda Azevedo</b>, programado pra te ensinar Markdown de um jeito simples.`
  );

  const row = document.createElement("div");
  row.className = "message-row";
  row.innerHTML = `
            <div class="message-bubble bot-style">
                Vou te ensinar as 10 estruturas básicas do Markdown com desafios práticos. Cada lição mostra a sintaxe e como fica o resultado. No final, tem uma provinha pra testar o que você aprendeu!
                <div class="action-button-container">
                    <button class="prime-btn" id="start-journey-btn">Começar <i data-lucide="play" size="16"></i></button>
                </div>
            </div>
        `;
  chatArea.appendChild(row);
  scrollToBottom();
  lucide.createIcons();

  userInput.disabled = true;
  btnSend.disabled = true;

  document.getElementById("start-journey-btn").onclick = () => {
    userInput.disabled = false;
    startLessons();
  };
}

function welcomeBack() {
  statusLabel.textContent = "Retorno";
  addMsg(
    "bot",
    `Bem-vindo de volta, <b>${state.userName}</b>! Quer continuar de onde parou?`
  );

  const row = document.createElement("div");
  row.className = "message-row";
  row.innerHTML = `
            <div class="message-bubble bot-style">
                <div class="action-button-container">
                    <button class="prime-btn" id="resume-journey-btn">Continuar <i data-lucide="play" size="16"></i></button>
                </div>
            </div>
        `;
  chatArea.appendChild(row);
  scrollToBottom();
  lucide.createIcons();

  userInput.disabled = true;
  btnSend.disabled = true;

  document.getElementById("resume-journey-btn").onclick = () => {
    userInput.disabled = false;
    startLessons();
  };
}

function startLessons() {
  state.currentStep = "learning";
  userInput.placeholder = "Digite em Markdown...";
  navControls.style.display = "flex";
  loadLesson();
}

function loadLesson() {
  userInput.value = "";
  userInput.style.height = "auto";
  resetValidationState();

  if (state.index >= lessons.length) {
    localStorage.setItem("md_index", lessons.length);
    offerExam();
    return;
  }

  btnSkip.style.display = "inline-flex";
  btnBack.style.display = state.index > 0 ? "inline-flex" : "none";

  statusLabel.textContent = `Lição ${state.index + 1} de ${lessons.length}`;
  addMsg("bot", lessons[state.index].q);
  localStorage.setItem("md_index", state.index);
}

// Transição entre lições e prova
function offerExam() {
  state.currentStep = "pre-exam";
  navControls.style.display = "none";
  statusLabel.textContent = "Lições concluídas!";
  userInput.disabled = true;
  btnSend.disabled = true;

  addMsg(
    "bot",
    `Parabéns, <b>${state.userName}</b>! Você completou todas as 10 lições!`
  );

  const row = document.createElement("div");
  row.className = "message-row";
  row.innerHTML = `
      <div class="message-bubble bot-style">
        Agora vem a <b>Prova Final</b>: são 10 questões sobre tudo que você aprendeu. Diferente das lições, aqui eu <b>não</b> vou dizer se acertou ou errou na hora. O resultado completo aparece só no final. Preparado?
        <div class="action-button-container">
          <button class="prime-btn" id="start-exam-btn">Fazer a Prova <i data-lucide="file-check" size="16"></i></button>
        </div>
      </div>
    `;
  chatArea.appendChild(row);
  scrollToBottom();
  lucide.createIcons();

  document.getElementById("start-exam-btn").onclick = () => {
    userInput.disabled = false;
    startExam();
  };
}

function startExam() {
  state.currentStep = "exam";
  state.examIndex = 0;
  state.examAnswers = [];
  statusLabel.textContent = "Prova Final";
  setTimeout(loadExamQuestion, 400);
}

function loadExamQuestion() {
  userInput.value = "";

  if (state.examAnswers[state.examIndex] !== undefined) {
    userInput.value = state.examAnswers[state.examIndex];
  }
  userInput.style.height = "auto";
  resetValidationState();

  btnSkip.style.display = "none";
  btnBack.style.display = state.examIndex > 0 ? "inline-flex" : "none";
  navControls.style.display = "flex";

  statusLabel.textContent = `Questão ${state.examIndex + 1} de ${
    examQuestions.length
  }`;
  addMsg("bot", examQuestions[state.examIndex].q);

  userInput.dispatchEvent(new Event("input"));
}

userInput.addEventListener("input", () => {
  const val = userInput.value;
  userInput.style.height = "auto";
  userInput.style.height = userInput.scrollHeight + "px";

  if (state.currentStep === "naming") {
    if (val.trim().length >= 2) {
      setFeedback("correct", "Nome válido! Toque para enviar.", false);
    } else {
      setFeedback("info", "Digite pelo menos 2 caracteres...", true);
    }
    return;
  }

  if (val === "") {
    resetValidationState();
    return;
  }

  if (state.currentStep === "exam") {
    if (val.trim().length > 0) {
      setFeedback("info", "Resposta registrada. Toque para enviar.", false);
    } else {
      setFeedback("info", "Aguardando resposta...", true);
    }
    return;
  }

  const current = lessons[state.index];
  if (current && current.regex.test(val)) {
    setFeedback("correct", "Sintaxe correta! Pode enviar.", false);
  } else {
    setFeedback(
      "incorrect",
      "Ainda não está certo. Confira a sintaxe pedida.",
      true
    );
  }
});

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    // Shift + Enter sempre quebra linha
    if (e.shiftKey) {
      return;
    }

    const val = userInput.value;

    // Se estiver digitando uma lista, Enter apenas quebra a linha
    if (val.startsWith("-") || /^\d+\./.test(val)) {
      return;
    }

    // Caso contrário, envia
    e.preventDefault();
    if (!btnSend.disabled) submitData();
  }
});

btnSend.onclick = () => {
  submitData();
};

function submitData() {
  const val = userInput.value;

  if (state.currentStep === "naming") {
    const name = val.trim();
    if (name.length < 2) return;
    state.userName = name;
    localStorage.setItem("md_name", state.userName);
    addMsg("user", state.userName);
    userInput.value = "";
    introZezin();
    return;
  }

  if (val.trim() === "") return;

  addMsg("user", val);

  if (state.currentStep === "exam") {
    state.examAnswers[state.examIndex] = val;
    state.examIndex++;

    if (state.examIndex >= examQuestions.length) {
      showFinalResult();
    } else {
      addMsg("bot", "Resposta salva! Próxima questão...");
      setTimeout(loadExamQuestion, 600);
    }
  } else if (state.currentStep === "learning") {
    // Validação extra: só aceita resposta correta
    const current = lessons[state.index];
    if (current && current.regex.test(val)) {
      const renderHtml = current.render(val);
      addMsg("bot", `Isso aí! Veja como fica no HTML: ${renderHtml}`);
      state.index++;
      setTimeout(loadLesson, 1000);
    } else {
      addMsg(
        "bot",
        `Hmm, não ficou certo. Tente de novo! A sintaxe esperada é parecida com: <code>${current.hint}</code>`
      );
    }
  }

  userInput.value = "";
  userInput.style.height = "auto";
}

function showFinalResult() {
  state.currentStep = "complete";
  navControls.style.display = "none";
  statusLabel.textContent = "Resultado Final";

  let finalScore = 0;
  const resultItems = [];

  examQuestions.forEach((q, i) => {
    const answer = state.examAnswers[i] || "";
    const isCorrect = q.regex.test(answer);
    if (isCorrect) finalScore++;

    resultItems.push(`
        <div class="exam-result-item">
          <span class="exam-result-icon">${isCorrect ? "✅" : "❌"}</span>
          <div class="exam-result-detail">
            <b>${q.topic}</b>
            ${
              isCorrect
                ? `<span class="exam-result-correct"> — Acertou!</span>`
                : `<span class="exam-result-wrong"> — Errou</span><br>
                 <span class="your-answer">Sua resposta: ${escapeHtml(
                   answer
                 )}</span><br>
                 <span style="color:var(--success); font-family:monospace; font-size:0.85rem;">Correto: ${escapeHtml(
                   q.expected
                 )}</span>`
            }
          </div>
        </div>
      `);
  });

  addMsg(
    "bot",
    `<b>Resultado da Prova:</b> Você acertou <b>${finalScore} de ${examQuestions.length}</b>!`
  );

  addMsg(
    "bot",
    `<div style="margin-bottom: 4px;"><b>Detalhes:</b></div>${resultItems.join(
      ""
    )}`
  );

  if (finalScore === examQuestions.length) {
    addMsg(
      "bot",
      `<img src="Zezin_Cuscuz.png" alt="Zezin te dando parabéns com um cuscuz" style="max-width:100%; border-radius:12px; margin-bottom:8px;"><br>Nota <b>10/10</b>! Você dominou o Markdown completamente. Toma um cuscuz pra comemorar!`
    );
  } else if (finalScore >= 7) {
    addMsg(
      "bot",
      "Muito bem! Você entendeu a maioria das estruturas. Revise os erros acima e logo chega nos 100%!"
    );
  } else if (finalScore >= 5) {
    addMsg(
      "bot",
      "Bom resultado! Mas ainda dá pra melhorar. Que tal revisar as lições e tentar de novo?"
    );
  } else {
    addMsg(
      "bot",
      "Não desanime! Markdown é prática. Reinicie as lições pelo botão no topo e tente novamente."
    );
  }

  addMsg(
    "bot",
    `Obrigado por aprender comigo! Este projeto foi criado por <b>Dalati Lacerda Azevedo</b>.`
  );
  addMsg(
    "bot",
    `Veja mais projetos no Instagram: <a href="https://instagram.com/dalatidev" target="_blank" class="prime-btn" style="margin-top:8px; text-decoration:none;">@dalatidev <i data-lucide="instagram" size="16"></i></a>`
  );

  lucide.createIcons();
  resetValidationState();
  userInput.disabled = true;
  btnSend.disabled = true;
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function setFeedback(type, text, isDisableButton) {
  feedbackText.textContent = text;
  feedbackStatus.className = `feedback-status ${type}`;
  btnSend.disabled = isDisableButton;

  let iconName = "info";
  if (type === "correct") iconName = "check-circle-2";
  if (type === "incorrect") iconName = "alert-circle";

  const iconEl = feedbackStatus.querySelector("i");
  if (iconEl) {
    iconEl.setAttribute("data-lucide", iconName);
    lucide.createIcons();
  }
}

function resetValidationState() {
  setFeedback("info", "Aguardando entrada...", true);
}

function addMsg(type, text) {
  const row = document.createElement("div");
  row.className = "message-row";

  const bubble = document.createElement("div");
  bubble.className = `message-bubble ${type}-style`;
  bubble.innerHTML = text;

  row.appendChild(bubble);
  chatArea.appendChild(row);

  scrollToBottom();
  lucide.createIcons();
}

document.getElementById("theme-toggle").onclick = () => {
  const current = document.documentElement.getAttribute("data-theme");
  applyTheme(current === "light" ? "dark" : "light");
};

function applyTheme(t) {
  document.documentElement.setAttribute("data-theme", t);
  localStorage.setItem("md_theme", t);
  const icon = document.getElementById("theme-icon");
  if (icon) {
    icon.setAttribute("data-lucide", t === "dark" ? "sun" : "moon");
    lucide.createIcons();
  }
}

document.getElementById("btn-reset").onclick = () => {
  if (confirm("Reiniciar tudo do começo? Seu progresso será apagado.")) {
    state.index = 0;
    state.examIndex = 0;
    state.examAnswers = [];
    state.currentStep = "naming";
    localStorage.setItem("md_index", 0);
    localStorage.removeItem("md_name");
    state.userName = "";
    chatArea.innerHTML = "";
    userInput.disabled = false;
    userInput.value = "";
    askName();
  }
};

btnBack.onclick = () => {
  if (state.currentStep === "exam") {
    if (state.examIndex > 0) {
      state.examIndex--;
      addMsg("bot", "Voltando para a questão anterior...");
      loadExamQuestion();
    }
  } else {
    if (state.index > 0) {
      state.index--;
      addMsg("bot", "Voltando para a lição anterior...");
      loadLesson();
    }
  }
};

btnSkip.onclick = () => {
  if (state.currentStep !== "exam") {
    state.index++;
    addMsg("bot", "Pulando desafio...");
    loadLesson();
  }
};

const lessons = [
  {
    q: "<b>1. Títulos:</b> são criados usando o caractere # no início da linha. A quantidade de # define o nível do título: # é um título H1 (o maior), ## é H2, ### é H3, e assim por diante, até ###### (H6). Sempre deixe um espaço entre o último # e o texto.<br><br>Desafio: Crie um título principal (H1) com o texto:<b> Oba minha gente</b>",
    regex: /^#\s+Oba minha gente$/i,
    render: (txt) =>
      `<div class="markdown-preview-box"><h1>${txt.replace(
        /^#\s+/,
        ""
      )}</h1></div>`,
  },
  {
    q: "<b>2. Negrito:</b> são criados envolvendo o texto com dois asteriscos (**) ou dois sublinhados (__). Os marcadores devem ser colocados no início e no final do texto, sem espaços entre eles e a palavra.<br><br>Desafio: Escreva a palavra:<b> Oxente</b> em negrito utilizando uma das duas formas disponíveis.",
    regex: /^(\*\*|__)Oxente\1$/,
    render: () =>
      `<div class="markdown-preview-box"><strong>Oxente</strong></div>`,
  },
  {
    q: "<b>3. Itálico:</b> são criados envolvendo o texto com um asterisco (*) ou um sublinhado (_). Os marcadores devem ser colocados no início e no final do texto, sem espaços entre eles e a palavra.<br><br>Desafio: Escreva a palavra:<b> Arretado</b> em itálico utilizando uma das duas formas disponíveis.",
    regex: /^(\*|_)Arretado\1$/,
    render: () => `<div class="markdown-preview-box"><em>Arretado</em></div>`,
  },
  {
    q: "<b>4. Citações:</b> são criadas usando o caractere maior que (>) no início da linha, seguido de um espaço antes do texto. Esse recurso é usado para destacar frases, trechos ou citações.<br><br>Desafio: Crie uma citação com o texto:<b> Bora simbora</b>",
    regex: /^>\s+Bora simbora$/i,
    render: () =>
      `<div class="markdown-preview-box"><blockquote>Bora simbora</blockquote></div>`,
  },
  {
    q: "<b>5. Listas Ordenadas:</b> são criadas usando um número, seguido de um ponto (.) e um espaço antes do texto de cada item. Cada item da lista deve ser escrito em uma nova linha.<br><br>Desafio: Crie uma lista ordenada contendo exatamente os seguintes itens:<b> O primeiro cabra</b> e<b> O segundo cabra</b>",
    regex: /^1\.\s+O primeiro cabra\n2\.\s+O segundo cabra$/,
    render: () =>
      `<div class="markdown-preview-box"><ol><li>O primeiro cabra</li><li>O segundo cabra</li></ol></div>`,
  },
  {
    q: "<b>6. Listas Não Ordenadas:</b> são criadas usando um traço (-) seguido de um espaço antes do texto. Cada item da lista deve ser escrito em uma nova linha.<br><br>Desafio: Crie um item de lista não ordenada com o texto:<b> Caju</b>",
    regex: /^-\s+Caju$/i,
    render: () =>
      `<div class="markdown-preview-box"><ul><li>Caju</li></ul></div>`,
  },
  {
    q: "<b>7. Código:</b> são criados envolvendo pequenos trechos de texto com uma crase (<code>`</code>) no início e outra no final. Esse recurso é usado para destacar comandos, nomes de arquivos, variáveis e pequenos trechos de código.<br><br>Desafio: Escreva a palavra:<b> script</b> formatada como código em linha.",
    regex: /^`script`$/i,
    render: () => `<div class="markdown-preview-box"><code>script</code></div>`,
  },
  {
    q: "<b>8. Linha Horizontal:</b> são criadas escrevendo três traços (---) sozinhos em uma linha. Esse recurso é usado para criar uma divisória visual entre seções do texto.<br><br>Desafio: Crie uma <b> linha horizontal</b> utilizando três traços sequenciais.",
    regex: /^---$/,
    render: () => `<div class="markdown-preview-box"><hr></div>`,
  },
  {
    q: "<b>9. Links:</b> são criados usando a estrutura [Texto](URL), em que o texto entre colchetes é o que será exibido e a URL entre parênteses é o endereço para onde o link irá apontar.<br><br>Desafio: Crie um link com o texto:<b> Comida</b> apontando para a URL:<b> https://cuscuz.com.br</b>",
    regex: /^\[Comida\]\(https:\/\/cuscuz\.com\.br\)$/i,
    render: () =>
      `<div class="markdown-preview-box"><a href="https://dalatidev.vercel.app" target="_blank" style="color:var(--primary)">Zezin</a></div>`,
  },
  {
    q: "<b>10. Imagens:</b> são inseridas usando a estrutura ![Texto alternativo](URL). O texto alternativo descreve a imagem e a URL indica o caminho ou endereço do arquivo da imagem.<br><br>Desafio: Insira uma imagem com o texto alternativo:<b> Imagem</b> utilizando a URL:<b> zezin.png</b>",
    regex: /^!\[Imagem\]\(zezin\.png\)$/i,
    render: () =>
      `<div class="markdown-preview-box"><img src="Zezin_Cuscuz.png" alt="Logo"></div>`,
  },
];

// BANCO DE QUESTÕES DA AVALIAÇÃO - 10 DESAFIOS COMPLETOS E REFORMULADOS
const examQuestions = [
  {
    q: "<b>Prova Q1 (Títulos):</b> Como estruturamos um título secundário (H2) contendo apenas a palavra 'Estudos'?",
    regex: /^##\s+Estudos$/i,
  },
  {
    q: "<b>Prova Q2 (Negrito):</b> Demonstre como aplicar o Negrito clássico na palavra 'Aprovado' usando dois asteriscos.",
    regex: /^\*\*Aprovado\*\*$/,
  },
  {
    q: "<b>Prova Q3 (Itálico):</b> Como deixamos a palavra 'Sucesso' formatada em itálico usando apenas o caractere sublinhado (_)?",
    regex: /^_Sucesso_$/,
  },
  {
    q: "<b>Prova Q4 (Citações):</b> Crie uma citação destacada (Blockquote) configurando a frase 'Aprender transforma'.",
    regex: /^>\s+Aprender transforma$/i,
  },
  {
    q: "<b>Prova Q5 (Listas Ordenadas):</b> Escreva uma lista numérica sequencial contendo exatamente duas linhas:<br>1. Item A<br>2. Item B",
    regex: /^1\.\s+Item A\n2\.\s+Item B$/,
  },
  {
    q: "<b>Prova Q6 (Listas Não Ordenadas):</b> Insira um item de marcador não ordenado usando o traço (-) para a palavra 'Café'.",
    regex: /^-\s+Café$/i,
  },
  {
    q: "<b>Prova Q7 (Código):</b> Formate estritamente o termo técnico 'console.log' como uma expressão de código em linha.",
    regex: /^`console\.log`$/i,
  },
  {
    q: "<b>Prova Q8 (Linha Divisória):</b> Forneça a sintaxe isolada correta de 3 traços para gerar uma quebra de linha horizontal.",
    regex: /^---$/,
  },
  {
    q: "<b>Prova Q9 (Links):</b> Construa um hiperlink com o texto 'Google' apontando para o endereço 'https://google.com'.",
    regex: /^\[Google\]\(https:\/\/google\.com\)$/i,
  },
  {
    q: "<b>Prova Q10 (Imagens):</b> Insira uma imagem que carregue o rótulo alternativo 'Foto' apontando para o arquivo 'foto.png'.",
    regex: /^!\[Foto\]\(foto\.png\)$/i,
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
    "Olá! Sou o <b>Zezin</b>. Antes de partirmos para o código, como posso chamar você?"
  );
  userInput.placeholder = "Seu nome ou apelido...";
  navControls.style.display = "none";
  resetValidationState();
}

function introZezin() {
  state.currentStep = "intro";
  statusLabel.textContent = "Apresentação";
  addMsg("bot", `Muito prazer, ${state.userName}! Eu sou o <b>Zezin</b>.`);
  addMsg(
    "bot",
    `Importante alinhar as expectativas: Eu <b>não</b> sou uma Inteligência Artificial. Sou um assistente automatizado bem direto ao ponto, programado do zero pelo desenvolvedor <b>Dalati Lacerda Azevedo</b>.`
  );

  const row = document.createElement("div");
  row.className = "message-row";
  row.innerHTML = `
          <div class="message-bubble bot-style">
              Tudo pronto para dominarmos a sintaxe básica completa do Markdown?
              <div class="action-button-container">
                  <button class="prime-btn" id="start-journey-btn">Iniciar Jornada <i data-lucide="play" size="16"></i></button>
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
    `Seja bem-vindo de volta, ${state.userName}! Pronto para continuar de onde parou?`
  );

  const row = document.createElement("div");
  row.className = "message-row";
  row.innerHTML = `
          <div class="message-bubble bot-style">
              <div class="action-button-container">
                  <button class="prime-btn" id="resume-journey-btn">Continuar Aprendizado <i data-lucide="play" size="16"></i></button>
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
    startExam();
    return;
  }

  btnSkip.style.display = "inline-flex";
  btnBack.style.display = state.index > 0 ? "inline-flex" : "none";

  statusLabel.textContent = `Lição ${state.index + 1} de ${lessons.length}`;
  addMsg("bot", lessons[state.index].q);
  localStorage.setItem("md_index", state.index);
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
    setFeedback(
      "correct",
      "Sintaxe correta detectada! Pronto para enviar.",
      false
    );
  } else {
    setFeedback(
      "incorrect",
      "Sintaxe inválida ou pendente para este desafio.",
      true
    );
  }
});

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    // Se o usuário pressionar Shift + Enter, permite quebrar a linha normalmente
    if (e.shiftKey) {
      return;
    }

    // Pega o que está escrito até agora
    const val = userInput.value;

    // Se o usuário estiver no meio de uma lista (começando com '-' ou '1.', '2.', etc.)
    // o Enter apenas quebra a linha no celular para ele digitar o próximo item
    if (val.startsWith("-") || /^\d+\./.test(val)) {
      return;
    }

    // Se não for uma lista e for apenas uma linha normal, envia os dados
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
    state.userName = val.trim();
    localStorage.setItem("md_name", state.userName);
    addMsg("user", state.userName);
    userInput.value = "";
    introZezin();
    return;
  }

  addMsg("user", val);

  if (state.currentStep === "exam") {
    state.examAnswers[state.examIndex] = val;
    state.examIndex++;

    if (state.examIndex >= examQuestions.length) {
      showFinalResult();
    } else {
      addMsg("bot", "Análise salva de forma segura! Próxima questão.");
      setTimeout(loadExamQuestion, 600);
    }
  } else {
    const renderHtml = lessons[state.index].render(val);
    addMsg("bot", `Renderização HTML resultante: ${renderHtml}`);
    state.index++;
    setTimeout(loadLesson, 1000);
  }

  userInput.value = "";
  userInput.style.height = "auto";
}

function startExam() {
  state.currentStep = "exam";
  state.examIndex = 0;
  state.examAnswers = [];
  statusLabel.textContent = "Avaliação Final";
  addMsg(
    "bot",
    "🎯 <b>Chegamos à Prova Final!</b> Agora vamos avaliar seu conhecimento de forma autônoma sobre as 10 estruturas aprendidas. O resultado detalhado será computado e exibido apenas no encerramento. Boa sorte!"
  );
  setTimeout(loadExamQuestion, 1000);
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

  statusLabel.textContent = `Prova Q${state.examIndex + 1} de ${
    examQuestions.length
  }`;
  addMsg("bot", examQuestions[state.examIndex].q);

  userInput.dispatchEvent(new Event("input"));
}

function showFinalResult() {
  state.currentStep = "complete";
  navControls.style.display = "none";
  statusLabel.textContent = "Concluído";

  let finalScore = 0;
  examQuestions.forEach((q, i) => {
    if (q.regex.test(state.examAnswers[i] || "")) {
      finalScore++;
    }
  });

  addMsg("bot", "🏆 <b>Exame concluído com sucesso!</b>");
  addMsg(
    "bot",
    `<b>Resultado da Avaliação:</b> Você obteve <b>${finalScore} de ${examQuestions.length}</b> acertos.`
  );

  if (finalScore === examQuestions.length) {
    addMsg(
      "bot",
      "💥 Aproveitamento impecável! Conhecimento de Markdown consolidado em 100%."
    );
  } else if (finalScore >= 7) {
    addMsg(
      "bot",
      "Excelente rendimento! Você compreendeu muito bem a base e estrutura essencial do ecossistema."
    );
  } else if (finalScore >= 5) {
    addMsg("bot", "Aprovado! Você domina boa parte das marcas estruturais.");
  } else {
    addMsg(
      "bot",
      "Sugerimos reiniciar as lições interativas futuramente para fixar melhor algumas regras específicas de marcação."
    );
  }

  addMsg(
    "bot",
    `Muito obrigado por treinar com o meu sistema. Este projeto foi inteiramente estruturado por <b>Dalati Lacerda Azevedo</b>.`
  );
  addMsg(
    "bot",
    `Acompanhe outros projetos no Instagram: <a href="https://instagram.com/dalatidev" target="_blank" class="prime-btn" style="margin-top:8px; text-decoration:none;">@dalatidev <i data-lucide="instagram" size="16"></i></a>`
  );

  lucide.createIcons();
  resetValidationState();
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
  if (
    confirm(
      "Zezin vai reiniciar a conversa com você do início. Deseja continuar?"
    )
  ) {
    state.index = 0;
    state.examIndex = 0;
    state.examAnswers = [];
    localStorage.setItem("md_index", 0);
    chatArea.innerHTML = "";
    welcomeBack();
  }
};

btnBack.onclick = () => {
  if (state.currentStep === "exam") {
    if (state.examIndex > 0) {
      state.examIndex--;
      addMsg("bot", "↩️ Voltando para a questão anterior da prova...");
      loadExamQuestion();
    }
  } else {
    if (state.index > 0) {
      state.index--;
      addMsg("bot", "↩️ Voltando para a lição anterior...");
      loadLesson();
    }
  }
};

btnSkip.onclick = () => {
  if (state.currentStep !== "exam") {
    state.index++;
    addMsg("bot", "⏭️ Pulando desafio...");
    loadLesson();
  }
};

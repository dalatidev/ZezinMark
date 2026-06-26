const lessons = [
    {
        q: "<b>1. Títulos (Headings):</b> Use de 1 a 6 caracteres '#' seguidos de um espaço antes do seu texto. Crie um título principal H1 escrito 'Ola Mundo'.",
        regex: /^#\s+Ola Mundo$/i,
        render: (txt) => `<div class="markdown-preview-box"><h1>${txt.replace(/^#\s+/, '')}</h1></div>`
    },
    {
        q: "<b>2. Negrito (Bold):</b> Envolva o texto com dois asteriscos '**' ou dois sublinhados '__'. Escreva a palavra 'Forte' em negrito.",
        regex: /^(\*\*|__)Forte\1$/,
        render: () => `<div class="markdown-preview-box"><strong>Forte</strong></div>`
    },
    {
        q: "<b>3. Itálico (Italic):</b> Envolva o texto usando apenas um '*' ou '_'. Deixe a palavra 'Lindo' em itálico.",
        regex: /^(\*|_)Lindo\1$/,
        render: () => `<div class="markdown-preview-box"><em>Lindo</em></div>`
    },
    {
        q: "<b>4. Citações (Blockquote):</b> Use o caractere '>' seguido de um espaço antes de uma frase. Crie uma citação com o texto 'Foco no código'.",
        regex: /^>\s+Foco no código$/i,
        render: () => `<div class="markdown-preview-box"><blockquote>Foco no código</blockquote></div>`
    },
    {
        q: "<b>5. Listas Ordenadas:</b> Use números seguidos de ponto e espaço. Escreva uma lista contendo exatamente duas linhas estruturadas:<br>1. Primeiro<br>2. Segundo",
        regex: /^1\.\s+Primeiro\n2\.\s+Segundo$/,
        render: () => `<div class="markdown-preview-box"><ol><li>Primeiro</li><li>Segundo</li></ol></div>`
    },
    {
        q: "<b>6. Listas Não Ordenadas:</b> Use um traço '-' seguido de espaço. Crie um item de lista escrito 'Maçã'.",
        regex: /^-\s+Maçã$/i,
        render: () => `<div class="markdown-preview-box"><ul><li>Maçã</li></ul></div>`
    },
    {
        q: "<b>7. Código (Code):</b> Envolva pequenos trechos com uma crase (\`) de cada lado. Coloque a palavra 'script' formatada como código.",
        regex: /^`script`$/i,
        render: () => `<div class="markdown-preview-box"><code>script</code></div>`
    },
    {
        q: "<b>8. Linha Horizontal (Horizontal Rule):</b> Digite três traços sequenciais '---' sozinhos na linha para criar uma divisória.",
        regex: /^---$/,
        render: () => `<div class="markdown-preview-box"><hr></div>`
    },
    {
        q: "<b>9. Links:</b> Use a estrutura [Texto](URL). Crie um link chamado 'Dalati' que aponte para 'https://instagram.com/dalatidev'.",
        regex: /^\[Dalati\]\(https:\/\/instagram\.com\/dalatidev\)$/i,
        render: () => `<div class="markdown-preview-box"><a href="https://instagram.com/dalatidev" target="_blank" style="color:var(--primary)">Dalati</a></div>`
    },
    {
        q: "<b>10. Imagens:</b> Começa com uma exclamação: ![Alt Text](URL). Insira uma imagem com o texto alternativo 'Logo' e a URL 'logo.jpg'.",
        regex: /^!\[Logo\]\(logo\.jpg\)$/i,
        render: () => `<div class="markdown-preview-box"><img src="https://images.unsplash.com/photo-1618401471353-b98aedd07871?w=150" alt="Logo"></div>`
    }
];

const examQuestions = [
    { q: "<b>Prova Q1:</b> Como estruturamos um título secundário (H2) contendo a palavra 'Subtitulo'?", regex: /^##\s+Subtitulo$/i },
    { q: "<b>Prova Q2:</b> Demonstre como aplicar Negrito e Itálico simultaneamente na palavra 'Markdown' usando três asteriscos.", regex: /^\*\*\*Markdown\*\*\*$/ }
];

// Gerenciador de Estados
let state = {
    userName: localStorage.getItem('md_name') || '',
    index: parseInt(localStorage.getItem('md_index')) || 0,
    currentStep: 'naming', 
    examIndex: 0,
    examAnswers: [] // Armazena as respostas de forma livre para correção tardia
};

const chatArea = document.getElementById('chat-area');
const userInput = document.getElementById('user-input');
const feedbackStatus = document.getElementById('feedback-status');
const feedbackText = document.getElementById('feedback-text');
const btnSend = document.getElementById('btn-send');
const navControls = document.getElementById('nav-controls');
const btnBack = document.getElementById('btn-back');
const btnSkip = document.getElementById('btn-skip');
const statusLabel = document.getElementById('lesson-status');

window.onload = () => {
    applyTheme(localStorage.getItem('md_theme') || 'light');
    if (!state.userName || state.userName.trim() === "" || state.userName === "null") {
        state.currentStep = 'naming';
        askName();
    } else {
        state.currentStep = 'learning';
        welcomeBack();
    }
};

function scrollToBottom() {
    setTimeout(() => {
        chatArea.scrollTop = chatArea.scrollHeight;
    }, 80);
}

function askName() {
    state.currentStep = 'naming';
    statusLabel.textContent = "Identificação";
    addMsg("bot", "Olá! Sou o <b>Zezin</b>. Antes de partirmos para o código, como posso chamar você?");
    userInput.placeholder = "Seu nome ou apelido...";
    navControls.style.display = 'none';
    resetValidationState();
}

function introZezin() {
    state.currentStep = 'intro';
    statusLabel.textContent = "Apresentação";
    addMsg("bot", `Muito prazer, ${state.userName}! Eu sou o <b>Zezin</b>.`);
    addMsg("bot", `Importante alinhar as expectativas: Eu <b>não</b> sou uma Inteligência Artificial. Sou um assistente automatizado bem direto ao ponto, programado do zero pelo desenvolvedor <b>Dalati Lacerda Azevedo</b>.`);
    
    const row = document.createElement('div');
    row.className = 'message-row';
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

    document.getElementById('start-journey-btn').onclick = () => {
        userInput.disabled = false;
        startLessons();
    };
}

function welcomeBack() {
    statusLabel.textContent = "Retorno";
    addMsg("bot", `Seja bem-vindo de volta, ${state.userName}! Pronto para continuar de onde parou?`);
    
    const row = document.createElement('div');
    row.className = 'message-row';
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

    document.getElementById('resume-journey-btn').onclick = () => {
        userInput.disabled = false;
        startLessons();
    };
}

function startLessons() {
    state.currentStep = 'learning';
    userInput.placeholder = "Digite em Markdown...";
    navControls.style.display = 'flex';
    loadLesson();
}

function loadLesson() {
    userInput.value = '';
    userInput.style.height = 'auto';
    resetValidationState();

    if (state.index >= lessons.length) {
        startExam();
        return;
    }

    // Configuração dos botões na fase de lição
    btnSkip.style.display = 'inline-flex';
    btnBack.style.display = state.index > 0 ? 'inline-flex' : 'none';

    statusLabel.textContent = `Lição ${state.index + 1} de ${lessons.length}`;
    addMsg("bot", lessons[state.index].q);
    localStorage.setItem('md_index', state.index);
}

// --- VALIDAÇÃO REATIVA EM TEMPO REAL ---
userInput.addEventListener('input', () => {
    const val = userInput.value;
    userInput.style.height = 'auto';
    userInput.style.height = userInput.scrollHeight + 'px';

    if (state.currentStep === 'naming') {
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

    // AJUSTE CRÍTICO DA PROVA: Validação cega sem revelar se está correto ou não
    if (state.currentStep === 'exam') {
        if (val.trim().length > 0) {
            setFeedback("info", "Resposta registrada. Toque para enviar.", false);
        } else {
            setFeedback("info", "Aguardando resposta...", true);
        }
        return;
    }

    // Validação em tempo real padrão das lições
    const current = lessons[state.index];
    if (current && current.regex.test(val)) {
        setFeedback("correct", "Sintaxe correta detectada! Pronto para enviar.", false);
    } else {
        setFeedback("incorrect", "Sintaxe inválida ou pendente para este desafio.", true);
    }
});

userInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        if (!btnSend.disabled) submitData();
    }
});

btnSend.onclick = () => {
    submitData();
};

function submitData() {
    const val = userInput.value;
    
    if (state.currentStep === 'naming') {
        state.userName = val.trim();
        localStorage.setItem('md_name', state.userName);
        addMsg("user", state.userName);
        userInput.value = '';
        introZezin();
        return;
    }

    addMsg("user", val);
    
    if (state.currentStep === 'exam') {
        // Salva a resposta dada no índice correspondente
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
    
    userInput.value = '';
    userInput.style.height = 'auto';
}

// --- SISTEMA DE PROVA ATUALIZADO ---
function startExam() {
    state.currentStep = 'exam';
    state.examIndex = 0;
    state.examAnswers = [];
    statusLabel.textContent = "Avaliação Final";
    addMsg("bot", "🎯 <b>Chegamos à Prova Final!</b> Agora vamos avaliar seu conhecimento de forma autônoma. O resultado detalhado será computado e exibido apenas no encerramento. Boa sorte!");
    setTimeout(loadExamQuestion, 1000);
}

function loadExamQuestion() {
    userInput.value = '';
    
    // Se o usuário tiver voltado, recupera o que ele tinha digitado anteriormente
    if (state.examAnswers[state.examIndex] !== undefined) {
        userInput.value = state.examAnswers[state.examIndex];
    }
    userInput.style.height = 'auto';
    resetValidationState();

    // BLOQUEIO TOTAL DE PULAR / GERENCIAMENTO DO VOLTAR
    btnSkip.style.display = 'none'; 
    btnBack.style.display = state.examIndex > 0 ? 'inline-flex' : 'none';
    navControls.style.display = 'flex';

    statusLabel.textContent = `Prova Q${state.examIndex + 1} de ${examQuestions.length}`;
    addMsg("bot", examQuestions[state.examIndex].q);
    
    // Dispara o evento para validar o estado do botão caso contenha texto recuperado
    userInput.dispatchEvent(new Event('input'));
}

function showFinalResult() {
    state.currentStep = 'complete';
    navControls.style.display = 'none';
    statusLabel.textContent = "Concluído";
    
    // Correção e cálculo final tardio em memória
    let finalScore = 0;
    examQuestions.forEach((q, i) => {
        if (q.regex.test(state.examAnswers[i] || '')) {
            finalScore++;
        }
    });

    addMsg("bot", "🏆 <b>Exame concluído com sucesso!</b>");
    addMsg("bot", `<b>Resultado da Avaliação:</b> Você obteve <b>${finalScore} de ${examQuestions.length}</b> acertos.`);
    
    if (finalScore === examQuestions.length) {
        addMsg("bot", "Aproveitamento impecável! Conhecimento consolidado em 100%.");
    } else if (finalScore > 0) {
        addMsg("bot", "Bom rendimento! Você compreendeu a base e estrutura essencial do ecossistema.");
    } else {
        addMsg("bot", "Sugerimos revisar as lições interativas para fixar melhor as regras de marcação.");
    }

    addMsg("bot", `Muito obrigado por treinar com o meu sistema. Este projeto foi inteiramente estruturado por <b>Dalati Lacerda Azevedo</b>.`);
    addMsg("bot", `Acompanhe outros projetos no Instagram: <a href="https://instagram.com/dalatidev" target="_blank" class="prime-btn" style="margin-top:8px; text-decoration:none;">@dalatidev <i data-lucide="instagram" size="16"></i></a>`);
    
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
    
    const iconEl = feedbackStatus.querySelector('i');
    if (iconEl) {
        iconEl.setAttribute('data-lucide', iconName);
        lucide.createIcons();
    }
}

function resetValidationState() {
    setFeedback("info", "Aguardando entrada...", true);
}

function addMsg(type, text) {
    const row = document.createElement('div');
    row.className = 'message-row';
    
    const bubble = document.createElement('div');
    bubble.className = `message-bubble ${type}-style`;
    bubble.innerHTML = text;
    
    row.appendChild(bubble);
    chatArea.appendChild(row);
    
    scrollToBottom();
    lucide.createIcons();
}

// Alternador de Temas
document.getElementById('theme-toggle').onclick = () => {
    const current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'light' ? 'dark' : 'light');
};

function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    localStorage.setItem('md_theme', t);
    const icon = document.getElementById('theme-icon');
    if (icon) {
        icon.setAttribute('data-lucide', t === 'dark' ? 'sun' : 'moon');
        lucide.createIcons();
    }
}

// Reiniciar Conversa
document.getElementById('btn-reset').onclick = () => {
    if (confirm("Zezin vai reiniciar a conversa com você do início. Deseja continuar?")) {
        state.index = 0;
        state.examIndex = 0;
        state.examAnswers = [];
        localStorage.setItem('md_index', 0);
        chatArea.innerHTML = '';
        welcomeBack();
    }
};

// Cliques de Navegação Inteligentes (Suportam Prova e Lições)
btnBack.onclick = () => { 
    if (state.currentStep === 'exam') {
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
    if (state.currentStep !== 'exam') {
        state.index++; 
        addMsg("bot", "⏭️ Pulando desafio...");
        loadLesson(); 
    }
};

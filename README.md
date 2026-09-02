<div align="center">
  <img src="zezin_ico.png" alt="Zezin" width="120">
  <h1>ZezinMark</h1>
  <p><strong>Aprenda Markdown de forma interativa com o Zezin — um chatbot nordestino que ensina na prática.</strong></p>

  <p>
    <a href="https://zezinmark.vercel.app"><img src="https://img.shields.io/badge/demo-online-brightgreen?style=for-the-badge" alt="Demo Online"></a>
    <img src="https://img.shields.io/badge/HTML-CSS-JS-blue?style=for-the-badge" alt="HTML CSS JS">
    <img src="https://img.shields.io/badge/licença-MIT-yellow?style=for-the-badge" alt="Licença MIT">
  </p>
</div>

---

## Sobre o Projeto

O **ZezinMark** é um site educativo que ensina a sintaxe básica de Markdown através de um chatbot chamado **Zezin**. A experiência funciona como uma conversa: o Zezin apresenta cada conceito, mostra um exemplo e propõe um desafio prático. O usuário digita a resposta em Markdown e vê o resultado renderizado em tempo real.

Ao final das 10 lições, o usuário faz uma **prova** para testar o que aprendeu, com resultado detalhado mostrando acertos, erros e as respostas corretas.

<div align="center">
  <img src="Zezin_Cuscuz.png" alt="Zezin comemorando com cuscuz" width="300">
  <p><em>Você tem a chance de ganhar um cuscuz do Zezin!</em></p>
</div>

## Funcionalidades

- **10 lições interativas** cobrindo toda a sintaxe básica do Markdown
- **Validação em tempo real** — o campo só libera o envio quando a sintaxe está correta
- **Preview HTML** — cada resposta certa mostra como o Markdown vira HTML
- **Prova final** com 10 questões e resultado detalhado por questão
- **Tema claro/escuro** com persistência no navegador
- **Progresso salvo** — feche e volte de onde parou
- **100% responsivo** — funciona bem no celular e no desktop
- **Zero dependências de backend** — roda inteiramente no navegador

## Conteúdo Ensinado

| Lição | Tópico | Sintaxe |
|:---:|---|---|
| 1 | Títulos | `# Texto` |
| 2 | Negrito | `**texto**` |
| 3 | Itálico | `*texto*` |
| 4 | Citação | `> texto` |
| 5 | Lista Ordenada | `1. item` |
| 6 | Lista Não Ordenada | `- item` |
| 7 | Código em Linha | `` `código` `` |
| 8 | Linha Horizontal | `---` |
| 9 | Links | `[texto](url)` |
| 10 | Imagens | `![alt](url)` |

## Como Usar

### Acessar online

Acesse a versão hospedada: **[zezinmark.dalatidev.com.br](https://zezinmark.dalatidev.com.br/)**

### Rodar localmente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/zezinmark.git

# Entre na pasta
cd zezinmark

# Abra no navegador (qualquer uma das opções)
open index.html          # macOS
xdg-open index.html      # Linux
start index.html         # Windows
```

Não precisa de servidor, npm, nem nenhuma instalação. É só abrir o `index.html`.

## Estrutura do Projeto

```
zezinmark/
├── index.html          # Página principal
├── style.css           # Estilos (tema claro/escuro)
├── script.js           # Lógica das lições, prova e chat
├── zezin_ico.png       # Ícone do Zezin (favicon + navbar)
├── Zezin_Cuscuz.png    # Imagem de parabéns (nota 10)
└── README.md
```

## Tecnologias

- **HTML5** — estrutura semântica
- **CSS3** — variáveis CSS para temas, layout com Flexbox, `dvh` para mobile
- **JavaScript** — vanilla, sem frameworks
- **[Lucide Icons](https://lucide.dev)** — ícones via CDN
- **[Inter](https://rsms.me/inter)** — tipografia via Google Fonts

## Autor

Desenvolvido por **Dalati Lacerda Azevedo**.

- Site: [dalatidev.com.br](https://dalatidev.com.br)
- Instagram: [@dalatidev](https://instagram.com/dalatidev)

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

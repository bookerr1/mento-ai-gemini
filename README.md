# 🧠 Mento.AI - Seu Mentor de Estudos Inteligente

![Status](https://img.shields.io/badge/Status-Concluído-success)
![Event](https://img.shields.io/badge/Imersão-Alura%20%2B%20Google-blue)
![Tech](https://img.shields.io/badge/Tech-Gemini%202.5%20%7C%20JS%20Vanilla-purple)

> **Projeto desenvolvido para o Desafio Final da Imersão Dev com Google Gemini.**

![Preview do Projeto](preview.png)

## 💡 Sobre o Projeto

A maior dificuldade de quem quer aprender algo novo hoje não é a falta de conteúdo, mas o excesso dele. A "paralisia de escolha" impede muitos iniciantes de darem o primeiro passo.

O **Mento.AI** resolve isso. Ele não é apenas um gerador de texto; é um **Arquiteto de Aprendizado**. 

A aplicação utiliza a inteligência artificial do **Google Gemini 2.5 Flash** para criar roteiros de estudo personalizados, considerando o nível atual do aluno, o tempo disponível e a "personalidade" do mentor desejada.

## ✨ Funcionalidades "Uau" (Diferenciais)

-   🔗 **Deep Linking Automático:** A maior inovação do projeto. A IA não apenas sugere tópicos, mas gera automaticamente o código HTML com links diretos para pesquisas no YouTube. O usuário recebe o plano e já clica para estudar.
-   🎭 **Sistema de Personalidades:** Engenharia de prompt para alterar o tom de voz da resposta (Mestre Zen, Tiozão Engraçado, Coach).
-   🎨 **Interface Glassmorphism:** Design moderno utilizando CSS puro com efeitos de desfoque e transparência.
-   ⚡ **Fluxo UX Otimizado:** Feedback visual de carregamento e botões de ação rápida (Copiar/Gerar).

## 🧠 A Engenharia de Prompt (O Segredo Técnico)

Diferente de projetos que apenas consomem a API padrão, este projeto utiliza uma técnica avançada de **Structured Output via Prompting**.

Instruímos o modelo `gemini-2.5-flash` a agir não como um chatbot, mas como um gerador de código estruturado. O prompt exige que a IA:
1.  Retorne **HTML válido** (sem markdown).
2.  Insira tags `<a>` com hrefs dinâmicos baseados no conteúdo sugerido.
3.  Utilize formatação semântica (`<h3>`, `<ul>`, `<strong>`) para legibilidade imediata.

Isso elimina a necessidade de complexos tratamentos de string (Regex) no Front-End, delegando a inteligência de estruturação para a própria IA.

## 🛠️ Tecnologias Utilizadas

O projeto foi construído seguindo os princípios da Web Standard (sem frameworks), garantindo leveza e performance:

-   **HTML5:** Estrutura semântica.
-   **CSS3:** Variáveis (CSS Variables), Flexbox, Grid Layout e Backdrop-filter.
-   **JavaScript (ES6+):** Manipulação do DOM, Async/Await e integração via `GoogleGenerativeAI` SDK.
-   **API Google Gemini:** Modelo `gemini-2.5-flash`.

## 🚀 Como Rodar o Projeto Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/bookerr1/mento-ai-gemini.git
   
2. Obtenha sua chave de API no Google AI Studio.

3. Abra o arquivo app.js e substitua a variável API_KEY pela sua chave.

4. Abra o index.html com Live Server (ou qualquer servidor local) para evitar erros de CORS com módulos ES6.

🌐 Teste Agora

Acesse a versão online hospedada no GitHub Pages: https://bookerr1.github.io/mento-ai-gemini/

Desenvolvido com 💙 por Bernardo Santos.

import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";

// ⚠️ ATENÇÃO: COLE SUA CHAVE API NOVA DENTRO DAS ASPAS ABAIXO
const API_KEY = "AIzaSyCqbACVKIWerXq5Ybl5DjjdM5JfT2mThzE"; 

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

// Elementos da tela
const btnGerar = document.getElementById('btn-gerar');
const btnCopiar = document.getElementById('btn-copiar');
const loading = document.getElementById('loading');
const resultadoContainer = document.getElementById('resultado-container');
const conteudoResposta = document.getElementById('conteudo-resposta');

// Evento Principal
btnGerar.addEventListener('click', async () => {
    const assunto = document.getElementById('assunto').value;
    const nivel = document.getElementById('nivel').value;
    const tempo = document.getElementById('tempo').value;
    const personalidade = document.getElementById('personalidade').value;

    if (!assunto.trim()) {
        alert("Por favor, digite o que você quer aprender!");
        return;
    }

    // Prepara a tela (Mostra loading, esconde botão)
    btnGerar.disabled = true;
    loading.classList.remove('hidden');
    resultadoContainer.classList.add('hidden');

    try {
        // --- O PROMPT MÁGICO ---
        // Aqui pedimos para a IA já entregar o HTML pronto.
        const prompt = `
            Você é um mentor de estudos com a personalidade: ${personalidade}.
            O aluno quer aprender sobre: ${assunto}.
            Nível: ${nivel}. Tempo disponível: ${tempo}.

            Crie um roteiro de estudos prático e motivador.
            
            ⚠️ IMPORTANTE - RETORNE SUA RESPOSTA EM HTML PURO (sem crase de código):
            1. Use <h3> para títulos dos dias ou passos.
            2. Use <ul> e <li> para listas de tarefas.
            3. Use <strong> para destacar termos chave.
            4. Sempre que sugerir um tópico, adicione um link para pesquisar no YouTube usando este formato exato:
               <br><a href="https://www.youtube.com/results?search_query=NOME_DO_TOPICO" target="_blank">📺 Ver aulas sobre NOME_DO_TOPICO</a>
            
            Seja criativo e direto. Não use Markdown, apenas as tags HTML citadas.
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const htmlPronto = response.text();

        // Injeta o HTML que a IA criou direto na página
        conteudoResposta.innerHTML = htmlPronto;
        
        // Mostra o resultado
        loading.classList.add('hidden');
        resultadoContainer.classList.remove('hidden');

    } catch (error) {
        console.error(error);
        alert("Ocorreu um erro. Verifique sua chave API ou tente novamente.");
        loading.classList.add('hidden');
    } finally {
        btnGerar.disabled = false;
    }
});

// Funcionalidade de Copiar Texto
btnCopiar.addEventListener('click', () => {
    const texto = conteudoResposta.innerText;
    navigator.clipboard.writeText(texto).then(() => {
        const textoOriginal = btnCopiar.innerText;
        btnCopiar.innerText = "Copiado! ✅";
        setTimeout(() => btnCopiar.innerText = textoOriginal, 2000);
    });
});
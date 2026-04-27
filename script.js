const API_KEY = "SUA_API_KEY_AQUI";

async function chamarIA(prompt) {
  const resposta = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "Você é um mentor de carreira em tecnologia."
        },
        {
          role: "user",
          content: prompt
        }
      ]
    })
  });

  const dados = await resposta.json();
  return dados.choices[0].message.content;
}

async function perguntar() {
  const input = document.getElementById("input").value;
  const resposta = await chamarIA(input);
  document.getElementById("resposta").innerText = resposta;
}

async function roadmap() {
  const input = document.getElementById("input").value;
  const prompt = `Crie um roadmap de estudos para: ${input}`;
  const resposta = await chamarIA(prompt);
  document.getElementById("resposta").innerText = resposta;
}

async function entrevista() {
  const input = document.getElementById("input").value;
  const prompt = `Simule uma entrevista para a vaga de: ${input}`;
  const resposta = await chamarIA(prompt);
  document.getElementById("resposta").innerText = resposta;
}
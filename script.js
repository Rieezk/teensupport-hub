// JOB SUBMISSION
document.getElementById("jobForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("jobTitle").value;
  const desc = document.getElementById("jobDesc").value;

  await fetch("/submit-job", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, desc })
  });

  loadJobs();
});

async function loadJobs() {
  const res = await fetch("/jobs");
  const jobs = await res.json();
  document.getElementById("jobList").innerHTML =
    jobs.map(j => `<p><strong>${j.title}</strong>: ${j.desc}</p>`).join("");
}
loadJobs();

// ADVICE SUBMISSION
document.getElementById("adviceForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const text = document.getElementById("adviceText").value;

  await fetch("/submit-advice", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text })
  });

  loadAdvice();
});

async function loadAdvice() {
  const res = await fetch("/advice");
  const advice = await res.json();
  document.getElementById("adviceList").innerHTML =
    advice.map(a => `<p>${a.text}</p>`).join("");
}
loadAdvice();

// SIMPLE CHATBOT
function sendMessage() {
  const input = document.getElementById("userInput").value;
  const chatBox = document.getElementById("chatBox");

  chatBox.innerHTML += `<p><strong>You:</strong> ${input}</p>`;

  let response = "I'm here to help. Can you explain more?";

  if (input.toLowerCase().includes("bullied")) {
    response = "If you're being bullied, tell a trusted adult and keep evidence. You are not alone.";
  } else if (input.toLowerCase().includes("career")) {
    response = "Tell me what subjects you enjoy and I can suggest career paths!";
  } else if (input.toLowerCase().includes("sad")) {
    response = "I'm really sorry you're feeling sad. Would you like some tips to feel better?";
  }

  chatBox.innerHTML += `<p><strong>Teeva:</strong> ${response}</p>`;
  document.getElementById("userInput").value = "";
}
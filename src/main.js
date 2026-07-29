import { renderRoute } from "./router.js";
import { speakText } from "./lib/speech.js";

const app = document.querySelector("#app");
const speakPageButton = document.querySelector("#speak-page");

function wireTermButtons() {
  document.querySelectorAll(".speak-term").forEach((button) => {
    button.addEventListener("click", () => {
      const term = button.dataset.term;
      if (term) {
        speakText(term, "en-US");
      }
    });
  });
}

function renderApp() {
  app.innerHTML = renderRoute();
  wireTermButtons();
}

function speakCurrentPage() {
  const heading = app.querySelector("h2")?.textContent ?? "";
  const paragraph = app.querySelector("p")?.textContent ?? "";
  speakText(`${heading}. ${paragraph}`, "ar-SA");
}

window.addEventListener("hashchange", renderApp);
speakPageButton.addEventListener("click", speakCurrentPage);

renderApp();

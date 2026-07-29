export function speakText(text, lang = "en-US") {
  if (!("speechSynthesis" in window)) {
    window.alert("متصفحك الحالي لا يدعم ميزة النطق.");
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = 0.9;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

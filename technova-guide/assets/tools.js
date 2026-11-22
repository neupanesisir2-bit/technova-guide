const el = id => document.getElementById(id);
const copy = async (value, statusId) => {
  const status = el(statusId);
  try { await navigator.clipboard.writeText(value); if (status) status.textContent = "Copied to clipboard."; }
  catch { if (status) status.textContent = "Clipboard unavailable. Select the result and copy it manually."; }
};

el("pw")?.addEventListener("input", () => {
  const value = el("pw").value;
  let score = 0;
  if (value.length >= 12) score++;
  if (value.length >= 16) score++;
  if (/[a-z]/.test(value) && /[A-Z]/.test(value)) score++;
  if (/[0-9]/.test(value)) score++;
  if (/[^A-Za-z0-9]/.test(value)) score++;
  el("meter").style.width = score * 20 + "%";
  el("pwstatus").textContent = value ? ["Very weak","Weak","Fair","Good","Strong","Very strong"][score] + " · " + value.length + " characters" : "Enter a sample password.";
});

el("build")?.addEventListener("click", () => {
  const task = el("task").value.trim();
  if (!task) { el("prompt-status").textContent = "Enter a task first."; return; }
  const context = el("context").value.trim();
  el("prompt-output").textContent = "Act as a " + el("role").value.toLowerCase() + ".\nTask: " + task + "\nStyle: " + el("tone").value + ".\nGive an accurate, structured answer. Explain important steps, state assumptions and mention limitations." + (context ? "\nContext: " + context : "");
  el("prompt-status").textContent = "Prompt created.";
});
el("copy-prompt")?.addEventListener("click", () => copy(el("prompt-output").textContent, "prompt-status"));

const convert = () => {
  const value = Number(el("value").value), key = el("conversion").value;
  const ops = {mbgb:[value/1000,"GB"],gbmb:[value*1000,"MB"],gbtb:[value/1000,"TB"],kmmi:[value*.621371,"miles"],mikm:[value/.621371,"km"],cf:[value*9/5+32,"°F"],fc:[(value-32)*5/9,"°C"]};
  if (!Number.isFinite(value)) { el("converted").textContent = "Enter a valid number."; return; }
  const [number, unit] = ops[key];
  el("converted").textContent = value + " = " + Number(number.toFixed(6)) + " " + unit;
};
el("convert")?.addEventListener("click", convert);
el("value")?.addEventListener("input", convert);
el("conversion")?.addEventListener("change", convert);

let transformed = "";
document.querySelectorAll("[data-action]").forEach(button => button.addEventListener("click", () => {
  const source = el("rawtext").value, action = button.dataset.action;
  transformed = action === "upper" ? source.toUpperCase()
    : action === "lower" ? source.toLowerCase()
    : action === "clean" ? source.replace(/\s+/g, " ").trim()
    : source.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
  el("text-output").textContent = transformed || "Enter some text first.";
  el("text-status").textContent = "Transformed locally.";
}));
el("copy-text")?.addEventListener("click", () => copy(transformed, "text-status"));

const randomIndex = max => {
  const range = 0x100000000, limit = range - range % max, buffer = new Uint32Array(1);
  do { crypto.getRandomValues(buffer); } while (buffer[0] >= limit);
  return buffer[0] % max;
};
el("generate-password")?.addEventListener("click", () => {
  if (!globalThis.crypto?.getRandomValues) { el("generated-status").textContent = "Secure random generation is unavailable in this browser."; return; }
  const length = Math.max(12, Math.min(64, Number(el("pw-length").value) || 20));
  el("pw-length").value = length;
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%^&*()-_=+[]{}?";
  let password = "";
  for (let i = 0; i < length; i++) password += alphabet[randomIndex(alphabet.length)];
  el("generated-password").textContent = password;
  el("generated-status").textContent = "Generated locally with the browser cryptography API.";
});
el("copy-generated")?.addEventListener("click", () => copy(el("generated-password").textContent, "generated-status"));

const processJson = minify => {
  try { const parsed = JSON.parse(el("json-input").value); el("json-output").textContent = JSON.stringify(parsed, null, minify ? 0 : 2); el("json-status").textContent = "Valid JSON."; }
  catch (error) { el("json-output").textContent = ""; el("json-status").textContent = "Invalid JSON: " + error.message; }
};
el("format-json")?.addEventListener("click", () => processJson(false));
el("minify-json")?.addEventListener("click", () => processJson(true));

el("base64-encode")?.addEventListener("click", () => {
  try { const bytes = new TextEncoder().encode(el("base64-input").value); let binary = ""; bytes.forEach(byte => binary += String.fromCharCode(byte)); el("base64-output").textContent = btoa(binary); el("base64-status").textContent = "Encoded locally. Base64 is not encryption."; }
  catch { el("base64-status").textContent = "Could not encode this input."; }
});
el("base64-decode")?.addEventListener("click", () => {
  try { const binary = atob(el("base64-input").value.trim()), bytes = Uint8Array.from(binary, char => char.charCodeAt(0)); el("base64-output").textContent = new TextDecoder("utf-8", {fatal:true}).decode(bytes); el("base64-status").textContent = "Decoded locally."; }
  catch { el("base64-output").textContent = ""; el("base64-status").textContent = "Invalid Base64 or unsupported text encoding."; }
});

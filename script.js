const kataNames = ["Heian Shodan","Heian Nidan","Heian Sandan","Heian Yondan","Heian Godan","Tekki Shodan","Tekki Nidan","Tekki Sandan","Bassai Dai","Kanku Dai","Jion","Empi","Hangetsu","Jitte","Gankaku","Nijushiho","Chinte","Unsu","Sochin","Meikyo","Wankan","Bassai Sho","Kanku Sho","Gojushiho Sho","Gojushiho Dai","Tekki Shodan (revisão)"];
const kataGrid = document.querySelector("#kata-grid");
const search = document.querySelector("#kata-search");
function renderKatas(term = "") {
  const filtered = kataNames.filter(name => name.toLowerCase().includes(term.toLowerCase()));
  kataGrid.innerHTML = filtered.map((name) => {
    const index = kataNames.indexOf(name) + 1;
    return '<article class="kata-item"><b>' + name + '</b><span>KATA • ' + String(index).padStart(2,"0") + '</span></article>';
  }).join("");
  document.querySelector("#kata-count").textContent = filtered.length + (filtered.length === 1 ? " KATA" : " KATAS");
}
renderKatas();
search.addEventListener("input", event => renderKatas(event.target.value));
document.querySelector("#year").textContent = new Date().getFullYear();
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => nav.classList.remove("open")));
const studyTopics = {
  bases: ["Bases (Dachi)", "Zenkutsu-dachi, Kokutsu-dachi, Kiba-dachi e outras bases. Estudo futuro: alinhamento, distribuição de peso, estabilidade e transições."],
  defesas: ["Defesas (Uke)", "Age-uke, Soto-uke, Uchi-uke, Gedan-barai e outras defesas. Estudo futuro: trajetória, superfície de contato e aplicação."],
  golpes: ["Golpes (Tsuki, Uchi e Geri)", "Oi-zuki, Gyaku-zuki, uraken, shuto, mae-geri, yoko-geri e mawashi-geri. Estudo futuro: mecânica, distância e controle."]
};
document.querySelectorAll("[data-topic]").forEach(link => link.addEventListener("click", () => {
  const [title, description] = studyTopics[link.dataset.topic];
  document.querySelector("#detalhes-kihon").innerHTML = '<p class="eyebrow red">ROTEIRO DE ESTUDO</p><h3>' + title + '</h3><p>' + description + '</p>';
}));
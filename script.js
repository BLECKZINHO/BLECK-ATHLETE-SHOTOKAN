const kataNames = ["Heian Shodan","Heian Nidan","Heian Sandan","Heian Yondan","Heian Godan","Tekki Shodan","Tekki Nidan","Tekki Sandan","Bassai Dai","Bassai Sho","Kanku Dai","Kanku Sho","Jion","Jitte","Ji'in","Empi","Hangetsu","Gankaku","Nijushiho","Chinte","Unsu","Sochin","Meikyo","Wankan","Gojushiho Dai","Gojushiho Sho"];
const kataGrid = document.querySelector("#kata-grid");
const search = document.querySelector("#kata-search");
const kataCount = document.querySelector("#kata-count");

document.body.insertAdjacentHTML("beforeend", '<div id="kata-dialog" class="kata-overlay" hidden><section class="kata-dialog-box" role="dialog" aria-modal="true" aria-label="Ficha de estudo do kata"><div class="kata-dialog-head"><button type="button" id="kata-dialog-close">FECHAR ✕</button></div><div id="kata-dialog-content"></div></section></div>');

const kataDialog = document.querySelector("#kata-dialog");
function closeKata() {
  kataDialog.hidden = true;
  document.body.classList.remove("kata-modal-open");
}
document.querySelector("#kata-dialog-close").addEventListener("click", closeKata);
kataDialog.addEventListener("click", event => {
  if (event.target === kataDialog) closeKata();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !kataDialog.hidden) closeKata();
});

function renderKatas(term = "") {
  const filtered = kataNames.filter(name => name.toLowerCase().includes(term.toLowerCase()));
  kataGrid.innerHTML = filtered.map(name => {
    const index = kataNames.indexOf(name) + 1;
    const available = name === "Empi";
    return '<button class="kata-item" type="button" data-kata="' + name + '" aria-label="Abrir estudo de ' + name + '"><b>' + name + '</b><span>' + (available ? 'ESTUDO INICIAL DISPONÍVEL' : 'CONTEÚDO EM PREPARAÇÃO') + '</span><i>' + String(index).padStart(2,"0") + ' ↗</i></button>';
  }).join("");
  kataCount.textContent = filtered.length + (filtered.length === 1 ? " KATA" : " KATAS");
}

function openKata(name) {
  const content = document.querySelector("#kata-dialog-content");
  if (name === "Empi") {
    content.innerHTML = `
      <p class="eyebrow red">ESTUDO DE KATA · JKA / SHOTOKAN</p>
      <h2>EMPI<span>.</span></h2>
      <p class="kata-subtitle">燕飛 · O voo da andorinha</p>
      <div class="kata-facts">
        <div><small>CONTAGEM NO MANUAL TÉCNICO JKA</small><strong>37 movimentos</strong></div>
        <div><small>CARACTERÍSTICA CENTRAL</small><strong>Leveza e agilidade</strong></div>
      </div>
      <h3>01 — Características do kata</h3>
      <p>O manual técnico da JKA descreve o Enpi por movimentos que lembram o voo de uma andorinha, com mudanças rápidas de direção e de altura. Destaca a leveza, a agilidade, os socos ascendentes (Age-zuki) e os golpes executados com salto para a frente.</p>
      <h3>02 — O que observar durante a prática</h3>
      <ul>
        <li>Transições rápidas sem perder equilíbrio ou postura.</li>
        <li>Mudanças de direção coordenadas com o giro do quadril e o pé de apoio.</li>
        <li>Variação consciente de altura, ritmo e velocidade.</li>
        <li>Precisão das técnicas e controle na aterrissagem após o salto.</li>
        <li>Retorno ao ponto inicial e fidelidade ao embusen ensinado no seu dojo.</li>
      </ul>
      <h3>03 — Sequência movimento por movimento</h3>
      <p class="pending-note">Esta sequência ainda está em conferência. Não vamos publicar uma lista de movimentos, posições de Kiai ou desenho de embusen sem validar cada detalhe com o material técnico JKA. Assim evitamos ensinar uma sequência incorreta.</p>
      <h3>04 — Roteiro de treino</h3>
      <ol>
        <li>Assista ao kata completo seguindo a referência indicada pelo seu instrutor.</li>
        <li>Divida a sequência em pequenos trechos e pratique lentamente.</li>
        <li>Confira bases, direção do olhar, trajetória das mãos e deslocamento dos pés.</li>
        <li>Repita os trechos, depois una-os mantendo ritmo e respiração.</li>
        <li>Finalize conferindo o embusen e o retorno ao ponto inicial com seu sensei.</li>
      </ol>
      <div class="kata-source"><b>Referência técnica:</b> Japan Karate Association — <a href="https://www.jka.or.jp/wp/wp-content/uploads/2017/04/tech_manual_instructor.pdf" target="_blank" rel="noopener">Technical Manual for the Instructor</a>, seção “Elements to Consider & Movements of KATA”, página 15 do documento. A JKA também apresenta seus livros oficiais de kata na <a href="https://www.jka.or.jp/en/jka-learning-material/" target="_blank" rel="noopener">página de materiais de aprendizagem</a>.</div>
      <p class="technical-note">Material de apoio ao estudo. A execução e a sequência devem ser conferidas com o sensei e com a edição de referência utilizada pela sua associação.</p>
    `;
  } else {
    content.innerHTML = `
      <p class="eyebrow red">BIBLIOTECA TÉCNICA · JKA / SHOTOKAN</p>
      <h2>${name.toUpperCase()}<span>.</span></h2>
      <p class="pending-note">Este kata já está no catálogo, mas sua ficha técnica ainda está em preparação. Vamos publicar a contagem, a sequência, os Kiai, o embusen e os pontos de atenção somente depois de conferir as referências técnicas.</p>
    `;
  }
  kataDialog.hidden = false;
  document.body.classList.add("kata-modal-open");
  document.querySelector("#kata-dialog-close").focus();
}

renderKatas();
search.addEventListener("input", event => renderKatas(event.target.value));
kataGrid.addEventListener("click", event => {
  const card = event.target.closest("[data-kata]");
  if (card) openKata(card.dataset.kata);
});
document.querySelector("#year").textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

const studyTopics = {
  bases: ["Bases (Dachi)", "Zenkutsu-dachi, Kokutsu-dachi, Kiba-dachi e outras bases. Estudo futuro: alinhamento, distribuição de peso, estabilidade e transições."],
  defesas: ["Defesas (Uke)", "Age-uke, Soto-uke, Uchi-uke, Gedan-barai e outras defesas. Estudo futuro: trajetória, superfície de contato e aplicação."],
  golpes: ["Golpes (Tsuki, Uchi e Geri)", "Oi-zuki, Gyaku-zuki, uraken, shuto, mae-geri, yoko-geri e mawashi-geri. Estudo futuro: mecânica, distância e controle."]
};
document.querySelectorAll("[data-topic]").forEach(link => link.addEventListener("click", () => {
  const [title, description] = studyTopics[link.dataset.topic];
  document.querySelector("#detalhes-kihon").innerHTML = '<p class="eyebrow red">ROTEIRO DE ESTUDO</p><h3>' + title + '</h3><p>' + description + '</p>';
}));

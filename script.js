const kataNames = ["Heian Shodan","Heian Nidan","Heian Sandan","Heian Yondan","Heian Godan","Tekki Shodan","Tekki Nidan","Tekki Sandan","Bassai Dai","Bassai Sho","Kanku Dai","Kanku Sho","Jion","Jitte","Ji'in","Empi","Hangetsu","Gankaku","Nijushiho","Chinte","Unsu","Sochin","Meikyo","Wankan","Gojushiho Dai","Gojushiho Sho"];

const kataProfiles = {
  "Heian Shodan": { moves: 21, kiai: "9º e 17º", feature: "Primeiro kata Heian: fundamentos de defesa pessoal, coordenação e bases." },
  "Heian Nidan": { moves: 26, kiai: "11º e 26º", feature: "Segundo kata Heian; amplia as mudanças de direção e combinações técnicas." },
  "Heian Sandan": { moves: 20, kiai: "10º e 20º", feature: "Terceiro kata Heian; atenção às transições, estabilidade e coordenação." },
  "Heian Yondan": { moves: 27, kiai: "13º e 25º", feature: "Quarto kata Heian; combinações e mudanças de nível exigem controle corporal." },
  "Heian Godan": { moves: 23, kiai: "12º e 19º", feature: "Quinto kata Heian; reúne mudanças de direção, ritmo e técnicas variadas." },
  "Tekki Shodan": { moves: 29, kiai: "15º e 29º", feature: "Kata da série Tekki, com ênfase em Kiba-dachi e deslocamentos laterais." },
  "Tekki Nidan": { moves: 24, kiai: "16º e 24º", feature: "Segundo kata Tekki; estabilidade em Kiba-dachi e trabalho de quadril." },
  "Tekki Sandan": { moves: 36, kiai: "16º e 36º", feature: "Terceiro kata Tekki; continuidade e precisão na base Kiba-dachi." },
  "Bassai Dai": { moves: 42, kiai: "19º e 42º", feature: "Penetrar a fortaleza: potência, espírito e transformação de posições desfavoráveis." },
  "Bassai Sho": { moves: 27, kiai: "17º e 22º", feature: "Defesa contra ataque de bastão em nível alto, com bloqueio e contra-ataque." },
  "Kanku Dai": { moves: 65, kiai: "15º e 65º", feature: "Defesa em várias direções, com saltos, giros e contrastes de ritmo e potência." },
  "Kanku Sho": { moves: 48, kiai: "6º e 48º", feature: "Ênfase em defesas e chutes de nível médio (Chudan)." },
  "Jion": { moves: 47, kiai: "17º e 47º", feature: "Mudanças de direção e deslocamentos com os dois pés deslizando juntos." },
  "Jitte": { moves: 24, kiai: "13º e 24º", feature: "Defesa contra bastão (Bo), com potência gerada pelo quadril." },
  "Ji'in": { moves: 35, kiai: "11º e 35º", feature: "Características específicas em conferência com material técnico da associação." },
  "Empi": { moves: 37, kiai: "15º e 36º", feature: "Movimentos que lembram o voo da andorinha, com leveza e mudanças rápidas de direção e altura." },
  "Hangetsu": { moves: 41, kiai: "11º e 40º", feature: "Sincronização entre mãos, pés e respiração; deslocamento em meia-lua." },
  "Gankaku": { moves: 42, kiai: "28º e 42º", feature: "A imagem da garça sobre a rocha: equilíbrio em uma perna, Yoko-geri e Uraken." },
  "Nijushiho": { moves: 34, kiai: "18º e 33º", feature: "Fluidez e flexibilidade, com mudanças de ritmo e técnicas específicas em Kiba-dachi." },
  "Chinte": { moves: 32, kiai: "28º e 32º", feature: "Mudanças de base e uso característico do soco vertical (Tate-zuki)." },
  "Unsu": { moves: 48, kiai: "36º e 48º", feature: "Agilidade e coordenação complexa entre técnicas de mãos e pés." },
  "Sochin": { moves: 41, kiai: "30º e 41º", feature: "Firmeza de Fudo-dachi e movimentos potentes, com estabilidade." },
  "Meikyo": { moves: 33, kiai: "32º", feature: "Embusen em forma de espelho e salto triangular." },
  "Wankan": { moves: 24, kiai: "24º", feature: "Deslocamentos leves e deslizantes dos pés (Suri-ashi)." },
  "Gojushiho Dai": { moves: 67, kiai: "59º e 66º", feature: "Defesas de mão aberta, mudanças em Neko-ashi-dachi e Nukite." },
  "Gojushiho Sho": { moves: 65, kiai: "57º e 64º", feature: "Defesas de mão aberta, ataques Nukite e defesa contra bastão." }
};

const kataGrid = document.querySelector("#kata-grid");
const search = document.querySelector("#kata-search");
const kataCount = document.querySelector("#kata-count");

document.body.insertAdjacentHTML("beforeend", '<div id="kata-dialog" class="kata-overlay" hidden><section class="kata-dialog-box" role="dialog" aria-modal="true" aria-label="Ficha de estudo do kata"><div class="kata-dialog-head"><button type="button" id="kata-dialog-close">FECHAR ✕</button></div><div id="kata-dialog-content"></div></section></div>');

const kataDialog = document.querySelector("#kata-dialog");
function closeKata() {
  // Limpa o conteúdo incorporado para interromper a reprodução do vídeo ao fechar a ficha.
  document.querySelector("#kata-dialog-content").innerHTML = "";
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
    const available = name === "Empi" || name === "Jion";
    return '<button class="kata-item" type="button" data-kata="' + name + '" aria-label="Abrir estudo de ' + name + '"><b>' + name + '</b><span>' + (available ? 'ESTUDO INICIAL DISPONÍVEL' : 'FICHA BASE EM REVISÃO') + '</span><i>' + String(index).padStart(2,"0") + ' ↗</i></button>';
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
      <h3>ASSISTA AO KATA</h3>
      <div class="kata-video">
        <iframe
          src="https://www.youtube-nocookie.com/embed/_D_SDby1yWU"
          title="Empi — demonstração completa hospedada por Karate Art"
          loading="lazy"
          referrerpolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
      </div>
      <p class="video-caption">Vídeo demonstrativo hospedado por Karate Art, uma fonte independente. Não é uma publicação oficial da JKA; use-o como apoio visual e confira a execução com seu sensei.</p>
      <p class="kata-source"><a href="https://www.jka.or.jp/en/jka-learning-material/" target="_blank" rel="noopener">Materiais oficiais de aprendizagem JKA</a> · <a href="https://www.jka.or.jp/en/books-and-videos/" target="_blank" rel="noopener">Livros e vídeos oficiais de kata</a></p>
      <div class="kata-facts">
        <div><small>CONTAGEM NO MANUAL TÉCNICO JKA</small><strong>37 movimentos</strong></div>
        <div><small>CARACTERÍSTICA CENTRAL</small><strong>Leveza e agilidade</strong></div>
      </div>
      <h3>01 — Características do kata</h3>
      <p>O manual técnico da JKA descreve o Enpi por movimentos que lembram o voo de uma andorinha, com mudanças rápidas de direção e de altura. Destaca a leveza, a agilidade, os socos ascendentes (Age-zuki) e os golpes executados com salto para a frente.</p>
      <h3>02 — Pontos técnicos para observar</h3>
      <ul>
        <li>Transições rápidas sem perder equilíbrio ou postura.</li>
        <li>Mudanças de direção coordenadas com o giro do quadril e o pé de apoio.</li>
        <li>Variação consciente de altura, ritmo e velocidade.</li>
        <li>Precisão das técnicas e controle na aterrissagem após o salto.</li>
        <li>Retorno ao ponto inicial e fidelidade ao embusen ensinado no seu dojo.</li>
      </ul>
      <h3>03 — Sequência movimento por movimento</h3>
      <p>O manual técnico da JKA Brasil identifica pontos de estudo específicos: mudanças de direção nos movimentos 7–8, 11–12 e 27–28; condução ou finta (Sasoi) nos movimentos 14–16; e salto com mudança de direção no movimento 36. Esses marcos ajudam a orientar o estudo sem substituir a sequência oficial completa.</p>
      <ul>
        <li><b>7–8, 11–12 e 27–28:</b> mudanças de direção (Hanten), com atenção ao apoio e à rotação do corpo.</li>
        <li><b>14–16:</b> condução/finta (Sasoi); estudar a intenção e a continuidade sem antecipar o movimento seguinte.</li>
        <li><b>36:</b> salto com mudança de direção; priorizar orientação do olhar, equilíbrio e aterrissagem controlada.</li>
      </ul>
      <p class="pending-note">A listagem integral dos 37 kyodos, com técnica, lado, base e direção em cada contagem, ainda será conferida com o volume oficial JKA. Não vamos completar os itens restantes por dedução.</p>
      <h3>04 — Kiai</h3>
      <p>Uma referência de organização ligada à JKA indica Kiai nos movimentos 15 e 36. Como a contagem pode variar conforme a convenção adotada, confirme esses pontos com o material usado no seu dojo.</p>
      <h3>05 — Embusen</h3>
      <p class="pending-note">O desenho será publicado depois da conferência da trajetória completa dos 37 movimentos e do retorno ao ponto inicial.</p>
      <h3>06 — Bunkai</h3>
      <p>As aplicações serão descritas após a validação da sequência, para que cada interpretação esteja ligada a uma técnica realmente presente no kata.</p>
      <h3>07 — Roteiro de treino</h3>
      <ol>
        <li>Assista ao kata completo seguindo a referência indicada pelo seu instrutor.</li>
        <li>Divida a sequência em pequenos trechos e pratique lentamente.</li>
        <li>Confira bases, direção do olhar, trajetória das mãos e deslocamento dos pés.</li>
        <li>Repita os trechos, depois una-os mantendo ritmo e respiração.</li>
        <li>Finalize conferindo o embusen e o retorno ao ponto inicial com seu sensei.</li>
      </ol>
      <div class="kata-source"><b>Referências técnicas:</b> Japan Karate Association — <a href="https://www.jka.or.jp/wp/wp-content/uploads/2017/04/tech_manual_instructor.pdf" target="_blank" rel="noopener">Technical Manual for the Instructor</a>, seção “Elements to Consider & Movements of KATA”, página 15 do documento; JKA Brasil — <a href="https://jkabrasil.com.br/wp-content/uploads/2023/06/jka-brasil-MANUAL-TECNICO-PARA-O-INSTRUTOR-da-JKA-BRASIL.pdf" target="_blank" rel="noopener">Manual Técnico para o Instrutor</a>, pontos técnicos específicos do Enpi; <a href="https://jkachile.com/kata/" target="_blank" rel="noopener">JKA Chile</a>, referência complementar para Kiai. Consulte também os <a href="https://www.jka.or.jp/en/jka-learning-material/" target="_blank" rel="noopener">materiais oficiais de aprendizagem</a> da JKA.</div>
      <p class="technical-note">Material de apoio ao estudo. A execução e a sequência devem ser conferidas com o sensei e com a edição de referência utilizada pela sua associação.</p>
    `;
  } else if (name === "Jion") {
    content.innerHTML = `
      <p class="eyebrow red">ESTUDO DE KATA · JKA / SHOTOKAN</p>
      <h2>JION<span>.</span></h2>
      <p class="kata-subtitle">慈恩 · Jion</p>
      <h3>ASSISTA AO KATA</h3>
      <div class="kata-video">
        <iframe
          src="https://www.youtube-nocookie.com/embed/nlV1ACW3LRg"
          title="Jion Kata — demonstração filmada em treinamento e exame JKA"
          loading="lazy"
          referrerpolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
      </div>
      <p class="video-caption">Referência em vídeo: Jion apresentado em material identificado como treinamento e exame na sede da JKA. O vídeo está hospedado por um canal independente, não pelo canal oficial da JKA.</p>
      <div class="kata-facts">
        <div><small>CONTAGEM NO MANUAL TÉCNICO JKA</small><strong>47 movimentos</strong></div>
        <div><small>KIAI INDICADOS NAS REFERÊNCIAS CONSULTADAS</small><strong>17º e 47º movimentos</strong></div>
      </div>
      <h3>01 — Características do kata</h3>
      <p>O manual técnico da Japan Karate Association registra o Jion com 47 movimentos. Entre os pontos característicos, destaca mudanças de direção e deslocamentos em que os dois pés deslizam juntos. A execução deve preservar postura, equilíbrio, precisão e continuidade, sem transformar os movimentos em gestos apressados.</p>
      <h3>02 — Pontos técnicos para observar</h3>
      <ul>
        <li>Manter o tronco ereto e as bases estáveis durante as mudanças de direção.</li>
        <li>Observar o deslocamento dos pés que deslizam juntos, sem saltar ou perder contato desnecessariamente com o solo.</li>
        <li>Coordenar a rotação do quadril com as técnicas de braço e com a transferência de peso.</li>
        <li>Distinguir os momentos de expansão, contração, força e mudança de velocidade.</li>
        <li>Conferir o alinhamento das bases e o retorno ao ponto inicial do embusen.</li>
      </ul>
      <h3>03 — Sequência movimento por movimento</h3>
      <p class="pending-note">A contagem total de 47 movimentos está registrada no manual técnico da JKA. A descrição individual de cada movimento ainda precisa ser conferida com o material oficial de kata, incluindo a nomenclatura das técnicas, as bases e as direções. Não publicaremos uma sequência reconstruída de memória.</p>
      <h3>04 — Kiai</h3>
      <p>As referências de organizações ligadas à JKA consultadas indicam Kiai nos movimentos 17 e 47. Como a indicação não aparece na tabela-resumo do manual técnico geral, ela será tratada como referência corroborada, e não como citação direta desse manual. Confirme a execução com o instrutor e com o material oficial adotado no seu dojo.</p>
      <h3>05 — Embusen</h3>
      <p class="pending-note">O desenho do embusen será incluído depois da conferência da sequência e das direções, para que cada deslocamento corresponda corretamente à execução JKA.</p>
      <h3>06 — Bunkai e aplicação</h3>
      <p>O bunkai deve ser estudado a partir das técnicas realmente presentes na sequência e com orientação do sensei. As aplicações ilustrativas serão preparadas após a validação movimento por movimento; esta ficha não atribui aplicações específicas sem essa conferência.</p>
      <h3>07 — Roteiro de treino</h3>
      <ol>
        <li>Revise a sequência com o instrutor antes de treinar em velocidade.</li>
        <li>Pratique as mudanças de direção isoladamente, cuidando da postura e do equilíbrio.</li>
        <li>Treine os deslocamentos com os pés deslizando juntos, mantendo controle da distância.</li>
        <li>Una os trechos gradualmente, preservando ritmo, respiração e precisão técnica.</li>
        <li>Confira o embusen e o retorno ao ponto inicial com o sensei.</li>
      </ol>
      <div class="kata-source"><b>Referências consultadas:</b><br>
        Japan Karate Association — <a href="https://www.jka.or.jp/wp/wp-content/uploads/2017/04/tech_manual_instructor.pdf" target="_blank" rel="noopener">Technical Manual for the Instructor</a>, seção “Elements to Consider & Movements of KATA”, página 15 do documento (contagem e características do Jion).<br>
        JKA — <a href="https://www.jka.or.jp/en/books-and-videos/" target="_blank" rel="noopener">Books and Videos</a> e <a href="https://www.jka.or.jp/en/jka-learning-material/" target="_blank" rel="noopener">JKA Learning Materials</a> (materiais oficiais de estudo).<br>
        Indicação dos Kiai: referências de organizações JKA consultadas em <a href="https://jkachile.com/kata/" target="_blank" rel="noopener">JKA Chile</a> e <a href="https://asktc.org/katas" target="_blank" rel="noopener">JKA Canarias</a>.
      </div>
      <p class="technical-note">Material de apoio ao estudo. A referência principal é a JKA; confirme a execução e eventuais orientações específicas com o sensei e com a edição de kata utilizada pela sua associação.</p>
    `;
  } else {
    const profile = kataProfiles[name];
    content.innerHTML = `
      <p class="eyebrow red">ESTUDO DE KATA · JKA / SHOTOKAN</p>
      <h2>${name.toUpperCase()}<span>.</span></h2>
      <p class="kata-subtitle">Ficha técnica de estudo</p>
      <div class="kata-facts">
        <div><small>CONTAGEM DE REFERÊNCIA</small><strong>${profile ? profile.moves + " movimentos" : "Em conferência"}</strong></div>
        <div><small>KIAI — REFERÊNCIA JKA CHILE</small><strong>${profile ? profile.kiai : "Em conferência"}</strong></div>
      </div>
      <h3>01 — Características do kata</h3>
      <p>${profile ? profile.feature : "As características específicas serão publicadas após conferência técnica."}</p>
      <h3>02 — Pontos técnicos para observar</h3>
      <ul>
        <li>Postura, alinhamento das bases e equilíbrio durante cada transição.</li>
        <li>Coordenação entre quadril, membros superiores e deslocamento dos pés.</li>
        <li>Ritmo, respiração, níveis de força e mudanças de velocidade.</li>
        <li>Direção do olhar e precisão na execução das técnicas.</li>
      </ul>
      <h3>03 — Sequência movimento por movimento</h3>
      <p class="pending-note">A sequência detalhada ainda será conferida com o volume oficial JKA correspondente. Não publicaremos técnicas, lados ou direções por suposição.</p>
      <h3>04 — Kiai</h3>
      <p>Os pontos exibidos são uma referência publicada pela JKA Chile e podem variar conforme a convenção de contagem. Confirme com seu sensei e com o material adotado pela associação.</p>
      <h3>05 — Embusen</h3>
      <p class="pending-note">O desenho será incluído após a validação da sequência e das direções, garantindo o retorno correto ao ponto inicial.</p>
      <h3>06 — Bunkai</h3>
      <p class="pending-note">As aplicações serão desenvolvidas a partir das técnicas verificadas na sequência oficial, sem atribuir significados não confirmados.</p>
      <h3>07 — Roteiro de treino</h3>
      <ol>
        <li>Estude a sequência com o instrutor e identifique os trechos mais difíceis.</li>
        <li>Pratique lentamente, conferindo bases, mãos, pés e direção do olhar.</li>
        <li>Treine as transições e mudanças de direção sem perder equilíbrio.</li>
        <li>Una os trechos, trabalhando respiração, ritmo e precisão.</li>
        <li>Revise o embusen e o retorno ao ponto inicial com seu sensei.</li>
      </ol>
      <div class="kata-source"><b>Materiais oficiais:</b> <a href="https://www.jka.or.jp/en/jka-learning-material/" target="_blank" rel="noopener">JKA Learning Materials</a> · <a href="https://www.jka.or.jp/en/books-and-videos/" target="_blank" rel="noopener">JKA Books and Videos</a>.<br>
      <b>Contagens e Kiai:</b> <a href="https://jkachile.com/kata/" target="_blank" rel="noopener">JKA Chile — tabela de 26 katas</a>. Os dados são referências de estudo e devem ser comparados com a edição adotada no dojo.</div>
      <p class="technical-note">Material de apoio. A sequência, a execução e as correções técnicas devem ser confirmadas com o sensei e com o material oficial utilizado pela associação.</p>
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

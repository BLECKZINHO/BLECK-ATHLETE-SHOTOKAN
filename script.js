const kataNames = ["Heian Shodan","Heian Nidan","Heian Sandan","Heian Yondan","Heian Godan","Tekki Shodan","Tekki Nidan","Tekki Sandan","Bassai Dai","Bassai Sho","Kanku Dai","Kanku Sho","Jion","Jitte","Ji'in","Empi","Hangetsu","Gankaku","Nijushiho","Chinte","Unsu","Sochin","Meikyo","Wankan","Gojushiho Dai","Gojushiho Sho"];

const kataProfiles = {
  "Heian Shodan": { moves: 21, kiai: "9º e 17º", feature: "Primeiro kata Heian: fundamentos de defesa, deslocamento em linhas definidas e coordenação entre bloqueios e contra-ataques.", focus: "Zenkutsu-dachi, Gedan-barai, Oi-zuki, mudanças de direção e estabilidade nas transições.", practice: "Isole as sequências de Gedan-barai e Oi-zuki; confira o comprimento das bases e a rotação do quadril." },
  "Heian Nidan": { moves: 26, kiai: "11º e 26º", feature: "Segundo kata Heian: amplia o repertório com técnicas de nível alto e médio, chutes e mudanças de direção.", focus: "Controle dos níveis Jodan e Chudan, equilíbrio nos chutes e coordenação das combinações.", practice: "Treine os chutes isoladamente, recupere a base com controle e depois conecte as combinações sem acelerar." },
  "Heian Sandan": { moves: 20, kiai: "10º e 20º", feature: "Terceiro kata Heian: exige atenção às transições, às técnicas de braço e à estabilidade das bases.", focus: "Kiba-dachi, deslocamentos laterais, coordenação dos braços e manutenção do centro de gravidade.", practice: "Pratique os deslocamentos laterais em Kiba-dachi mantendo a altura constante e os joelhos alinhados." },
  "Heian Yondan": { moves: 27, kiai: "13º e 25º", feature: "Quarto kata Heian: reúne combinações variadas, mudanças de nível e técnicas que exigem coordenação.", focus: "Ritmo, equilíbrio nas técnicas de perna, transições entre bases e precisão das defesas.", practice: "Separe as combinações com chutes e pratique a recuperação da perna antes de avançar para o trecho seguinte." },
  "Heian Godan": { moves: 23, kiai: "12º e 19º", feature: "Quinto kata Heian: combina mudanças de direção, técnicas variadas e transições que pedem controle corporal.", focus: "Mudanças de altura, equilíbrio, coordenação e aterrissagem controlada nas ações com salto.", practice: "Treine primeiro as mudanças de direção e o salto em baixa velocidade, priorizando equilíbrio e finalização estável." },
  "Tekki Shodan": { moves: 29, kiai: "15º e 29º", feature: "Primeiro kata Tekki, originalmente associado à série Naihanchi, com deslocamento predominantemente lateral.", focus: "Kiba-dachi, pressão das pernas para dentro, quadril estável e deslocamentos curtos sem oscilar o tronco.", practice: "Pratique a sequência lateral em Kiba-dachi sem elevar o centro de gravidade nem cruzar os pés fora da técnica." },
  "Tekki Nidan": { moves: 24, kiai: "16º e 24º", feature: "Segundo kata Tekki: mantém o trabalho lateral característico da série e amplia as combinações técnicas.", focus: "Estabilidade em Kiba-dachi, coordenação de mãos e quadril e precisão dos movimentos curtos.", practice: "Divida a sequência em blocos curtos e confira a posição dos pés e a estabilidade do tronco a cada transição." },
  "Tekki Sandan": { moves: 36, kiai: "16º e 36º", feature: "Terceiro kata Tekki: continuidade e precisão na base Kiba-dachi, com coordenação refinada das ações.", focus: "Manter a base lateral, coordenar ações simultâneas e evitar deslocamentos involuntários do tronco.", practice: "Treine lentamente as combinações de braços mantendo a base imóvel e o peso distribuído de forma equilibrada." },
  "Bassai Dai": { moves: 42, kiai: "19º e 42º", feature: "O nome é associado a penetrar ou romper uma fortaleza; a JKA destaca espírito, potência e transformação de posições desfavoráveis.", focus: "Potência com controle, mudanças de direção e transição de defesas duplas para posições vantajosas.", practice: "Trabalhe as mudanças de direção e as defesas em dupla ação sem perder a postura nem antecipar o movimento seguinte." },
  "Bassai Sho": { moves: 27, kiai: "17º e 22º", feature: "Forma menor da família Bassai, com características técnicas próprias; a interpretação de aplicações deve seguir a sequência JKA.", focus: "Precisão das técnicas de mão aberta, coordenação dos braços e estabilidade nas mudanças de direção.", practice: "Estude cada combinação lentamente e confira com o instrutor a trajetória e a aplicação das técnicas específicas." },
  "Kanku Dai": { moves: 65, kiai: "15º e 65º", feature: "A JKA destaca defesa em oito direções, muitas mudanças de direção, saltos, descidas e contrastes de velocidade e potência.", focus: "Mudanças de direção, controle dos níveis, expansão e contração corporal e transições entre ações lentas e rápidas.", practice: "Divida o kata em blocos, marcando as mudanças de nível e direção antes de trabalhar a continuidade." },
  "Kanku Sho": { moves: 48, kiai: "6º e 48º", feature: "Forma menor da família Kanku; deve ser estudada preservando suas diferenças de sequência e ritmo em relação ao Kanku Dai.", focus: "Precisão nas mudanças de direção, coordenação das técnicas e controle dos níveis.", practice: "Compare apenas os princípios gerais com Kanku Dai; pratique a sequência própria de Kanku Sho sem misturar trechos." },
  "Jion": { moves: 47, kiai: "17º e 47º", feature: "Mudanças de direção e deslocamentos com os dois pés deslizando juntos, conforme os pontos característicos destacados no manual JKA.", focus: "Postura, equilíbrio, deslocamento Yori-ashi e coordenação do quadril.", practice: "Pratique as mudanças de direção e os deslocamentos com os pés deslizando juntos, sem saltar." },
  "Jitte": { moves: 24, kiai: "13º e 24º", feature: "A JKA destaca a defesa contra bastão (Bo), bloqueios fortes e potência gerada pelo quadril.", focus: "Postura firme, uso coordenado do quadril e trajetória precisa das técnicas de defesa.", practice: "Estude as ações de defesa lentamente e com orientação do sensei; não use bastões ou parceiros sem supervisão." },
  "Ji'in": { moves: 35, kiai: "11º e 35º", feature: "Kata da família tradicional JKA, relacionado ao grupo de formas de nome budista; sua sequência exige estudo próprio.", focus: "Precisão das bases, coordenação das técnicas e continuidade entre mudanças de direção.", practice: "Estude por pequenos segmentos, conferindo cada transição com a demonstração oficial adotada no dojo." },
  "Empi": { moves: 37, kiai: "15º e 36º", feature: "Movimentos que lembram o voo da andorinha, com leveza e mudanças rápidas de direção e altura.", focus: "Age-zuki, mudanças de direção, variação de altura e controle do salto.", practice: "Treine as mudanças de direção e o salto separadamente, com aterrissagem silenciosa e equilibrada." },
  "Hangetsu": { moves: 41, kiai: "11º e 40º", feature: "A JKA destaca a sincronização entre mãos, pés e respiração, além do desenho de meia-lua do pé ao avançar.", focus: "Hangetsu-dachi, respiração, controle da tensão e deslocamento semicircular do pé.", practice: "Pratique lentamente a respiração e o deslocamento do pé em meia-lua, sem exagerar a tensão muscular." },
  "Gankaku": { moves: 42, kiai: "28º e 42º", feature: "A JKA associa o kata à imagem da garça sobre a rocha e destaca equilíbrio em uma perna, chute lateral e golpe de dorso da mão.", focus: "Equilíbrio unilateral, alinhamento do joelho de apoio e controle do Yoko-geri e Uraken.", practice: "Treine as posições de equilíbrio com apoio próximo se necessário; depois integre o chute sem perder o eixo." },
  "Nijushiho": { moves: 34, kiai: "18º e 33º", feature: "Kata conhecido como '24 passos'; sua execução combina fluidez, controle de ritmo e transições técnicas.", focus: "Mudanças de ritmo, precisão das mãos e coordenação das transições entre bases.", practice: "Marque as pausas e acelerações da sequência; trabalhe a fluidez sem perder a definição de cada técnica." },
  "Chinte": { moves: 32, kiai: "28º e 32º", feature: "Kata de técnicas de mão características; o nome é frequentemente interpretado como mãos raras ou incomuns.", focus: "Precisão das mãos, controle das distâncias e transições entre bases.", practice: "Estude lentamente as técnicas menos usuais e peça ao sensei para conferir a forma das mãos e a distância." },
  "Unsu": { moves: 48, kiai: "36º e 48º", feature: "Kata avançado de grande exigência coordenativa; inclui ações de mãos e pés e mudanças dinâmicas de nível.", focus: "Coordenação, mobilidade, controle dos giros e segurança nas ações acrobáticas.", practice: "Desenvolva mobilidade e equilíbrio separadamente; não tente saltos ou quedas sem preparação e supervisão." },
  "Sochin": { moves: 41, kiai: "30º e 41º", feature: "Kata associado à firmeza e estabilidade; destaca-se pelo uso de Fudo-dachi e pela sensação de potência controlada.", focus: "Fudo-dachi, estabilidade do centro, transições fortes e controle da tensão corporal.", practice: "Mantenha a base estável durante as transições e trabalhe a alternância entre firmeza e relaxamento." },
  "Meikyo": { moves: 33, kiai: "32º", feature: "Nome associado ao espelho claro; a tradição do kata inclui um salto característico que exige controle técnico.", focus: "Precisão das bases, clareza das transições e preparação equilibrada para o salto.", practice: "Treine a preparação e a aterrissagem do salto separadamente, priorizando alinhamento e segurança." },
  "Wankan": { moves: 24, kiai: "24º", feature: "Kata curto dentro do repertório JKA, com deslocamentos leves e transições que exigem precisão.", focus: "Suri-ashi, controle da distância e continuidade sem movimentos supérfluos.", practice: "Pratique os deslocamentos deslizantes com passos curtos e silenciosos, mantendo o tronco estável." },
  "Gojushiho Dai": { moves: 67, kiai: "59º e 66º", feature: "Forma maior da família Gojushiho, conhecida como 54 passos; inclui técnicas de mão aberta e transições avançadas.", focus: "Precisão das mãos abertas, controle de Neko-ashi-dachi e coordenação das técnicas de Nukite.", practice: "Trabalhe as posições de gato e as técnicas de mão aberta em baixa velocidade, conferindo alinhamento e distância." },
  "Gojushiho Sho": { moves: 65, kiai: "57º e 64º", feature: "Forma menor da família Gojushiho, com sequência própria e técnicas avançadas de mão aberta.", focus: "Controle de Neko-ashi-dachi, precisão de Nukite e continuidade das mudanças de direção.", practice: "Estude os trechos técnicos em separado e confirme com o sensei as diferenças específicas em relação ao Dai." }
};

// Referências dos volumes oficiais de kata da JKA, disponibilizados pela JKA WF Malta.
// São páginas oficiais de vídeo sob demanda no Vimeo; o acesso pode exigir compra.
const jkaVideoLinks = {
  "Heian Shodan": "https://vimeo.com/ondemand/karatedokatavol1english/592632734",
  "Heian Nidan": "https://vimeo.com/ondemand/karatedokatavol1english/592632734",
  "Heian Sandan": "https://vimeo.com/ondemand/karatedokatavol1english/592632734",
  "Heian Yondan": "https://vimeo.com/ondemand/karatedokatavol1english/592632734",
  "Heian Godan": "https://vimeo.com/ondemand/karatedokatavol1english/592632734",
  "Tekki Shodan": "https://vimeo.com/ondemand/karatedokatavol1english/592632734",
  "Bassai Dai": "https://vimeo.com/ondemand/karatedokatavol2english/593187632",
  "Gankaku": "https://vimeo.com/ondemand/karatedokatavol3english/659857130"
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
    const available = name === "Empi" || name === "Jion" || Boolean(jkaVideoLinks[name]);
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
      <p class="kata-subtitle">Ficha técnica de estudo · JKA / Shotokan</p>
            ${jkaVideoLinks[name] ? (
              '<h3>REFERÊNCIA OFICIAL JKA</h3>' +
              '<p class="video-caption">Este kata faz parte de um volume oficial de demonstrações da JKA. O link abre a página do volume no Vimeo; a reprodução pode exigir compra ou acesso autorizado.</p>' +
              '<p class="kata-source"><a href="' + jkaVideoLinks[name] + '" target="_blank" rel="noopener noreferrer">ABRIR VÍDEO OFICIAL JKA NO VIMEO ↗</a></p>'
            ) : ""}
            <div class="kata-facts">
        <div><small>CONTAGEM DE REFERÊNCIA JKA</small><strong>${profile ? profile.moves + " movimentos" : "Em conferência"}</strong></div>
        <div><small>KIAI — REFERÊNCIA JKA ESPANHA</small><strong>${profile ? profile.kiai : "Em conferência"}</strong></div>
      </div>
      <h3>01 — Características do kata</h3>
      <p>${profile ? profile.feature : "As características específicas serão publicadas após conferência técnica."}</p>
      <h3>02 — Pontos técnicos para observar</h3>
      <p>${profile ? profile.focus : "Postura, alinhamento das bases, equilíbrio, coordenação, ritmo e precisão devem ser observados com o instrutor."}</p>
      <ul>
        <li>Manter o tronco alinhado e o centro de gravidade controlado durante as transições.</li>
        <li>Coordenar quadril, membros superiores e deslocamento dos pés.</li>
        <li>Respeitar o ritmo, a respiração e os níveis de força próprios do kata.</li>
      </ul>
      <h3>03 — Sequência movimento por movimento</h3>
      <p class="pending-note">A contagem total é apresentada como referência. A listagem individual de cada kyodo — técnica, lado, base e direção — ainda precisa ser confrontada com o volume oficial JKA correspondente. Não publicaremos uma sequência reconstruída por suposição.</p>
      <h3>04 — Kiai</h3>
      <p>Os pontos indicados seguem a tabela de referência publicada pela JKA Espanha. A contagem pode variar conforme a convenção de cada edição e associação; confirme com o sensei e com o material adotado no dojo.</p>
      <h3>05 — Embusen</h3>
      <p class="pending-note">O desenho será incluído após a validação da sequência e das direções, garantindo que cada deslocamento corresponda à execução JKA e que o kata retorne ao ponto inicial.</p>
      <h3>06 — Bunkai e aplicação</h3>
      <p class="pending-note">As aplicações serão desenvolvidas a partir das técnicas verificadas na sequência oficial. A interpretação deve considerar distância, tempo, postura e orientação do instrutor; não serão atribuídas aplicações sem validação.</p>
      <h3>07 — Roteiro de treino</h3>
      <ol>
        <li>Estude a sequência com o instrutor e identifique os trechos mais difíceis.</li>
        <li>Pratique lentamente, conferindo bases, mãos, pés e direção do olhar.</li>
        <li>${profile ? profile.practice : "Treine as transições e mudanças de direção sem perder equilíbrio."}</li>
        <li>Una os trechos, trabalhando respiração, ritmo e precisão.</li>
        <li>Revise o embusen e o retorno ao ponto inicial com seu sensei.</li>
      </ol>
      <div class="kata-source"><b>Referências técnicas:</b><br>
        Japan Karate Association — <a href="https://www.jka.or.jp/wp/wp-content/uploads/2017/04/tech_manual_instructor.pdf" target="_blank" rel="noopener">Technical Manual for the Instructor</a>, especialmente a seção “Elements to Consider & Movements of KATA”.<br>
        JKA — <a href="https://www.jka.or.jp/en/books-and-videos/" target="_blank" rel="noopener">Karate-Do Kata, volumes 1–4</a>, referência oficial para a sequência e os diagramas.<br>
        JKA Espanha — <a href="https://jkaspain.com/kata/" target="_blank" rel="noopener">Katas JKA: contagens e Kiai</a>, referência complementar para a tabela de movimentos e Kiai.
      </div>
      <p class="technical-note">Material de apoio ao estudo. A referência principal é a JKA; confirme a execução, a contagem e eventuais orientações específicas com o sensei e com a edição de kata utilizada pela sua associação.</p>
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

const kataNames = ["Heian Shodan","Heian Nidan","Heian Sandan","Heian Yondan","Heian Godan","Tekki Shodan","Tekki Nidan","Tekki Sandan","Bassai Dai","Bassai Sho","Kanku Dai","Kanku Sho","Jion","Jitte","Ji'in","Empi","Hangetsu","Gankaku","Nijushiho","Chinte","Unsu","Sochin","Meikyo","Wankan","Gojushiho Dai","Gojushiho Sho"];

const kataProfiles = {
  "Heian Shodan": { moves: 21, kiai: "9º e 17º", feature: "Primeiro kata Heian: fundamentos de defesa, deslocamento em linhas definidas e coordenação entre bloqueios e contra-ataques.", focus: "Zenkutsu-dachi, Gedan-barai, Oi-zuki, mudanças de direção e estabilidade nas transições.", practice: "Isole as sequências de Gedan-barai e Oi-zuki; confira o comprimento das bases e a rotação do quadril." },
  "Heian Nidan": { moves: 26, kiai: "11º e 26º", feature: "Segundo kata da série Heian. Amplia o trabalho de kokutsu-dachi e introduz combinações simultâneas de defesa e ataque, uraken, yoko-geri-keage, mae-geri e nukite.", focus: "Estabilidade em kokutsu-dachi, coordenação entre uraken e yoko-geri-keage, controle dos chutes, transição para zenkutsu-dachi e uso do quadril em gyaku-hanmi.", practice: "Isole a combinação do 7º kyodo, pratique as sequências de shuto-uke em kokutsu-dachi e trabalhe as transições entre uchi-uke, mae-geri e gyaku-zuki com equilíbrio." },
  "Heian Sandan": { moves: 20, kiai: "10º e 20º", feature: "Terceiro kata da série Heian e o mais curto dos cinco. Introduz o trabalho característico em Kiba-dachi, ações simultâneas de defesa, técnicas de mão aberta, golpes de martelo, cotovelos e dorso do punho.", focus: "Estabilidade em Kokutsu-dachi e Kiba-dachi, coordenação simultânea de Uchi-uke e Gedan-barai, controle do giro, deslocamento dos pés e conexão entre Fumikomi e Empi.", practice: "Treine separadamente os bloqueios simultâneos, o giro para Kiba-dachi e a sequência de Fumikomi com Empi e Uraken, mantendo a altura da base." },
  "Heian Yondan": { moves: 27, kiai: "13º e 25º", feature: "Quarto kata da série Heian. A JKA destaca o contraste entre movimentos lentos e rápidos, variação de potência e alternância entre expansão e contração corporal.", focus: "Execução controlada dos dois primeiros movimentos, equilíbrio nas combinações simultâneas de Uraken e Yoko-keage, estabilidade nas bases Kokutsu-dachi, Zenkutsu-dachi e Kosa-dachi, e coordenação dos chutes com os golpes de mão.", practice: "Estude lentamente os dois Haiwan-uke iniciais; depois isole as combinações simultâneas de Uraken com Yoko-keage, as transições de Kakiwake-uke e a sequência final de Morote-uke, Hiza-age-ate e Shuto-uke." },
  "Heian Godan": { moves: 23, kiai: "12º e 19º", feature: "Quinto e último kata da série Heian. A JKA destaca o contraste entre movimentos lentos e rápidos, variação de potência e expansão e contração do corpo. Introduz o salto (Tobi-komi) na série.", focus: "Precisão das defesas cruzadas (Juji-uke), estabilidade nas bases Kokutsu-dachi, Zenkutsu-dachi e Kosa-dachi, controle do Mikazuki-geri, coordenação do quadril no Empi e aterrissagem equilibrada do salto.", practice: "Isole os dois primeiros blocos de Uchi-uke e Gyaku-zuki com as preparações lentas; pratique os Juji-uke em alturas distintas; treine o Mikazuki-geri e o Empi separadamente; por último, desenvolva o salto progressivamente, com aterrissagem silenciosa e joelhos flexionados, sob orientação do sensei." },
  "Tekki Shodan": { moves: 29, kiai: "15º e 29º", feature: "Primeiro kata da série Tekki, anteriormente conhecido como Naihanchi. A JKA destaca o trabalho em Kiba-dachi; a sequência percorre uma linha lateral, com técnicas compactas e deslocamentos por cruzamento dos pés.", focus: "Manter Kiba-dachi baixo e estável; executar Kosa-ashi com controle; coordenar Fumikomi, Nami-gaeshi e técnicas de braço; realizar as quatro mudanças de direção do olhar com nitidez; gerar potência pelo quadril sem oscilar o tronco.", practice: "Divida o kata em três blocos (1–9, 10–15 e 16–29). Treine os cruzamentos e Fumikomi lentamente, isole Nami-gaeshi sem inclinar o tronco e pratique os giros de cabeça antes de unir a sequência. Preserve a altura de Kiba-dachi e confirme a execução com o sensei." },
  "Tekki Nidan": { moves: 24, kiai: "16º e 24º", feature: "Segundo kata da série Tekki e o mais curto dos três. Mantém o deslocamento lateral e o predomínio de Kiba-dachi, introduzindo combinações de antebraços, ações de agarrar e puxar, Tsukami-uke, Koko-uke e Oshi-uke.", focus: "Manter a altura de Kiba-dachi; controlar os cruzamentos Kosa-ashi; coordenar Fumikomi com as técnicas de braço; executar as ações lentas sem perder estrutura; observar o uso do quadril nas combinações de curta distância.", practice: "Estude os dois primeiros blocos laterais separadamente; depois pratique as combinações de Tsukami-uke e Kagi-zuki com controle, sem aplicar força em um parceiro. Isole os Fumikomi e as ações lentas, mantendo a base baixa e o tronco estável." },
  "Tekki Sandan": { moves: 36, kiai: "16º e 36º", feature: "Terceiro e último kata da série Tekki. É uma forma rápida, com técnicas consecutivas, predominância de Kiba-dachi e deslocamentos laterais por Kosa-ashi. Destaca o uso do braço de apoio (Soete) para reforçar, controlar ou prender o membro do oponente.", focus: "Manter Kiba-dachi estável; coordenar o braço principal com o Soete; controlar as ações rápidas de antebraço; distinguir os momentos lentos de Kosa-ashi; executar Fumikomi sem elevar ou oscilar o tronco.", practice: "Divida o kata em blocos 1–16 e 17–36. Treine primeiro as combinações de antebraço e Soete lentamente; isole os deslocamentos Kosa-ashi e Fumikomi; depois una as sequências aumentando a velocidade sem perder a base." },
  "Bassai Dai": { moves: 42, kiai: "19º e 42º", feature: "Bassai Dai (拔塞大) é associado a penetrar ou romper uma fortaleza. O manual técnico JKA destaca espírito, potência e força viva na execução, além da transformação de posições inicialmente desvantajosas em posições vantajosas por meio de ações de defesa dupla.", focus: "Coordenar as mudanças de quadril nas sequências de Uchi-uke e Soto-uke; manter bases firmes nas mudanças de direção; executar Tsukami-uke e Sokuto-geri com controle; preservar o alinhamento no Yama-zuki; distinguir os trechos rápidos dos momentos de preparação.", practice: "Divida o kata em blocos 1–8, 9–19, 20–31 e 32–42. Pratique lentamente as mudanças de quadril e os deslocamentos; isole o chute lateral do movimento 19 e as três ações de Yama-zuki; una os blocos sem perder potência, equilíbrio e ritmo." },
  "Bassai Sho": { moves: 27, kiai: "17º e 22º", feature: "Forma menor e mais técnica da família Bassai. O manual técnico JKA destaca a defesa contra ataques de bastão (bō), com bloqueios e contra-ataques; a sequência combina controles com as mãos abertas, chutes laterais, deslocamentos e mudanças de direção.", focus: "Controle do centro de gravidade em Kokutsu-dachi, Zenkutsu-dachi e Neko-ashi-dachi; coordenação das defesas com as duas mãos, precisão das pegadas, equilíbrio nas ações de perna e rotação do quadril.", practice: "Divida o kata em blocos 1–7, 8–17, 18–22 e 23–27. Treine devagar os bloqueios e controles contra bō, estabilize as bases antes dos chutes e pratique as sequências de varredura e contra-ataque sem perder o eixo." },
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

const kataSequences = {
  "Heian Shodan": [
    ["Gedan-barai", "Zenkutsu-dachi"],
    ["Oi-zuki", "Zenkutsu-dachi"],
    ["Gedan-barai", "Zenkutsu-dachi"],
    ["Tetsui-uchi (Kentsui-tate-mawashi-uchi)", "Zenkutsu-dachi"],
    ["Oi-zuki", "Zenkutsu-dachi"],
    ["Gedan-barai", "Zenkutsu-dachi"],
    ["Age-uke", "Zenkutsu-dachi"],
    ["Age-uke", "Zenkutsu-dachi"],
    ["Age-uke · KIAI", "Zenkutsu-dachi"],
    ["Gedan-barai", "Zenkutsu-dachi"],
    ["Oi-zuki", "Zenkutsu-dachi"],
    ["Gedan-barai", "Zenkutsu-dachi"],
    ["Oi-zuki", "Zenkutsu-dachi"],
    ["Gedan-barai", "Zenkutsu-dachi"],
    ["Oi-zuki", "Zenkutsu-dachi"],
    ["Oi-zuki", "Zenkutsu-dachi"],
    ["Oi-zuki · KIAI", "Zenkutsu-dachi"],
    ["Shuto-uke", "Kokutsu-dachi"],
    ["Shuto-uke", "Kokutsu-dachi"],
    ["Shuto-uke", "Kokutsu-dachi"],
    ["Shuto-uke", "Kokutsu-dachi"]
  ],
  "Heian Nidan": [
    ["Jodan-kamae + Jodan-haiwan-sokumen-uke", "Kokutsu-dachi"],
    ["Tettsui-uchi-komi + Tekubi-nagashi-uke", "Kokutsu-dachi"],
    ["Chudan-yoko-zuki (ou Tettsui-uchi)", "Kokutsu-dachi"],
    ["Jodan-kamae + Jodan-haiwan-sokumen-uke", "Kokutsu-dachi"],
    ["Tettsui-uchi-komi + Tekubi-nagashi-uke", "Kokutsu-dachi"],
    ["Chudan-yoko-zuki (ou Tettsui-uchi)", "Kokutsu-dachi"],
    ["Jodan-uraken-uchi + Yoko-geri-keage", "Ashi-dachi"],
    ["Chudan-shuto-uke", "Kokutsu-dachi"],
    ["Chudan-shuto-uke", "Kokutsu-dachi"],
    ["Chudan-shuto-uke", "Kokutsu-dachi"],
    ["Osae-uke + Chudan-nukite · KIAI", "Zenkutsu-dachi"],
    ["Chudan-shuto-uke", "Kokutsu-dachi"],
    ["Chudan-shuto-uke", "Kokutsu-dachi"],
    ["Chudan-shuto-uke", "Kokutsu-dachi"],
    ["Chudan-shuto-uke", "Kokutsu-dachi"],
    ["Chudan-uchi-uke (Gyaku-hanmi)", "Ashi-zenkutsu"],
    ["Mae-geri", "Ashi-dachi"],
    ["Chudan-gyaku-zuki", "Zenkutsu-dachi"],
    ["Chudan-uchi-uke (Gyaku-hanmi)", "Ashi-zenkutsu"],
    ["Mae-geri", "Ashi-dachi"],
    ["Chudan-gyaku-zuki", "Zenkutsu-dachi"],
    ["Chudan-morote-uke", "Zenkutsu-dachi"],
    ["Gedan-barai", "Zenkutsu-dachi"],
    ["Jodan-age-uke", "Zenkutsu-dachi"],
    ["Gedan-barai", "Zenkutsu-dachi"],
    ["Jodan-age-uke · KIAI", "Zenkutsu-dachi"]
  ],
  "Heian Sandan": [
    ["Chudan-uchi-uke", "Kokutsu-dachi"],
    ["Chudan-uchi-uke + Gedan-barai", "Heisoku-dachi"],
    ["Chudan-uchi-uke + Gedan-barai", "Heisoku-dachi"],
    ["Chudan-uchi-uke", "Kokutsu-dachi"],
    ["Chudan-uchi-uke + Gedan-barai", "Heisoku-dachi"],
    ["Chudan-uchi-uke + Gedan-barai", "Heisoku-dachi"],
    ["Morote-uke", "Kokutsu-dachi"],
    ["Yonbon-nukite + Osae-uke", "Zenkutsu-dachi"],
    ["Kentsui-uchi-mawashi-uchi", "Kiba-dachi"],
    ["Oi-zuki · KIAI", "Zenkutsu-dachi"],
    ["Ryoken-ryokoshi-kamae (preparação lenta)", "Heisoku-dachi"],
    ["Fumikomi + Furi-empi", "Kiba-dachi"],
    ["Uraken-tate-mawashi-uchi", "Kiba-dachi"],
    ["Fumikomi + Furi-empi", "Kiba-dachi"],
    ["Uraken-tate-mawashi-uchi", "Kiba-dachi"],
    ["Fumikomi + Furi-empi (Gyaku-hanmi)", "Kiba-dachi"],
    ["Uraken-tate-mawashi-uchi", "Kiba-dachi"],
    ["Tsukami-uke + Oi-zuki", "Zenkutsu-dachi"],
    ["Koho-tsukiage + Ushiro-empi-uchi", "Kiba-dachi"],
    ["Koho-tsukiage + Ushiro-empi-uchi · KIAI", "Kiba-dachi"]
  ],
  "Heian Yondan": [
    ["Hidari-haiwan-jodan-yoko-uke", "Kokutsu-dachi"],
    ["Migi-haiwan-jodan-yoko-uke", "Kokutsu-dachi"],
    ["Gedan-juji-uke (Kosa-uke)", "Zenkutsu-dachi"],
    ["Migi-morote-uke", "Kokutsu-dachi"],
    ["Migi-koshi-kamae (preparação)", "Ashi-dachi"],
    ["Hidari-uraken-jodan-mawashi-uchi + Hidari-chudan-yoko-keage", "Ashi-dachi"],
    ["Migi-mae-empi-uchi", "Zenkutsu-dachi"],
    ["Hidari-koshi-kamae (preparação)", "Ashi-dachi"],
    ["Migi-uraken-jodan-mawashi-uchi + Migi-chudan-yoko-keage", "Ashi-dachi"],
    ["Hidari-mae-empi-uchi", "Zenkutsu-dachi"],
    ["Hidari-shuto-gedan-barai + Migi-shuto-mawashi-uchi + Hidari-sho-jodan-uke", "Hiza-kutsu"],
    ["Migi-jodan-mae-keage", "Ashi-dachi"],
    ["Migi-tate-mawashi-uchi · KIAI", "Kosa-dachi"],
    ["Ryoken-kakiwake-uke (execução lenta)", "Kokutsu-dachi"],
    ["Migi-jodan-mae-keage", "Ashi-dachi"],
    ["Migi-chudan-oi-zuki", "Zenkutsu-dachi"],
    ["Hidari-gyaku-zuki", "Zenkutsu-dachi"],
    ["Chudan-kakiwake-uke", "Kokutsu-dachi"],
    ["Hidari-jodan-mae-keage", "Ashi-dachi"],
    ["Hidari-oi-zuki", "Zenkutsu-dachi"],
    ["Migi-gyaku-zuki", "Zenkutsu-dachi"],
    ["Hidari-morote-uke", "Kokutsu-dachi"],
    ["Migi-morote-uke", "Kokutsu-dachi"],
    ["Hidari-morote-uke", "Kokutsu-dachi"],
    ["Migi-hiza-age-ate · KIAI", "Ashi-dachi"],
    ["Hidari-shuto-uke", "Kokutsu-dachi"],
    ["Migi-shuto-uke", "Kokutsu-dachi"]
  ],
  "Heian Godan": [
    ["Chudan-uchi-uke", "Kokutsu-dachi"],
    ["Chudan-gyaku-zuki", "Kokutsu-dachi"],
    ["Mizu-nagare-no-kamae (execução lenta)", "Heisoku-dachi"],
    ["Chudan-uchi-uke", "Kokutsu-dachi"],
    ["Chudan-gyaku-zuki", "Kokutsu-dachi"],
    ["Mizu-nagare-no-kamae (execução lenta)", "Heisoku-dachi"],
    ["Morote-uke", "Kokutsu-dachi"],
    ["Ryoken-kosa-uke (Gedan-juji-uke)", "Zenkutsu-dachi"],
    ["Kaisho-kosa-uke (Jodan-juji-uke)", "Zenkutsu-dachi"],
    ["Ryosho-juji-osae-uke", "Zenkutsu-dachi"],
    ["Uke-zuki (tsuki)", "Zenkutsu-dachi"],
    ["Oi-zuki · KIAI", "Zenkutsu-dachi"],
    ["Gedan-barai + Fumikomi", "Kiba-dachi"],
    ["Kake-uke (execução lenta)", "Kiba-dachi"],
    ["Mikazuki-geri", "Ashi-dachi"],
    ["Mae-empi-uchi", "Kiba-dachi"],
    ["Morote-uke", "Kosa-dachi"],
    ["Koho-tsukiage (execução lenta)", "Renoji-dachi"],
    ["Tobi-komi + Ryoken-kosa-uke (Gedan-juji-uke) · KIAI", "Kosa-dachi"],
    ["Morote-uke", "Zenkutsu-dachi"],
    ["Soto-nagashi-uke + Shuto-uchikomi + Manji-uke", "Ashi-zenkutsu / Kokutsu-dachi"],
    ["Jotai-sonomama (Manji-kamae, transição lenta)", "Heisoku-dachi"],
    ["Soto-nagashi-uke + Shuto-uchikomi + Manji-uke", "Ashi-zenkutsu / Kokutsu-dachi"]  ],
  "Tekki Shodan": [
    ["Kao-migi-muki + Hidari-ashi-mae-kosa (olhar à direita e cruzar o pé esquerdo à frente)", "Kosa-ashi / preparação"],
    ["Migi-ashi-fumikomi + Migi-sokumen-chudan-kake-uke", "Kiba-dachi"],
    ["Hidari-mae-empi-uchi (cotovelada lateral para a direita)", "Kiba-dachi"],
    ["Kao-hidari-muki + Ryoken-migi-koshi-kamae", "Kiba-dachi"],
    ["Hidari-sokumen-gedan-barai", "Kiba-dachi"],
    ["Hidari-koshi-kamae + Migi-kagi-zuki", "Kiba-dachi"],
    ["Migi-ashi-mae-kosa (cruzar o pé direito à frente)", "Kosa-ashi"],
    ["Kao-shomen-muki + Migi-ashi-fumikomi + Migi-chudan-uchi-uke", "Kiba-dachi"],
    ["Hidari-haiwan-jodan-uchi-nagashi-uke + Migi-gedan-uke + Hidari-uraken-jodan-uchi", "Kiba-dachi"],
    ["Kao-hidari-muki", "Kiba-dachi"],
    ["Hidari-ashi-nami-gaeshi + Hidari-zenwan-hidari-sokumen-chudan-uke", "Kiba-dachi"],
    ["Kao-migi-muki", "Kiba-dachi"],
    ["Migi-ashi-nami-gaeshi + Hidari-zenwan-migi-sokumen-chudan-uke", "Kiba-dachi"],
    ["Kao-hidari-muki + Ryoken-migi-koshi-kamae", "Kiba-dachi"],
    ["Hidari-sokumen-chudan-zuki + Migi-kagi-zuki · KIAI", "Kiba-dachi"],
    ["Hidari-sokumen-chudan-kake-uke + Migi-koshi-kamae", "Kiba-dachi"],
    ["Migi-mae-empi-uchi (cotovelada lateral para a esquerda)", "Kiba-dachi"],
    ["Kao-migi-muki + Ryoken-hidari-koshi-kamae", "Kiba-dachi"],
    ["Migi-sokumen-gedan-barai", "Kiba-dachi"],
    ["Migi-koshi-kamae + Hidari-kagi-zuki", "Kiba-dachi"],
    ["Hidari-ashi-mae-kosa (cruzar o pé esquerdo à frente)", "Kosa-ashi"],
    ["Kao-shomen-muki + Migi-ashi-fumikomi + Hidari-chudan-uchi-uke", "Kiba-dachi"],
    ["Migi-haiwan-jodan-uchi-nagashi-uke + Hidari-gedan-uke + Migi-uraken-jodan-uchi", "Kiba-dachi"],
    ["Kao-migi-muki", "Kiba-dachi"],
    ["Migi-ashi-nami-gaeshi + Migi-zenwan-migi-sokumen-chudan-uke", "Kiba-dachi"],
    ["Kao-hidari-muki", "Kiba-dachi"],
    ["Hidari-ashi-nami-gaeshi + Migi-zenwan-hidari-sokumen-chudan-uke", "Kiba-dachi"],
    ["Kao-migi-muki + Ryoken-hidari-koshi-kamae", "Kiba-dachi"],
    ["Migi-sokumen-chudan-zuki + Hidari-kagi-zuki · KIAI", "Kiba-dachi"]
  ],
  "Tekki Nidan": [
    ["Ryo-zenwan-suihei-kamae (preparação lenta)", "Heisoku-dachi"],
    ["Sokumen-uke + Fumikomi", "Kiba-dachi"],
    ["Zenwan-shomen-gedan-kensei", "Kosa-ashi"],
    ["Zenwan-sokumen-gedan-uke (Oshi-uke)", "Kiba-dachi"],
    ["Ryo-zenwan-suihei-kamae (preparação lenta)", "Heisoku-dachi"],
    ["Sokumen-uke + Fumikomi", "Kiba-dachi"],
    ["Zenwan-shomen-gedan-kensei", "Kosa-ashi"],
    ["Zenwan-sokumen-gedan-uke (Oshi-uke)", "Kiba-dachi"],
    ["Kao-muki + Koshi-kamae", "Kiba-dachi"],
    ["Soete-uchi-uke", "Kiba-dachi"],
    ["Koshi-kamae", "Ashi-dachi"],
    ["Fumikomi + Mae-empi-uchi", "Kiba-dachi"],
    ["Tsukami-uke (Koko-uke, execução lenta)", "Kiba-dachi"],
    ["Kagi-zuki", "Kiba-dachi"],
    ["Jotai-sonomama (preparação da mudança de lado)", "Kosa-ashi"],
    ["Fumikomi + Uchi-uke + Haiwan-jodan-uchi-nagashi-uke + Gedan-uke + Ura-zuki · KIAI", "Kiba-dachi"],
    ["Tate-uraken-uchi (variação técnica indicada em algumas referências)", "Kiba-dachi"],
    ["Zenwan-suihei-mune-kamae + Kao-muki / Koshi-kamae", "Kiba-dachi"],
    ["Soete-uchi-uke", "Kiba-dachi"],
    ["Koshi-kamae", "Ashi-dachi"],
    ["Fumikomi + Mae-empi-uchi", "Kiba-dachi"],
    ["Tsukami-uke (Koko-uke, execução lenta)", "Kiba-dachi"],
    ["Kagi-zuki", "Kiba-dachi"],
    ["Fumikomi + Uchi-uke + Haiwan-jodan-uchi-nagashi-uke + Gedan-uke + Ura-zuki · KIAI", "Kiba-dachi"]
  ]
,
  "Bassai Sho": [
    ["Kamae inicial · mãos abertas sobrepostas (esquerda acima)", "Heisoku-dachi"],
    ["Gedan-morote-teisho-barai · deslocamento lateral a 45°", "Base em transição"],
    ["Sokumen-awase-uke · avanço com os pés reunidos", "Kosa-dachi"],
    ["Bō-uke + Bō-tori-jodan · defesa e controle do bastão", "Kokutsu-dachi"],
    ["Gedan-barai · movimento circular amplo do braço", "Base baixa em transição"],
    ["Bō-uke + Bō-tori-jodan", "Kokutsu-dachi"],
    ["Haito-kamae · recolhimento do pé", "Heisoku-dachi"],
    ["Yoko-geri-kekomi + Haito-uchi-jodan", "Apoio em uma perna"],
    ["Tate-shuto-chudan-uke", "Kiba-dachi"],
    ["Chudan-zuki duplo · direita e esquerda", "Base mantida"],
    ["Uchi-uke-jodan + Gedan-barai · alternância coordenada dos lados", "Kokutsu-dachi"],
    ["Shuto-uke direito", "Kokutsu-dachi"],
    ["Shuto-uke esquerdo", "Kokutsu-dachi"],
    ["Shuto-uke direito", "Kokutsu-dachi"],
    ["Shuto-uke esquerdo · recuo", "Kokutsu-dachi"],
    ["Tsukamite-uke chudan com Soete · agarrar e controlar", "Zenkutsu-dachi"],
    ["Yoko-geri-kekomi gedan · puxada dos punhos · KIAI", "Apoio em uma perna"],
    ["Morote-uchi-kakiwake chudan", "Kokutsu-dachi"],
    ["Morote-ura-zuki-jodan", "Kokutsu-dachi · Yori-ashi"],
    ["Sokutei-uke + Soto-uke-jodan", "Base em avanço"],
    ["Yoko-zuki chudan", "Base mantida"],
    ["Chudan-zuki · KIAI", "Zenkutsu-dachi"],
    ["Sokutei-uke + Soto-uke-jodan · giro de 180° + Morote-yoko-zuki", "Kiba-dachi"],
    ["Sokutei-uke + Soto-uke-jodan + Morote-yoko-zuki", "Kiba-dachi"],
    ["Sokutei-uke + Soto-uke-jodan + Morote-yoko-zuki", "Kiba-dachi"],
    ["Teisho-uke-jodan + Mawashi-shuto-uke · mudança de direção", "Neko-ashi-dachi"],
    ["Teisho-uke-jodan + Mawashi-shuto-uke · fechamento da sequência", "Neko-ashi-dachi"]
  ],
  "Bassai Dai": [
    ["Soete-uke / Morote-uchi-uke de entrada · avanço vigoroso", "Kosa-dachi (entrada)"],
    ["Hidari-chudan-uchi-uke", "Hidari-zenkutsu-dachi"],
    ["Migi-chudan-uchi-uke", "Hidari-zenkutsu-dachi"],
    ["Hidari-chudan-soto-uke", "Migi-zenkutsu-dachi"],
    ["Migi-chudan-uchi-uke", "Migi-zenkutsu-dachi"],
    ["Migi-gedan-sukui-uke + Migi-chudan-soto-uke", "Migi-zenkutsu-dachi"],
    ["Hidari-chudan-uchi-uke", "Migi-zenkutsu-dachi"],
    ["Ryoken-migi-koshi-kamae", "Hachiji-dachi"],
    ["Hidari-tate-shuto-chudan-uke · lento", "Hachiji-dachi"],
    ["Chudan-zuki (preparação com a outra mão em koshi-kamae)", "Hachiji-dachi"],
    ["Migi-chudan-uchi-uke", "Hidari-hizakutsu"],
    ["Chudan-zuki (preparação com a outra mão em koshi-kamae)", "Hachiji-dachi"],
    ["Hidari-chudan-uchi-uke", "Migi-hizakutsu"],
    ["Migi-shuto-chudan-uke", "Hidari-kokutsu-dachi"],
    ["Hidari-shuto-chudan-uke", "Migi-kokutsu-dachi"],
    ["Migi-shuto-chudan-uke", "Hidari-kokutsu-dachi"],
    ["Hidari-shuto-chudan-uke", "Migi-kokutsu-dachi"],
    ["Ryosho-chudan-tsukami-uke", "Hidari-ashi-zenkutsu"],
    ["Ryosho-tsukamiyose + Migi-sokuto-gedan-kekomi · KIAI", "Ashi-dachi"],
    ["Hidari-shuto-chudan-uke", "Migi-kokutsu-dachi"],
    ["Migi-shuto-chudan-uke", "Hidari-kokutsu-dachi"],
    ["Morote-jodan-age-uke", "Heisoku-dachi"],
    ["Ryo-kentsui-chudan-hasami-uchi", "Migi-zenkutsu-dachi"],
    ["Yori-ashi + Chudan-zuki (mão oposta em koshi-kamae)", "Migi-zenkutsu-dachi"],
    ["Chudan-zuki → Jodan-nagashi-uke + Shuto-gedan-uchikomi (ações agrupadas na fonte)", "Hidari-ashi-zenkutsu → Heisoku-dachi"],
    ["Migi-sokumen-jodan-uchi-uke + Hidari-sokumen-gedan-uke", "Kiba-dachi"],
    ["Migi-gedan-barai + Hidari-sokumen-chudan-kake-uke", "Kiba-dachi"],
    ["Mikazuki-geri + Mae-enpi (combinação agrupada na fonte)", "Ashi-dachi → Kiba-dachi"],
    ["Migi-gedan-uke + Hidari-zenwan-mune-mae-kamae", "Kiba-dachi"],
    ["Hidari-gedan-uke + Migi-zenwan-mune-mae-kamae", "Kiba-dachi"],
    ["Migi-gedan-uke + Hidari-zenwan-mune-mae-kamae", "Kiba-dachi"],
    ["Ryoken-hidari-koshi-kamae", "Migi-ashi-zenkutsu"],
    ["Hidari-jodan-uke + Migi-gedan-yama-zuki", "Migi-ashi-zenkutsu"],
    ["Ryoken-migi-koshi-kamae", "Heisoku-dachi"],
    ["Migi-jodan-uke + Hidari-gedan-yama-zuki", "Hidari-ashi-zenkutsu"],
    ["Ryoken-hidari-koshi-kamae", "Heisoku-dachi"],
    ["Hidari-jodan-uke + Migi-gedan-yama-zuki", "Migi-ashi-zenkutsu"],
    ["Migi-gedan-sukui-uke", "Hidari-hizakutsu"],
    ["Hidari-gedan-sukui-uke", "Migi-hizakutsu"],
    ["Migi-shuto-chudan-uke", "Hidari-kokutsu-dachi"],
    ["Transição de mãos e pés · nomenclatura pouco legível na fonte consultada", "Em conferência"],
    ["Hidari-shuto-chudan-uke · KIAI", "Migi-kokutsu-dachi"]
  ],
  "Tekki Sandan": [
    ["Hidari-chudan-uchi-uke", "Kiba-dachi"],
    ["Uchi-uke + Gedan-uke (Kosa-uke)", "Kiba-dachi"],
    ["Zenwan-uchiotoshi + Zenwan-osae-uke", "Kiba-dachi"],
    ["Haiwan-uchi-nagashi-uke", "Kiba-dachi"],
    ["Tate-uraken-uchi (algumas referências: Ura-zuki)", "Kiba-dachi"],
    ["Koshi-kamae (preparação)", "Kiba-dachi"],
    ["Choku-zuki", "Kiba-dachi"],
    ["Zenwan-hineri", "Kiba-dachi"],
    ["Jotai-sonomama (manter o tronco) + Kosa-ashi · lento", "Kosa-ashi"],
    ["Zenwan-sokumen-gedan-uke + Oshi-uke", "Kiba-dachi"],
    ["Zenwan-gedan-furisute", "Kiba-dachi"],
    ["Koshi-kamae (preparação)", "Kiba-dachi"],
    ["Choku-zuki", "Kiba-dachi"],
    ["Uchi-uke + Gedan-uke", "Kiba-dachi"],
    ["Uchi-uke + Gedan-uke", "Kiba-dachi"],
    ["Haiwan-nagashi-uke + Tate-uraken-uchi / Ura-zuki · KIAI", "Kiba-dachi"],
    ["Kao-muki (mudança do olhar)", "Kiba-dachi"],
    ["Jotai-sonomama + Kosa-ashi · lento", "Kosa-ashi"],
    ["Fumikomi", "Kiba-dachi"],
    ["Zenwan-uchiotoshi (ou Zenwan-barai)", "Kiba-dachi"],
    ["Haiwan-uchi-nagashi-uke", "Kiba-dachi"],
    ["Tate-uraken-uchi", "Kiba-dachi"],
    ["Koshi-kamae (preparação)", "Kiba-dachi"],
    ["Choku-zuki", "Kiba-dachi"],
    ["Zenwan-hineri", "Kiba-dachi"],
    ["Jotai-sonomama + Kosa-ashi · lento", "Kosa-ashi"],
    ["Zenwan-sokumen-gedan-uke + Oshi-uke", "Kiba-dachi"],
    ["Zenwan-gedan-furisute", "Kiba-dachi"],
    ["Koshi-kamae (preparação)", "Kiba-dachi"],
    ["Choku-zuki", "Kiba-dachi"],
    ["Tsukami-uke (Koko-uke) · lento", "Kiba-dachi"],
    ["Kagi-zuki", "Kiba-dachi"],
    ["Jotai-sonomama + Kosa-ashi · lento", "Kosa-ashi"],
    ["Uchi-uke + Fumikomi", "Kiba-dachi"],
    ["Uchi-uke + Gedan-uke", "Kiba-dachi"],
    ["Haiwan-nagashi-uke + Tate-uraken-uchi / Ura-zuki · KIAI", "Kiba-dachi"]
  ],};
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
    const available = name === "Empi" || name === "Jion" || name === "Tekki Sandan" || Boolean(jkaVideoLinks[name]);
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
      ${kataSequences[name] ? (
              '<p>Sequência de referência com as técnicas e bases por kyodo. Os movimentos de Kiai estão assinalados.</p>' +
              '<ol class="sequence-list">' + kataSequences[name].map((step, index) =>
                '<li><b>' + String(index + 1).padStart(2, "0") + '.</b> ' + step[0] + ' <span>— ' + step[1] + '</span></li>'
              ).join("") + '</ol>' +
              (name === "Bassai Sho" ? '<p class="pending-note">A sequência de 27 kyodos foi transcrita do documento técnico de Bassai Sho publicado pelo Dojo Shotokan Italia e confrontada com a descrição de técnicas do Karate Faixa Preta e com o guia KarateDecoded. O manual técnico oficial JKA confirma o caráter de defesa contra bastão (bō), mas não publica nesse trecho a sequência completa movimento por movimento. Há diferenças de nomenclatura e agrupamento entre fontes; esta lista é uma referência comparativa de estudo, não uma transcrição oficial integral da sede da JKA. Confirme cada kyodo com o volume oficial adotado e o sensei.</p>' : name === "Tekki Shodan" ? '<p class="pending-note">A sequência de 29 kyodos foi transcrita a partir da referência bibliográfica identificada como <i>Karate-do Kata, Volume 1</i> (JKA, 1994, pp. 123–147), disponibilizada para consulta na Usina de Pesquisa, e confrontada com o guia ilustrado da JKA Karate UK. Há diferenças de apresentação na divisão de algumas ações compostas; mantivemos a contagem de 29 movimentos. As quatro mudanças de direção do olhar estão incluídas na contagem. O embusen é linear; a orientação exata de cada técnica e a representação gráfica devem ser confirmadas com a demonstração oficial e o sensei.</p>' : name === "Tekki Nidan" ? '<p class="pending-note">A ficha reúne a sequência em 24 kyodos com base no guia técnico do Kenseikan Canada e na transcrição didática em português do Karate Faixa Preta, confrontados com as contagens do manual técnico JKA e da tabela de Kiai da JKA Chile. As fontes descrevem algumas ações compostas e agrupam técnicas de modo diferente; o movimento 16 aparece com variação entre Tate-uraken-uchi e Ura-zuki em referências de ensino. Mantivemos a indicação de Kiai 16 e 24, mas a nomenclatura e a divisão exata dos movimentos devem ser conferidas com a demonstração oficial JKA e o sensei.</p>' : name === "Tekki Sandan" ? '<p class="pending-note">A sequência de 36 kyodos foi organizada principalmente a partir da tabela técnica do Kenseikan Canada e confrontada com a sequência publicada pela ATSK e com a transcrição didática em português do Karate Faixa Preta. Há diferenças relevantes na nomenclatura e no agrupamento de ações compostas entre essas fontes; em especial, algumas referências descrevem o movimento 5 como Tate-uraken-uchi e outras como Ura-zuki. Os movimentos 16 e 36 estão assinalados como Kiai conforme as tabelas de referência JKA consultadas. Esta é uma sequência comparativa de estudo, não uma transcrição oficial integral da sede da JKA; valide cada kyodo com o volume oficial adotado e o sensei.</p>' : '<p class="pending-note">Esta sequência de referência foi cruzada com materiais públicos de estudo Shotokan e com as contagens do manual técnico JKA. Para o Heian Nidan, a convenção de 26 kyodos agrupa a combinação do 7º movimento. Para o Heian Sandan, a tabela técnica consultada apresenta 20 kyodos; há variações de nomenclatura e agrupamento entre referências. Para o Heian Yondan, usamos uma tabela ilustrada de estudo Shotokan para técnicas e bases, confrontada com a contagem de 27 movimentos do manual JKA e com a referência de Kiai 13º e 25º. Para o Heian Godan, a sequência de técnicas e bases foi cruzada com um guia técnico de estudo Shotokan e com uma segunda referência de kata; existem diferenças de agrupamento e nomenclatura em alguns trechos. Mantivemos 23 kyodos e Kiai nos movimentos 12 e 19, conforme a contagem JKA, sem atribuir lado ou direção quando as fontes não convergem. O mapeamento exato dos giros e o desenho do embusen devem ser conferidos com a demonstração JKA e o sensei.</p>')
            ) : '<p class="pending-note">A contagem total é apresentada como referência. A listagem individual de cada kyodo — técnica, lado, base e direção — ainda precisa ser confrontada com o volume oficial JKA correspondente. Não publicaremos uma sequência reconstruída por suposição.</p>'}
      <h3>04 — Kiai</h3>
      <p>Os pontos indicados seguem a tabela de referência publicada pela JKA Espanha. A contagem pode variar conforme a convenção de cada edição e associação; confirme com o sensei e com o material adotado no dojo.</p>
      <h3>05 — Embusen</h3>
      <p class="pending-note">${name === "Bassai Sho" ? "O desenho do embusen ainda não será publicado: as fontes textuais consultadas descrevem a sequência, mas não oferecem um diagrama suficientemente claro para validar todos os ângulos e o retorno ao ponto inicial. A trajetória deve ser conferida com a demonstração JKA adotada no dojo." : name === "Tekki Shodan" ? "O embusen é uma linha reta lateral: o kata se desenvolve para um lado e retorna pela mesma linha, sem avanço ou recuo frontal. O diagrama gráfico será acrescentado após conferência visual com a demonstração oficial JKA." : name === "Tekki Nidan" ? "O embusen mantém o eixo lateral característico da série Tekki. O desenho gráfico e a orientação exata dos deslocamentos serão acrescentados após conferência visual com a demonstração oficial JKA." : name === "Tekki Sandan" ? "O kata se desenvolve sobre o eixo lateral característico da série Tekki, com deslocamentos por Kosa-ashi e Fumikomi. A representação gráfica detalhada e a orientação exata de cada trecho ainda precisam ser conferidas visualmente com a demonstração JKA adotada." : name === "Bassai Dai" ? "O kata percorre várias direções e retorna à área inicial. A trajetória geral está representada nos diagramas de referência consultados, mas o desenho vetorial do site e a orientação de cada deslocamento ainda serão conferidos visualmente com o volume oficial JKA antes da publicação." : "O desenho será incluído após a validação da sequência e das direções, garantindo que cada deslocamento corresponda à execução JKA e que o kata retorne ao ponto inicial."}</p>
      <h3>06 — Bunkai e aplicação</h3>
      <p class="pending-note">${name === "Bassai Sho" ? "O manual técnico JKA caracteriza o Bassai Sho como defesa contra ataques de bastão (bō). Como hipóteses de estudo, os movimentos 2, 4 e 6 podem ser analisados como ações de interceptação e controle do bastão; o 16–17 como agarramento seguido de chute; e os movimentos 20–25 como defesa, desequilíbrio e contra-ataque. Essas leituras são possibilidades didáticas, não aplicações únicas ou definitivas; pratique com parceiro apenas sob supervisão e controle." : name === "Tekki Sandan" ? "O material técnico do Kenseikan Canada destaca o uso do Soete (mão de apoio) para reforçar técnicas e também agarrar ou prender os membros do oponente (trapping), impedindo a continuidade do ataque. Este é um princípio geral de estudo, não uma atribuição de bunkai definitivo a cada kyodo. As aplicações específicas devem ser praticadas com o sensei, em condições controladas." : name === "Bassai Dai" ? "O manual técnico JKA apresenta como princípio central a conversão de posições desvantajosas em vantajosas por meio de defesas duplas. Como hipóteses didáticas a explorar com o sensei, podem ser estudadas as mudanças de quadril nas defesas Uchi-uke/Soto-uke (movimentos 2–7), o controle seguido de chute lateral (18–19) e as ações de Yama-zuki (33, 35 e 37). São possibilidades de estudo, não aplicações únicas ou definitivas; pratique com parceiro apenas sob supervisão e controle." : "As aplicações serão desenvolvidas a partir das técnicas verificadas na sequência oficial. A interpretação deve considerar distância, tempo, postura e orientação do instrutor; não serão atribuídas aplicações sem validação."}</p>
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
        JKA Espanha — <a href="https://jkaspain.com/kata/" target="_blank" rel="noopener">Katas JKA: contagens e Kiai</a>, referência complementar para a tabela de movimentos e Kiai.<br>Bassai Dai — <a href="https://www.jka.or.jp/wp/wp-content/uploads/2017/04/tech_manual_instructor.pdf" target="_blank" rel="noopener">Manual técnico oficial JKA</a>, contagem de 42 movimentos e características de espírito, potência e defesas duplas; <a href="https://sampa.if.usp.br/~suaide/karate/documentos/credenciamento%20-%20examinador/ENBUSEM%20KATAS%20bassai%20dai%2C%20kanku%20dai%2C%20enpi%2C%20jion.pdf" target="_blank" rel="noopener">FPKT / JKA SP — Enbusem Katas</a>, sequência técnica em 42 kyodos, bases e técnicas; <a href="https://karatefaixapreta.com.br/bassai-dai/" target="_blank" rel="noopener">Karate Faixa Preta — Bassai Dai</a>, transcrição didática em português, pontos técnicos, embusen e Kiai 19/42; <a href="https://karatedecoded.com/kata/bassai-dai/" target="_blank" rel="noopener">KarateDecoded — Bassai Dai</a>, referência complementar para características, sequência e exemplos interpretativos de bunkai; <a href="https://jkaspain.com/kata/" target="_blank" rel="noopener">JKA Espanha</a> e <a href="https://usercontent.one/wp/www.jka.se/wp-content/uploads/2024/12/Shotokan-Kata.pdf" target="_blank" rel="noopener">JKA Suécia — Shotokan Kata</a>, confirmação complementar da contagem e Kiai 19/42.<br>
        Bassai Sho — <a href="https://www.jka.or.jp/wp/wp-content/uploads/2017/04/tech_manual_instructor.pdf" target="_blank" rel="noopener">Manual técnico oficial JKA</a>, descrição do kata como defesa contra bastão (bō); <a href="https://www.dojoshotokan.it/files/bassai_dai-sho.pdf" target="_blank" rel="noopener">Dojo Shotokan Italia — Bassai Dai / Bassai Sho</a>, sequência textual de 27 kyodos; <a href="https://karatefaixapreta.com.br/bassai-sho/" target="_blank" rel="noopener">Karate Faixa Preta — Bassai Sho</a>, contagem, Kiai e transcrição didática; <a href="https://karatedecoded.com/kata/bassai-sho/" target="_blank" rel="noopener">KarateDecoded — Bassai Shō</a>, conferência complementar de características, sequência e bunkai; <a href="https://jkaspain.com/kata/" target="_blank" rel="noopener">JKA Espanha</a> e <a href="https://usercontent.one/wp/www.jka.se/wp-content/uploads/2024/12/Shotokan-Kata.pdf" target="_blank" rel="noopener">JKA Suécia — Shotokan Kata</a>, confirmação de 27 movimentos e Kiai 17/22.<br>
        Heian Nidan — <a href="https://www.francejka.com/les-kata.html" target="_blank" rel="noopener">France JKA: Les kata</a>, confirmação de 26 movimentos e Kiai nos movimentos 11 e 26; <a href="https://www.techniquesdekarate.com/les-katas/heian-nidan" target="_blank" rel="noopener">Bertrand Jaillet — Heian Nidan</a>, referência técnica complementar para a sequência e a nomenclatura das técnicas.<br>Heian Sandan — <a href="https://www.francejka.com/les-kata.html" target="_blank" rel="noopener">France JKA: Les kata</a>, confirmação de 20 movimentos e Kiai nos movimentos 10 e 20; <a href="https://projetoshotokankarate.wordpress.com/heian-sandan/" target="_blank" rel="noopener">Projeto Shotokan Karatê-Do — Heian Sandan</a>, referência complementar para técnicas e bases; <a href="https://www.kenseikancanada.org/uploads/8/2/8/3/82833080/heian_sandan.pdf" target="_blank" rel="noopener">Kenseikan Canada — Heian Sandan</a>, conferência complementar da sequência e nomenclatura.<br>Heian Yondan — <a href="https://www.jka.or.jp/wp/wp-content/uploads/2017/04/tech_manual_instructor.pdf" target="_blank" rel="noopener">Manual técnico oficial JKA</a>, confirmação de 27 movimentos e características de ritmo, potência, expansão e contração; <a href="https://www.jkakarate.co.uk/shared/images/content/bus_57720/pdf/5-Heian-Yondan.pdf" target="_blank" rel="noopener">JKA Karate UK — Heian Yondan (guia ilustrado)</a>, referência complementar para sequência, bases e Kiai 13º/25º. O guia é material de uma associação/dojo e não substitui a demonstração oficial JKA.<br>Heian Godan — <a href="https://www.jka.or.jp/wp/wp-content/uploads/2017/04/tech_manual_instructor.pdf" target="_blank" rel="noopener">Manual técnico oficial JKA</a>, confirmação de 23 movimentos e características de ritmo, potência, expansão e contração; <a href="https://www.francejka.com/les-kata.html" target="_blank" rel="noopener">France JKA: Les kata</a>, confirmação de 23 movimentos e Kiai 12º/19º; <a href="https://www.kenseikancanada.org/uploads/8/2/8/3/82833080/heian_godan.pdf" target="_blank" rel="noopener">Kenseikan Canada — Heian Godan</a>, referência complementar para técnicas e bases; <a href="https://karatedecoded.com/kata/heian-godan/" target="_blank" rel="noopener">KarateDecoded — Heian Godan</a>, referência complementar para características, salto e variações de contagem.<br>Tekki Shodan — <a href="https://www.jka.or.jp/wp/wp-content/uploads/2017/04/tech_manual_instructor.pdf" target="_blank" rel="noopener">Manual técnico oficial JKA</a>, confirmação de 29 movimentos e destaque para Kiba-dachi; <a href="https://www.usinadepesquisa.com/?page_id=2251" target="_blank" rel="noopener">Usina de Pesquisa — Tekki Shodan</a>, transcrição identificada como <i>Karate-do Kata, Volume 1</i> (JKA, 1994, pp. 123–147), incluindo os 29 kyodos e Kiai 15º/29º; <a href="https://www.jkakarate.co.uk/shared/images/content/bus_57720/pdf/7-Tekki-Shodan.pdf" target="_blank" rel="noopener">JKA Karate UK — Tekki Shodan (guia ilustrado)</a>, referência complementar para embusen linear, quatro movimentos de cabeça, técnicas e bases; <a href="https://www.kenseikancanada.org/uploads/8/2/8/3/82833080/tekki_shodan.pdf" target="_blank" rel="noopener">Kenseikan Canada — Tekki Shodan</a>, referência complementar para Kiba-dachi, Kosa-ashi, Nami-gaeshi e princípios técnicos.<br>Tekki Nidan — <a href="https://www.jka.or.jp/wp/wp-content/uploads/2017/04/tech_manual_instructor.pdf" target="_blank" rel="noopener">Manual técnico oficial JKA</a>, confirmação de 24 movimentos e característica central da série Tekki: Kiba-dachi; <a href="https://www.kenseikancanada.org/uploads/8/2/8/3/82833080/tekki_nidan.pdf" target="_blank" rel="noopener">Kenseikan Canada — Tekki Nidan</a>, referência técnica para 24 movimentos, Kiba-dachi, Kosa-ashi, Oshi-uke, Tsukami-uke e Kagi-zuki; <a href="https://karatefaixapreta.com.br/tekki-nidan/" target="_blank" rel="noopener">Karate Faixa Preta — Tekki Nidan</a>, transcrição didática em português, pontos técnicos, Kiai 16º/24º e variação no primeiro Kiai; <a href="https://jkachile.com/kata/" target="_blank" rel="noopener">JKA Chile — tabela de Katas</a>, contagem e Kiai de referência; <a href="https://www.tskc.co.uk/Videos.html" target="_blank" rel="noopener">TSKC — vídeos de kata</a>, confirmação complementar da contagem e dos Kiai.<br>Tekki Sandan — <a href="https://www.jka.or.jp/wp/wp-content/uploads/2017/04/tech_manual_instructor.pdf" target="_blank" rel="noopener">Manual técnico oficial JKA</a>, confirmação de 36 movimentos e destaque para Kiba-dachi; <a href="https://www.kenseikancanada.org/uploads/8/2/8/3/82833080/tekki_sandan.pdf" target="_blank" rel="noopener">Kenseikan Canada — Tekki Sandan</a>, referência técnica para sequência, Soete, técnicas de antebraço, Kosa-ashi e princípio de trapping; <a href="https://www.atsk.co.uk/tekki-sandan" target="_blank" rel="noopener">ATSK — Tekki Sandan</a>, sequência complementar de 36 movimentos; <a href="https://karatefaixapreta.com.br/tekki-sandan/" target="_blank" rel="noopener">Karate Faixa Preta — Tekki Sandan</a>, transcrição didática em português, variações de nomenclatura e Kiai 16º/36º; <a href="https://jkaspain.com/kata/" target="_blank" rel="noopener">JKA Espanha — tabela de Katas</a> e <a href="https://www.tskc.co.uk/Videos.html" target="_blank" rel="noopener">TSKC — vídeos de kata</a>, confirmação complementar da contagem e dos Kiai.
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

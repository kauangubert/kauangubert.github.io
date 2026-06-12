const relationshipData = {
  couple: {
    personA: "Kauan",
    personB: "Isabelly",
    startedAt: "2025-10-25",
    headline: "O nosso amor entrou no top 1 das minhas reproduções da vida.",
    intro:
      "Se o nosso relacionamento virasse um Spotify Wrapped, ele apareceria como album favorito, faixa mais repetida e descoberta que mudou tudo ao mesmo tempo.",
  },
  stats: [
    {
      value: calculateDaysTogether("2025-10-25"),
      label: "dias ao seu lado",
      description:
        "Cada dia contigo virou uma lembrança especial que eu guardo com muito carinho.",
    },
    {
      value: "Top 1",
      label: "lugar no meu coração",
      description:
        "Entre bilhões de pessoas no mundo, você continua ocupando o primeiro lugar.",
    },
    {
      value: "Sem fim",
      label: "motivos para te amar",
      description:
        "Quanto mais o tempo passa, mais razões eu encontro para admirar você.",
    },
    {
      value: "100%",
      label: "parceria perfeita",
      description:
        "Você é a pessoa que torna os dias difíceis mais leves e os dias bons ainda melhores.",
    },
    {
      value: "Nossa música",
      label: "trilha sonora",
      description:
        "Aquela canção que sempre me faz lembrar do seu sorriso e de tudo o que vivemos juntos.",
    },
    {
      value: "Infinito",
      label: "sonhos ao seu lado",
      description:
        "Porque todos os meus planos favoritos têm uma coisa em comum: você.",
    },
  ],

  topFive: [
    {
      title: "Seu sorriso",
      description:
        "O detalhe que consegue melhorar qualquer dia, até os mais difíceis.",
    },
    {
      title: "Seu abraço",
      description: "Meu lugar favorito no mundo continua sendo perto de você.",
    },
    {
      title: "Nossas risadas",
      description:
        "Os momentos mais simples ao seu lado acabam virando os mais especiais.",
    },
    {
      title: "Nossa história",
      description:
        "Cada capítulo que escrevemos juntos é um dos meus favoritos.",
    },
    {
      title: "Você",
      description:
        "Porque no final de tudo, o melhor de todos os meus dias é ter você neles.",
    },
  ],
  moments: [
    {
      date: "Primeiro capítulo",
      title: "O começo de tudo",
      description:
        "Em um sábado qualquer que era pra ser tranquilo, de repente em alguns minutos estava correndo me arrumar para ir conhecer você no cinema. E desde então, se tornou uma das melhores lembranças que tenho na vida.",
    },
    {
      date: "Primeiro encontro",
      title: "A cena que eu repetiria mil vezes",
      description:
        "Cheguei no cinema para comprar o ingresso, e estava lá você, girando kkkkk. Assistimos o filme, enquanto conversávamos e íamos conhecendo um ao outro, lembro que você estava muito linda e cheirosa. Em um momento você dormiu no meu ombro. E após o filme, fomos comer no pimenta, pois eu não queria que a noite acabasse mais para poder ficar mais tempo com você.",
    },
    {
      date: "Momento favorito",
      title: "Quando eu pensei: é ela",
      description:
        "Quando percebi o quão amado estava sendo por você, pelos presentes e surpresas fofas que você me deu, e pelos nossos mesmos objetivos de vida.",
    },
    {
      date: "Hoje",
      title: "A melhor parte ainda está acontecendo",
      description:
        "Meu amor por você cresce a cada dia, e mesmo com alguns desentendimentos que temos de vez em quando, sinto que estamos amadurecendo como casal, e fico muito feliz por você estar do meu lado e me apoiando sempre. Quero continuar amadurecendo, te amando, e aprendendo com você, até o resto de nossas vidas.",
    },
  ],
  gallery: [
    {
      type: "image",
      title: "Nascer do sol após o ano novo",
      description:
        "Quando fomos assistir o nascer do sol depois do pedido de namoro na virada do ano.",
      src: "Images/principal.jpg",
      size: "featured",
    },
    {
      type: "video",
      title: "Montando Lego ao nascer do sol",
      description:
        "De uma surpresa que deu errado e virou um momento único, cheio de risadas e carinho. Pois tudo com você fica melhor.",
      src: "Images/lego.MOV",
      size: "tall",
    },
    {
      type: "image",
      title: "Primeira vez no Boteco da Praia",
      description:
        "A primeira vez que fomos no Boteco da Praia, depois do churrasco na minha casa e você conhecer minha mãe kkkk.",
      src: "Images/boteco.jpg",
      size: "wide",
    },
    {
      type: "image",
      title: "Nossas alianças",
      description:
        "Foto que tiramos das nossas alianças após o nascer do sol no dia em que te pedi em namoro.",
      src: "Images/alianca.jpg",
      size: "quarter",
    },
    {
      type: "image",
      title: "Quando fomos no Polvilhana",
      description:
        "Essa Polvilhana foi inesquecível, não vejo a hora de passar outra com você.",
      src: "Images/polvilhana.jpg",
      size: "quarter",
    },
    {
      type: "video",
      title: "Pôr do sol na Polvilhana",
      description:
        "Em um dos dias que estávamos na Polvilhana, e assistimos o pôr do sol juntos.",
      src: "Images/por_do_sol.mp4",
      size: "tall-sm",
    },
    {
      type: "image",
      title: "Ano Novo 2026",
      description:
        "Nossa foto que tiramos após a virada no ano, e após o pedido de namoro.",
      src: "Images/ano_novo.jpg",
      size: "mid",
    },
    {
      type: "image",
      title: "Matuê juntos",
      description:
        "Quando fomos no show do Matuê juntos, e foi incrível compartilhar esse momento com você.",
      src: "Images/matue.jpg",
      size: "small",
    },
    {
      type: "image",
      title: "Polvilhana",
      description: "Quando fomos em uma tarde antes da Polvilhana.",
      src: "Images/polvilhana1.jpg",
      size: "wide-sm",
    },
    {
      type: "video",
      title: "Maquiagem",
      description:
        "Quando você pediu para eu te maquiar, e você acabou gostando da maquiagem kkkkkk.",
      src: "Images/maquiagem.mp4",
      size: "square",
    },
    {
      type: "image",
      title: "Parma Sushi",
      description:
        "Primeira vez que fomos no Parma, e você estava começando a gostar de sushi.",
      src: "Images/parma.jpg",
      size: "wide-lg",
    },
    {
      type: "image",
      title: "Joseph",
      description:
        "Quando fomos no Joseph no dia da promoção do pastel com vinho, e você estava maravilhosa como sempre.",
      src: "Images/joseph.jpg",
      size: "half",
    },
    {
      type: "image",
      title: "Quando andamos a cavalo juntos",
      description:
        "Quando ficamos a tarde toda andando de cavalo juntos, foi muito divertido, e melhor ainda é ver você feliz fazendo isso.",
      src: "Images/cavalo.jpg",
      size: "half",
    },
    {
      type: "image",
      title: "Selfie ao nascer do sol em Torres",
      description:
        "Quando fomos assistir o nascer do sol em Torres no nosso aniversário de 4 meses de namoro.",
      src: "Images/torres1.jpg",
      size: "featured",
    },
    {
      type: "image",
      title: "Selfie a cavalo",
      description: "Mais uma foto do dia que andamos de cavalo juntos.",
      src: "Images/cavalo1.jpg",
      size: "tall",
    },
    {
      type: "image",
      title: "Nascer do sol em Torres",
      description: "Mais uma foto linda nossa ao nascer do sol em Torres.",
      src: "Images/torres.JPG",
      size: "full",
    },
  ],
  soundtrack: {
    title: "Nossa música oficial",
    artist: "Justin Bieber - As Long As You Love Me",
    reason:
      "Quando ouço essa música, lembro do nosso relacionamento, do quanto a gente se ama, e de como a gente é feliz juntos. Ela tem um significado muito especial pra mim, porque me lembra de você e do nosso amor toda vez que escuto.",
    audioSrc: "Sounds/Justin.mpeg",
    spotifyEmbedUrl: "",
  },
  letter: {
    title: "Para a pessoa que faz minha vida tocar mais bonito",
    body: "Meu amor,\n\nEste é o nosso primeiro Dia dos Namorados, e fazem exatamente 231 dias desde que nos conhecemos naquela noite no cinema.\n\nDesde aquele dia, sinto que algo em mim mudou. Foi um momento inesquecível para mim, porque me lembro perfeitamente da mistura de sentimentos que senti naquela hora: felicidade, nervosismo, ansiedade e aquele frio na barriga que parecia não passar. Foi naquele instante que percebi que estava me apaixonando por você.\n\nDesde então, vivemos muitos momentos especiais juntos. Tivemos a Polvilhana, que foi ainda melhor porque você estava comigo; vimos o nascer do sol diversas vezes; passamos nosso primeiro Natal juntos; celebramos a chegada do Ano Novo e o nosso pedido de namoro; tivemos nossos encontros em restaurantes e pubs; nossas noites de filmes; e, mais recentemente, nossos passeios a cavalo, algo que eu sei o quanto você ama e que estou adorando compartilhar ao seu lado.\n\nMas, mais do que todos esses momentos, o que mais me faz feliz é saber que encontrei alguém com quem posso dividir a vida. Alguém que me faz rir, que me apoia, que me entende e que transforma os dias mais simples em lembranças especiais.\n\nObrigado por cada conversa, cada abraço, cada sorriso e por todos os momentos que construímos juntos até aqui. Você tornou esses últimos meses alguns dos mais felizes da minha vida, e sou muito grato por ter você ao meu lado.\n\nNeste nosso primeiro Dia dos Namorados, quero que você saiba o quanto é importante para mim. E, se os últimos 231 dias foram tão incríveis, mal posso esperar para viver todos os próximos capítulos da nossa história com você.\n\nEu te amo. ❤️\n",
  },
  places: [
    {
      name: "Onde nos conhecemos",
      description: "Foi aqui nesse cinema em que me vi apaixonado por você",
      emoji: "💫",
      lat: -29.10317425151026,
      lng: -49.63749466431398,
    },
    {
      name: "Pedido de namoro",
      description:
        "Foi na virada do ano, com os fogos no céu, e o nervosismo a mil. Vai sempre ficar marcado na memória.",
      emoji: "💍",
      lat: -29.164028,
      lng: -49.580439,
    },
    {
      name: "Lugar favorito do casal",
      description:
        "Começamos a ir recentemente no Joseph, mas já é um dos nossos lugares preferidos para passar o tempo juntos.",
      emoji: "🍺",
      lat: -29.12308744383334,
      lng: -49.645570747692034,
    },
  ],
  quiz: [
    {
      question: "Qual filme assistimos no nosso primeiro encontro?",
      options: ["Jogos Vorazes 3", "Telefone Preto 2", "Sonic 3", "Nosferatu"],
      correct: 1,
      explanation:
        "Foi no cinema assistindo Telefone Preto 2 que te vi pela primeira vez. Fiquei nervoso e feliz ao mesmo tempo.",
    },
    {
      question: "Onde foi o nosso primeiro selinho?",
      options: [
        "Na praia de Balneário Gaivota",
        "Na saída do cinema",
        "No Pimenta Pastéis",
        "Na casa de um amigo",
      ],
      correct: 2,
      explanation:
        "No Pimenta Pastéis, depois do cinema. Um momento simples que nao consigo esquecer.",
    },
    {
      question: "Que presente eu te dei no nosso primeiro mês juntos?",
      options: [
        "Flores e chocolate",
        "Gloss da Francini, chocolate e uma carta",
        "Perfume e carta",
        "Brinco e chocolate",
      ],
      correct: 1,
      explanation:
        "Eu sabia o que você queria e quis fazer você feliz desde o começo. Já era assim em novembro.",
    },
    {
      question: "Onde assistimos o sol nascer quando pedi você em namoro?",
      options: [
        "No mirante da cidade",
        "Na beira da estrada",
        "Na praia, depois da virada",
        "Na varanda de casa",
      ],
      correct: 2,
      explanation:
        "Virada do ano, nossas alianças e o sol nascendo na praia. Não podia ser mais perfeito.",
    },
    {
      question: "Em que dia oficial nos tornamos namorados?",
      options: [
        "25 de outubro de 2025",
        "01 de novembro de 2025",
        "01 de janeiro de 2026",
        "14 de fevereiro de 2026",
      ],
      correct: 2,
      explanation:
        "01/01/26 — começamos o ano novo e nossa história oficial ao mesmo tempo.",
    },
    {
      question: "Como eu costumo te chamar?",
      options: ["Bebe", "Mo ou Mozi", "Florzinha", "Princesa"],
      correct: 1,
      explanation: "Mo ou Mozi — simples, carinhoso e só meu. Assim como você.",
    },
    {
      question: "O que temos feito juntos nos fins de semana ultimamente?",
      options: [
        "Assistir series em casa",
        "Ver o cavalo e andar a cavalo",
        "Ir ao shopping",
        "Jogar jogos de tabuleiro",
      ],
      correct: 1,
      explanation:
        "Eu nem imaginava que ia gostar tanto, mas qualquer coisa ao seu lado vira o programa favorito.",
    },
    {
      question: "Como nos conhecemos?",
      options: [
        "Pelo Tinder",
        "Por uma amiga em comum que nos apresentou pelo Instagram",
        "Numa festa",
        "Na faculdade",
      ],
      correct: 1,
      explanation:
        "Uma amiga teve a melhor ideia da vida quando resolveu nos apresentar. Sou grato a ela todo dia.",
    },
  ],
};

const appState = { audioEnabled: false, spotifyActivated: false };

function calculateDaysTogether(startDate) {
  const start = new Date(`${startDate}T00:00:00`);
  const now = new Date();
  return `${Math.max(1, Math.floor((now - start) / 86400000))}`;
}

function formatDate(dateString) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(`${dateString}T00:00:00`));
}

function setTextContent(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function renderHero() {
  const { couple } = relationshipData;
  setTextContent("coupleTag", `${couple.personA} + ${couple.personB}`);
  setTextContent("heroTitle", `${couple.personA} + ${couple.personB}`);
  setTextContent("heroSubtitle", `${couple.headline} ${couple.intro}`);
  setTextContent("relationshipDate", formatDate(couple.startedAt));
  renderHeroMedia();
}

function renderStats() {
  document.getElementById("statsGrid").innerHTML = relationshipData.stats
    .map(
      (stat) => `
    <article class="stat-card">
      <div><p class="stat-label">${stat.label}</p><div class="stat-value">${stat.value}</div></div>
      <p class="stat-description">${stat.description}</p>
    </article>
  `,
    )
    .join("");
  document.getElementById("topList").innerHTML = relationshipData.topFive
    .map(
      (item, i) => `
    <article class="top-item">
      <div class="top-rank">#${i + 1}</div>
      <div><strong>${item.title}</strong><span>${item.description}</span></div>
    </article>
  `,
    )
    .join("");
}

function renderTimeline() {
  document.getElementById("timelineList").innerHTML = relationshipData.moments
    .map(
      (m) => `
    <article class="timeline-item">
      <div class="timeline-year">${m.date}</div>
      <div><h3 class="timeline-title">${m.title}</h3><p class="timeline-description">${m.description}</p></div>
    </article>
  `,
    )
    .join("");
}

function fileExists(src) {
  if (!src) return false;
  return !src.endsWith("/") && !src.endsWith(".") && !src.includes("undefined");
}

function renderGallery() {
  document.getElementById("galleryGrid").innerHTML = relationshipData.gallery
    .map((item) => {
      const sizeClass = item.size ? `is-${item.size}` : "";
      return `
      <article class="media-card ${sizeClass}">
        <div class="media-visual">
          ${createMediaMarkup(item)}
          <div class="media-overlay">
            <h3 class="media-title">${item.title}</h3>
            <p class="media-description">${item.description}</p>
          </div>
        </div>
      </article>`;
    })
    .join("");
}

function createMediaMarkup(item) {
  const fallback = `<div class="media-placeholder">Adicione o arquivo em<strong>${item.src}</strong></div>`;
  if (!fileExists(item.src)) return fallback;
  if (item.type === "video") {
    return `<video class="media-asset" preload="metadata" playsinline muted loop><source src="${item.src}"></video>${fallback}`;
  }
  return `<img class="media-asset" src="${item.src}" alt="${item.title}">${fallback}`;
}

function renderSoundtrack() {
  const { soundtrack } = relationshipData;
  const audioPlayer = document.getElementById("audioPlayer");
  const spotifyEmbed = document.getElementById("spotifyEmbed");
  setTextContent("trackTitle", soundtrack.title);
  setTextContent("trackArtist", soundtrack.artist);
  setTextContent("trackReason", soundtrack.reason);
  if (soundtrack.audioSrc) {
    audioPlayer.src = soundtrack.audioSrc;
    audioPlayer.style.display = "none";
    const customPlayer = document.getElementById("customPlayer");
    if (customPlayer) customPlayer.style.display = "block";
    setupCustomPlayer(audioPlayer);
  } else {
    audioPlayer.style.display = "none";
  }
  if (soundtrack.spotifyEmbedUrl) {
    spotifyEmbed.src = ensureSpotifyEmbedUrl(soundtrack.spotifyEmbedUrl);
    spotifyEmbed.style.display = "block";
  }
}

function renderLetter() {
  setTextContent("letterTitle", relationshipData.letter.title);
  setTextContent("letterBody", relationshipData.letter.body);
}

function renderHeroMedia() {
  const heroMedia = document.getElementById("heroMedia");
  const featured = relationshipData.gallery[0];
  const featuredMoment =
    relationshipData.moments[2] || relationshipData.moments[0];
  setTextContent("featuredMomentTitle", featuredMoment.title);
  setTextContent("featuredMomentText", featuredMoment.description);
  heroMedia.innerHTML = createMediaMarkup({
    ...featured,
    title: featured?.title || "Momento favorito",
  });
}

function hydrateGalleryFallbacks() {
  document
    .querySelectorAll(".media-visual, .hero-cover-media")
    .forEach((card) => {
      const asset = card.querySelector(".media-asset");
      const placeholder = card.querySelector(".media-placeholder");
      if (!asset || !placeholder) return;
      const revealAsset = () => {
        asset.classList.add("is-ready");
        placeholder.classList.add("is-hidden");
      };
      const showPlaceholder = () => {
        asset.remove();
        placeholder.classList.remove("is-hidden");
      };
      asset.addEventListener("error", showPlaceholder, { once: true });
      if (asset.tagName === "VIDEO") {
        asset.addEventListener("loadeddata", revealAsset, { once: true });
      } else {
        asset.addEventListener("load", revealAsset, { once: true });
      }
    });
}

function setupVideoAutoplay() {
  const videoObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    },
    { threshold: 0.35 },
  );
  document
    .querySelectorAll(".gallery-grid video, .hero-cover-media video")
    .forEach((video) => {
      videoObserver.observe(video);
    });
}

function setupScrollObserver() {
  const sections = [...document.querySelectorAll(".panel")];
  const dots = [...document.querySelectorAll(".progress-dot")];
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          dots.forEach((dot) => {
            dot.classList.toggle(
              "active",
              dot.dataset.target === entry.target.id,
            );
          });
        }
      });
    },
    { threshold: 0.15 },
  );
  sections.forEach((section) => observer.observe(section));
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      document
        .getElementById(dot.dataset.target)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });
}

function setupMusicToggle() {
  const toggleButton = document.getElementById("toggleMusic");
  const audioPlayer = document.getElementById("audioPlayer");
  const musicSection = document.getElementById("music");
  const spotifyEmbed = document.getElementById("spotifyEmbed");
  const { soundtrack } = relationshipData;
  toggleButton.addEventListener("click", async () => {
    if (!audioPlayer.src && !soundtrack.spotifyEmbedUrl) {
      toggleButton.textContent = "Adicione uma musica primeiro";
      return;
    }
    try {
      if (audioPlayer.src) {
        if (audioPlayer.paused) {
          await audioPlayer.play();
          musicSection.classList.add("is-playing");
          toggleButton.textContent = "Pausar trilha";
          appState.audioEnabled = true;
          document
            .getElementById("cpPlayIcon")
            ?.style.setProperty("display", "none");
          document
            .getElementById("cpPauseIcon")
            ?.style.removeProperty("display");
          document.getElementById("cpWaveform")?.classList.add("is-playing");
        } else {
          audioPlayer.pause();
          musicSection.classList.remove("is-playing");
          toggleButton.textContent = "Tocar trilha";
          appState.audioEnabled = false;
          document
            .getElementById("cpPlayIcon")
            ?.style.removeProperty("display");
          document
            .getElementById("cpPauseIcon")
            ?.style.setProperty("display", "none");
          document.getElementById("cpWaveform")?.classList.remove("is-playing");
        }
      } else {
        spotifyEmbed.src = ensureSpotifyEmbedUrl(
          soundtrack.spotifyEmbedUrl,
          true,
        );
        musicSection.classList.add("is-playing");
        musicSection.scrollIntoView({ behavior: "smooth", block: "center" });
        toggleButton.textContent = "▶ Clique no play abaixo";
        appState.spotifyActivated = true;
        const hint = document.getElementById("spotifyHint");
        if (hint) {
          hint.style.opacity = "1";
          hint.style.transform = "translateY(0)";
          spotifyEmbed.addEventListener(
            "mouseenter",
            () => {
              hint.style.opacity = "0";
            },
            { once: true },
          );
          setTimeout(() => {
            hint.style.opacity = "0";
          }, 6000);
        }
      }
    } catch (error) {
      toggleButton.textContent = "Clique no play do Spotify abaixo";
    }
  });
  audioPlayer.addEventListener("pause", () => {
    musicSection.classList.remove("is-playing");
    if (appState.audioEnabled) toggleButton.textContent = "Tocar trilha";
  });
  audioPlayer.addEventListener("play", () => {
    musicSection.classList.add("is-playing");
    toggleButton.textContent = "Pausar trilha";
  });
}

function ensureSpotifyEmbedUrl(url, autoplay = false) {
  const parsedUrl = new URL(url);
  if (autoplay) {
    parsedUrl.searchParams.set("autoplay", "1");
  } else if (!parsedUrl.searchParams.has("utm_source")) {
    parsedUrl.searchParams.set("utm_source", "generator");
  }
  return parsedUrl.toString();
}

function setupLiveCounter() {
  const startDate = new Date(relationshipData.couple.startedAt + "T00:00:00");
  const pad = (n, len = 2) => String(n).padStart(len, "0");
  function tick() {
    const diff = Date.now() - startDate.getTime();
    const totalSecs = Math.floor(diff / 1000);
    const secs = totalSecs % 60;
    const mins = Math.floor(totalSecs / 60) % 60;
    const hours = Math.floor(totalSecs / 3600) % 24;
    const days = Math.floor(totalSecs / 86400);
    const dEl = document.getElementById("cntDays");
    const hEl = document.getElementById("cntHours");
    const mEl = document.getElementById("cntMinutes");
    const sEl = document.getElementById("cntSeconds");
    if (dEl) dEl.textContent = pad(days, 3);
    if (hEl) hEl.textContent = pad(hours);
    if (mEl) mEl.textContent = pad(mins);
    if (sEl) {
      const prev = sEl.textContent;
      sEl.textContent = pad(secs);
      if (prev !== pad(secs)) {
        sEl.classList.remove("tick-anim");
        void sEl.offsetWidth;
        sEl.classList.add("tick-anim");
      }
    }
  }
  tick();
  setInterval(tick, 1000);
}

function renderQuiz() {
  const container = document.getElementById("quizContainer");
  if (!container) return;
  const questions = relationshipData.quiz;
  let current = 0,
    score = 0,
    answered = false;
  function renderQuestion() {
    const q = questions[current];
    container.innerHTML = `
      <div class="quiz-progress"><div class="quiz-progress-bar" style="width:${(current / questions.length) * 100}%"></div></div>
      <p class="quiz-counter">Pergunta ${current + 1} de ${questions.length}</p>
      <h3 class="quiz-question">${q.question}</h3>
      <div class="quiz-options">${q.options.map((opt, i) => `<button class="quiz-option" data-index="${i}">${opt}</button>`).join("")}</div>
      <div class="quiz-feedback" id="quizFeedback"></div>`;
    container.querySelectorAll(".quiz-option").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (answered) return;
        answered = true;
        const chosen = parseInt(btn.dataset.index);
        const correct = q.correct;
        const feedback = document.getElementById("quizFeedback");
        container.querySelectorAll(".quiz-option").forEach((b, i) => {
          b.disabled = true;
          if (i === correct) b.classList.add("is-correct");
          else if (i === chosen) b.classList.add("is-wrong");
        });
        if (chosen === correct) {
          score++;
          feedback.innerHTML = `<span class="quiz-icon">✦</span> Acertou! ${q.explanation}`;
          feedback.classList.add("is-correct");
        } else {
          feedback.innerHTML = `<span class="quiz-icon">♡</span> Quase... ${q.explanation}`;
          feedback.classList.add("is-wrong");
        }
        setTimeout(() => {
          current++;
          answered = false;
          if (current < questions.length) {
            renderQuestion();
          } else {
            renderResult();
          }
        }, 1800);
      });
    });
  }
  function renderResult() {
    const pct = Math.round((score / questions.length) * 100);
    const msgs = [
      { min: 0, icon: "♡", text: "Ainda temos muito para descobrir juntos!" },
      {
        min: 40,
        icon: "✦",
        text: "Você presta atenção nos detalhes que importam.",
      },
      { min: 70, icon: "✿", text: "Você conhece bem o nosso mundo!" },
      {
        min: 90,
        icon: "🌹",
        text: "Você é minha pessoa favorita e prova isso aqui.",
      },
    ];
    const msg = [...msgs].reverse().find((m) => pct >= m.min);
    container.innerHTML = `
      <div class="quiz-result">
        <div class="quiz-result-icon">${msg.icon}</div>
        <div class="quiz-result-score">${score}<span>/${questions.length}</span></div>
        <p class="quiz-result-msg">${msg.text}</p>
        <button class="secondary-button quiz-restart" onclick="location.reload()">Tentar de novo ↺</button>
      </div>`;
  }
  renderQuestion();
}

function setupIntro() {
  const screen = document.getElementById("introScreen");
  if (!screen) return;
  const { couple } = relationshipData;
  const titleEl = document.getElementById("introTitle");
  const subEl = document.getElementById("introSub");
  const bar = document.getElementById("introBar");
  const particles = document.getElementById("introParticles");
  const symbols = ["♥", "✦", "✿", "♡", "❋", "✶"];
  for (let i = 0; i < 30; i++) {
    const p = document.createElement("span");
    p.className = "intro-particle";
    p.textContent = symbols[i % symbols.length];
    p.style.cssText = `left:${Math.random() * 100}%;top:${Math.random() * 100}%;font-size:${0.6 + Math.random() * 1.2}rem;animation-delay:${Math.random() * 2}s;animation-duration:${2 + Math.random() * 3}s;opacity:${0.2 + Math.random() * 0.5};`;
    particles.appendChild(p);
  }
  const fullName = `${couple.personA} & ${couple.personB}`;
  let i = 0;
  const typeInterval = setInterval(() => {
    titleEl.textContent = fullName.slice(0, ++i);
    if (i >= fullName.length) clearInterval(typeInterval);
  }, 80);
  setTimeout(
    () => {
      subEl.textContent = "um presente só pra você";
      subEl.style.opacity = "1";
    },
    fullName.length * 80 + 200,
  );
  setTimeout(() => {
    bar.style.width = "100%";
  }, 300);
  const dismiss = () => {
    screen.classList.add("intro-out");
    setTimeout(() => {
      screen.style.display = "none";
    }, 800);
  };
  setTimeout(dismiss, 3800);
  screen.addEventListener("click", dismiss);
}

function renderMap() {
  const places = relationshipData.places;
  if (!places || places.length === 0) return;
  const container = document.getElementById("mapContainer");
  const placeholder = document.getElementById("mapPlaceholder");
  const pinsList = document.getElementById("mapPins");
  if (!container) return;
  pinsList.innerHTML = places
    .map(
      (place, i) => `
    <div class="map-pin-card" data-index="${i}">
      <div class="map-pin-emoji">${place.emoji}</div>
      <div class="map-pin-info">
        <strong class="map-pin-name">${place.name}</strong>
        <p class="map-pin-desc">${place.description}</p>
      </div>
    </div>`,
    )
    .join("");
  if (!document.getElementById("leafletCss")) {
    const link = document.createElement("link");
    link.id = "leafletCss";
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(link);
  }
  const script = document.createElement("script");
  script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
  script.onload = () => {
    placeholder.style.display = "none";
    const mapEl = document.createElement("div");
    mapEl.id = "leafletMap";
    mapEl.style.cssText =
      "width:100%;height:380px;border-radius:20px;overflow:hidden;margin-bottom:1rem;";
    container.insertBefore(mapEl, pinsList);
    const center = [places[0].lat, places[0].lng];
    const map = L.map("leafletMap", {
      zoomControl: true,
      scrollWheelZoom: false,
    }).setView(center, 14);
    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
      { attribution: "© OpenStreetMap, © CARTO", maxZoom: 18 },
    ).addTo(map);
    places.forEach((place, i) => {
      const icon = L.divIcon({
        html: `<div class="map-marker">${place.emoji}</div>`,
        className: "",
        iconSize: [44, 44],
        iconAnchor: [22, 44],
      });
      const marker = L.marker([place.lat, place.lng], { icon }).addTo(map);
      marker.bindPopup(
        `<div class="map-popup"><strong>${place.name}</strong><p>${place.description}</p></div>`,
      );
      marker.on("click", () => {
        document
          .querySelectorAll(".map-pin-card")
          .forEach((c) => c.classList.remove("is-active"));
        document
          .querySelectorAll(".map-pin-card")
          [i]?.classList.add("is-active");
      });
    });
    if (places.length > 1) {
      const bounds = L.latLngBounds(places.map((p) => [p.lat, p.lng]));
      map.fitBounds(bounds, { padding: [40, 40] });
    }
  };
  document.head.appendChild(script);
}

function setupTypewriterLetter() {
  const letterSection = document.getElementById("letter");
  const letterBody = document.getElementById("letterBody");
  if (!letterSection || !letterBody) return;
  const text = relationshipData.letter.body;
  let started = false;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !started) {
          started = true;
          letterBody.textContent = "";
          let i = 0;
          const speed = Math.max(18, Math.min(40, 3000 / text.length));
          const type = () => {
            if (i < text.length) {
              letterBody.textContent += text[i++];
              letterBody.parentElement.scrollTop =
                letterBody.parentElement.scrollHeight;
              setTimeout(type, speed);
            } else {
              letterBody.classList.add("typewriter-done");
            }
          };
          setTimeout(type, 400);
        }
      });
    },
    { threshold: 0.4 },
  );
  observer.observe(letterSection);
}

function setupCustomPlayer(audio) {
  const playBtn = document.getElementById("cpPlay");
  const playIcon = document.getElementById("cpPlayIcon");
  const pauseIcon = document.getElementById("cpPauseIcon");
  const seekBar = document.getElementById("cpSeek");
  const volBar = document.getElementById("cpVolume");
  const currentEl = document.getElementById("cpCurrent");
  const durationEl = document.getElementById("cpDuration");
  const waveform = document.getElementById("cpWaveform");
  const musicSection = document.getElementById("music");
  const toggleBtn = document.getElementById("toggleMusic");
  if (!playBtn) return;
  const fmt = (s) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };
  const setPlaying = (playing) => {
    playIcon.style.display = playing ? "none" : "";
    pauseIcon.style.display = playing ? "" : "none";
    waveform.classList.toggle("is-playing", playing);
    musicSection.classList.toggle("is-playing", playing);
    if (toggleBtn)
      toggleBtn.textContent = playing ? "Pausar trilha" : "Tocar trilha";
    appState.audioEnabled = playing;
  };
  playBtn.addEventListener("click", async () => {
    if (audio.paused) {
      await audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  });
  audio.addEventListener("play", () => setPlaying(true));
  audio.addEventListener("pause", () => setPlaying(false));
  audio.addEventListener("ended", () => setPlaying(false));
  audio.addEventListener("loadedmetadata", () => {
    durationEl.textContent = fmt(audio.duration);
    seekBar.max = audio.duration;
  });
  audio.addEventListener("timeupdate", () => {
    currentEl.textContent = fmt(audio.currentTime);
    seekBar.value = audio.currentTime;
  });
  seekBar.addEventListener("input", () => {
    audio.currentTime = seekBar.value;
  });
  volBar.addEventListener("input", () => {
    audio.volume = volBar.value;
  });
}

function forceRevealVisible() {
  setTimeout(() => {
    document.querySelectorAll(".reveal:not(.visible)").forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("visible");
      }
    });
  }, 300);
}

function init() {
  relationshipData.stats[0].value = calculateDaysTogether(
    relationshipData.couple.startedAt,
  );
  renderHero();
  renderStats();
  renderTimeline();
  renderGallery();
  renderSoundtrack();
  renderLetter();
  hydrateGalleryFallbacks();
  setupScrollObserver();
  setupMusicToggle();
  setupVideoAutoplay();
  setupLiveCounter();
  renderQuiz();
  renderMap();
  setupTypewriterLetter();
  forceRevealVisible();
  setupIntro();
}

init();

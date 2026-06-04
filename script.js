const relationshipData = {
  couple: {
    personA: "Kauan",
    personB: "Isabelly",
    startedAt: "2025-10-25",
    headline: "O nosso amor entrou no top 1 das minhas reproducoes da vida.",
    intro:
      "Se o nosso relacionamento virasse um Spotify Wrapped, ele apareceria como album favorito, faixa mais repetida e descoberta que mudou tudo ao mesmo tempo.",
  },
  stats: [
    {
      value: calculateDaysTogether("2025-10-25"),
      label: "dias de nos",
      description:
        "Tempo suficiente para colecionar risadas, saudades, encontros e uma quantidade enorme de memorias lindas.",
    },
    {
      value: "Top 1",
      label: "pessoa favorita",
      description:
        "Voce segue invicta no ranking mais importante do universo inteiro.",
    },
    {
      value: "Replay infinito",
      label: "categoria oficial",
      description:
        "Nossos momentos juntos entram na lista das lembrancas que eu mais quero reviver.",
    },
    {
      value: "100%",
      label: "quimica absurda",
      description:
        "Entre carinho, parceria e admiracao, a nota continua la em cima.",
    },
    {
      value: "1 trilha",
      label: "musica do casal",
      description:
        "Aquela musica que sempre puxa a memoria do teu sorriso e transforma qualquer dia comum em cena de filme.",
    },
    {
      value: "Infinito",
      label: "planos contigo",
      description:
        "Porque quando o assunto e futuro, eu sempre penso em te ter em cada capitulo.",
    },
  ],
  topFive: [
    {
      title: "Paz",
      description: "Porque perto de voce ate o caos fica mais leve.",
    },
    {
      title: "Saudade boa",
      description: "Daquelas que so confirmam o quanto voce faz falta.",
    },
    {
      title: "Risada sincera",
      description: "As conversas contigo sempre rendem os melhores momentos.",
    },
    {
      title: "Borboletas",
      description: "O frio na barriga segue funcionando direitinho.",
    },
    {
      title: "Admiração",
      description: "Voce continua me encantando nos detalhes.",
    },
  ],
  moments: [
    {
      date: "Primeiro capitulo",
      title: "O comeco de tudo",
      description:
        "Conta aqui como voces se aproximaram, o que te chamou atencao nela e por que aquele momento virou o inicio da historia de voces.",
    },
    {
      date: "Primeiro encontro",
      title: "A cena que eu repetiria mil vezes",
      description:
        "Descreva o lugar, o clima, o que voces fizeram e o detalhe que te fez perceber que ela era especial.",
    },
    {
      date: "Momento favorito",
      title: "Quando eu pensei: e ela",
      description:
        "Pode ser uma viagem, uma conversa, um abraco, uma risada ou um dia simples que ficou gigante para voce.",
    },
    {
      date: "Hoje",
      title: "A melhor parte ainda esta acontecendo",
      description:
        "Fecha a timeline dizendo o que voce mais ama no relacionamento de voces hoje.",
    },
  ],
  gallery: [
    {
      type: "image",
      title: "Nascer do sol após o ano novo",
      description: "Quando fomos assistir o nascer do sol depois do pedido de namoro na virada do ano.",
      src: "images/principal.jpg",
      size: "featured",
    },
    {
      type: "video",
      title: "Montando Lego ao nascer do sol",
      description: "De uma surpresa que deu errado e virou um momento unico, cheio de risadas e carinho. Pois tudo com você fica melhor.",
      src: "images/lego.mov",
      size: "tall",
    },
    {
      type: "image",
      title: "Primeira vez no Boteco da Praia",
      description: "A primeira vez que fomos no Boteco da Praia, depois do churrasco na minha casa e você conhecer minha mãe kkkk.",
      src: "images/boteco.jpg",
      size: "wide",
    },
    {
      type: "image",
      title: "Nossas alianças",
      description: "Foto que tiramos das nossas alianças após o nascer do sol no dia em que te pedi em namoro.",
      src: "images/alianca.jpg",
      size: "quarter",
    },
    {
      type: "image",
      title: "Quando fomos no Polvilhana",
      description: "Essa Polvilhana foi inesquecível, não vejo a hora de passar outra com você.",
      src: "images/polvilhana.jpg",
      size: "quarter",
    },
    {
      type: "video",
      title: "Pôr do sol na Polvilhana",
      description: "Em um dos dias que estavamos na Polvilhana, e assistimos o pôr do sol juntos.",
      src: "images/por_do_sol.mp4",
      size: "tall-sm",
    },
    {
      type: "image",
      title: "Ano Novo 2026",
      description: "Nossa foto que tiramos após a virada no ano, e após o pedido de namoro.",
      src: "images/ano_novo.jpg",
      size: "mid",
    },
    {
      type: "image",
      title: "Matuê juntos",
      description: "Quando fomos no show do Matuê juntos, e foi incrível compartilhar esse momento com você.",
      src: "images/matue.jpg",
      size: "small",
    },
    {
      type: "image",
      title: "Polvilhana",
      description: "Quando fomos em um dia a tarde antes da Polvilhana.",
      src: "images/polvilhana1.jpg",
      size: "wide-sm",
    },
    {
      type: "video",
      title: "Maquiagem",
      description: "Quando você pediu para eu te maquiar, e você acabou gostando da maquiagem kkkkkk",
      src: "images/maquiagem.mp4",
      size: "square",
    },
    {
      type: "image",
      title: "Parma Sushi",
      description: "Primeira vez que fomos no Parma, e você estava começando a gostar de sushi.",
      src: "images/parma.jpg",
      size: "wide-lg",
    },
    {
      type: "image",
      title: "Joseph",
      description: "Quando fomo no Joseph no dia da promoção do pastel com vinho, e você estava maravilhosa como sempre.",
      src: "images/joseph.jpg",
      size: "half",
    },
    {
      type: "image",
      title: "Quando andamos a cavalo juntos",
      description: "Quando ficamos a tarde toda andando de cavalo juntos, foi muito divertido, e melhor ainda é ver você feliz fazendo isso.",
      src: "images/cavalo.jpg",
      size: "half",
    },
    {
      type: "image",
      title: "Selfie ao nascer do sol em Torres",
      description: "Quando fomos assistir o nascer do sol em Torres no nosso aniversário de 4 meses de namoro.",
      src: "images/torres1.jpg",
      size: "featured",
    },
    {
      type: "image",
      title: "Selfie a cavalo",
      description: "Mais uma foto do dia que andamos de cavalo juntos.",
      src: "images/cavalo1.jpg",
      size: "tall",
    },
    {
      type: "image",
      title: "Nascer do sol em Torres",
      description: "Mais uma foto linda nossa ao nascer do sol em Torres.",
      src: "images/torres.jpg",
      size: "full",
    },
  ],
  soundtrack: {
    title: "Nossa musica oficial",
    artist: "Justin Bieber - As Long As You Love Me",
    reason:
      "Escreva aqui por que essa musica representa voces. Pode ser a letra, a epoca em que voces ouviam juntos ou a memoria que ela desperta.",
    audioSrc: "Sounds/Justin.mpeg",
    spotifyEmbedUrl:
      "",
  },
  letter: {
    title: "Para a pessoa que faz minha vida tocar mais bonito",
    body: "Escreva aqui a sua mensagem final. Vale agradecer por quem ela e, lembrar detalhes que so voces entendem, dizer o quanto ama e terminar com algo bem de voces. Esse espaco foi pensado para ser a ultima faixa do site: a parte que fica ecoando depois que tudo termina.",
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
      description: "Foi na virada do ano, com os fogos no céu, e o nervosismo a mil. Vai sempre ficar marcado na memória.",
      emoji: "💍",
      lat: -29.164028,
      lng: -49.580439,
    },
    {
      name: "Lugar favorito do casal",
      description: "Começamos a ir recentemente no Joseph, mas ja é um dos nossos lugares preferidos para passar o tempo juntos.",
      emoji: "🍺",
      lat: -29.12308744383334,
      lng: -49.645570747692034,
    },
  ],
  quiz: [
    {
      question: "Onde foi o nosso primeiro encontro?",
      options: ["Resposta A", "Resposta B", "Resposta C", "Resposta D"],
      correct: 0,
      explanation: "Coloque aqui uma frase carinhosa sobre esse momento.",
    },
    {
      question: "Qual foi a primeira musica que ouvimos juntos?",
      options: ["Resposta A", "Resposta B", "Resposta C", "Resposta D"],
      correct: 1,
      explanation: "Coloque aqui uma frase carinhosa sobre esse momento.",
    },
    {
      question: "Qual e o prato favorito do casal?",
      options: ["Resposta A", "Resposta B", "Resposta C", "Resposta D"],
      correct: 2,
      explanation: "Coloque aqui uma frase carinhosa sobre esse momento.",
    },
    {
      question: "Em que mes comemoramos nosso primeiro mes juntos?",
      options: ["Resposta A", "Resposta B", "Resposta C", "Resposta D"],
      correct: 0,
      explanation: "Coloque aqui uma frase carinhosa sobre esse momento.",
    },
    {
      question: "Qual e o apelido carinhoso que uso para te chamar?",
      options: ["Resposta A", "Resposta B", "Resposta C", "Resposta D"],
      correct: 3,
      explanation: "Coloque aqui uma frase carinhosa sobre esse momento.",
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
            <div>
                <p class="stat-label">${stat.label}</p>
                <div class="stat-value">${stat.value}</div>
            </div>
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
            <div>
                <strong>${item.title}</strong>
                <span>${item.description}</span>
            </div>
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
            <div>
                <h3 class="timeline-title">${m.title}</h3>
                <p class="timeline-description">${m.description}</p>
            </div>
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
            </article>
        `;
    })
    .join("");
}

function createMediaMarkup(item) {
  const fallback = `<div class="media-placeholder">Adicione o arquivo em<strong>${item.src}</strong></div>`;
  if (!fileExists(item.src)) return fallback;
  if (item.type === "video") {
    return `
            <video class="media-asset" preload="metadata" playsinline muted loop>
                <source src="${item.src}">
            </video>
            ${fallback}
        `;
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
    audioPlayer.style.display = "none"; // hidden — custom player used instead
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

// Auto-play gallery videos when they scroll into view, pause when they leave
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
        // Show hint arrow pointing at the Spotify embed
        const hint = document.getElementById("spotifyHint");
        if (hint) {
          hint.style.opacity = "1";
          hint.style.transform = "translateY(0)";
          // Hide hint after user interacts with iframe area
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

// ── Live counter ──────────────────────────────────────
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
        void sEl.offsetWidth; // reflow
        sEl.classList.add("tick-anim");
      }
    }
  }
  tick();
  setInterval(tick, 1000);
}

// ── Quiz ───────────────────────────────────────────────
function renderQuiz() {
  const container = document.getElementById("quizContainer");
  if (!container) return;
  const questions = relationshipData.quiz;
  let current = 0;
  let score = 0;
  let answered = false;

  function renderQuestion() {
    const q = questions[current];
    container.innerHTML = `
            <div class="quiz-progress">
                <div class="quiz-progress-bar" style="width:${(current / questions.length) * 100}%"></div>
            </div>
            <p class="quiz-counter">Pergunta ${current + 1} de ${questions.length}</p>
            <h3 class="quiz-question">${q.question}</h3>
            <div class="quiz-options">
                ${q.options
                  .map(
                    (opt, i) => `
                    <button class="quiz-option" data-index="${i}">${opt}</button>
                `,
                  )
                  .join("")}
            </div>
            <div class="quiz-feedback" id="quizFeedback"></div>
        `;

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
        text: "Voce presta atenção nos detalhes que importam.",
      },
      { min: 70, icon: "✿", text: "Voce conhece bem o nosso mundo!" },
      {
        min: 90,
        icon: "🌹",
        text: "Voce e minha pessoa favorita e prova isso aqui.",
      },
    ];
    const msg = [...msgs].reverse().find((m) => pct >= m.min);
    container.innerHTML = `
            <div class="quiz-result">
                <div class="quiz-result-icon">${msg.icon}</div>
                <div class="quiz-result-score">${score}<span>/${questions.length}</span></div>
                <p class="quiz-result-msg">${msg.text}</p>
                <button class="secondary-button quiz-restart" onclick="location.reload()">Tentar de novo ↺</button>
            </div>
        `;
  }

  renderQuestion();
}

// ── Intro screen ──────────────────────────────────────
function setupIntro() {
  const screen = document.getElementById("introScreen");
  if (!screen) return;

  const { couple } = relationshipData;
  const titleEl = document.getElementById("introTitle");
  const subEl = document.getElementById("introSub");
  const bar = document.getElementById("introBar");
  const particles = document.getElementById("introParticles");

  // Spawn particles
  const symbols = ["♥", "✦", "✿", "♡", "❋", "✶"];
  for (let i = 0; i < 30; i++) {
    const p = document.createElement("span");
    p.className = "intro-particle";
    p.textContent = symbols[i % symbols.length];
    p.style.cssText = `
            left:${Math.random() * 100}%;
            top:${Math.random() * 100}%;
            font-size:${0.6 + Math.random() * 1.2}rem;
            animation-delay:${Math.random() * 2}s;
            animation-duration:${2 + Math.random() * 3}s;
            opacity:${0.2 + Math.random() * 0.5};
        `;
    particles.appendChild(p);
  }

  // Typewrite the couple name
  const fullName = `${couple.personA} & ${couple.personB}`;
  let i = 0;
  const typeInterval = setInterval(() => {
    titleEl.textContent = fullName.slice(0, ++i);
    if (i >= fullName.length) clearInterval(typeInterval);
  }, 80);

  // Subtitle fade in
  setTimeout(
    () => {
      subEl.textContent = "um presente só pra você";
      subEl.style.opacity = "1";
    },
    fullName.length * 80 + 200,
  );

  // Progress bar
  setTimeout(() => {
    bar.style.width = "100%";
  }, 300);

  // Dismiss
  const dismiss = () => {
    screen.classList.add("intro-out");
    setTimeout(() => {
      screen.style.display = "none";
    }, 800);
  };

  setTimeout(dismiss, 3800);
  screen.addEventListener("click", dismiss);
}

// ── Map ────────────────────────────────────────────────
function renderMap() {
  const places = relationshipData.places;
  if (!places || places.length === 0) return;

  const container = document.getElementById("mapContainer");
  const placeholder = document.getElementById("mapPlaceholder");
  const pinsList = document.getElementById("mapPins");
  if (!container) return;

  // Check if coords are still defaults (São Paulo center)
  const hasRealCoords = places.some(
    (p) => p.lat !== -23.5505 || p.lng !== -46.6333,
  );

  // Always render the pins list
  pinsList.innerHTML = places
    .map(
      (place, i) => `
        <div class="map-pin-card" data-index="${i}">
            <div class="map-pin-emoji">${place.emoji}</div>
            <div class="map-pin-info">
                <strong class="map-pin-name">${place.name}</strong>
                <p class="map-pin-desc">${place.description}</p>
            </div>
        </div>
    `,
    )
    .join("");

  // Try to load Leaflet map
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
      {
        attribution: "© OpenStreetMap, © CARTO",
        maxZoom: 18,
      },
    ).addTo(map);

    places.forEach((place, i) => {
      const icon = L.divIcon({
        html: `<div class="map-marker">${place.emoji}</div>`,
        className: "",
        iconSize: [44, 44],
        iconAnchor: [22, 44],
      });
      const marker = L.marker([place.lat, place.lng], { icon }).addTo(map);
      marker.bindPopup(`
                <div class="map-popup">
                    <strong>${place.name}</strong>
                    <p>${place.description}</p>
                </div>
            `);

      // Highlight card on marker click
      marker.on("click", () => {
        document
          .querySelectorAll(".map-pin-card")
          .forEach((c) => c.classList.remove("is-active"));
        document
          .querySelectorAll(".map-pin-card")
          [i]?.classList.add("is-active");
      });
    });

    // Fit all markers
    if (places.length > 1) {
      const bounds = L.latLngBounds(places.map((p) => [p.lat, p.lng]));
      map.fitBounds(bounds, { padding: [40, 40] });
    }
  };
  document.head.appendChild(script);
}

// ── Typewriter letter ──────────────────────────────────
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
              // Auto-scroll within the card if needed
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

// ── Custom audio player ───────────────────────────────
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

// Fallback: reveal any panel already in viewport on page load
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

init();

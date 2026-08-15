// ============================================================
// LE CARNET OUGANDAIS — IMAGE SYSTEM UPGRADE
// Copy the blocks below into script.js as instructed by the
// comments. This adds:
// - any photo aspect ratio
// - captions
// - clickable story photos
// - image lightbox
// - Copy Link / Share / WhatsApp
// - shareable story hash links
// ============================================================

// ------------------------------------------------------------
// 1. ADD THIS IMMEDIATELY BEFORE buildCarousel()
// ------------------------------------------------------------
const imageCaptions = {
  culture: {
    1: { fr: "Une scène de vie en Ouganda.", en: "A scene from everyday life in Uganda." },
    2: { fr: "Ajoutez votre légende ici.", en: "Add your caption here." }
  },
  voyages: {
    1: { fr: "Ajoutez votre légende ici.", en: "Add your caption here." },
    2: { fr: "Ajoutez votre légende ici.", en: "Add your caption here." }
  },
  gastronomie: {
    1: { fr: "Ajoutez votre légende ici.", en: "Add your caption here." }
  }
};

const storyImageCaptions = {
  culture: {
    1: { fr: "Un dimanche en Ouganda.", en: "A Sunday in Uganda." },
    2: { fr: "Une autre facette de la vie ougandaise.", en: "Another side of Ugandan life." }
  },
  voyages: {
    1: { fr: "Ajoutez la légende du premier récit.", en: "Add the first story caption." },
    2: { fr: "Ajoutez la légende du deuxième récit.", en: "Add the second story caption." }
  }
};


// ------------------------------------------------------------
// 2. REPLACE THE ENTIRE EXISTING buildCarousel() FUNCTION
// ------------------------------------------------------------
function buildCarousel(container, catKey) {
  container.innerHTML = "";

  const existingCaption = container.nextElementSibling;
  if (existingCaption && existingCaption.classList.contains("carousel-caption")) {
    existingCaption.remove();
  }

  const track = document.createElement("div");
  track.className = "carousel-track";

  const captions = imageCaptions[catKey] || {};

  for (let i = 1; i <= 8; i++) {
    const slide = document.createElement("div");
    slide.className = "carousel-slide";

    const img = document.createElement("img");
    const captionData = captions[i] || {};
    const lang = document.documentElement.getAttribute("data-lang") || "fr";
    const captionText = captionData[lang] || "";

    img.alt = captionText;
    img.src = `images/${catKey}-${i}.jpg`;

    // NEVER crop, stretch or distort the original photograph.
    img.style.width = "100%";
    img.style.height = "auto";
    img.style.maxHeight = "70vh";
    img.style.objectFit = "contain";
    img.style.display = "block";

    img.onerror = function () {
      slide.innerHTML = "";
      slide.textContent = `Photo ${i} / 8`;
    };

    slide.appendChild(img);
    track.appendChild(slide);
  }

  const prevBtn = document.createElement("button");
  prevBtn.className = "carousel-nav carousel-prev";
  prevBtn.setAttribute("aria-label", "Photo précédente");
  prevBtn.innerHTML = "‹";

  const nextBtn = document.createElement("button");
  nextBtn.className = "carousel-nav carousel-next";
  nextBtn.setAttribute("aria-label", "Photo suivante");
  nextBtn.innerHTML = "›";

  const dots = document.createElement("div");
  dots.className = "carousel-dots";

  const dotEls = [];

  for (let i = 0; i < 8; i++) {
    const dot = document.createElement("button");
    dot.className = "carousel-dot" + (i === 0 ? " is-active" : "");
    dot.setAttribute("aria-label", `Aller à la photo ${i + 1}`);
    dots.appendChild(dot);
    dotEls.push(dot);
  }

  let index = 0;

  const caption = document.createElement("p");
  caption.className = "carousel-caption";

  function goTo(i) {
    index = (i + 8) % 8;

    track.style.transform = `translateX(-${index * 100}%)`;

    dotEls.forEach((d, di) => {
      d.classList.toggle("is-active", di === index);
    });

    const activeCaption = captions[index + 1] || {};
    const activeLang = document.documentElement.getAttribute("data-lang") || "fr";
    caption.textContent = activeCaption[activeLang] || "";
  }

  prevBtn.addEventListener("click", () => goTo(index - 1));
  nextBtn.addEventListener("click", () => goTo(index + 1));

  dotEls.forEach((d, di) => {
    d.addEventListener("click", () => goTo(di));
  });

  container.appendChild(track);
  container.appendChild(prevBtn);
  container.appendChild(nextBtn);
  container.appendChild(dots);

  const firstCaption = captions[1] || {};
  const firstLang = document.documentElement.getAttribute("data-lang") || "fr";
  caption.textContent = firstCaption[firstLang] || "";

  container.insertAdjacentElement("afterend", caption);
}


// ------------------------------------------------------------
// 3. ADD THESE HELPER FUNCTIONS BEFORE initCultureModal()
// ------------------------------------------------------------
function storyUrl(catKey, storyIndex) {
  return `${window.location.origin}${window.location.pathname}#${catKey}-story-${storyIndex}`;
}

function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  }

  const area = document.createElement("textarea");
  area.value = text;
  area.style.position = "fixed";
  area.style.opacity = "0";
  document.body.appendChild(area);
  area.select();
  document.execCommand("copy");
  area.remove();

  return Promise.resolve();
}

function openImageLightbox(imgSrc, captionText, shareUrl) {
  const existing = document.getElementById("imageLightbox");
  if (existing) existing.remove();

  const overlay = document.createElement("div");
  overlay.id = "imageLightbox";
  overlay.className = "image-lightbox";

  overlay.innerHTML = `
    <div class="image-lightbox-panel" role="dialog" aria-modal="true">
      <button class="image-lightbox-close" aria-label="Close">&times;</button>

      <img
        class="image-lightbox-image"
        src="${imgSrc}"
        alt="${captionText || ""}"
      >

      <p class="image-lightbox-caption">${captionText || ""}</p>

      <div class="image-lightbox-actions">
        <button class="image-share-copy">Copy link</button>
        <button class="image-share-native">Share</button>
        <a
          class="image-share-whatsapp"
          target="_blank"
          rel="noopener"
        >WhatsApp</a>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  const close = () => overlay.remove();

  overlay.querySelector(".image-lightbox-close")
    .addEventListener("click", close);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });

  overlay.querySelector(".image-share-copy")
    .addEventListener("click", async () => {
      await copyText(shareUrl);

      const button = overlay.querySelector(".image-share-copy");
      button.textContent = "Copied!";

      setTimeout(() => {
        const currentButton = overlay.querySelector(".image-share-copy");
        if (currentButton) currentButton.textContent = "Copy link";
      }, 1500);
    });

  overlay.querySelector(".image-share-native")
    .addEventListener("click", async () => {
      if (navigator.share) {
        await navigator.share({
          title: document.title,
          text: captionText || "Discover Le Carnet Ougandais",
          url: shareUrl
        }).catch(() => {});
      } else {
        await copyText(shareUrl);
        alert("Link copied.");
      }
    });

  overlay.querySelector(".image-share-whatsapp").href =
    `https://wa.me/?text=${encodeURIComponent(
      (captionText || "Discover Le Carnet Ougandais") + "\n" + shareUrl
    )}`;
}


// ------------------------------------------------------------
// 4. REPLACE ONLY THE storiesEl.innerHTML = ... SECTION
//    INSIDE openModal()
// ------------------------------------------------------------
storiesEl.innerHTML = cat.stories.map((story, storyIndex) => {
  const paraList = story[lang].split("\n\n");

  let bodyHtml = `<p>${paraList[0]}</p>`;

  if (paraList.length > 1) {
    const imgSrc = `images/${catKey}-story${storyIndex + 1}.jpg`;

    const captionData =
      (storyImageCaptions[catKey] || {})[storyIndex + 1] || {};

    const captionText = captionData[lang] || "";
    const shareUrl = storyUrl(catKey, storyIndex + 1);

    const safeCaption = captionText
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    bodyHtml += `
      <figure
        class="culture-story-photo"
        data-fallback="Ajoutez une photo ici"
      >
        <button
          class="story-photo-button"
          type="button"
          data-image="${imgSrc}"
          data-caption="${safeCaption}"
          data-share-url="${shareUrl}"
        >
          <img
            src="${imgSrc}"
            alt="${safeCaption}"
            onerror="this.parentElement.parentElement.textContent=this.parentElement.parentElement.dataset.fallback;"
          >
        </button>

        <figcaption>${safeCaption}</figcaption>
      </figure>
    `;

    bodyHtml += paraList
      .slice(1)
      .map((p) => `<p>${p}</p>`)
      .join("");
  }

  return `
    <div
      class="culture-story"
      id="${catKey}-story-${storyIndex + 1}"
    >
      <h4>${story.title[lang]}</h4>
      ${bodyHtml}
    </div>
  `;
}).join("");

storiesEl.querySelectorAll(".story-photo-button").forEach((button) => {
  button.addEventListener("click", () => {
    openImageLightbox(
      button.dataset.image,
      button.dataset.caption,
      button.dataset.shareUrl
    );
  });
});


// ------------------------------------------------------------
// 5. ADD THIS AFTER initCultureModal() HAS BEEN INITIALIZED
// ------------------------------------------------------------
function openSharedStoryFromHash() {
  const match = window.location.hash.match(
    /^#([a-z0-9_-]+)-story-(\d+)$/i
  );

  if (!match) return;

  const catKey = match[1];
  const storyIndex = Number(match[2]);

  const card = document.querySelector(
    `.category-card[data-category="${catKey}"]`
  );

  if (!card) return;

  card.click();

  setTimeout(() => {
    const story = document.getElementById(
      `${catKey}-story-${storyIndex}`
    );

    if (story) {
      story.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }, 150);
}

window.addEventListener("hashchange", openSharedStoryFromHash);

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(openSharedStoryFromHash, 250);
});


// ============================================================
// PHOTO FILENAMES
// images/culture-1.jpg
// images/culture-2.jpg
// images/culture-story1.jpg
// images/culture-story2.jpg
//
// images/voyages-1.jpg
// images/voyages-2.jpg
// images/voyages-story1.jpg
// images/voyages-story2.jpg
//
// Continue the same pattern for the other categories.
// ============================================================

# Le Carnet Ougandais

A bilingual (French/English) personal site for French teaching resources and a
Ugandan-culture "postcard" gallery. Plain HTML/CSS/JS — no build step, so it's
easy to edit and deploy for free.

## Files

- `index.html` — all the page content and structure
- `styles.css` — all the visual design
- `script.js` — the FR/EN language switch (edit the `translations` object here to change text)
- `images/` — put your photos here
- `videos/` — put your video files here

## 1. Add your own photos and videos

In `images/`, drop in your photo files (e.g. `marche.jpg`).

Then in `index.html`, find a block like this:

```html
<div class="postcard-photo placeholder-photo">
  <span data-i18n="culture_ph_photo">Ajoutez une photo ici</span>
</div>
```

Replace it with:

```html
<div class="postcard-photo">
  <img src="images/marche.jpg" alt="Un marché local" style="width:100%;height:100%;object-fit:cover;">
</div>
```

For a video, put the file in `videos/` and use:

```html
<div class="postcard-photo">
  <video src="videos/festival.mp4" controls style="width:100%;height:100%;object-fit:cover;"></video>
</div>
```

Large videos load slowly on a free site — if a video is more than ~30-50MB,
consider uploading it to YouTube (unlisted works fine) and embedding it
instead, or compressing it first.

## 2. Edit the text

- Everything with `data-i18n="..."` in `index.html` is translated text — the
  actual French and English words live in `script.js`, in the `translations`
  object near the top. Change both languages there.
- Add a new lesson card by copying an existing `<article class="lesson-card">`
  block in `index.html`.
- Add a new postcard by copying an existing `<figure class="postcard">` block.

## 3. Put it on GitHub

1. Create a free account at [github.com](https://github.com) if you don't have one.
2. Click **New repository**, give it a name (e.g. `carnet-ougandais`), keep it Public, and create it.
3. On your computer, in this folder, run:

```bash
git init
git add .
git commit -m "First version of the site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/carnet-ougandais.git
git push -u origin main
```

(Replace `YOUR-USERNAME` and the repo name with your own.) If you don't have
`git` installed, GitHub also lets you drag-and-drop the files directly on the
website via "uploading an existing file."

## 4. Deploy with Vercel

1. Create a free account at [vercel.com](https://vercel.com) — you can sign
   up directly with your GitHub account, which makes this step easier.
2. Click **Add New → Project**.
3. Select the `carnet-ougandais` repository you just pushed.
4. Vercel will detect it as a static site automatically — no settings to
   change. Click **Deploy**.
5. After about a minute, you'll get a live URL like
   `carnet-ougandais.vercel.app`. Every time you push new changes to GitHub,
   Vercel updates the live site automatically.

## 5. Optional: a custom domain

In your Vercel project settings, under **Domains**, you can attach a domain
you own (e.g. `votrenom.com`) if you'd like something more personal than the
`.vercel.app` address.

# Culture image uploads

## One upload location for every Culture category

For the Astro public website, upload **all** Culture photographs to `public/images/`. This is the single authoritative folder for every category: Culture, Voyages, Tradition, Célébration, Biographie, Coutumes, Arts, Histoire, Géographie and Gastronomie.

The website requests files using root-relative URLs such as `/images/voyages-5.jpg`. Do not upload new website images to the legacy root-level `images/` folder; that folder is retained only for historical/compatibility purposes and is not the public asset source.

## Filename patterns

- Carousel photograph: `<category>-<number>.jpg` (1 to 8), for example `voyages-5.jpg`, `tradition-1.jpg`, `arts-2.jpg`.
- Individual story photograph: `<category>-story<number>.jpg`, for example `voyages-story5.jpg`, `arts-story1.jpg`.

Use the exact category key used by the Culture data. Filenames are case-sensitive and must match exactly.

## Current story-photo numbering examples

The following category keys and story counts are currently in the public site:

### Tradition — 9 stories
1. Karamoja Cultural Event — `tradition-story1.jpg`
2. Kwanjula — `tradition-story2.jpg`
3. Imbalu — `tradition-story3.jpg`
4. Empango — `tradition-story4.jpg`
5. Empaako — `tradition-story5.jpg`
6. Ssenga — `tradition-story6.jpg`
7. Okwalula Abalongo — `tradition-story7.jpg`
8. Okwabya Olumbe — `tradition-story8.jpg`
9. Akiriket — `tradition-story9.jpg`

### Biographie / Biography — 8 stories
The French category label is “Biographie”, but the filename key is **`biographie`**, without an accent.
1. Idi Amin — `biographie-story1.jpg`
2. Philly Lutaaya — `biographie-story2.jpg`
3. Bobi Wine — `biographie-story3.jpg`
4. Kabaka Mutesa I — `biographie-story4.jpg`
5. Yoweri Museveni — `biographie-story5.jpg`
6. Milton Obote — `biographie-story6.jpg`
7. Winnie Byanyima — `biographie-story7.jpg`
8. Stephen Kiprotich — `biographie-story8.jpg`

For each of these categories, carousel images use the separate pattern `tradition-1.jpg`…`tradition-8.jpg` or `biographie-1.jpg`…`biographie-8.jpg`. A story photograph and a carousel photograph are not interchangeable.

## Choosing a story number

The current story-photo renderer uses each story's position in that category (first story = `story1`, second story = `story2`, etc.). Check the current story order before uploading. If stories are reordered or inserted, the image mapping must be reviewed so photographs remain attached to the intended stories. Never rename or move existing images without checking their associations.

## Upload steps

1. Open `public/images/` on GitHub.
2. Choose **Add file → Upload files**.
3. Upload your photo with the correct filename above.
4. Commit the upload to a branch and open a pull request, or use the project's normal GitHub workflow.
5. After Vercel deploys, verify the direct URL: `https://<your-site>/images/<filename>`.
6. Open the relevant Culture category and check both the carousel slot and the story photo.

## Image quality

Upload the original, highest-resolution photograph available. Prefer JPEG or WebP, avoid sending screenshots or repeatedly compressed copies, and do not reduce image dimensions before upload. The site does not apply blur or image filters. Carousel and story frames use contain-fit so the full photograph remains visible instead of being cropped. Upscaling a low-resolution original cannot recreate missing detail.

Do not overwrite an existing filename unless you deliberately intend to replace that exact photograph and have checked it first.

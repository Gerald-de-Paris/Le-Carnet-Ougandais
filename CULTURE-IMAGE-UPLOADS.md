# Culture image uploads

## Authoritative location

For the Astro public website, upload new Culture images to `public/images/`. Astro serves these files at root-relative URLs such as `/images/culture-1.jpg`.

The legacy root-level `images/` folder is retained for compatibility and historical assets. Do not upload new public-site images there unless a maintainer explicitly asks you to.

## Filename patterns

- Carousel image: `<category>-<number>.jpg`, for example `arts-1.jpg` or `voyages-4.jpg`.
- Individual story image: `<category>-story<number>.jpg`, for example `arts-story1.jpg` or `voyages-story5.jpg`.

Use the exact category key used by the Culture data (for example `culture`, `arts`, `voyages`, `tradition`). Filenames are case-sensitive.

## Choosing a story number

Story-image numbers are tied to the story's stable image slot, not the carousel slide number. Before adding a story photograph, inspect the story's existing image-slot mapping in the Culture data. Do not renumber existing photographs when stories are reordered or new stories are appended. If the data does not provide a stable slot, add an explicit image filename to that story's data rather than relying on its current array position.

## Upload steps

1. Open the repository's `public/images/` folder on GitHub.
2. Choose **Add file → Upload files**.
3. Upload the image using the correct filename pattern above.
4. Commit the upload to a branch and open a pull request (or commit according to the project's normal workflow).
5. After deployment, open the corresponding `https://<site>/images/<filename>` URL and confirm it loads.

Do not overwrite an existing filename unless you intentionally mean to replace that photograph and have checked its current contents first.

## Troubleshooting

- A 404 usually means the file is in the wrong directory or the filename does not match exactly.
- Check spelling, hyphens, extension, capitalisation and story-slot mapping.
- Keep all existing manually uploaded images. Do not delete or move legacy files as part of an ordinary upload.
